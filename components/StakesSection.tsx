import React, { useState, useEffect } from 'react';
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

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);


const StakesSection: React.FC = () => {
    const [activeStake, setActiveStake] = useState<number>(0);
    const intervalRef = React.useRef<number | null>(null);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = window.setInterval(() => {
            setActiveStake(prevActiveStake => (prevActiveStake + 1) % stakes.length);
        }, 8000);
    };

    useEffect(() => {
        resetInterval();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handleStakeClick = (index: number) => {
        setActiveStake(index);
        resetInterval();
    };

  return (
    <section id="vos-enjeux" className="bg-gray-50 flex flex-col justify-center py-16">
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
        
        <div className="w-full max-w-7xl mx-auto mt-12">
            {/* Desktop Vertical Timeline */}
            <Animate variant="pop" className="hidden md:block">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-200"></div>

                <div className="space-y-8">
                  {stakes.map((stake, index) => {
                    const isActive = activeStake === index;
                    const isCardRight = index % 2 !== 0;
                    const isContentRight = index % 2 === 0;

                    const KeywordCard = (
                        <div
                            onClick={() => handleStakeClick(index)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStakeClick(index); }}
                            role="button"
                            tabIndex={0}
                            className={`w-full bg-white px-10 pt-16 pb-10 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer flex-grow flex flex-col justify-start ${isActive ? 'scale-105 shadow-xl border-gray-200' : 'hover:scale-102 hover:shadow-lg'}`}
                        >
                            <div className={`flex items-start gap-3 ${isContentRight ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`flex-1 flex flex-col ${isContentRight ? 'items-end' : 'items-start'}`}>
                                    <h3 className={`text-lg font-bold gradient-text ${isContentRight ? 'text-right' : 'text-left'}`}>{stake.keyword}</h3>
                                    <p className={`text-gray-700 text-sm leading-relaxed mt-2 max-w-sm ${isContentRight ? 'text-right' : 'text-left'}`}>
                                        {stake.cardDescription}
                                    </p>
                                </div>
                                <div className={`flex-shrink-0 text-[#27013D] p-2 rounded-full transition-colors ${isActive ? 'bg-gray-100' : ''}`}>
                                    <PlusIcon className={`w-6 h-6 transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`} />
                                </div>
                            </div>
                        </div>
                    );

                    const DetailCard = (
                        <div
                            id={`stake-details-${index}`}
                            className={`transition-all duration-500 ease-in-out flex-grow flex ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}
                        >
                           <div className={`bg-[#EBE5F0] p-4 rounded-xl shadow-lg border border-violet-100 text-left w-full flex flex-col justify-center`}>
                                <div className="flex flex-col items-start text-left">
                                    <img src={stake.newCard.icon} alt={`${stake.newCard.title} icon`} className="w-8 h-8 object-contain mb-3" />
                                    <h4 className="text-base font-bold gradient-text">{stake.newCard.title}</h4>
                                    <p className="text-gray-800 text-xs leading-relaxed mt-2">{stake.newCard.description}</p>
                                    <ul className="text-left text-xs text-gray-600 mt-3 space-y-1.5 self-start w-full">
                                        {stake.newCard.details.map((detail, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="mr-2 mt-0.5 text-[#6D0037] font-bold">&#8226;</span>
                                                <span className="flex-1">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );

                    return (
                      <div key={index} className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-300 rounded-full border-4 border-gray-50 z-10"></div>
                        
                        <div className="flex justify-between">
                            <div className="w-[calc(50%-2.5rem)] flex">
                                {isCardRight ? DetailCard : KeywordCard}
                            </div>
                            <div className="w-[calc(50%-2.5rem)] flex">
                                {isCardRight ? KeywordCard : DetailCard}
                            </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Animate>


             {/* Mobile Grid */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {stakes.map((stake, index) => {
                    const isActive = activeStake === index;
                    return (
                        <Animate key={index} variant="pop">
                        <div className="space-y-4">
                            <div
                                onClick={() => handleStakeClick(index)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleStakeClick(index); }}
                                role="button"
                                tabIndex={0}
                                className="bg-white px-6 pt-8 pb-6 rounded-xl shadow-lg border border-gray-100 h-full w-full cursor-pointer hover:shadow-xl hover:scale-102 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center justify-start text-center">
                                    <h3 className="text-base font-bold gradient-text">
                                        {stake.keyword}
                                    </h3>
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6D0037] to-transparent my-3"></div>
                                    <p className="text-gray-800 leading-relaxed text-sm">
                                        {stake.cardDescription}
                                    </p>
                                </div>
                            </div>
                            <div
                                id={`stake-details-mobile-${index}`}
                                className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                            <div className="overflow-hidden">
                                <div className={`bg-[#EBE5F0] p-4 rounded-xl shadow-lg border border-violet-100 text-left`}>
                                    <div className="flex flex-col items-start text-left">
                                        <img src={stake.newCard.icon} alt={`${stake.newCard.title} icon`} className="w-8 h-8 object-contain mb-3" />
                                        <h4 className="text-base font-bold gradient-text">{stake.newCard.title}</h4>
                                        <p className="text-gray-800 text-xs leading-relaxed mt-2">{stake.newCard.description}</p>
                                        <ul className="text-left text-xs text-gray-600 mt-3 space-y-1.5 self-start w-full">
                                            {stake.newCard.details.map((detail, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="mr-2 mt-0.5 text-[#6D0037] font-bold">&#8226;</span>
                                                    <span className="flex-1">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Animate>
                    );
                })}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StakesSection;