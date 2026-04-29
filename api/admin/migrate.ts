import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';

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
  const pgEnv = {
    POSTGRES_URL: !!process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: !!process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: !!process.env.POSTGRES_URL_NON_POOLING,
    DATABASE_URL: !!process.env.DATABASE_URL,
  };
  try {
    await sql`
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
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits (created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_visits_session ON visits (session_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_visits_country ON visits (country)`;
    res.status(200).json({ ok: true, pgEnv });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const name = err instanceof Error ? err.name : 'Unknown';
    res.status(500).json({ error: 'sql_failed', name, message: msg, pgEnv });
  }
}
