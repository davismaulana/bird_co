import type { VercelRequest, VercelResponse } from '@vercel/node';
import pg from 'pg';

const { Client } = pg;

const ADMIN_PASSWORD = 'sydnbrdnc66**';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  const auth = req.headers.authorization || '';
  const provided = auth.startsWith('Bearer ') ? auth.slice('Bearer '.length) : '';
  if (provided !== ADMIN_PASSWORD) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    res.status(500).json({ error: 'postgres_not_configured' });
    return;
  }
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS visits (
        id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id  TEXT NOT NULL,
        path        TEXT NOT NULL,
        lang        TEXT NOT NULL,
        referrer    TEXT,
        country     TEXT,
        city        TEXT,
        timezone    TEXT,
        ua_device   TEXT,
        ua_browser  TEXT,
        ua_os       TEXT,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits (created_at DESC)`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_visits_session ON visits (session_id)`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_visits_country ON visits (country)`);
    res.status(200).json({ ok: true });
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
