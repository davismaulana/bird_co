
import React, { useState } from 'react';
import Animate from './Animate';
import { TargetIcon, BarChartIcon, TrendingUpIcon, CheckmarkCircleIcon, BriefcaseIcon, KpiDashboardMockup, FinancialReportMockup } from '../constants';

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
    // This path now clearly dips below the 'zero' line (y=75 in SVG coords) to represent negative cash flow.
    const pathData = "M0,90 L20,95 L40,100 L60,85 L80,92 L100,110 L120,120 L140,80 L160,50 L180,60 L200,45 L220,70 L240,95 L260,105 L280,90 L300,98";

    return (
        <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">Cash Management</h3>
            </div>
            <div className="relative flex-grow">
                <svg viewBox="0 0 335 170" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    {/* Y-axis labels */}
                    <text x="0" y="25" alignmentBaseline="middle" fill="#374151" fontSize="12" fontWeight="semibold">+50k€</text>
                    <text x="0" y="75" alignmentBaseline="middle" fill="#374151" fontSize="12" fontWeight="semibold">0</text>
                    <text x="0" y="125" alignmentBaseline="middle" fill="#374151" fontSize="12" fontWeight="semibold">-50k€</text>
                    
                    <g transform="translate(35, 0)">
                        {/* X-axis labels */}
                        <text x="0" y="165" textAnchor="middle" fill="#374151" fontSize="12">T0</text>
                        <text x="100" y="165" textAnchor="middle" fill="#374151" fontSize="12">T5</text>
                        <text x="200" y="165" textAnchor="middle" fill="#374151" fontSize="12">T10</text>
                        <text x="300" y="165" textAnchor="middle" fill="#374151" fontSize="12">T15</text>
                        
                        {/* Dashed reference line for zero */}
                        <line x1="0" y1="75" x2="300" y2="75" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" />
                        
                        {/* Additional reference lines */}
                        <line x1="0" y1="25" x2="300" y2="25" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" />
                        <line x1="0" y1="125" x2="300" y2="125" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 4" />

                        {/* Green line chart */}
                        <path d={pathData} stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>
        </div>
    );
};


const tasks = [
  {
    icon: BarChartIcon,
    title: "Reporting",
    description: "Suivi des KPIs clés et reporting mensuel.",
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
