import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Animate from './Animate';

const PillarsSection: React.FC = () => {
  const { t } = useTranslation();

  const pilliers = [
    {
      icon: <img src="https://images2.imgbox.com/86/1a/o1GwdJHF_o.png" alt="Pragmatisme icon" className="w-14 h-14 object-contain" />,
      title: t('home:pillars.pragmatism.title'),
      description: <Trans i18nKey="home:pillars.pragmatism.description" components={{ strong: <strong /> }} />,
    },
    {
      icon: <img src="https://images2.imgbox.com/0f/19/ZMKxUMu0_o.png" alt="Clarté Décisionnelle icon" className="w-14 h-14 object-contain" />,
      title: t('home:pillars.clarity.title'),
      description: <Trans i18nKey="home:pillars.clarity.description" components={{ strong: <strong /> }} />,
    },
    {
      icon: <img src="https://images2.imgbox.com/04/bd/mF2HLfkj_o.png" alt="Proactivité icon" className="w-14 h-14 object-contain" />,
      title: t('home:pillars.proactivity.title'),
      description: <Trans i18nKey="home:pillars.proactivity.description" components={{ strong: <strong /> }} />,
    },
    {
      icon: <img src="https://images2.imgbox.com/a9/6f/sEU8YeyP_o.png" alt="Confiance icon" className="w-14 h-14 object-contain" />,
      title: t('home:pillars.trust.title'),
      description: <Trans i18nKey="home:pillars.trust.description" components={{ strong: <strong /> }} />,
    },
  ];

  return (
    <section id="pilliers" className="bg-white flex flex-col justify-center py-16 overflow-x-hidden min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {t('home:pillars.sectionTitle')} <span className="gradient-text">{t('home:pillars.sectionTitleHighlight')}</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto md:whitespace-nowrap">
              <Trans i18nKey="home:pillars.subtitle" components={{ strong: <strong /> }} />
            </p>
          </Animate>
        </div>
            <div className="hidden md:block">
              <Animate variant="pop">
                  <div className="relative">
                      {/* The static line connecting the dots */}
                      <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-gray-300 transform -translate-y-1/2"></div>
                      
                      {/* Animated running dot container */}
                      <div className="absolute top-0 left-[12.5%] right-[12.5%] h-full pointer-events-none">
                        <div className="running-dot-wrapper">
                            <div className="running-dot-indicator"></div>
                        </div>
                      </div>

                      {/* The static dots and content cards */}
                      <div className="relative flex items-center">
                        {pilliers.map((pillier, index) => {
                            const isAbove = index % 2 === 0;

                            const PillierContent = (
                              <div className={`pillier-content-card pillier-content-card--${index + 1} text-center px-2`}>
                                  <div className="flex flex-col items-center justify-start">
                                      <div className="flex justify-center mb-2 h-16 w-16 items-center">
                                          {React.cloneElement(pillier.icon)}
                                      </div>
                                      <h3 className={`pillier-title pillier-title--${index + 1} text-base font-bold mb-2 gradient-text-pillier`}>
                                          {pillier.title}
                                      </h3>
                                      <p className="text-gray-800 leading-relaxed text-sm">
                                          {pillier.description}
                                      </p>
                                  </div>
                              </div>
                            );

                            return (
                                <div key={index} className="relative z-10 w-1/4 flex justify-center">
                                    <div className="flex flex-col items-center group">
                                        {/* Top Content */}
                                        <div className={`min-h-[10rem] flex items-end pb-6 ${isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                          {PillierContent}
                                        </div>

                                        {/* Point */}
                                        <div className={`pillier-dot pillier-dot--${index + 1} rounded-full border-2 border-gray-50`}></div>
                                        
                                        {/* Bottom Content */}
                                        <div className={`min-h-[10rem] flex items-start pt-6 ${!isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                          {PillierContent}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                      </div>
                  </div>
              </Animate>
            </div>

            {/* Mobile Grid */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {pilliers.map((pillier, index) => (
                    <Animate key={index} variant="pop">
                        <div className="text-center p-4">
                            <div className="flex flex-col items-center justify-start">
                                <div className="flex justify-center mb-3 h-16 w-16 items-center">
                                    {React.cloneElement(pillier.icon)}
                                </div>
                                <h3 className="text-lg font-bold mb-3 gradient-text-pillier">
                                    {pillier.title}
                                </h3>
                                <p className="text-gray-800 leading-relaxed text-base">
                                    {pillier.description}
                                </p>
                            </div>
                        </div>
                    </Animate>
                ))}
              </div>
            </div>
        </div>
    </section>
  );
};

export default PillarsSection;
