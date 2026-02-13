import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Animate from './Animate';

const faqKeys = ['whatIsBird', 'whyBird', 'howBorn', 'whoDoYouHelp'] as const;

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
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
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const renderAnswer = (key: typeof faqKeys[number]) => {
      if (key === 'whatIsBird') {
        return (
          <Trans
            i18nKey="faq:items.whatIsBird.answer"
            components={{ strong: <strong /> }}
          />
        );
      }
      if (key === 'whoDoYouHelp') {
        const list = t('faq:items.whoDoYouHelp.list', { returnObjects: true }) as string[];
        return (
          <>
            {t('faq:items.whoDoYouHelp.answer')}
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-2">{t('faq:items.whoDoYouHelp.additional')}</p>
          </>
        );
      }
      return t(`faq:items.${key}.answer`);
    };

    return (
        <section id="faq-home" className="bg-gray-50 flex flex-col justify-center py-16 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <Animate variant="pop">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                      </div>
                    </Animate>
                    <Animate variant="pop" delay={100}>
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                          {t('faq:sectionTitle')} <span className="gradient-text">{t('faq:sectionTitleHighlight')}</span>
                        </h2>
                    </Animate>
                </div>
                <div className="max-w-3xl mx-auto stagger">
                    {faqKeys.map((key, index) => (
                        <Animate variant="pop" key={key}>
                            <AccordionItem
                                question={t(`faq:items.${key}.question`)}
                                answer={renderAnswer(key)}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </Animate>
                    ))}
                </div>
                 <Animate variant="pop" delay={300}>
                    <div className="mt-12 text-center">
                        <a
                          href="/faq"
                          className="inline-block bg-white border border-gray-300 text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 text-sm"
                        >
                          {t('common:cta.seeAllQuestions')}
                        </a>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default FAQSection;
