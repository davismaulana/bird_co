import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

// URL slug mappings between languages
const slugMappings: Record<string, Record<string, string>> = {
  // French to English
  fr: {
    'pilotage-planification': 'steering-planning',
    'cfo-part-time': 'part-time-cfo',
    'diagnostic-restructuration': 'diagnostic-restructuring',
    'services-ma': 'ma-services',
    'politique-de-confidentialite': 'privacy-policy',
    'conditions-generales-utilisation': 'terms-of-service',
  },
  // English to French (reverse mapping)
  en: {
    'steering-planning': 'pilotage-planification',
    'part-time-cfo': 'cfo-part-time',
    'diagnostic-restructuring': 'diagnostic-restructuration',
    'ma-services': 'services-ma',
    'privacy-policy': 'politique-de-confidentialite',
    'terms-of-service': 'conditions-generales-utilisation',
  },
};

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language || 'fr';
  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const translatePath = (path: string, fromLang: string, toLang: string): string => {
    // Remove current language prefix
    let pathWithoutLang = path.replace(/^\/(en|fr)/, '') || '/';
    
    // Translate slugs in the path
    const mappings = slugMappings[fromLang];
    if (mappings) {
      Object.entries(mappings).forEach(([fromSlug, toSlug]) => {
        pathWithoutLang = pathWithoutLang.replace(fromSlug, toSlug);
      });
    }
    
    // Add new language prefix
    return `/${toLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  };

  const handleLanguageChange = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    const newPath = translatePath(location.pathname, currentLang, langCode);
    
    // Update URL and navigate
    window.location.href = newPath;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label={t('common:language.switchLanguage')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
          role="listbox"
          aria-label={t('common:language.switchLanguage')}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                lang.code === currentLang ? 'bg-gray-50 font-semibold text-[#27013D]' : 'text-gray-700'
              }`}
              role="option"
              aria-selected={lang.code === currentLang}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === currentLang && (
                <svg className="w-4 h-4 ml-auto text-[#27013D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
