import React from 'react';
import Animate from './Animate';

const stakes = [
  {
    keyword: "Structurer",
    description: "Mettre en place des fondations financières et opérationnelles solides pour piloter votre croissance avec clarté et anticiper les défis futurs."
  },
  {
    keyword: "Pérenniser",
    description: "Assurer la continuité et la résilience de votre modèle économique en optimisant vos processus et en sécurisant votre gouvernance financière pour un avenir serein."
  },
  {
    keyword: "Résister",
    description: "Renforcer votre capacité à naviguer dans l'incertitude, en identifiant les risques et en déployant des stratégies agiles pour transformer les périodes de turbulence en opportunités."
  },
  {
    keyword: "Maximiser",
    description: "Valoriser pleinement votre patrimoine et vos actifs lors des moments clés, en exécutant des transactions stratégiques qui optimisent les retours pour toutes les parties prenantes."
  },
];

const StakesSection: React.FC = () => {
  return (
    <section id="vos-enjeux" className="bg-gray-50 py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Vos <span className="gradient-text">enjeux</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-2">
              <strong>Identifier les risques</strong> pour mieux les <strong>maîtriser</strong> et <strong>transformer</strong> les défis en opportunités
            </p>
          </Animate>
        </div>
        
        <div className="w-full max-w-6xl mx-auto mt-12">
            <Animate variant="pop">
                <div className="relative">
                    {/* The static line connecting the dots */}
                    <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-px bg-gray-300 transform -translate-y-1/2"></div>
                    
                    {/* Animated running dot container */}
                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-full pointer-events-none">
                      <div className="running-dot-wrapper-stakes">
                          <div className="running-dot-indicator"></div>
                      </div>
                    </div>

                    {/* The static dots and keywords */}
                    <div className="relative flex">
                      {stakes.map((stake, index) => {
                          const isAbove = index % 2 === 0;

                          const StakeKeyword = (
                            <div className={`stake-content-card stake-content-card--${index + 1} text-center px-4 w-64`}>
                               <h3 className={`stake-title stake-title--${index + 1} text-base font-bold gradient-text-stake`}>{stake.keyword}</h3>
                               <div className="w-12 h-px bg-gradient-to-r from-[#27013D] to-[#6D0037] my-2 mx-auto rounded-full"></div>
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
      </div>
    </section>
  );
};

export default StakesSection;