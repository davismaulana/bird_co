
import React from 'react';
import Animate from './Animate';

const pillars = [
  {
    icon: <img src="https://images2.imgbox.com/86/1a/o1GwdJHF_o.png" alt="Pragmatisme icon" className="w-10 h-10 object-contain" />,
    title: "Pragmatisme",
    description: <>Des solutions concrètes pour un accompagnement <strong>pertinent</strong>, <strong>économique</strong> et <strong>adapté à votre réalité</strong>.</>,
  },
  {
    icon: <img src="https://images2.imgbox.com/a9/6f/sEU8YeyP_o.png" alt="Partenariat de Confiance icon" className="w-10 h-10 object-contain" />,
    title: "Partenariat de Confiance",
    description: <>Plus qu’un consultant : un partenaire investi, guidé par la <strong>transparence</strong> et l’<strong>intégrité</strong>.</>,
  },
  {
    icon: <img src="https://images2.imgbox.com/0f/19/ZMKxUMu0_o.png" alt="Clarté Décisionnelle icon" className="w-10 h-10 object-contain" />,
    title: "Clarté Décisionnelle",
    description: <>Des analyses complexes et ciblées pour éclairer vos <strong>décisions stratégiques</strong>.</>,
  },
  {
    icon: <img src="https://images2.imgbox.com/04/bd/mF2HLfkj_o.png" alt="Proactivité icon" className="w-10 h-10 object-contain" />,
    title: "Proactivité",
    description: <>Nous vous aidons <strong>à identifier les opportunités</strong> et <strong>anticiper les risques</strong> sereinement</>,
  },
];

const PillarsSection: React.FC = () => {
  return (
    <section id="piliers" className="bg-white min-h-screen flex flex-col justify-center py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Nos <span className="gradient-text">Piliers</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-2 max-w-2xl mx-auto">
              Notre proposition repose sur <strong>quatre piliers fondamentaux</strong> qui guident chacune de nos interventions.
            </p>
          </Animate>
        </div>
        
        <div className="w-full max-w-7xl mx-auto">
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
                    <div className="relative flex">
                      {pillars.map((pillar, index) => {
                          const isAbove = index % 2 === 0;

                          const PillarContent = (
                            <div className={`pillar-content-card pillar-content-card--${index + 1} text-center px-2`}>
                                <div className="flex flex-col items-center justify-start">
                                    <div className="flex justify-center mb-1 h-12 w-12 items-center">
                                        {React.cloneElement(pillar.icon)}
                                    </div>
                                    <h3 className={`pillar-title pillar-title--${index + 1} text-sm font-bold mb-1 gradient-text-pillar`}>
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-800 leading-relaxed text-xs">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                          );

                          return (
                              <div key={index} className="relative z-10 w-1/4 flex justify-center">
                                  <div className="flex flex-col items-center group">
                                      {/* Top Content */}
                                      <div className={`min-h-[12rem] flex items-end pb-6 ${isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        {PillarContent}
                                      </div>

                                      {/* Point */}
                                      <div className={`pillar-dot pillar-dot--${index + 1} rounded-full border-2 border-gray-50`}></div>
                                      
                                      {/* Bottom Content */}
                                      <div className={`min-h-[12rem] flex items-start pt-6 ${!isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        {PillarContent}
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

export default PillarsSection;
