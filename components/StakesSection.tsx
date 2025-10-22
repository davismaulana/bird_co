import React from 'react';
import Animate from './Animate';

const stakes = [
  {
    keyword: "Structurer",
    description: "Mettre en place des fondations financières et opérationnelles solides pour piloter votre croissance avec clarté et anticiper les défis futurs.",
    icon: "https://images2.imgbox.com/47/18/8gfHAt43_o.png"
  },
  {
    keyword: "Pérenniser",
    description: "Assurer la continuité et la résilience de votre modèle économique en optimisant vos processus et en sécurisant votre gouvernance financière pour un avenir serein.",
    icon: "https://images2.imgbox.com/d4/4b/mBi6r288_o.png"
  },
  {
    keyword: "Résister",
    description: "Renforcer votre capacité à naviguer dans l'incertitude, en identifiant les risques et en déployant des stratégies agiles pour transformer les périodes de turbulence en opportunités.",
    icon: "https://images2.imgbox.com/30/ad/ToMA2afU_o.png"
  },
  {
    keyword: "Maximiser",
    description: "Valoriser pleinement votre patrimoine et vos actifs lors des moments clés, en exécutant des transactions stratégiques qui optimisent les retours pour toutes les parties prenantes.",
    icon: "https://images2.imgbox.com/df/8e/KHz9cB7k_o.png"
  },
];

const StakesSection: React.FC = () => {
  return (
    <section id="vos-enjeux" className="bg-gray-50 min-h-screen flex flex-col justify-center py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Vos <span className="gradient-text">enjeux</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
              <strong>Identifier les risques</strong> pour mieux les <strong>maîtriser</strong> et <strong>transformer</strong> les défis en opportunités
            </p>
          </Animate>
        </div>
        
        <div className="w-full max-w-[85rem] mx-auto mt-12">
            {/* Desktop Timeline */}
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

                        {/* The static dots and keywords */}
                        <div className="relative flex">
                          {stakes.map((stake, index) => {
                              const isAbove = index % 2 === 0;

                              const StakeKeyword = (
                                <div className={`stake-content-card stake-content-card--${index + 1} text-center px-4`}>
                                   <div className="flex items-center justify-center gap-2">
                                     <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-6 h-6 object-contain" />
                                     <h3 className={`stake-title stake-title--${index + 1} text-base font-bold gradient-text-stake`}>{stake.keyword}</h3>
                                   </div>
                                   <div className="w-20 h-px bg-gradient-to-r from-[#27013D] to-[#6D0037] my-2 mx-auto rounded-full"></div>
                                   <p className="text-gray-800 text-xs leading-relaxed">
                                     {stake.description}
                                   </p>
                                </div>
                              );

                              return (
                                  <div key={index} className="relative z-10 w-1/4 flex justify-center">
                                      <div className="flex flex-col items-center group">
                                          {/* Top Content */}
                                          <div className={`min-h-[10rem] flex items-end pb-6 ${isAbove ? '' : 'opacity-0 pointer-events-none'}`}>
                                            {StakeKeyword}
                                          </div>

                                          {/* Point */}
                                          <div className={`stake-dot stake-dot--${index + 1} rounded-full border-2 border-gray-50`}></div>
                                          
                                          {/* Bottom Content */}
                                          <div className={`min-h-[10rem] flex items-start pt-6 ${!isAbove ? '' : 'opacity-0 pointer-events-none'}`}>
                                            {StakeKeyword}
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
                {stakes.map((stake, index) => (
                    <Animate key={index} variant="pop">
                        <div className="text-center p-4">
                            <div className="flex flex-col items-center justify-start">
                                <div className="flex items-center justify-center gap-2">
                                  <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-6 h-6 object-contain" />
                                  <h3 className="text-base font-bold gradient-text-stake">
                                      {stake.keyword}
                                  </h3>
                                </div>
                                <div className="w-20 h-px bg-gradient-to-r from-[#27013D] to-[#6D0037] my-2 mx-auto rounded-full"></div>
                                <p className="text-gray-800 leading-relaxed text-sm">
                                    {stake.description}
                                </p>
                            </div>
                        </div>
                    </Animate>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;