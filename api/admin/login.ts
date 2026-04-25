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
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
  if (!expectedPassword || !adminSecret()) {
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
    | { username?: unknown; password?: unknown }
    | null;
  const providedUsername = typeof body?.username === 'string' ? body.username : '';
  const providedPassword = typeof body?.password === 'string' ? body.password : '';

  // Always run both compares so timing doesn't reveal which field was wrong.
  const userOk = constantTimeEqual(providedUsername, expectedUsername);
  const passOk = constantTimeEqual(providedPassword, expectedPassword);
  if (!providedUsername || !providedPassword || !userOk || !passOk) {
    recordFailure(ip);
    res.status(401).json({ error: 'invalid_credentials' });
    return;
  }
  clearFailures(ip);
  issueCookie(res);
  res.status(200).json({ ok: true });
}

const safeParse = (s: string): { username?: unknown; password?: unknown } | null => {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
};
