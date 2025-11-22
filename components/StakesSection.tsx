import React, { useState } from 'react';
import Animate from './Animate';

const stakes = [
  {
    keyword: "Structurer",
    cardDescription: "Mettre en place des fondations financières et opérationnelles solides pour piloter votre croissance avec clarté et anticiper les défis futurs.",
    cardIcon: "https://images2.imgbox.com/47/18/8gfHAt43_o.png",
    newCard: {
        icon: "https://images2.imgbox.com/47/18/8gfHAt43_o.png",
        title: "Défis de la croissance",
        description: <>Sans une structure financière solide, la croissance rapide peut mener à des <span className="font-semibold">problèmes de trésorerie</span> et une <span className="font-semibold">perte de contrôle</span> :</>,
        details: [
            <><span className="font-semibold">2 PME en forte croissance sur 3</span> rencontrent des <span className="font-semibold">tensions de trésorerie</span> dans les deux ans suivant leur phase d’expansion</>,
            <>La <span className="font-semibold">complexité opérationnelle</span> augmente en moyenne de <span className="font-semibold">30 %</span> pour chaque <span className="font-semibold">doublement du chiffre d’affaires</span></>,
            <>Les entreprises qui mettent en place tôt des <span className="font-semibold">outils de pilotage réduisent</span> de 40 % <span className="font-semibold">leur risque de déséquilibre financier</span></>
        ]
    }
  },
  {
    keyword: "Pérenniser",
    cardDescription: "Assurer la continuité et la résilience de votre modèle économique en optimisant vos processus et en sécurisant votre gouvernance financière pour un avenir serein.",
    cardIcon: "https://images2.imgbox.com/d4/4b/mBi6r288_o.png",
    newCard: {
        icon: "https://images2.imgbox.com/d4/4b/mBi6r288_o.png",
        title: "Sécurisation de la fonction financière",
        description: <>60 % des PME reconnaissent un <span className="font-semibold">besoin de renforcement</span> de leurs compétences financières et stratégiques</>,
        details: [
            <>Le <span className="font-semibold">délai moyen de recrutement</span> d’un CFO est <span className="font-semibold">supérieur à 6 mois</span>, avec un coût total souvent <span className="font-semibold">inaccessible</span> pour une entreprise en phase de croissance</>,
            <>Lorsqu’un CFO quitte l’entreprise, il s’écoule <span className="font-semibold">4 à 6 mois</span> avant son <span className="font-semibold">remplacement</span>, générant un <span className="font-semibold">vide critique</span> dans la gouvernance et le pilotage financier</>,
            <>Le recours à un CFO part-time permet de bénéficier immédiatement d’une <span className="font-semibold">expertise</span> senior, d’<span className="font-semibold">accompagner la croissance</span>, de <span className="font-semibold">sécuriser les financements</span> et de <span className="font-semibold">renforcer la gouvernance</span> sans supporter le coût d’un recrutement permanent</>
        ]
    }
  },
  {
    keyword: "Résister",
    cardDescription: "Renforcer votre capacité à naviguer l'incertitude, en identifiant les risques et déployant des stratégies agiles pour transformer la turbulence en opportunités.",
    cardIcon: "https://images2.imgbox.com/30/ad/ToMA2afU_o.png",
    newCard: {
        icon: "https://images2.imgbox.com/30/ad/ToMA2afU_o.png",
        title: "Prévention des difficultés et résilience",
        description: <>Au moins 66 000 faillites d’entreprises sont attendues en 2025 en France — un niveau historiquement élevé, conséquence directe du <span className="font-semibold">ralentissement économique</span>, de la <span className="font-semibold">fin des aides publiques</span> et du durcissement des <span className="font-semibold">conditions de crédit</span> :</>,
        details: [
            <>Les entreprises ayant un <span className="font-semibold">dispositif de prévention structuré</span> réduisent de près de 30% leur risque de faillite.</>,
            <>Près de 60% des demandes de refinancement ou de restructuration de dettes échouent <span className="font-semibold">faute de business plan crédible</span> et de documents complets.</>,
            <>La moitié des défaillances pourraient être évitées grâce à une <span className="font-semibold">détection</span> précoce et un <span className="font-semibold">accompagnement adapté</span>.</>
        ]
    }
  },
  {
    keyword: "Maximiser",
    cardDescription: "Valoriser pleinement votre patrimoine et vos actifs lors des moments clés, en exécutant des transactions stratégiques qui optimisent les retours pour toutes les parties prenantes.",
    cardIcon: "https://images2.imgbox.com/df/8e/KHz9cB7k_o.png",
    newCard: {
        icon: "https://images2.imgbox.com/df/8e/KHz9cB7k_o.png",
        title: "Transmission et stratégie de négociation",
        description: <>1/3 des transactions échouent directement faute d’audit ou de préparation :</>,
        details: [
            <><span className="font-semibold">70% des entreprises sous-estiment les difficultés liées à la transmission</span> et arrivent en négociation avec des <span className="font-semibold">informations financières incomplètes.</span></>,
            <>Les transactions préparées en amont avec un <span className="font-semibold">audit vendeur</span> se concrétisent <span className="font-semibold">2 fois plus rapidement</span>.</>,
            <>Une bonne préparation peut <span className="font-semibold">augmenter le prix de vente</span> de 10 à 20%.</>
        ]
    }
  },
];


const StakesSection: React.FC = () => {
    const [activeStake, setActiveStake] = useState<number>(0);

  return (
    <section id="vos-enjeux" className="bg-gray-50 flex flex-col justify-center py-16 min-h-screen">
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
        
        <div className="w-full max-w-5xl mx-auto mt-12">
            <Animate variant="pop">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200">
                    {/* Tabs */}
                    <div className="flex flex-col sm:flex-row border-b border-gray-200 bg-gray-100 rounded-t-xl overflow-hidden">
                        {stakes.map((stake, index) => (
                            <button
                                key={index}
                                role="tab"
                                aria-selected={activeStake === index}
                                onClick={() => setActiveStake(index)}
                                className={`flex-1 sm:flex-auto flex items-center justify-start sm:justify-center gap-3 px-4 py-4 text-sm font-semibold transition-all duration-300 border-b-2 -mb-px focus:outline-none 
                                    ${activeStake === index
                                        ? 'border-[#27013D] text-[#27013D] bg-white'
                                        : 'border-transparent text-gray-500 bg-gray-100 hover:text-gray-800 hover:bg-gray-200'
                                    }`}
                            >
                                <img src={stake.cardIcon} alt="" className="w-6 h-6 flex-shrink-0" />
                                <span>{stake.keyword}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 sm:p-8">
                        {stakes.map((stake, index) => {
                            const isActive = activeStake === index;
                            return (
                                <div
                                    key={index}
                                    role="tabpanel"
                                    aria-hidden={!isActive}
                                    className={`${isActive ? 'block animate-fade-in-pop' : 'hidden'}`}
                                    style={{ animationDuration: '500ms' }}
                                >
                                    <div className="text-left w-full flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <img src={stake.newCard.icon} alt={`${stake.newCard.title} icon`} className="w-12 h-12 object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold gradient-text">{stake.newCard.title}</h4>
                                            <p className="text-gray-800 text-sm leading-relaxed mt-3">{stake.newCard.description}</p>
                                            <ul className="text-left text-sm text-gray-700 mt-4 space-y-2">
                                                {stake.newCard.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="mr-3 mt-1 text-[#6D0037] font-bold">&#8226;</span>
                                                        <span className="flex-1">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
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