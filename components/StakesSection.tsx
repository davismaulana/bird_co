import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Animate from './Animate';

const StakesSection: React.FC = () => {
    const { t } = useTranslation();
    const [activeStake, setActiveStake] = useState<number>(0);

    const stakes = [
        {
            key: 'structure',
            keyword: t('home:stakes.tabs.structure.keyword'),
            cardDescription: t('home:stakes.tabs.structure.description'),
            cardIcon: "https://images2.imgbox.com/47/18/8gfHAt43_o.png",
            newCard: {
                icon: "https://images2.imgbox.com/47/18/8gfHAt43_o.png",
                title: t('home:stakes.tabs.structure.cardTitle'),
                descriptionKey: 'home:stakes.tabs.structure.cardDescription',
                detailsKeys: [
                    'home:stakes.tabs.structure.details.0',
                    'home:stakes.tabs.structure.details.1',
                    'home:stakes.tabs.structure.details.2'
                ]
            }
        },
        {
            key: 'sustain',
            keyword: t('home:stakes.tabs.sustain.keyword'),
            cardDescription: t('home:stakes.tabs.sustain.description'),
            cardIcon: "https://images2.imgbox.com/d4/4b/mBi6r288_o.png",
            newCard: {
                icon: "https://images2.imgbox.com/d4/4b/mBi6r288_o.png",
                title: t('home:stakes.tabs.sustain.cardTitle'),
                descriptionKey: 'home:stakes.tabs.sustain.cardDescription',
                detailsKeys: [
                    'home:stakes.tabs.sustain.details.0',
                    'home:stakes.tabs.sustain.details.1',
                    'home:stakes.tabs.sustain.details.2'
                ]
            }
        },
        {
            key: 'resist',
            keyword: t('home:stakes.tabs.resist.keyword'),
            cardDescription: t('home:stakes.tabs.resist.description'),
            cardIcon: "https://images2.imgbox.com/30/ad/ToMA2afU_o.png",
            newCard: {
                icon: "https://images2.imgbox.com/30/ad/ToMA2afU_o.png",
                title: t('home:stakes.tabs.resist.cardTitle'),
                descriptionKey: 'home:stakes.tabs.resist.cardDescription',
                detailsKeys: [
                    'home:stakes.tabs.resist.details.0',
                    'home:stakes.tabs.resist.details.1',
                    'home:stakes.tabs.resist.details.2'
                ]
            }
        },
        {
            key: 'maximize',
            keyword: t('home:stakes.tabs.maximize.keyword'),
            cardDescription: t('home:stakes.tabs.maximize.description'),
            cardIcon: "https://images2.imgbox.com/df/8e/KHz9cB7k_o.png",
            newCard: {
                icon: "https://images2.imgbox.com/df/8e/KHz9cB7k_o.png",
                title: t('home:stakes.tabs.maximize.cardTitle'),
                descriptionKey: 'home:stakes.tabs.maximize.cardDescription',
                detailsKeys: [
                    'home:stakes.tabs.maximize.details.0',
                    'home:stakes.tabs.maximize.details.1',
                    'home:stakes.tabs.maximize.details.2'
                ]
            }
        },
    ];

  return (
    <section id="vos-enjeux" className="bg-gray-50 flex flex-col justify-center py-16 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {t('home:stakes.sectionTitle')} <span className="gradient-text">{t('home:stakes.sectionTitleHighlight')}</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
              <Trans 
                i18nKey="home:stakes.subtitle" 
                components={{ strong: <strong /> }} 
              />
            </p>
          </Animate>
        </div>
        
        <div className="w-full max-w-7xl mx-auto mt-8">
            <Animate variant="pop">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row border-b border-gray-200 bg-gray-100 rounded-t-xl overflow-hidden">
                        {stakes.map((stake, index) => (
                            <button
                                key={index}
                                role="tab"
                                aria-selected={activeStake === index}
                                onClick={() => setActiveStake(index)}
                                className={`flex-1 sm:flex-auto flex items-center justify-start sm:justify-center gap-3 px-4 py-4 text-lg font-semibold transition-all duration-300 border-b-2 -mb-px focus:outline-none 
                                    ${activeStake === index
                                        ? 'border-[#27013D] text-white bg-[#27013D]'
                                        : 'border-transparent text-gray-500 bg-gray-100 hover:text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <img src={stake.cardIcon} alt="" className={`w-8 h-8 flex-shrink-0 ${activeStake === index ? 'brightness-0 invert' : ''}`} />
                                <span>{stake.keyword}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 sm:p-8">
                        {stakes.map((stake, index) => {
                            const isActive = activeStake === index;
                            return (
                                <div
                                    key={index}
                                    role="tabpanel"
                                    aria-hidden={!isActive}
                                    className={`${isActive ? 'block animate-fade-in-pop' : 'hidden'}`}
                                    style={{ animationDuration: '500ms' }}
                                >
                                    <div className="text-left w-full flex flex-col md:flex-row items-start">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold gradient-text">{stake.newCard.title}</h4>
                                            <p className="text-gray-800 text-sm leading-relaxed mt-2">
                                                <Trans 
                                                    i18nKey={stake.newCard.descriptionKey} 
                                                    components={{ strong: <span className="font-semibold text-[#27013D]" /> }} 
                                                />
                                            </p>
                                            <ul className="text-left text-sm text-gray-700 mt-4 space-y-2">
                                                {stake.newCard.detailsKeys.map((detailKey, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-3 text-[#27013D] font-bold text-lg leading-none">&mdash;</span>
                                                        <span className="flex-1">
                                                            <Trans 
                                                                i18nKey={detailKey} 
                                                                components={{ strong: <span className="font-semibold text-[#27013D]" /> }} 
                                                            />
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Animate>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
