import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getConsent, setConsent } from '../lib/tracking';

const PRIVACY_PATH: Record<string, string> = {
  fr: '/fr/politique-de-confidentialite',
  en: '/en/privacy-policy',
};

const ConsentBanner: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'birdco.consent') setVisible(getConsent() === null);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (!visible) return null;

  const lang = (i18n.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
  const privacyHref = PRIVACY_PATH[lang];

  const choose = (value: 'accepted' | 'refused') => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="bc-consent-title"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-lg bg-white shadow-2xl ring-1 ring-black/5 p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="flex-1">
            <p id="bc-consent-title" className="text-sm font-bold text-[#27013D]">
              {t('cookie.title')}
            </p>
            <p className="mt-1 text-sm text-gray-700 leading-relaxed">
              {t('cookie.message')}{' '}
              <a
                href={privacyHref}
                className="underline text-[#27013D] hover:text-[#7C3AED]"
              >
                {t('cookie.privacyLink')}
              </a>
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-2 md:gap-3 md:items-center md:flex-shrink-0">
            <button
              type="button"
              onClick={() => choose('refused')}
              className="px-4 py-2 text-sm font-semibold rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {t('cookie.refuse')}
            </button>
            <button
              type="button"
              onClick={() => choose('accepted')}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-[#27013D] text-white hover:bg-[#3a0259]"
            >
              {t('cookie.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
