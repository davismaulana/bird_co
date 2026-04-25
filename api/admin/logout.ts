import type { VercelRequest, VercelResponse } from '@vercel/node';
import { clearCookie } from '../_lib/admin-auth';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  clearCookie(res);
  res.status(204).end();
}
