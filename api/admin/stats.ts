import type { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

const { Client } = pg;

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
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    res.status(500).json({ error: 'postgres_not_configured' });
    return;
  }

  const from = (parseISO(req.query.from) ?? new Date(0)).toISOString();
  const to = (parseISO(req.query.to) ?? new Date()).toISOString();

  const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });
  try {
    await client.connect();

    const totalsRow = await client.query(
      `SELECT COUNT(*)::int AS total_visits, COUNT(DISTINCT session_id)::int AS unique_sessions
       FROM visits WHERE created_at >= $1 AND created_at <= $2`,
      [from, to],
    );
    const totalVisits = Number((totalsRow.rows[0] as Record<string, unknown>)?.total_visits ?? 0);
    const uniqueSessions = Number((totalsRow.rows[0] as Record<string, unknown>)?.unique_sessions ?? 0);

    const countriesRow = await client.query(
      `SELECT COALESCE(country, 'unknown') AS country, COUNT(*)::int AS visits
       FROM visits WHERE created_at >= $1 AND created_at <= $2
       GROUP BY country ORDER BY visits DESC LIMIT 10`,
      [from, to],
    );
    const pagesRow = await client.query(
      `SELECT path, COUNT(*)::int AS visits
       FROM visits WHERE created_at >= $1 AND created_at <= $2
       GROUP BY path ORDER BY visits DESC LIMIT 10`,
      [from, to],
    );
    const langRow = await client.query(
      `SELECT lang, COUNT(*)::int AS visits
       FROM visits WHERE created_at >= $1 AND created_at <= $2
       GROUP BY lang`,
      [from, to],
    );
    const deviceRow = await client.query(
      `SELECT ua_device AS device, COUNT(*)::int AS visits
       FROM visits WHERE created_at >= $1 AND created_at <= $2
       GROUP BY ua_device`,
      [from, to],
    );

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
  } catch (err) {
    const e = err as Record<string, unknown>;
    res.status(500).json({
      error: 'sql_failed',
      name: err instanceof Error ? err.name : typeof err,
      message: err instanceof Error ? err.message : String(err),
      code: e?.code ?? null,
    });
  } finally {
    await client.end().catch(() => {});
  }
}
