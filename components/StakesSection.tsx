
import React from 'react';
import Animate from './Animate';

const stakes = [
  {
    icon: <img src="https://images2.imgbox.com/47/18/8gfHAt43_o.png" alt="Défis de la croissance icon" className="w-24 h-24 object-contain" />,
    title: "Défis de la croissance",
    description: <>Sans une structure financière solide, la croissance rapide peut mener à des <span className="font-semibold">problèmes de trésorerie</span> et une <span className="font-semibold">perte de contrôle</span> :</>,
    details: [
        <><span className="font-semibold">2 PME en forte croissance sur 3</span> rencontrent des <span className="font-semibold">tensions de trésorerie</span> dans les deux ans suivant leur phase d’expansion</>,
        <>La <span className="font-semibold">complexité opérationnelle</span> augmente en moyenne de <span className="font-semibold">30 %</span> pour chaque <span className="font-semibold">doublement du chiffre d’affaires</span></>,
        <>Les entreprises qui mettent en place tôt des <span className="font-semibold">outils de pilotage réduisent</span> de 40 % <span className="font-semibold">leur risque de déséquilibre financier</span></>
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/30/ad/ToMA2afU_o.png" alt="Prévention des difficultés et résilience icon" className="w-24 h-24 object-contain" />,
    title: "Prévention des difficultés et résilience",
    description: <>Au moins 66 000 faillites d’entreprises sont attendues en 2025 en France — un niveau historiquement élevé, conséquence directe du <span className="font-semibold">ralentissement économique</span>, de la <span className="font-semibold">fin des aides publiques</span> et du durcissement des <span className="font-semibold">conditions de crédit</span> :</>,
    details: [
        <>Les entreprises ayant un <span className="font-semibold">dispositif de prévention structuré</span> réduisent de près de 30% leur risque de faillite.</>,
        <>Près de 60% des demandes de refinancement ou de restructuration de dettes échouent <span className="font-semibold">faute de business plan crédible</span> et de documents complets.</>,
        <>La moitié des défaillances pourraient être évitées grâce à une <span className="font-semibold">détection</span> précoce et un <span className="font-semibold">accompagnement adapté</span>.</>
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/df/8e/KHz9cB7k_o.png" alt="Transmission et stratégie de négociation icon" className="w-24 h-24 object-contain" />,
    title: "Transmission et stratégie de négociation",
    description: "1/3 des transactions échouent directement faute d’audit ou de préparation :",
    details: [
        <><span className="font-semibold">70% des entreprises sous-estiment les difficultés liées à la transmission</span> et arrivent en négociation avec des <span className="font-semibold">informations financières incomplètes.</span></>,
        <>Les transactions préparées en amont avec un <span className="font-semibold">audit vendeur</span> se concrétisent <span className="font-semibold">2 fois plus rapidement</span>.</>,
        <>Une bonne préparation peut <span className="font-semibold">augmenter le prix de vente</span> de 10 à 20%.</>
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/d4/4b/mBi6r288_o.png" alt="Sécurisation de la fonction financière icon" className="w-24 h-24 object-contain" />,
    title: "Sécurisation de la fonction financière",
    description: <>60 % des PME reconnaissent un <span className="font-semibold">besoin de renforcement</span> de leurs compétences financières et stratégiques</>,
    details: [
        <>Le <span className="font-semibold">délai moyen de recrutement</span> d’un CFO est <span className="font-semibold">supérieur à 6 mois</span>, avec un coût total souvent <span className="font-semibold">inaccessible</span> pour une entreprise en phase de croissance</>,
        <>Lorsqu’un CFO quitte l’entreprise, il s’écoule <span className="font-semibold">4 à 6 mois</span> avant son <span className="font-semibold">remplacement</span>, générant un <span className="font-semibold">vide critique</span> dans la gouvernance et le pilotage financier</>,
        <>Le recours à un CFO part-time permet de bénéficier immédiatement d’une <span className="font-semibold">expertise</span> senior, d’<span className="font-semibold">accompagner la croissance</span>, de <span className="font-semibold">sécuriser les financements</span> et de <span className="font-semibold">renforcer la gouvernance</span> sans supporter le coût d’un recrutement permanent</>
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
              <strong>Identifier les risques</strong> pour mieux les <strong>maîtriser</strong> et <strong>transformer</strong> les défis en opportunités
            </p>
          </Animate>
        </div>
        
        <div className="relative max-w-6xl mx-auto py-4">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#27013D] to-[#6D0037] transform -translate-x-1/2 rounded-full hidden sm:block"></div>
          
          <div className="space-y-12">
            {stakes.map((stake, index) => {
              const onRightSide = index % 2 !== 0; // index 0 (item 1) on left, index 1 (item 2) on right
              
              const CardContent = (
                <Animate variant="pop">
                  <div className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-lg hover:shadow-2xl hover:shadow-violet-100/50 transition-all duration-300 transform hover:scale-105">
                    {/* Mobile Header */}
                    <div className="sm:hidden mb-4 flex items-center gap-4">
                      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex items-center justify-center text-white font-bold text-lg shadow-md">
                        0{index + 1}
                      </div>
                      <h3 className="text-sm font-bold text-black leading-tight">{stake.title}</h3>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden sm:flex items-center gap-4 mb-3">
                        {React.cloneElement(stake.icon, { className: 'w-10 h-10 flex-shrink-0' })}
                        <h3 className="text-sm font-bold text-black leading-tight">{stake.title}</h3>
                    </div>
                    
                    <p className="text-gray-800 text-xs leading-relaxed mb-4">{stake.description}</p>
                    <div className="space-y-2 text-xs text-gray-700">
                      {stake.details.map((detail, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-[#6D0037] mr-2 font-bold leading-tight">›</span>
                          <span className="flex-1">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Animate>
              );

              return (
                <div key={index} className="sm:relative sm:flex sm:items-center">
                  <div className={`sm:w-1/2 ${onRightSide ? 'sm:order-3 sm:pl-8' : 'sm:order-1 sm:pr-8'}`}>
                    {CardContent}
                  </div>
                  
                  {/* Spacer */}
                  <div className="sm:w-1/2 sm:order-2"></div>
                  
                  {/* Circle on line - Desktop */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#27013D] to-[#6D0037] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-gray-50">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;
