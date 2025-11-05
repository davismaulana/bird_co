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
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Nos <span className="gradient-text">Piliers</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
              Notre proposition repose sur <strong>quatre piliers fondamentaux</strong> qui guident chacune de nos interventions.
            </p>
          </Animate>
        </div>
        
        <div className="w-full max-w-7xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-8 left-0 w-full h-px bg-gray-300" />
                    <div className="relative flex justify-around stagger">
                        {pillars.map((pillar, index) => (
                            <Animate key={index} variant="pop" className="w-1/4 text-center px-4 group">
                                <div className="relative inline-block bg-white p-1 z-10">
                                    {/* Connector line from main line to dot */}
                                    <div className="absolute bottom-full left-1/2 w-px h-8 bg-gray-300" />
                                    {/* Dot */}
                                    <div className="w-4 h-4 bg-gradient-to-br from-[#27013D] to-[#6D0037] rounded-full transition-transform duration-300 group-hover:scale-125" />
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-center mb-2 h-12 w-12 items-center mx-auto">
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-sm font-bold mb-1 gradient-text-pillar">{pillar.title}</h3>
                                    <p className="text-gray-800 leading-relaxed text-xs">{pillar.description}</p>
                                </div>
                            </Animate>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Grid */}
            <div className="block md:hidden stagger">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                    <Animate key={index} variant="pop">
                        <div className="text-center p-4">
                            <div className="flex flex-col items-center justify-start">
                                <div className="flex justify-center mb-2 h-12 w-12 items-center">
                                    {React.cloneElement(pillar.icon)}
                                </div>
                                <h3 className="text-base font-bold mb-2 gradient-text-pillar">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-800 leading-relaxed text-sm">
                                    {pillar.description}
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

export default PillarsSection;