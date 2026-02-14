import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const PrivacyPolicyPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sections = t('pages:privacyPage.sections', { returnObjects: true }) as Array<{ title: string; content: string }>;

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#27013D] to-gray-900 text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {t('pages:privacyPage.heroTitle')} <span>{t('pages:privacyPage.heroTitleHighlight')}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 text-sm md:text-base text-gray-200 max-w-5xl">
                {t('pages:privacyPage.lastUpdate')} {new Date().toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href={`/${i18n.language || 'fr'}`}
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm"
                >
                  {t('pages:privacyPage.backHome')}
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-gray-800 space-y-8 text-sm leading-relaxed">
                {sections.map((section, index) => (
                  <Animate variant="pop" delay={index * 100} key={index}>
                    <h2 className="text-xl font-bold text-[#27013D] pt-4">{section.title}</h2>
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph.includes('contact@birdandco.fr') ? (
                        <>{paragraph.replace('contact@birdandco.fr', '')}<a href="mailto:contact@birdandco.fr" className="text-[#6D0037] hover:underline font-semibold">contact@birdandco.fr</a></>
                      ) : paragraph}</p>
                    ))}
                  </Animate>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;