import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode | string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-gray-900"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 text-[#27013D] ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pt-4 pr-12 text-base text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: answer as string }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'fr';
    const faqs = t('pages:faqPage.categories', { returnObjects: true }) as Array<{
      title: string;
      items: Array<{ question: string; answer: string }>;
    }>;
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const handleToggle = (categoryIndex: number, itemIndex: number) => {
        const indexKey = `${categoryIndex}-${itemIndex}`;
        setOpenIndex(openIndex === indexKey ? null : indexKey);
    };

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
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {t('pages:faqPage.heroTitle')} <span>{t('pages:faqPage.heroTitleHighlight')}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-base md:text-lg text-gray-200 max-w-5xl">
                {t('pages:faqPage.heroSubtitle')}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href={`/${currentLang}/#contact`}
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm"
                >
                  {t('pages:faqPage.heroCta')}
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className={categoryIndex > 0 ? 'mt-16' : ''}>
                    <Animate variant="pop">
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">{category.title}</h2>
                    </Animate>
                    <div className="stagger">
                        {category.items.map((item, itemIndex) => (
                            <Animate variant="pop" key={itemIndex}>
                                <AccordionItem
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === `${categoryIndex}-${itemIndex}`}
                                    onClick={() => handleToggle(categoryIndex, itemIndex)}
                                />
                            </Animate>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
                    {t('pages:faqPage.ctaTitle')} <span className="gradient-text">{t('pages:faqPage.ctaTitleHighlight')}</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-base text-gray-800 max-w-3xl mx-auto">
                    {t('pages:faqPage.ctaDescription')}
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-sm"
                    >
                      {t('pages:faqPage.ctaCta')}
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;