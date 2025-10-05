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
        "Les entreprises ayant un dispositif de prévention structuré réduisent de près de 30% leur risque de faillite.",
        "Près de 60% des demandes de refinancement ou de restructuration de dettes échouent faute de business plan crédible et de documents complets.",
        "La moitié des défaillances pourraient être évitées grâce à une détection précoce et un accompagnement adapté."
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/df/8e/KHz9cB7k_o.png" alt="Transmission et Stratégie de négociation icon" className="w-24 h-24 object-contain" />,
    title: "Transmission et Stratégie de négociation",
    description: "1/3 des transactions échouent directement faute d’audit ou de préparation :",
    details: [
        "70% des entreprises sous-estiment les difficultés liées à la transmission et arrivent en négociation avec des informations financières incomplètes.",
        "Les transactions préparées en amont avec un audit vendeur se concrétisent 2 fois plus rapidement.",
        "Une bonne préparation peut augmenter le prix de vente de 10 à 20%."
    ]
  },
  {
    icon: <img src="https://images2.imgbox.com/d4/4b/mBi6r288_o.png" alt="Sécurisation de la fonction financière icon" className="w-24 h-24 object-contain" />,
    title: "Sécurisation de la fonction financière",
    description: "60 % des PME déclarent manquer de compétences financières stratégiques en interne :",
    details: [
        "Le délai moyen de recrutement d’un CFO est supérieur à 6 mois, avec un coût total souvent inaccessible pour une entreprise en phase de croissance",
        "Lorsqu’un CFO quitte l’entreprise, il faut en moyenne 4 à 6 mois pour le remplacer, créant un vide critique dans le pilotage financier",
        "Le recours à un CFO part-time permet de bénéficier immédiatement d’une expertise senior, d’accompagner la croissance, de sécuriser les financements et de renforcer la gouvernance sans supporter le coût d’un recrutement permanent"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto stagger">
          {stakes.map((stake, index) => (
            <Animate
              key={index}
              variant="pop"
              className="h-full"
            >
              <div className="bg-white rounded-xl flex flex-col h-full transition-all duration-300 ease-in-out border border-gray-200/50 hover:shadow-2xl hover:shadow-violet-100/50 hover:border-violet-200 hover:scale-105 overflow-hidden">
                <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-violet-100 to-pink-100 p-4 shadow-inner">
                  {stake.icon}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                      {stake.title}
                    </h3>
                    <p className="text-gray-800 text-sm leading-relaxed">{stake.description}</p>
                    <div className="space-y-3 text-sm text-gray-800 mt-4">
                        {stake.details.map((detail, i) => (
                            <div key={i} className="flex items-start">
                                <span className="text-[#6D0037] mr-3 font-bold text-lg leading-tight">›</span>
                                <span className="flex-1">{detail}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex-grow" />
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