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
    description: "Plus qu’un consultant : un partenaire investi, guidé par la transparence et l’intégrité.",
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
    }, 3000); // Cycle every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="piliers" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              <span className="gradient-text">Piliers</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-2">
              Notre proposition repose sur <strong>quatre piliers fondamentaux</strong> qui guident chacune de nos interventions.
            </p>
          </Animate>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {pillars.map((pillar, index) => {
            const isActive = index === activeIndex;
            return (
              <Animate key={index} variant="pop">
                 <div
                    className={`
                      rounded-xl p-6 transition-all duration-700 ease-in-out
                      ${isActive
                        ? 'bg-white scale-105 shadow-2xl shadow-violet-100/50 border border-violet-200 opacity-100'
                        : 'bg-white scale-100 shadow-sm border border-gray-200 opacity-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-6">
                        <div className={`flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-lg transition-colors duration-700 ${isActive ? 'bg-violet-50' : 'bg-gray-100'}`}>
                            {pillar.icon}
                        </div>
                        <div className="text-left">
                            <h3 className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-[#27013D]' : 'text-gray-800'}`}>{pillar.title}</h3>
                            <p className="text-gray-800 leading-relaxed text-xs mt-1">{pillar.description}</p>
                        </div>
                    </div>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;