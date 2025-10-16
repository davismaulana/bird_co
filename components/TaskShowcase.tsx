import React, { useState } from 'react';
import Animate from './Animate';
import { CheckmarkCircleIcon, KpiDashboardMockup, FinancialReportMockup } from '../constants';

const DueDiligenceVisual: React.FC = () => (
  <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
    <div className="w-full text-left mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>
      <h3 className="font-bold text-gray-900 text-sm">Due Diligence</h3>
    </div>
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
      <div className="w-full text-left mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>
        <h3 className="font-bold text-gray-900 text-sm">Accompagnement Transactionnel</h3>
      </div>
      <div className="flex-grow space-y-4">
        <div className="flex items-start gap-3 anim-child" style={{'--i': 1} as React.CSSProperties}>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</div>
            <div>
                <h4 className="font-semibold text-gray-800 text-xs">Préparation Stratégique</h4>
                <p className="text-gray-600 text-[10px] leading-tight mt-1">Valorisation, Business Plan, VDD, Teaser, IM</p>
            </div>
        </div>
        <div className="flex items-start gap-3 anim-child" style={{'--i': 2} as React.CSSProperties}>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</div>
            <div>
                <h4 className="font-semibold text-gray-800 text-xs">Exécution & Négociation</h4>
                <p className="text-gray-600 text-[10px] leading-tight mt-1">Data Room, Management Présentations, Négociation des offres</p>
            </div>
        </div>
        <div className="flex items-start gap-3 anim-child" style={{'--i': 3} as React.CSSProperties}>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">3</div>
            <div>
                <h4 className="font-semibold text-gray-800 text-xs">Due Diligence & Closing</h4>
                <p className="text-gray-600 text-[10px] leading-tight mt-1">Audit d'acquisition, Signature (SPA), Levée des conditions suspensives</p>
            </div>
        </div>
      </div>
    </div>
);

const LiquidityChartVisual: React.FC = () => {
    // Data points based on the image (approximations) in k€
    const data = [
        { x: 0, y: 650 }, { x: 20, y: 600 }, { x: 40, y: 420 },
        { x: 60, y: 320 }, { x: 80, y: 280 }, { x: 100, y: 120 },
    ];

    const svgWidth = 300;
    const svgHeight = 170;
    const padding = { top: 10, right: 10, bottom: 15, left: 35 };
    const chartWidth = svgWidth - padding.left - padding.right;
    const chartHeight = svgHeight - padding.top - padding.bottom;
    const yMax = 700;

    const scaleX = (x: number) => (x / 100) * chartWidth + padding.left;
    const scaleY = (y: number) => svgHeight - padding.bottom - (y / yMax) * chartHeight;
    
    const linePathData = 
        `M ${scaleX(data[0].x)} ${scaleY(data[0].y)}` +
        ` C ${scaleX(10)} ${scaleY(630)}, ${scaleX(15)} ${scaleY(620)}, ${scaleX(data[1].x)} ${scaleY(data[1].y)}` +
        ` C ${scaleX(28)} ${scaleY(550)}, ${scaleX(35)} ${scaleY(450)}, ${scaleX(data[2].x)} ${scaleY(data[2].y)}` +
        ` C ${scaleX(48)} ${scaleY(380)}, ${scaleX(55)} ${scaleY(340)}, ${scaleX(data[3].x)} ${scaleY(data[3].y)}` +
        ` C ${scaleX(65)} ${scaleY(300)}, ${scaleX(75)} ${scaleY(290)}, ${scaleX(data[4].x)} ${scaleY(data[4].y)}` +
        ` C ${scaleX(85)} ${scaleY(270)}, ${scaleX(90)} ${scaleY(200)}, ${scaleX(data[5].x)} ${scaleY(data[5].y)}`;
        
    const areaPathData = linePathData + ` L ${scaleX(100)} ${svgHeight - padding.bottom} L ${scaleX(0)} ${svgHeight - padding.bottom} Z`;

    const yAxisLabels = [700, 600, 500, 400, 300, 200, 100, 0];
    const xAxisLabels = [
        { value: 0, label: 'Janv.' },
        { value: 25, label: 'Avr.' },
        { value: 50, label: 'Juil.' },
        { value: 75, label: 'Oct.' },
        { value: 100, label: 'Déc.' },
    ];

    return (
        <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300 text-gray-900">
            <div className="w-full text-left mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>
                <h3 className="font-bold text-gray-900 text-sm">Liquidités</h3>
            </div>
            <div className="anim-child" style={{'--i': 1} as React.CSSProperties}>
                <p className="text-xl font-bold text-[#27013D]">58 K€</p>
            </div>
            <div className="flex-grow mt-0.5 relative">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="liquidityAreaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#27013D" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#27013D" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                    
                    <g className="anim-child" style={{'--i': 2} as React.CSSProperties}>
                        {/* Y-axis labels */}
                        {yAxisLabels.map((val, i) => (
                            <text
                                key={i}
                                x={padding.left - 8}
                                y={scaleY(val)}
                                textAnchor="end"
                                alignmentBaseline="middle"
                                fill="black"
                                fontSize="5"
                                style={{ opacity: 0.7 }}
                            >
                                {val === 0 ? '0k' : `${val}k`}
                            </text>
                        ))}
                    </g>
                    
                    {/* X-axis labels */}
                    <g className="anim-child" style={{'--i': 2} as React.CSSProperties}>
                        {xAxisLabels.map((item, i) => (
                           <text
                                key={i}
                                x={scaleX(item.value)}
                                y={svgHeight - padding.bottom + 10}
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fill="black"
                                fontSize="5"
                                style={{ opacity: 0.7 }}
                            >
                                {item.label}
                            </text>
                        ))}
                    </g>

                    {/* Area fill path. */}
                    <path
                        d={areaPathData}
                        fill="url(#liquidityAreaGradient)"
                        className="anim-child"
                        style={{'--i': 3, stroke: 'none'} as React.CSSProperties}
                    />

                    {/* Line path */}
                    <path
                        d={linePathData}
                        stroke="#27013D"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animated-line-chart"
                    />

                    {/* Data point circles */}
                    {data.map((point, i) => (
                        <circle
                            key={i}
                            cx={scaleX(point.x)}
                            cy={scaleY(point.y)}
                            r="1.25"
                            fill="white"
                            stroke="#27013D"
                            strokeWidth="0.75"
                            className="anim-child"
                            style={{'--i': 4 + i} as React.CSSProperties}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
};

const OnSiteInterventionVisual: React.FC = () => (
    <div className="animated-mockup w-full h-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100 flex flex-col transform group-hover:scale-105 transition-transform duration-300">
        <div className="w-full text-left mb-4 anim-child" style={{'--i': 0} as React.CSSProperties}>
            <h3 className="font-bold text-gray-900 text-sm">Intervention sur site</h3>
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
                <p className="text-gray-800">Définition du plan d'action</p>
            </div>
             <div className="flex items-start gap-3 anim-child" style={{'--i': 8} as React.CSSProperties}>
                <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-[#27013D] to-[#6D0037] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">7</div>
                <p className="text-gray-800">Planification des réunions de travail et points d'étape</p>
            </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500 anim-child" style={{'--i': 9} as React.CSSProperties}>
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
    description: "Des outils clairs et nécessaires pour un pilotage efficace de votre activité",
    visual: <KpiDashboardMockup noAspectRatio disableHover />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/c9/3a/aTMjbvJm_o.png",
      inactive: "https://images2.imgbox.com/39/ad/jr5KyoWX_o.png",
    },
    title: "Gestion de la trésorerie",
    description: "Une gestion optimisée de votre trésorerie pour financer votre croissance.",
    visual: <LiquidityChartVisual />,
  },
  {
    icon: {
      active: "https://images2.imgbox.com/3d/3e/Xmi67EFc_o.png",
      inactive: "https://images2.imgbox.com/78/74/vQLOdRKy_o.png",
    },
    title: "Modélisation",
    description: "Des prévisionnels robustes et détaillés pour soutenir votre stratégie, vos levées de fonds et vos décisions d'investissement.",
    visual: <FinancialReportMockup disableHover noAspectRatio />,
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
      active: "https://images2.imgbox.com/b9/14/MF1gdmdv_o.png",
      inactive: "https://images2.imgbox.com/6f/40/aXO1So4w_o.png",
    },
    title: "Due Diligence",
    description: "Des analyses approfondies pour sécuriser vos opérations de M&A.",
    visual: <DueDiligenceVisual />,
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
        <section className="bg-gray-50 flex flex-col justify-center py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left: Buttons */}
                    <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:col-span-2">
                        <div className="grid grid-cols-1 gap-3">
                            {tasks.map((task, index) => (
                                <Animate variant="pop" key={index}>
                                    <button
                                        onClick={() => setActiveTask(index)}
                                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 group ${
                                            activeTask === index
                                                ? 'bg-[#27013D] shadow-xl shadow-violet-200/50 scale-105 hover:scale-[1.07]'
                                                : 'bg-white hover:shadow-xl hover:shadow-violet-100/50 hover:scale-105'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
                                                    activeTask === index ? 'bg-white/20' : 'bg-gray-100'
                                                }`}
                                            >
                                                <img
                                                    src={activeTask === index ? task.icon.active : task.icon.inactive}
                                                    alt={`${task.title} icon`}
                                                    className="w-9 h-9 object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`font-semibold text-sm leading-tight ${activeTask === index ? 'text-white' : 'text-gray-900'}`}>{task.title}</h3>
                                                <p className={`text-xs leading-snug mt-1 ${activeTask === index ? 'text-violet-200' : 'text-gray-700'}`}>{task.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                </Animate>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right: Visual */}
                    <Animate variant="pop" delay={200} className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:col-span-3">
                        <div className="w-full h-full showcase-active" key={activeTask}>
                           {tasks[activeTask].visual}
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default TaskShowcase;