import React, { useState } from 'react';
import Animate from './Animate';
import { CheckmarkCircleIcon, KpiDashboardMockup, FinancialReportMockup } from '../constants';

const DueDiligenceVisual: React.FC = () => (
  <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>Checklist Due Diligence VDD</h3>
    <div className="flex-grow space-y-3">
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 anim-child" style={{'--i': 1} as React.CSSProperties}>
        <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
        <p className="text-gray-800 text-xs">Qualité des revenus (MRR, churn...)</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 anim-child" style={{'--i': 2} as React.CSSProperties}>
        <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
        <p className="text-gray-800 text-xs">Analyse de la rentabilité (EBITDA, marges)</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 anim-child" style={{'--i': 3} as React.CSSProperties}>
        <CheckmarkCircleIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
        <p className="text-gray-700 text-xs">Normalisation du BFR</p>
      </div>
       <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 anim-child" style={{'--i': 4} as React.CSSProperties}>
        <CheckmarkCircleIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
        <p className="text-gray-700 text-xs">Analyse de la dette nette</p>
      </div>
    </div>
  </div>
);

const TransactionalSupportVisual: React.FC = () => (
    <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
      <h3 className="font-bold text-gray-800 text-xs sm:text-sm mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>Accompagnement Transactionnel</h3>
      <div className="flex-grow space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 anim-child" style={{'--i': 1} as React.CSSProperties}>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
              <p className="text-gray-800 text-xs font-medium">Phase 1: Préparation (Teaser, IM, VDD)</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60 anim-child" style={{'--i': 2} as React.CSSProperties}>
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-700 text-xs">Phase 2: Négociation des offres</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60 anim-child" style={{'--i': 3} as React.CSSProperties}>
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-700 text-xs">Phase 3: Due Diligence &amp; Closing</p>
          </div>
      </div>
      <div className="mt-4 bg-[#27013D]/5 rounded-lg p-3 border border-[#27013D]/10 text-center anim-child" style={{'--i': 4} as React.CSSProperties}>
          <p className="text-xs font-bold text-[#27013D]">Objectif: Maximiser la valeur</p>
      </div>
    </div>
);

const CashGrowthVisual: React.FC = () => {
    const pathData = "M 0 90 C 7 92 13 97 20 95 C 27 93 33 98 40 100 C 47 102 53 91 60 85 C 67 79 73 89 80 92 C 87 95 93 104 100 110 C 107 116 113 119 120 120 C 127 121 133 93 140 80 C 147 67 153 53 160 50 C 167 47 173 57 180 60 C 187 63 193 51 200 45 C 207 39 213 60 220 70 C 227 80 233 91 240 95 C 247 99 253 105 260 105 C 267 105 273 95 280 90 C 287 85 293 95 300 98";

    return (
        <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2 anim-child" style={{'--i': 0} as React.CSSProperties}>
                <h3 className="font-bold text-gray-800 text-xs">Prévisionnel de trésorerie</h3>
            </div>
            <div className="relative flex-grow">
                <svg viewBox="0 0 335 170" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Y-axis labels */}
                    <text x="0" y="25" alignmentBaseline="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 1} as React.CSSProperties}>+50k€</text>
                    <text x="0" y="75" alignmentBaseline="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 2} as React.CSSProperties}>0</text>
                    <text x="0" y="125" alignmentBaseline="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 3} as React.CSSProperties}>-50k€</text>
                    
                    <g transform="translate(35, 0)">
                        {/* X-axis labels */}
                        <text x="0" y="165" textAnchor="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 4} as React.CSSProperties}>T0</text>
                        <text x="100" y="165" textAnchor="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 5} as React.CSSProperties}>T5</text>
                        <text x="200" y="165" textAnchor="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 6} as React.CSSProperties}>T10</text>
                        <text x="300" y="165" textAnchor="middle" fill="#6b7280" fontSize="6" className="anim-child" style={{'--i': 7} as React.CSSProperties}>T15</text>
                        
                        {/* Dashed reference line for zero */}
                        <line x1="0" y1="75" x2="300" y2="75" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" className="anim-child" style={{'--i': 1} as React.CSSProperties} />
                        
                        {/* Additional reference lines */}
                        <line x1="0" y1="25" x2="300" y2="25" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" className="anim-child" style={{'--i': 1} as React.CSSProperties}/>
                        <line x1="0" y1="125" x2="300" y2="125" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" className="anim-child" style={{'--i': 1} as React.CSSProperties}/>

                        {/* Green line chart */}
                        <path d={pathData} stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animated-line-chart" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

const OnSiteInterventionVisual: React.FC = () => (
    <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>
            <h3 className="font-bold text-gray-800 text-xs sm:text-sm">Atelier Stratégique</h3>
            <div className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">En personne</div>
        </div>
        <div className="flex-grow bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100 text-xs">
            <p className="font-semibold text-gray-800 mb-2 anim-child" style={{'--i': 1} as React.CSSProperties}>Agenda de la session :</p>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 2} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">1</div>
                <p className="text-gray-800">Présentation aux équipes</p>
            </div>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 3} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">2</div>
                <p className="text-gray-800">Revue des processus internes</p>
            </div>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 4} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">3</div>
                <p className="text-gray-800">Revue des performances et analyse des KPIs</p>
            </div>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 5} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">4</div>
                <p className="text-gray-800">Identification des leviers de croissance</p>
            </div>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 6} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">5</div>
                <p className="text-gray-800">Définition de la feuille de route stratégique</p>
            </div>
            <div className="flex items-start gap-3 anim-child" style={{'--i': 7} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">6</div>
                <p className="text-gray-800">Plan d'action et Planification des réunions de travail et points d'étapes</p>
            </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 anim-child" style={{'--i': 8} as React.CSSProperties}>
            <span>BIRD&CO</span>
            <span>CONFIDENTIEL</span>
        </div>
    </div>
);


const tasks = [
  {
    icon: {
      active: "https://images2.imgbox.com/df/52/6W0vqaOM_o.png",
      inactive: "https://images2.imgbox.com/49/76/VCQT8RGf_o.png",
    },
    title: "Reporting & Tableau de Bord",
    description: "des outils clairs et nécessaires pour un pilotage efficace de votre activité",
    visual: <KpiDashboardMockup noAspectRatio disableHover />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/3d/3e/Xmi67EFc_o.png",
      inactive: "https://images2.imgbox.com/78/74/vQLOdRKy_o.png",
    },
    title: "Modélisation",
    description: "Des prévisionnels robustes et détaillés pour soutenir votre stratégie, vos levées de fonds et vos décisions d'investissement.",
    // FIX: Removed invalid `noAspectRatio` prop from `FinancialReportMockup`. The error message was likely pointing to the wrong component but described this exact problem.
    visual: <FinancialReportMockup disableHover />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/b9/14/MF1gdmdv_o.png",
      inactive: "https://images2.imgbox.com/6f/40/aXO1So4w_o.png",
    },
    title: "Due Diligence",
    description: "Des analyses approfondies pour sécuriser vos opérations de M&A.",
    visual: <DueDiligenceVisual />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/79/f8/8XIMmfYK_o.png",
      inactive: "https://images2.imgbox.com/19/00/31wNCP51_o.png",
    },
    title: "Accompagnement Transactionnel",
    description: "Un soutien de bout en bout pour vos opérations de M&A et levées de fonds.",
    visual: <TransactionalSupportVisual />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/c9/3a/aTMjbvJm_o.png",
      inactive: "https://images2.imgbox.com/39/ad/jr5KyoWX_o.png",
    },
    title: "Cash Management",
    description: "Une gestion optimisée de votre trésorerie pour financer votre croissance.",
    visual: <CashGrowthVisual />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/a2/b7/59FiRfCP_o.png",
      inactive: "https://images2.imgbox.com/e3/33/EMa1rUaj_o.png",
    },
    title: "Intervention sur site",
    description: "Un soutien physique et une collaboration directe avec vos équipes.",
    visual: <OnSiteInterventionVisual />,
  },
];

const TaskShowcase: React.FC = () => {
    const [activeTask, setActiveTask] = useState(0);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <Animate variant="pop">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                      </div>
                    </Animate>
                    <Animate variant="pop" delay={100}>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                          De la stratégie <span className="gradient-text">à l'exécution</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={200}>
                        <p className="text-base text-gray-800 mt-4">
                            Quel que soit votre besoin, nous produisons des livrables clairs et actionnables pour piloter votre performance, quel que soit votre besoin.
                        </p>
                    </Animate>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <div className="space-y-4 stagger">
                            {tasks.map((task, index) => (
                                <Animate variant="pop" key={index}>
                                    <button
                                        onClick={() => setActiveTask(index)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                                            activeTask === index
                                                ? 'bg-[#27013D] shadow-xl shadow-violet-200/50 scale-105 hover:scale-[1.07]'
                                                : 'bg-white hover:shadow-xl hover:shadow-violet-100/50 hover:scale-105'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
                                                    activeTask === index ? 'bg-white/20' : 'bg-gray-100'
                                                }`}
                                            >
                                                <img
                                                    src={activeTask === index ? task.icon.active : task.icon.inactive}
                                                    alt={`${task.title} icon`}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={`font-bold text-sm ${activeTask === index ? 'text-white' : 'text-gray-900'}`}>{task.title}</h3>
                                                <p className={`text-xs ${activeTask === index ? 'text-violet-200' : 'text-gray-700'}`}>{task.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                </Animate>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 min-h-[350px] sm:min-h-[450px]">
                        <div className="w-full h-full showcase-active" key={activeTask}>
                           {tasks[activeTask].visual}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskShowcase;