import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import French translations
import frCommon from './locales/fr/common.json';
import frHome from './locales/fr/home.json';
import frServices from './locales/fr/services.json';
import frTeam from './locales/fr/team.json';
import frFaq from './locales/fr/faq.json';
import frContact from './locales/fr/contact.json';

// Import English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enServices from './locales/en/services.json';
import enTeam from './locales/en/team.json';
import enFaq from './locales/en/faq.json';
import enContact from './locales/en/contact.json';

export const defaultNS = 'common';
export const resources = {
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    team: frTeam,
    faq: frFaq,
    contact: frContact,
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    team: enTeam,
    faq: enFaq,
    contact: enContact,
  },
} as const;

// Function to get language from URL path (called before React renders)
export const getLanguageFromPath = (): string => {
  if (typeof window === 'undefined') return 'fr';
  const path = window.location.pathname;
  if (path.startsWith('/en')) return 'en';
  if (path.startsWith('/fr')) return 'fr';
  return 'fr'; // Default fallback
};

// Function to change language and update URL
export const changeLanguage = (lng: string) => {
  const currentPath = window.location.pathname;
  let newPath: string;

  // Remove current language prefix if exists
  const pathWithoutLang = currentPath.replace(/^\/(en|fr)/, '') || '/';
  
  // Add new language prefix
  newPath = `/${lng}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  
  // Update URL and reload
  window.location.href = newPath;
};

// Get initial language from URL BEFORE initializing i18n
const initialLanguage = getLanguageFromPath();

// Initialize i18n synchronously with all resources bundled
i18n
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    lng: initialLanguage, // Set language directly - no async detection needed
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: true, // Enable Suspense for proper loading states
    },
  });

export default i18n;
