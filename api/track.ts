import type { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

const { Client } = pg;

type TrackBody = {
  sessionId?: unknown;
  path?: unknown;
  lang?: unknown;
  referrer?: unknown;
  ua?: unknown;
};

const PROD_ORIGINS = new Set<string>([
  'https://www.birdandco.fr',
  'https://birdandco.fr',
]);

const isAllowedOrigin = (origin: string | undefined): boolean => {
  if (!origin) return true;
  if (PROD_ORIGINS.has(origin)) return true;
  try {
    const u = new URL(origin);
    if (u.hostname.endsWith('.vercel.app')) return true;
    if (u.hostname === 'localhost' || u.hostname === '127.0.0.1') return true;
  } catch {
    return false;
  }
  return false;
};

const isStr = (v: unknown, max: number) =>
  typeof v === 'string' && v.length > 0 && v.length <= max;

const parseUA = (ua: string) => {
  const u = ua.toLowerCase();
  let device: 'desktop' | 'mobile' | 'tablet' = 'desktop';
  if (/ipad|tablet/.test(u)) device = 'tablet';
  else if (/mobi|android|iphone|ipod/.test(u)) device = 'mobile';

  let browser = 'other';
  if (/edg\//.test(u)) browser = 'edge';
  else if (/chrome\//.test(u) && !/edg\//.test(u)) browser = 'chrome';
  else if (/firefox\//.test(u)) browser = 'firefox';
  else if (/safari\//.test(u) && !/chrome\//.test(u)) browser = 'safari';

  let os = 'other';
  if (/windows/.test(u)) os = 'windows';
  else if (/mac os|macintosh/.test(u)) os = 'macos';
  else if (/android/.test(u)) os = 'android';
  else if (/iphone|ipad|ipod/.test(u)) os = 'ios';
  else if (/linux/.test(u)) os = 'linux';

  return { device, browser, os };
};

const RATE_CAPACITY = 30;
const RATE_REFILL_PER_MS = RATE_CAPACITY / 60_000;
const buckets = new Map<string, { tokens: number; updatedAt: number }>();

const consumeToken = (key: string): boolean => {
  const now = Date.now();
  const entry = buckets.get(key);
  if (!entry) {
    buckets.set(key, { tokens: RATE_CAPACITY - 1, updatedAt: now });
    return true;
  }
  const refill = (now - entry.updatedAt) * RATE_REFILL_PER_MS;
  entry.tokens = Math.min(RATE_CAPACITY, entry.tokens + refill);
  entry.updatedAt = now;
  if (entry.tokens < 1) return false;
  entry.tokens -= 1;
  return true;
};

const setCors = (req: VercelRequest, res: VercelResponse) => {
  const origin = req.headers.origin as string | undefined;
  if (origin && isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }

  const origin = req.headers.origin as string | undefined;
  if (!isAllowedOrigin(origin)) {
    res.status(403).json({ error: 'origin_not_allowed' });
    return;
  }

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) as TrackBody;
  if (!body || typeof body !== 'object') {
    res.status(400).json({ error: 'invalid_body' });
    return;
  }

  if (
    !isStr(body.sessionId, 128) ||
    !isStr(body.path, 512) ||
    !isStr(body.lang, 8) ||
    !isStr(body.ua, 512)
  ) {
    res.status(400).json({ error: 'invalid_fields' });
    return;
  }

  const sessionId = body.sessionId as string;
  if (!consumeToken(sessionId)) {
    res.status(429).json({ error: 'rate_limited' });
    return;
  }

  const path = body.path as string;
  const lang = (body.lang as string).toLowerCase();
  const referrer =
    typeof body.referrer === 'string' && body.referrer.length > 0
      ? (body.referrer as string).slice(0, 1024)
      : null;
  const { device, browser, os } = parseUA(body.ua as string);

  const country = (req.headers['x-vercel-ip-country'] as string) || null;
  const city = decodeHeader(req.headers['x-vercel-ip-city'] as string | undefined);
  const timezone = (req.headers['x-vercel-ip-timezone'] as string) || null;

  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    res.status(204).end();
    return;
  }
  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  try {
    await client.connect();
    await client.query(
      `INSERT INTO visits (session_id, path, lang, referrer, country, city, timezone, ua_device, ua_browser, ua_os)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [sessionId, path, lang, referrer, country, city, timezone, device, browser, os],
    );
  } catch {
    // Never fail the page on a tracking error.
  } finally {
    await client.end().catch(() => {});
  }
  res.status(204).end();
}

const safeParse = (s: string): TrackBody | null => {
  try {
    return JSON.parse(s) as TrackBody;
  } catch {
    return null;
  }
};

const decodeHeader = (v: string | undefined): string | null => {
  if (!v) return null;
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
};
