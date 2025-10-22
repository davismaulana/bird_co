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
    description: "Renforcer votre capacité à naviguer l'incertitude, en identifiant les risques et déployant des stratégies agiles pour transformer la turbulence en opportunités.",
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
    <section id="vos-enjeux" className="bg-gray-50 flex flex-col justify-center py-16">
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
        
        <div className="w-full max-w-5xl mx-auto mt-12">
            {/* Desktop Vertical Timeline */}
            <div className="hidden md:block">
              <Animate variant="pop">
                <div className="relative">
                  {/* The static line */}
                  <div className="absolute top-20 bottom-20 left-1/2 w-0.5 -translate-x-1/2 bg-gray-300 z-0"></div>

                  {/* Animated running dot */}
                  <div className="absolute top-20 bottom-20 left-1/2 w-0.5 -translate-x-1/2 pointer-events-none z-20">
                    <div className="running-dot-wrapper-vertical h-full relative">
                      <div className="running-dot-indicator"></div>
                    </div>
                  </div>

                  {/* Timeline Items */}
                  <div className="space-y-2">
                    {stakes.map((stake, index) => {
                      const isRight = index % 2 !== 0;
                      return (
                        <div key={index} className="relative">
                          {/* Static dot */}
                          <div className={`stake-dot stake-dot--${index + 1} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black rounded-full border-4 border-gray-50 z-10`}></div>
                          
                          {/* Card */}
                          <div className={`w-[calc(50%-2.5rem)] ${isRight ? 'ml-[calc(50%+2.5rem)] text-left' : 'text-right'}`}>
                            <div className={`stake-content-card stake-content-card--${index + 1} bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-40`}>
                              <div className={`flex items-center gap-4 ${isRight ? 'flex-row' : 'flex-row-reverse'}`}>
                                <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-10 h-10 object-contain flex-shrink-0" />
                                <div className="flex-1">
                                  <h3 className={`stake-title stake-title--${index + 1} text-lg font-bold gradient-text-stake`}>{stake.keyword}</h3>
                                  <p className={`text-gray-700 text-sm leading-relaxed mt-1 max-w-sm ${!isRight ? 'ml-auto' : ''}`}>
                                    {stake.description}
                                  </p>
                                </div>
                              </div>
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
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                            <div className="flex flex-col items-center justify-start text-center">
                                <div className="flex items-center justify-center gap-2">
                                  <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-8 h-8 object-contain" />
                                  <h3 className="text-base font-bold gradient-text-stake">
                                      {stake.keyword}
                                  </h3>
                                </div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6D0037] to-transparent my-3"></div>
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