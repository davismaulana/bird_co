import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_SESSION_KEY } from '@/lib/adminCreds';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, password);
      navigate('/admin', { replace: true });
      return;
    }
    setError('Invalid username or password.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#27013D] px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-6 md:p-8">
        <h1 className="text-xl font-bold text-[#27013D]">Bird& Admin</h1>
        <p className="mt-1 text-sm text-gray-600">Visitor analytics dashboard.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-gray-700">Username</span>
            <input
              type="text"
              autoFocus
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED]"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-gray-700">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-[#7C3AED]"
            />
          </label>
          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={!username || !password}
            className="w-full px-4 py-2 text-sm font-semibold rounded-md bg-[#27013D] text-white hover:bg-[#3a0259] disabled:opacity-50"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
