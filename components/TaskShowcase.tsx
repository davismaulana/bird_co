import React, { useState } from 'react';
import Animate from './Animate';
import { TargetIcon, BarChartIcon, TrendingUpIcon, CheckmarkCircleIcon, BriefcaseIcon, KpiDashboardMockup, FinancialReportMockup, HandshakeIcon } from '../constants';

const DueDiligenceVisual: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-4">Checklist Due Diligence VDD</h3>
    <div className="flex-grow space-y-3">
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
        <p className="text-gray-800 text-sm">Qualité des revenus (MRR, churn...)</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
        <p className="text-gray-800 text-sm">Analyse de la rentabilité (EBITDA, marges)</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <CheckmarkCircleIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
        <p className="text-gray-700 text-sm">Normalisation du BFR</p>
      </div>
       <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <CheckmarkCircleIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
        <p className="text-gray-700 text-sm">Analyse de la dette nette</p>
      </div>
    </div>
  </div>
);

const TransactionalSupportVisual: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
      <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-4">Accompagnement Transactionnel</h3>
      <div className="flex-grow space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
              <p className="text-gray-800 text-sm font-medium">Phase 1: Préparation (Teaser, IM, VDD)</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60">
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-700 text-sm">Phase 2: Négociation des offres</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60">
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-700 text-sm">Phase 3: Due Diligence &amp; Closing</p>
          </div>
      </div>
      <div className="mt-4 bg-[#27013D]/5 rounded-lg p-3 border border-[#27013D]/10 text-center">
          <p className="text-sm font-bold text-[#27013D]">Objectif: Maximiser la valeur</p>
      </div>
    </div>
);

const CashGrowthVisual: React.FC = () => {
    const pathData = "M 0 90 C 7 92 13 97 20 95 C 27 93 33 98 40 100 C 47 102 53 91 60 85 C 67 79 73 89 80 92 C 87 95 93 104 100 110 C 107 116 113 119 120 120 C 127 121 133 93 140 80 C 147 67 153 53 160 50 C 167 47 173 57 180 60 C 187 63 193 51 200 45 C 207 39 213 60 220 70 C 227 80 233 91 240 95 C 247 99 253 105 260 105 C 267 105 273 95 280 90 C 287 85 293 95 300 98";

    return (
        <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">Cash Management</h3>
            </div>
            <div className="relative flex-grow">
                <svg viewBox="0 0 335 170" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Y-axis labels */}
                    <text x="0" y="25" alignmentBaseline="middle" fill="#6b7280" fontSize="8">+50k€</text>
                    <text x="0" y="75" alignmentBaseline="middle" fill="#6b7280" fontSize="8">0</text>
                    <text x="0" y="125" alignmentBaseline="middle" fill="#6b7280" fontSize="8">-50k€</text>
                    
                    <g transform="translate(35, 0)">
                        {/* X-axis labels */}
                        <text x="0" y="165" textAnchor="middle" fill="#6b7280" fontSize="8">T0</text>
                        <text x="100" y="165" textAnchor="middle" fill="#6b7280" fontSize="8">T5</text>
                        <text x="200" y="165" textAnchor="middle" fill="#6b7280" fontSize="8">T10</text>
                        <text x="300" y="165" textAnchor="middle" fill="#6b7280" fontSize="8">T15</text>
                        
                        {/* Dashed reference line for zero */}
                        <line x1="0" y1="75" x2="300" y2="75" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
                        
                        {/* Additional reference lines */}
                        <line x1="0" y1="25" x2="300" y2="25" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" />
                        <line x1="0" y1="125" x2="300" y2="125" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" />

                        {/* Green line chart */}
                        <path d={pathData} stroke="#10B981" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

const OnSiteInterventionVisual: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 text-sm sm:text-base">Atelier Stratégique</h3>
            <div className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full">En personne</div>
        </div>
        <div className="flex-grow bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-100 text-sm">
            <p className="font-semibold text-gray-800 mb-2">Agenda de la session :</p>
            <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">1</div>
                <p className="text-gray-800">Revue des performances et analyse des KPIs</p>
            </div>
            <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">2</div>
                <p className="text-gray-800">Identification des leviers de croissance</p>
            </div>
            <div className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">3</div>
                <p className="text-gray-800">Définition de la feuille de route stratégique</p>
            </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>BIRD&CO</span>
            <span>CONFIDENTIEL</span>
        </div>
    </div>
);


const tasks = [
  {
    icon: BarChartIcon,
    title: "Reporting & Tableau de Bord",
    description: "Des tableaux de bord sur-mesure et des reportings clairs pour un pilotage visuel et intuitif de votre activité.",
    visual: <KpiDashboardMockup noAspectRatio disableHover />,
  },
  {
    icon: TargetIcon,
    title: "Modélisation",
    description: "Construction de modèles financiers et business plans pour vos prévisions.",
    visual: <FinancialReportMockup noAspectRatio disableHover />,
  },
  {
    icon: CheckmarkCircleIcon,
    title: "Due Diligence",
    description: "Des analyses approfondies pour sécuriser vos opérations de M&A.",
    visual: <DueDiligenceVisual />,
  },
  {
    icon: BriefcaseIcon,
    title: "Accompagnement Transactionnel",
    description: "Un soutien de bout en bout pour vos opérations de M&A et levées de fonds.",
    visual: <TransactionalSupportVisual />,
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Management",
    description: "Une gestion optimisée de votre trésorerie pour financer votre croissance.",
    visual: <CashGrowthVisual />,
  },
  {
    icon: HandshakeIcon,
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
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Animate variant="pop">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                           <span className="text-black">De la stratégie</span> <span className="gradient-text">à l'exécution</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={150}>
                        <p className="text-lg text-gray-800 mt-4">
                            Quel que soit votre besoin, nous produisons des livrables clairs et actionnables pour piloter votre performance.
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
                                        className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                                            activeTask === index
                                                ? 'bg-white shadow-xl shadow-violet-100/50 scale-105 hover:scale-[1.07]'
                                                : 'bg-white hover:shadow-xl hover:shadow-violet-100/50 hover:scale-105'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-lg transition-colors duration-300 ${activeTask === index ? 'bg-[#27013D]' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                                                <task.icon className={`w-6 h-6 ${activeTask === index ? 'text-white' : 'text-[#27013D]'}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{task.title}</h3>
                                                <p className="text-sm text-gray-700">{task.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                </Animate>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 min-h-[350px] sm:min-h-[450px]">
                        <div className="w-full h-full animate-fade-in-pop" key={activeTask}>
                           {tasks[activeTask].visual}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskShowcase;