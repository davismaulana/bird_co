import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';
  
  // Get privacy and terms URLs based on language
  const privacyUrl = currentLang === 'en' 
    ? `/${currentLang}/privacy-policy` 
    : `/${currentLang}/politique-de-confidentialite`;
  const termsUrl = currentLang === 'en' 
    ? `/${currentLang}/terms-of-service` 
    : `/${currentLang}/conditions-generales-utilisation`;

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-800">&copy; {new Date().getFullYear()} {t('common:footer.copyright')}</p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0 text-xs text-gray-800">
            <a href={privacyUrl} className="hover:text-black transition-colors">{t('common:footer.privacyPolicy')}</a>
            <a href={termsUrl} className="hover:text-black transition-colors">{t('common:footer.termsOfUse')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;