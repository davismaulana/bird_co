import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ADMIN_PASSWORD } from '../../lib/adminCreds.js';
import { getSql } from '../_lib/db.js';

const isAuthorized = (req: VercelRequest): boolean => {
  const auth = req.headers.authorization || '';
  const provided = auth.startsWith('Bearer ') ? auth.slice('Bearer '.length) : '';
  return provided === ADMIN_PASSWORD;
};

const parseISO = (value: unknown): Date | null => {
  if (typeof value !== 'string' || !value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  const sql = await getSql();
  if (!sql) {
    res.status(500).json({ error: 'postgres_not_configured' });
    return;
  }
  const from = parseISO(req.query.from) ?? new Date(0);
  const to = parseISO(req.query.to) ?? new Date();
  const rawLimit = Number(req.query.limit ?? 100);
  const limit = Number.isFinite(rawLimit) ? Math.min(Math.max(Math.trunc(rawLimit), 1), 500) : 100;

  const result = await sql`
    SELECT id, session_id, path, lang, referrer, country, city, timezone,
           ua_device, ua_browser, ua_os, created_at
    FROM visits
    WHERE created_at >= ${from.toISOString()} AND created_at <= ${to.toISOString()}
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  res.status(200).json({ visits: result.rows });
}
