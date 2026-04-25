import type { VercelRequest, VercelResponse } from '@vercel/node';

type TrackBody = {
  sessionId?: unknown;
  path?: unknown;
  lang?: unknown;
  referrer?: unknown;
  ua?: unknown;
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
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

  try {
    const sql = await getSql();
    if (!sql) {
      res.status(204).end();
      return;
    }
    await sql/* sql */`
      INSERT INTO visits (session_id, path, lang, referrer, country, city, timezone, ua_device, ua_browser, ua_os)
      VALUES (${sessionId}, ${path}, ${lang}, ${referrer}, ${country}, ${city}, ${timezone}, ${device}, ${browser}, ${os})
    `;
  } catch {
    // Never fail the page on a tracking error.
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

let sqlSingleton: ((strings: TemplateStringsArray, ...values: unknown[]) => Promise<unknown>) | null | undefined;

const getSql = async () => {
  if (sqlSingleton !== undefined) return sqlSingleton;
  if (!process.env.POSTGRES_URL) {
    sqlSingleton = null;
    return null;
  }
  try {
    // @ts-expect-error — optional dep, added to package.json by the engineer when Postgres is provisioned
    const mod = await import('@vercel/postgres');
    sqlSingleton = mod.sql as unknown as typeof sqlSingleton;
    return sqlSingleton;
  } catch {
    sqlSingleton = null;
    return null;
  }
};
