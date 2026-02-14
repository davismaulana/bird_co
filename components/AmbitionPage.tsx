

import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';
import { CheckmarkCircleIcon } from '../constants';
import StairsAnimation from './StairsAnimation';

const AmbitionPage: React.FC = () => {
  const { t } = useTranslation();
  const dnaItems = t('pages:ambitionPage.dnaItems', { returnObjects: true }) as string[];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#27013D] to-gray-900 text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {t('pages:ambitionPage.heroTitle')} <span>{t('pages:ambitionPage.heroTitleHighlight')}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 text-sm md:text-base text-gray-200 max-w-5xl">
                {t('pages:ambitionPage.heroSubtitle')}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm"
                >
                  {t('pages:ambitionPage.heroCta')}
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
              <Animate variant="pop">
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
                      {t('pages:ambitionPage.dnaTitle')} <span className="gradient-text">{t('pages:ambitionPage.dnaTitleHighlight')}</span>
                  </h2>
              </Animate>
              <Animate variant="pop" delay={150}>
                  <p className="text-sm text-gray-800 leading-relaxed">{t('pages:ambitionPage.dnaSubtitle')}</p>
              </Animate>
          </div>
          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto stagger">
              {dnaItems.map((item, index) => (
              <Animate as="li" key={index} variant="pop" className="flex items-start">
                  <CheckmarkCircleIcon className="w-6 h-6 flex-shrink-0 mr-4 text-green-500 mt-1" />
                  <p className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></p>
              </Animate>
              ))}
          </ul>
        </div>
      </section>

      {/* Quote/Image Section */}
      <section className="bg-white">
          <div className="max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <Animate variant="pop" className="h-[400px] lg:h-full lg:order-last">
                    <div className="h-[400px] lg:h-full">
                        <StairsAnimation />
                    </div>
                </Animate>
                <div className="lg:order-first">
                    <div className="p-8 sm:p-12 md:p-20 container">
                        <Animate variant="pop">
                            <blockquote className="text-lg md:text-xl xl:text-2xl font-bold text-[#27013D] leading-snug">
                                {t('pages:ambitionPage.quote')}
                            </blockquote>
                        </Animate>
                        <Animate variant="pop" delay={150}>
                            <p className="mt-4 text-sm text-gray-800">— Peter Drucker</p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <p className="mt-8 text-gray-800 leading-relaxed text-xs">
                                {t('pages:ambitionPage.quoteDescription')}
                            </p>
                        </Animate>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#27013D] to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
                    {t('pages:ambitionPage.ctaTitle')} <span className="gradient-text-light">{t('pages:ambitionPage.ctaTitleHighlight')}</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
                    {t('pages:ambitionPage.ctaFormHeading')}
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#27013D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 text-sm"
                    >
                      {t('pages:ambitionPage.ctaCta')}
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default AmbitionPage;