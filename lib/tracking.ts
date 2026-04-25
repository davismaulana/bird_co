import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CONSENT_KEY = 'birdco.consent';
const SESSION_KEY = 'birdco.session';
const SESSION_LAST_SEEN_KEY = 'birdco.session.lastSeen';
const SESSION_TTL_MS = 30 * 60 * 1000;

export type ConsentValue = 'accepted' | 'refused';

const isBrowser = () => typeof window !== 'undefined';

export const getConsent = (): ConsentValue | null => {
  if (!isBrowser()) return null;
  const v = window.localStorage.getItem(CONSENT_KEY);
  return v === 'accepted' || v === 'refused' ? v : null;
};

export const setConsent = (value: ConsentValue) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent('birdco:consent', { detail: value }));
};

const getOrRotateSessionId = (): string => {
  const now = Date.now();
  const lastSeenRaw = window.localStorage.getItem(SESSION_LAST_SEEN_KEY);
  const lastSeen = lastSeenRaw ? Number(lastSeenRaw) : 0;
  let sid = window.localStorage.getItem(SESSION_KEY);
  if (!sid || !lastSeen || now - lastSeen > SESSION_TTL_MS) {
    sid = (window.crypto && 'randomUUID' in window.crypto)
      ? window.crypto.randomUUID()
      : `${now.toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    window.localStorage.setItem(SESSION_KEY, sid);
  }
  window.localStorage.setItem(SESSION_LAST_SEEN_KEY, String(now));
  return sid;
};

const sendBeaconOrFetch = (url: string, body: string) => {
  try {
    if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
      const blob = new Blob([body], { type: 'application/json' });
      if (navigator.sendBeacon(url, blob)) return;
    }
  } catch {
    // fall through to fetch
  }
  void fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
    credentials: 'omit',
  }).catch(() => undefined);
};

export const trackPageview = (path: string, lang: string) => {
  if (!isBrowser()) return;
  if (getConsent() !== 'accepted') return;
  const sessionId = getOrRotateSessionId();
  const payload = JSON.stringify({
    sessionId,
    path,
    lang,
    referrer: document.referrer || null,
    ua: navigator.userAgent,
  });
  sendBeaconOrFetch('/api/track', payload);
};

export const useTracking = () => {
  const { pathname, search } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (pathname.startsWith('/admin')) return;
    trackPageview(pathname + (search || ''), i18n.language || 'fr');
  }, [pathname, search, i18n.language]);
};
