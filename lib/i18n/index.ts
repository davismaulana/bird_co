import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import French translations
import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frServices from './locales/fr/services.json';
import frTeam from './locales/fr/team.json';
import frFaq from './locales/fr/faq.json';
import frContact from './locales/fr/contact.json';
import frPages from './locales/fr/pages.json';

// Import English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enServices from './locales/en/services.json';
import enTeam from './locales/en/team.json';
import enFaq from './locales/en/faq.json';
import enContact from './locales/en/contact.json';
import enPages from './locales/en/pages.json';

export const defaultNS = 'common';
export const resources = {
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    team: frTeam,
    faq: frFaq,
    contact: frContact,
    pages: frPages,
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    team: enTeam,
    faq: enFaq,
    contact: enContact,
    pages: enPages,
  },
} as const;

/**
 * Get language from URL path
 * Called before React renders to determine initial language
 */
export const getLanguageFromPath = (): string => {
  if (typeof window === 'undefined') return 'fr';
  const path = window.location.pathname;
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/fr')) return 'fr';
  return 'fr'; // Default fallback
};

/**
 * Change language and update URL
 * Used by LanguageSwitcher component
 */
export const changeLanguage = (lng: string) => {
  const currentPath = window.location.pathname;
  
  // Remove current language prefix if exists
  const pathWithoutLang = currentPath.replace(/^\/(en|fr)/, '') || '/';
  
  // Add new language prefix
  const newPath = `/${lng}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  
  // Update URL and reload to ensure clean state
  window.location.href = newPath;
};

// Get initial language from URL BEFORE initializing i18n
const initialLanguage = getLanguageFromPath();

/**
 * Initialize i18n
 * Returns a Promise that resolves when initialization is complete
 * All resources are bundled, so this should be fast
 */
export const i18nInitPromise = i18n
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    lng: initialLanguage,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    
    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false, // We handle loading in index.tsx
    },
  });

export default i18n;
