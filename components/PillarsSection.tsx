import React from 'react';
import Animate from './Animate';

const pillars = [
  {
    icon: <img src="https://images2.imgbox.com/86/1a/o1GwdJHF_o.png" alt="Anticipation Proactive icon" className="w-14 h-14 object-contain" />,
    title: "Anticipation Proactive",
    description: "Nous utilisons notre expertise et l'analyse de données pour identifier les opportunités et les risques futurs, vous permettant de garder une longueur d'avance.",
  },
  {
    icon: <img src="https://images2.imgbox.com/a9/6f/sEU8YeyP_o.png" alt="Partenariat de Confiance icon" className="w-14 h-14 object-contain" />,
    title: "Partenariat de Confiance",
    description: "Plus qu'un consultant, nous sommes un véritable 'bras droit', impliqué à vos côtés pour atteindre vos objectifs les plus ambitieux.",
  },
  {
    icon: <img src="https://images2.imgbox.com/0f/19/ZMKxUMu0_o.png" alt="Clarté Décisionnelle icon" className="w-14 h-14 object-contain" />,
    title: "Clarté Décisionnelle",
    description: "Nous transformons la complexité en clarté, fournissant des analyses et des outils qui éclairent vos décisions stratégiques.",
  },
  {
    icon: <img src="https://images2.imgbox.com/04/bd/mF2HLfkj_o.png" alt="Performance Durable icon" className="w-14 h-14 object-contain" />,
    title: "Performance Durable",
    description: "Notre but est de bâtir des fondations solides pour une croissance résiliente et une création de valeur sur le long terme.",
  },
];

const PillarsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-black">Les Piliers de</span> <span className="gradient-text">Notre Engagement</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-2">
              Notre ambition repose sur <strong>quatre piliers fondamentaux</strong> qui guident chacune de nos interventions.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto stagger">
          {pillars.map((pillar, index) => (
            <Animate key={index} variant="pop">
              <div className="bg-white rounded-xl p-8 h-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-violet-100/50 hover:border-violet-200">
                <div className="mb-6 h-14 flex items-start">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-[#27013D] mb-3">{pillar.title}</h3>
                <p className="text-gray-800 leading-relaxed">{pillar.description}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;