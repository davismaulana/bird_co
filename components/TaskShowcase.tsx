
import React, { useState } from 'react';
import Animate from './Animate';
// FIX: Replaced incorrect CheckCircleIcon with CheckmarkCircleIcon as it is the correct export from constants.
import { TargetIcon, BarChartIcon, TrendingUpIcon, CheckmarkCircleIcon, BriefcaseIcon } from '../constants';

const PerformanceReportVisual: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <div className="w-full text-left mb-4">
      <h3 className="font-bold text-gray-700 text-sm sm:text-base">Rapport Mensuel - Octobre</h3>
      <p className="text-xs sm:text-sm text-gray-500">Synthèse de la performance financière</p>
    </div>
    <div className="flex-grow grid grid-cols-2 gap-4">
      <div className="bg-gray-50 rounded-lg p-3 flex flex-col justify-end border border-gray-100">
        <p className="text-xs font-semibold text-gray-500 mb-2">Evolution du CA</p>
        <div className="flex items-end space-x-1.5 sm:space-x-2 h-full">
          <div className="w-full h-1/3 bg-[#6D0037]/20 rounded-t-sm"></div>
          <div className="w-full h-2/3 bg-[#6D0037]/20 rounded-t-sm"></div>
          <div className="w-full h-1/2 bg-[#6D0037]/20 rounded-t-sm"></div>
          <div className="w-full h-3/4 bg-[#6D0037] rounded-t-sm"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <p className="text-xs text-gray-500">EBITDA</p>
          <p className="font-bold text-gray-800 text-lg">1.2M€ <span className="text-green-500 text-sm">↑</span></p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <p className="text-xs text-gray-500">Trésorerie</p>
          <p className="font-bold text-gray-800 text-lg">450k€ <span className="text-red-500 text-sm">↓</span></p>
        </div>
      </div>
    </div>
  </div>
);

const FinancialModelVisual: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
        <div className="flex space-x-2 mb-4">
            <div className="px-3 py-1 text-xs font-semibold bg-[#6D0037] text-white rounded-full">P&amp;L</div>
            <div className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">Cash Flow</div>
            <div className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">Bilan</div>
        </div>
        <div className="flex-grow bg-gray-50 rounded-lg p-3 space-y-2 border border-gray-100">
            <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="w-1/2">Ligne</span>
                <span className="w-1/4 text-right">Année 1</span>
                <span className="w-1/4 text-right">Année 2</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-800">
                <span className="w-1/2 font-medium">Revenus</span>
                <span className="w-1/4 text-right">5.2M</span>
                <span className="w-1/4 text-right">7.8M</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="w-1/2 pl-4">COGS</span>
                <span className="w-1/4 text-right">(2.1M)</span>
                <span className="w-1/4 text-right">(3.1M)</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-800 font-medium">
                <span className="w-1/2">Marge Brute</span>
                <span className="w-1/4 text-right">3.1M</span>
                <span className="w-1/4 text-right">4.7M</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="w-1/2 pl-4">OPEX</span>
                <span className="w-1/4 text-right">(1.5M)</span>
                <span className="w-1/4 text-right">(2.0M)</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-800 font-bold border-t border-gray-200 pt-2 mt-2">
                <span className="w-1/2">EBITDA</span>
                <span className="w-1/4 text-right">1.6M</span>
                <span className="w-1/4 text-right">2.7M</span>
            </div>
        </div>
    </div>
);

const DueDiligenceVisual: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <h3 className="font-bold text-gray-700 text-sm sm:text-base mb-4">Checklist Due Diligence VDD</h3>
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
        <p className="text-gray-500 text-sm">Normalisation du BFR</p>
      </div>
       <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
        <CheckmarkCircleIcon className="w-6 h-6 text-gray-300 flex-shrink-0" />
        <p className="text-gray-500 text-sm">Analyse de la dette nette</p>
      </div>
    </div>
  </div>
);

const TransactionalSupportVisual: React.FC = () => (
    <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
      <h3 className="font-bold text-gray-700 text-sm sm:text-base mb-4">Accompagnement Transactionnel</h3>
      <div className="flex-grow space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0"></div>
              <p className="text-gray-800 text-sm font-medium">Phase 1: Préparation (Teaser, IM, VDD)</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60">
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-600 text-sm">Phase 2: Négociation des offres</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 opacity-60">
              <div className="w-3 h-3 rounded-full bg-gray-400 flex-shrink-0"></div>
              <p className="text-gray-600 text-sm">Phase 3: Due Diligence &amp; Closing</p>
          </div>
      </div>
      <div className="mt-4 bg-[#27013D]/5 rounded-lg p-3 border border-[#27013D]/10 text-center">
          <p className="text-sm font-bold text-[#27013D]">Objectif: Maximiser la valeur</p>
      </div>
    </div>
);

const CashFlowVisual: React.FC = () => (
  <div className="w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <h3 className="font-bold text-gray-700 text-sm sm:text-base mb-4">Prévisionnel de Trésorerie - 12 mois</h3>
    <div className="flex-grow flex items-end space-x-1 sm:space-x-2 border-b-2 border-gray-200 pb-2">
      <div className="w-full h-1/2 bg-[#27013D]/20 rounded-t-md"></div>
      <div className="w-full h-2/3 bg-[#27013D]/20 rounded-t-md"></div>
      <div className="w-full h-3/4 bg-[#27013D]/20 rounded-t-md"></div>
      <div className="w-full h-2/5 bg-[#27013D]/20 rounded-t-md"></div>
      <div className="w-full h-1/2 bg-[#27013D]/20 rounded-t-md"></div>
      <div className="w-full h-1/3 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-1/4 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-2/5 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-1/2 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-3/5 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-4/5 bg-[#6D0037] rounded-t-md"></div>
      <div className="w-full h-full bg-[#6D0037] rounded-t-md"></div>
    </div>
  </div>
);

const tasks = [
  {
    icon: BarChartIcon,
    title: "Reporting",
    description: "Des rapports qui transforment vos données brutes en informations stratégiques.",
    visual: <PerformanceReportVisual />,
  },
  {
    icon: TargetIcon,
    title: "Modélisation",
    description: "Des business plans et modèles financiers qui éclairent vos décisions futures.",
    visual: <FinancialModelVisual />,
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
    visual: <CashFlowVisual />,
  },
];

const TaskShowcase: React.FC = () => {
    const [activeTask, setActiveTask] = useState(0);

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Animate variant="pop">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                           <span className="text-black">De la stratégie</span> <span className="gradient-text">à l'exécution</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={150}>
                        <p className="text-lg text-gray-600 mt-4">
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
                                                ? 'bg-white shadow-xl shadow-violet-100/50 scale-105'
                                                : 'bg-white hover:bg-gray-100'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-lg transition-colors duration-300 ${activeTask === index ? 'bg-[#27013D]' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                                                <task.icon className={`w-6 h-6 ${activeTask === index ? 'text-white' : 'text-[#27013D]'}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">{task.title}</h3>
                                                <p className="text-sm text-gray-500">{task.description}</p>
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
