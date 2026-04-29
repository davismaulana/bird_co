import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_SESSION_KEY } from '@/lib/adminCreds';

type Range = '24h' | '7d' | '30d' | 'all';

interface Stats {
  totalVisits: number;
  uniqueSessions: number;
  avgPagesPerSession: number;
  topCountries: { country: string; visits: number }[];
  topPages: { path: string; visits: number }[];
  langSplit: Record<string, number>;
  deviceSplit: Record<string, number>;
}

interface Visit {
  id: string;
  session_id: string;
  path: string;
  lang: string;
  referrer: string | null;
  country: string | null;
  city: string | null;
  timezone: string | null;
  ua_device: string | null;
  ua_browser: string | null;
  ua_os: string | null;
  created_at: string;
}

const rangeToFromTo = (range: Range): { from: string; to: string } => {
  const to = new Date();
  let from = new Date(0);
  if (range === '24h') from = new Date(to.getTime() - 24 * 3600 * 1000);
  else if (range === '7d') from = new Date(to.getTime() - 7 * 24 * 3600 * 1000);
  else if (range === '30d') from = new Date(to.getTime() - 30 * 24 * 3600 * 1000);
  return { from: from.toISOString(), to: to.toISOString() };
};

const formatPct = (value: number, total: number): string => {
  if (!total) return '0%';
  return `${Math.round((value / total) * 100)}%`;
};

const formatDate = (iso: string): string => {
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
};

const Card: React.FC<{ label: string; value: string | number; sub?: string }> = ({
  label,
  value,
  sub,
}) => (
  <div className="bg-white rounded-lg shadow-sm ring-1 ring-black/5 p-4">
    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{label}</p>
    <p className="mt-2 text-2xl font-bold text-[#27013D]">{value}</p>
    {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
  </div>
);

const BarList: React.FC<{
  title: string;
  rows: { label: string; visits: number }[];
}> = ({ title, rows }) => {
  const max = rows.reduce((m, r) => Math.max(m, r.visits), 0) || 1;
  return (
    <div className="bg-white rounded-lg shadow-sm ring-1 ring-black/5 p-4">
      <h3 className="text-sm font-semibold text-[#27013D]">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-xs text-gray-500">No data yet.</p>
      ) : (
        <ul className="mt-3 space-y-2">
          {rows.map((r, i) => (
            <li key={`${r.label}-${i}`} className="text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-gray-700" title={r.label}>
                  {r.label || '—'}
                </span>
                <span className="font-semibold text-[#27013D] tabular-nums">{r.visits}</span>
              </div>
              <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#7C3AED]"
                  style={{ width: `${(r.visits / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [range, setRange] = useState<Range>('7d');
  const [stats, setStats] = useState<Stats | null>(null);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useMemo(() => rangeToFromTo(range), [range]);

  useEffect(() => {
    if (!sessionStorage.getItem(ADMIN_SESSION_KEY)) {
      navigate('/admin/login', { replace: true });
    }
  }, [navigate]);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const token = sessionStorage.getItem(ADMIN_SESSION_KEY);
    if (!token) {
      navigate('/admin/login', { replace: true });
      return;
    }
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const qs = new URLSearchParams(params).toString();
      const [s, v] = await Promise.all([
        fetch(`/api/admin/stats?${qs}`, { headers }),
        fetch(`/api/admin/visitors?${qs}&limit=100`, { headers }),
      ]);
      if (s.status === 401 || v.status === 401) {
        sessionStorage.removeItem(ADMIN_SESSION_KEY);
        navigate('/admin/login', { replace: true });
        return;
      }
      if (!s.ok || !v.ok) {
        setError('Failed to load analytics. Postgres may not be provisioned yet.');
        setStats(null);
        setVisits([]);
        return;
      }
      const sJson = (await s.json()) as Stats;
      const vJson = (await v.json()) as { visits: Visit[] };
      setStats(sJson);
      setVisits(vJson.visits || []);
    } catch {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  }, [params, navigate]);

  useEffect(() => {
    void load();
  }, [load]);

  const logout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    navigate('/admin/login', { replace: true });
  };

  const langTotal =
    (stats?.langSplit.fr || 0) + (stats?.langSplit.en || 0) + (stats?.langSplit.other || 0);
  const frRatio = stats ? formatPct(stats.langSplit.fr || 0, langTotal) : '—';
  const enRatio = stats ? formatPct(stats.langSplit.en || 0, langTotal) : '—';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#27013D] text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <h1 className="text-lg font-bold">Bird& Admin</h1>
          <div className="flex items-center gap-2">
            <label className="text-xs text-white/70" htmlFor="range">
              Range
            </label>
            <select
              id="range"
              value={range}
              onChange={e => setRange(e.target.value as Range)}
              className="text-sm bg-white/10 text-white px-2 py-1 rounded border border-white/20"
            >
              <option className="text-gray-900" value="24h">
                Last 24h
              </option>
              <option className="text-gray-900" value="7d">
                Last 7 days
              </option>
              <option className="text-gray-900" value="30d">
                Last 30 days
              </option>
              <option className="text-gray-900" value="all">
                All time
              </option>
            </select>
            <button
              onClick={() => void load()}
              className="text-xs px-3 py-1 rounded bg-white/10 hover:bg-white/20"
            >
              Refresh
            </button>
            <button
              onClick={logout}
              className="text-xs px-3 py-1 rounded bg-white text-[#27013D] hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {error && (
          <div role="alert" className="rounded-md bg-amber-50 ring-1 ring-amber-200 p-3 text-sm text-amber-900">
            {error}
          </div>
        )}

        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card label="Visits" value={loading ? '…' : (stats?.totalVisits ?? 0).toLocaleString()} />
          <Card
            label="Unique sessions"
            value={loading ? '…' : (stats?.uniqueSessions ?? 0).toLocaleString()}
          />
          <Card
            label="Avg pages / session"
            value={loading ? '…' : (stats?.avgPagesPerSession ?? 0).toFixed(2)}
          />
          <Card label="FR vs EN" value={loading ? '…' : `${frRatio} / ${enRatio}`} sub="of recorded visits" />
        </section>

        <section className="grid md:grid-cols-2 gap-3">
          <BarList
            title="Top 10 countries"
            rows={(stats?.topCountries || []).map(c => ({ label: c.country, visits: c.visits }))}
          />
          <BarList
            title="Top 10 pages"
            rows={(stats?.topPages || []).map(p => ({ label: p.path, visits: p.visits }))}
          />
        </section>

        <section className="bg-white rounded-lg shadow-sm ring-1 ring-black/5 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#27013D]">Last 100 visits</h3>
            <span className="text-xs text-gray-500">{visits.length} shown</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold">When</th>
                  <th className="text-left px-3 py-2 font-semibold">Country</th>
                  <th className="text-left px-3 py-2 font-semibold">City</th>
                  <th className="text-left px-3 py-2 font-semibold">Path</th>
                  <th className="text-left px-3 py-2 font-semibold">Lang</th>
                  <th className="text-left px-3 py-2 font-semibold">Device</th>
                  <th className="text-left px-3 py-2 font-semibold">Browser</th>
                  <th className="text-left px-3 py-2 font-semibold">Referrer</th>
                </tr>
              </thead>
              <tbody>
                {visits.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-3 py-6 text-center text-gray-500">
                      {loading ? 'Loading…' : 'No visits in this range.'}
                    </td>
                  </tr>
                )}
                {visits.map(v => (
                  <tr key={v.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 whitespace-nowrap text-gray-700">{formatDate(v.created_at)}</td>
                    <td className="px-3 py-2 text-gray-700">{v.country || '—'}</td>
                    <td className="px-3 py-2 text-gray-700">{v.city || '—'}</td>
                    <td className="px-3 py-2 text-gray-700 max-w-[18rem] truncate" title={v.path}>
                      {v.path}
                    </td>
                    <td className="px-3 py-2 text-gray-700">{v.lang}</td>
                    <td className="px-3 py-2 text-gray-700">{v.ua_device || '—'}</td>
                    <td className="px-3 py-2 text-gray-700">{v.ua_browser || '—'}</td>
                    <td className="px-3 py-2 text-gray-700 max-w-[14rem] truncate" title={v.referrer || ''}>
                      {v.referrer || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
