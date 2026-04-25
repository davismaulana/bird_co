import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  adminSecret,
  clearFailures,
  constantTimeEqual,
  issueCookie,
  recordFailure,
  shouldThrottle,
} from '../_lib/admin-auth';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !adminSecret()) {
    res.status(500).json({ error: 'admin_not_configured' });
    return;
  }
  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
    (req.headers['x-real-ip'] as string | undefined) ||
    'anon';
  const delay = shouldThrottle(ip);
  if (delay) await sleep(delay);

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) as
    | { password?: unknown }
    | null;
  const provided = typeof body?.password === 'string' ? body.password : '';
  if (!provided || !constantTimeEqual(provided, expected)) {
    recordFailure(ip);
    res.status(401).json({ error: 'invalid_password' });
    return;
  }
  clearFailures(ip);
  issueCookie(res);
  res.status(200).json({ ok: true });
}

const safeParse = (s: string): { password?: unknown } | null => {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
};
