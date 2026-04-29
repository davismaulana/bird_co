// Server-side copy of admin credentials, used by /api/admin/* and /api/_migrate
// (renamed to /api/admin/migrate). MUST match lib/adminCreds.ts which the React
// client uses — Vercel can only compile TS files inside api/ for serverless
// functions, so we keep an in-tree copy here.
export const ADMIN_PASSWORD = 'sydnbrdnc66**';
