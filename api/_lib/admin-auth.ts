import crypto from 'node:crypto';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export const COOKIE_NAME = 'bc_admin';
const MAX_AGE_SEC = 86400;

export const adminSecret = (): string | null => process.env.ADMIN_SECRET || null;

export const sign = (expiresAtMs: number, secret: string): string => {
  const mac = crypto.createHmac('sha256', secret).update(String(expiresAtMs)).digest('hex');
  return `${expiresAtMs}.${mac}`;
};

export const verify = (token: string, secret: string): boolean => {
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const expiresAtMs = Number(parts[0]);
  if (!Number.isFinite(expiresAtMs) || expiresAtMs < Date.now()) return false;
  const expected = sign(expiresAtMs, secret);
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
};

export const issueCookie = (res: VercelResponse) => {
  const secret = adminSecret();
  if (!secret) throw new Error('ADMIN_SECRET not configured');
  const expiresAtMs = Date.now() + MAX_AGE_SEC * 1000;
  const value = sign(expiresAtMs, secret);
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${value}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${MAX_AGE_SEC}`,
  );
};

export const clearCookie = (res: VercelResponse) => {
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`,
  );
};

const parseCookie = (header: string | undefined, name: string): string | null => {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return rest.join('=');
  }
  return null;
};

export const requireAdmin = (req: VercelRequest, res: VercelResponse): boolean => {
  const secret = adminSecret();
  if (!secret) {
    res.status(500).json({ error: 'admin_secret_not_configured' });
    return false;
  }
  const token = parseCookie(req.headers.cookie, COOKIE_NAME);
  if (!token || !verify(token, secret)) {
    res.status(401).json({ error: 'unauthorized' });
    return false;
  }
  return true;
};

const failures = new Map<string, { count: number; firstAt: number }>();
const FAIL_WINDOW_MS = 60_000;

export const shouldThrottle = (key: string): number => {
  const now = Date.now();
  const entry = failures.get(key);
  if (!entry || now - entry.firstAt > FAIL_WINDOW_MS) return 0;
  return entry.count >= 3 ? 1000 : 0;
};

export const recordFailure = (key: string) => {
  const now = Date.now();
  const entry = failures.get(key);
  if (!entry || now - entry.firstAt > FAIL_WINDOW_MS) {
    failures.set(key, { count: 1, firstAt: now });
  } else {
    entry.count += 1;
  }
};

export const clearFailures = (key: string) => {
  failures.delete(key);
};

export const constantTimeEqual = (a: string, b: string): boolean => {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
};
