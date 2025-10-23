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
  const shifts = ['-3%', '-10%', '10%', '-10%'];

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
        
        <Animate variant="pop" className="w-full max-w-5xl mx-auto mt-12 bg-white p-8 sm:p-12 rounded-2xl shadow-xl shadow-violet-200/50 border border-gray-100">
            {/* Desktop Vertical Timeline */}
            <div className="hidden md:block">
                <div className="relative">
                  {/* The static line */}
                  <div className="absolute top-20 bottom-20 left-1/2 w-px -translate-x-1/2 bg-gray-300 z-0"></div>

                  {/* Animated running dot */}
                  <div className="absolute top-20 bottom-20 left-1/2 w-px -translate-x-1/2 pointer-events-none z-20">
                    <div className="running-dot-wrapper-vertical h-full relative">
                      <div className="running-dot-indicator"></div>
                    </div>
                  </div>

                  {/* Timeline Items */}
                  <div className="space-y-4">
                    {stakes.map((stake, index) => {
                      const isRight = index % 2 !== 0;
                      const style = { transform: `translateY(${shifts[index]})` };
                      return (
                        <div key={index} className="relative h-44 flex items-center">
                          {/* Static dot on timeline */}
                          <div className={`stake-dot stake-dot--${index + 1} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black rounded-full border-4 border-white z-10`}></div>
                          
                          {/* Animated Horizontal Line */}
                          <div className={`line-horizontal line-horizontal--${index + 1} ${isRight ? 'line-horizontal--right' : 'line-horizontal--left'}`}></div>

                          {/* Content and Line Container */}
                          <div className={`w-[calc(50%-2.5rem)] relative ${isRight ? 'ml-[calc(50%+2.5rem)]' : ''} transform ${isRight ? '-translate-y-28' : 'translate-y-28'}`}>
                              
                              <div style={style} className={`stake-content-card stake-content-card--${index + 1} flex flex-col items-center text-center relative max-w-xs mx-auto`}>
                                  {/* New Black Dot - target for the line */}
                                  {isRight ? (
                                    <div className="absolute -bottom-10 w-2.5 h-2.5 bg-black rounded-full z-10"></div>
                                  ) : (
                                    <div className="absolute -top-10 w-2.5 h-2.5 bg-black rounded-full z-10"></div>
                                  )}
                                  
                                  <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-10 h-10 object-contain mb-2" />
                                  
                                  <h3 className={`stake-title stake-title--${index + 1} text-lg font-bold gradient-text-pillar`}>{stake.keyword}</h3>
                                  
                                  <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                      {stake.description}
                                  </p>
                              </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
            </div>


             {/* Mobile Grid */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                {stakes.map((stake, index) => (
                    <Animate key={index} variant="pop">
                        <div className="flex flex-col items-center text-center">
                            <img src={stake.icon} alt={`${stake.keyword} icon`} className="w-10 h-10 object-contain mb-2" />
                            <h3 className="text-base font-bold gradient-text-pillar">
                                {stake.keyword}
                            </h3>
                            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#6D0037] to-transparent my-3"></div>
                            <p className="text-gray-800 leading-relaxed text-sm">
                                {stake.description}
                            </p>
                        </div>
                    </Animate>
                ))}
              </div>
            </div>
        </Animate>
      </div>
    </section>
  );
};

export default StakesSection;