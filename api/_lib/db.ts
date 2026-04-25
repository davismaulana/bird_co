type SqlTag = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<{ rows: Record<string, unknown>[] }>;

let cached: SqlTag | null | undefined;

export const getSql = async (): Promise<SqlTag | null> => {
  if (cached !== undefined) return cached;
  if (!process.env.POSTGRES_URL) {
    cached = null;
    return null;
  }
  try {
    const mod = await import('@vercel/postgres');
    cached = mod.sql as unknown as SqlTag;
    return cached;
  } catch {
    cached = null;
    return null;
  }
};
