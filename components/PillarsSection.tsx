
import React, { useState, useEffect } from 'react';
import Animate from './Animate';

const pillars = [
  {
    icon: <img src="https://images2.imgbox.com/86/1a/o1GwdJHF_o.png" alt="Pragmatisme icon" className="w-14 h-14 object-contain" />,
    title: "Pragmatisme",
    description: "Nous apportons des solutions concrètes et adaptées à votre réalité, en conjuguant expertise et pragmatisme, pour un accompagnement aussi pertinent qu’économique.",
  },
  {
    icon: <img src="https://images2.imgbox.com/a9/6f/sEU8YeyP_o.png" alt="Partenariat de Confiance icon" className="w-14 h-14 object-contain" />,
    title: "Partenariat de Confiance",
    description: "Plus qu’un consultant : un partenaire investi, guidé par la transparence et l’intégrité.",
  },
  {
    icon: <img src="https://images2.imgbox.com/0f/19/ZMKxUMu0_o.png" alt="Clarté Décisionnelle icon" className="w-14 h-14 object-contain" />,
    title: "Clarté Décisionnelle",
    description: "Nous transformons la complexité en clarté, fournissant des analyses et des outils qui éclairent vos décisions stratégiques.",
  },
  {
    icon: <img src="https://images2.imgbox.com/04/bd/mF2HLfkj_o.png" alt="Proactivité icon" className="w-14 h-14 object-contain" />,
    title: "Proactivité",
    description: "Nous bâtissons des fondations solides pour une croissance durable, en identifiant les opportunités et anticipant les risques, afin de vous garder une longueur d'avance.",
  },
];

const PillarsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % pillars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="piliers" className="bg-white py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
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
        
        <div className="w-full max-w-5xl mx-auto">
            <Animate variant="pop">
                <div className="relative flex justify-between items-center">
                    {/* The Line */}
                    <div className="absolute top-1/2 left-12 right-12 h-px bg-gray-300 transform -translate-y-1/2"></div>
                    
                    {pillars.map((pillar, index) => {
                        const isActive = index === activeIndex;
                        const isAbove = index === 0 || index === pillars.length - 1;
                        return (
                            <div key={index} className="relative z-10">
                                <div className="flex flex-col items-center cursor-pointer group" onClick={() => setActiveIndex(index)}>
                                    {/* Top Label */}
                                    <div className={`h-16 flex items-end ${isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <span className={`pb-4 px-1 text-center text-xs sm:text-sm font-semibold transition-all duration-300 group-hover:gradient-text group-hover:scale-110 ${isActive ? 'gradient-text scale-110' : 'text-black'}`}>
                                            {pillar.title}
                                        </span>
                                    </div>

                                    {/* Point */}
                                    <div className={`rounded-full transition-all duration-500 ease-in-out border-4 border-white ${isActive ? 'w-8 h-8 bg-gradient-to-br from-[#27013D] to-[#6D0037] shadow-lg' : 'w-7 h-7 bg-black'}`}></div>
                                    
                                    {/* Bottom Label */}
                                    <div className={`h-16 flex items-start ${!isAbove ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <span className={`pt-4 px-1 text-center text-xs sm:text-sm font-semibold transition-all duration-300 group-hover:gradient-text group-hover:scale-110 ${isActive ? 'gradient-text scale-110' : 'text-black'}`}>
                                            {pillar.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Content Display */}
                <div className="mt-12 max-w-xl mx-auto text-center relative min-h-[224px] sm:min-h-[192px]">
                    <div key={activeIndex} className="animate-fade-in-pop absolute inset-0">
                        <div className="flex flex-col items-center justify-start">
                            <div className="flex justify-center mb-4">
                                {React.cloneElement(pillars[activeIndex].icon, { className: "w-16 h-16 object-contain" })}
                            </div>
                            <h3 className="text-xl font-bold text-[#27013D] mb-2">{pillars[activeIndex].title}</h3>
                            <p className="text-gray-800 leading-relaxed text-sm">{pillars[activeIndex].description}</p>
                        </div>
                    </div>
                </div>
            </Animate>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
