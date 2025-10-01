import React from 'react';
import Animate from './Animate';

const stakes = [
  {
    icon: <img src="https://images2.imgbox.com/30/ad/ToMA2afU_o.png" alt="Manque de pilotage icon" className="w-20 h-20 object-contain" />,
    title: "Manque de pilotage",
    description: "2/3 des entreprises qui échouent dans les 5 premières années citent l'absence d'outils de pilotage comme une cause principale d'échec.",
    details: [
        "On anticipe plus de 66k faillites en 2025, la plupart faute d'accompagnement pertinent.",
        "82% des entreprises avec un reporting robuste ont de meilleures performances financières."
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/df/8e/KHz9cB7k_o.png" alt="Obstacles à la transmission icon" className="w-20 h-20 object-contain" />,
    title: "Obstacles à la transmission",
    description: "Le dirigeant rencontre de nombreux obstacles lors de la transmission si son évaluation est irréaliste ou sa stratégie de vente inefficace.",
    details: [
        "Une valeur surestimée et/ou un passif sous-estimé.",
        "Une information financière manquante ou incomplète."
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/47/18/8gfHAt43_o.png" alt="Stratégie inefficace icon" className="w-20 h-20 object-contain" />,
    title: "Stratégie inefficace",
    description: "Une vente ou une négociation mal préparée, souvent due à des documents incomplets, mène à une stratégie inefficace et des opportunités manquées.",
    details: [
        "Manque de préparation en amont des négociations.",
        "Informations financières et documents clés manquants."
    ]
  },
];

const StakesSection: React.FC = () => {
  return (
    <section id="vos-enjeux" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              Identifier les risques pour mieux les maîtriser et transformer les défis en opportunités.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto stagger">
          {stakes.map((stake, index) => (
            <Animate
              key={index}
              variant="pop"
              className="h-full"
            >
              <div className="bg-white rounded-xl p-8 flex flex-col h-full transition-all duration-300 ease-in-out border border-gray-200/50 hover:shadow-2xl hover:shadow-violet-100/50 hover:border-violet-200 hover:scale-105">
                <div className="h-24 w-24 flex items-center justify-center bg-gradient-to-br from-violet-100 to-pink-100 rounded-2xl p-4 shadow-inner mb-6">
                  {stake.icon}
                </div>
                <h3 className="text-lg font-bold text-[#27013D] mb-3 leading-tight">
                  {stake.title}
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-4">{stake.description}</p>
                <div className="flex-grow" />
                <div className="space-y-3 text-sm text-gray-800 mt-auto pt-6">
                    {stake.details.map((detail, i) => (
                        <div key={i} className="flex items-start">
                            <span className="text-[#6D0037] mr-3 font-bold text-lg leading-tight">›</span>
                            <span className="flex-1">{detail}</span>
                        </div>
                    ))}
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakesSection;