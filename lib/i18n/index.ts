import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

// Function to get language from URL path
export const getLanguageFromPath = (): string => {
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

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false,
    },
  });

// Set initial language from URL
const langFromPath = getLanguageFromPath();
if (i18n.language !== langFromPath) {
  i18n.changeLanguage(langFromPath);
}

export default i18n;
