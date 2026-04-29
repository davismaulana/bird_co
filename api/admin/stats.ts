import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSql } from '../_lib/db.js';

const ADMIN_PASSWORD = 'sydnbrdnc66**';

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

  const from = (parseISO(req.query.from) ?? new Date(0)).toISOString();
  const to = (parseISO(req.query.to) ?? new Date()).toISOString();

  const totalsRow = await sql`
    SELECT COUNT(*)::int AS total_visits, COUNT(DISTINCT session_id)::int AS unique_sessions
    FROM visits WHERE created_at >= ${from} AND created_at <= ${to}
  `;
  const totalVisits = Number((totalsRow.rows[0] as Record<string, unknown>)?.total_visits ?? 0);
  const uniqueSessions = Number((totalsRow.rows[0] as Record<string, unknown>)?.unique_sessions ?? 0);

  const countriesRow = await sql`
    SELECT COALESCE(country, 'unknown') AS country, COUNT(*)::int AS visits
    FROM visits WHERE created_at >= ${from} AND created_at <= ${to}
    GROUP BY country ORDER BY visits DESC LIMIT 10
  `;
  const pagesRow = await sql`
    SELECT path, COUNT(*)::int AS visits
    FROM visits WHERE created_at >= ${from} AND created_at <= ${to}
    GROUP BY path ORDER BY visits DESC LIMIT 10
  `;
  const langRow = await sql`
    SELECT lang, COUNT(*)::int AS visits
    FROM visits WHERE created_at >= ${from} AND created_at <= ${to}
    GROUP BY lang
  `;
  const deviceRow = await sql`
    SELECT ua_device AS device, COUNT(*)::int AS visits
    FROM visits WHERE created_at >= ${from} AND created_at <= ${to}
    GROUP BY ua_device
  `;

  const langSplit: Record<string, number> = { fr: 0, en: 0 };
  for (const row of langRow.rows as Array<Record<string, unknown>>) {
    langSplit[String(row.lang)] = Number(row.visits);
  }
  const deviceSplit: Record<string, number> = { desktop: 0, mobile: 0, tablet: 0 };
  for (const row of deviceRow.rows as Array<Record<string, unknown>>) {
    deviceSplit[String(row.device)] = Number(row.visits);
  }

  res.status(200).json({
    totalVisits,
    uniqueSessions,
    avgPagesPerSession: uniqueSessions > 0 ? Number((totalVisits / uniqueSessions).toFixed(2)) : 0,
    topCountries: (countriesRow.rows as Array<Record<string, unknown>>).map(r => ({
      country: String(r.country),
      visits: Number(r.visits),
    })),
    topPages: (pagesRow.rows as Array<Record<string, unknown>>).map(r => ({
      path: String(r.path),
      visits: Number(r.visits),
    })),
    langSplit,
    deviceSplit,
  });
}
