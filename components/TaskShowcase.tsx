import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import { 
    CheckmarkCircleIcon, 
    KpiDashboardMockup, 
    FinancialReportMockup,
    DueDiligenceVisual,
    TransactionalSupportVisual,
    LiquidityChartVisual,
    OnSiteInterventionVisual
} from '../constants';

const TaskShowcase: React.FC = () => {
    const { t } = useTranslation();
    const taskItems = t('pages:taskShowcase.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

    const taskVisuals = [
      { icon: { active: "https://images2.imgbox.com/df/52/6W0vqaOM_o.png", inactive: "https://images2.imgbox.com/49/76/VCQT8RGf_o.png" }, visual: <KpiDashboardMockup noAspectRatio /> },
      { icon: { active: "https://images2.imgbox.com/c9/3a/aTMjbvJm_o.png", inactive: "https://images2.imgbox.com/39/ad/jr5KyoWX_o.png" }, visual: <LiquidityChartVisual /> },
      { icon: { active: "https://images2.imgbox.com/3d/3e/Xmi67EFc_o.png", inactive: "https://images2.imgbox.com/78/74/vQLOdRKy_o.png" }, visual: <FinancialReportMockup noAspectRatio /> },
      { icon: { active: "https://images2.imgbox.com/79/f8/8XIMmfYK_o.png", inactive: "https://images2.imgbox.com/19/00/31wNCP51_o.png" }, visual: <TransactionalSupportVisual /> },
      { icon: { active: "https://images2.imgbox.com/b9/14/MF1gdmdv_o.png", inactive: "https://images2.imgbox.com/6f/40/aXO1So4w_o.png" }, visual: <DueDiligenceVisual /> },
      { icon: { active: "https://images2.imgbox.com/a2/b7/59FiRfCP_o.png", inactive: "https://images2.imgbox.com/e3/33/EMa1rUaj_o.png" }, visual: <OnSiteInterventionVisual /> },
    ];
    const tasks = taskItems.map((item, i) => ({ ...item, ...taskVisuals[i] }));

    const [activeTask, setActiveTask] = useState(0);

    return (
        <section className="bg-gray-50 min-h-screen flex flex-col justify-center py-16">
            <div className="container mx-auto px-2 sm:px-4 lg:px-6">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <Animate variant="pop">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                      </div>
                    </Animate>
                    <Animate variant="pop" delay={100}>
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                          {t('pages:taskShowcase.title')} <span className="gradient-text">{t('pages:taskShowcase.titleHighlight')}</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={200}>
                        <p className="text-lg text-gray-800 mt-4 md:whitespace-nowrap" dangerouslySetInnerHTML={{ __html: t('pages:taskShowcase.subtitle') }} />
                    </Animate>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Buttons */}
                        <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
                            <div className="grid grid-cols-1 gap-2 [grid-auto-rows:1fr]">
                                {tasks.map((task, index) => (
                                    <Animate variant="pop" key={index} className="h-full">
                                        <button
                                            onClick={() => setActiveTask(index)}
                                            className={`w-full h-full text-left p-2 rounded-xl transition-all duration-300 group ${
                                                activeTask === index
                                                    ? 'bg-[#27013D] shadow-xl shadow-violet-200/50 scale-105 hover:scale-[1.07]'
                                                    : 'bg-white hover:shadow-xl hover:shadow-violet-100/50 hover:scale-105'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
                                                        activeTask === index ? 'bg-white/20' : 'bg-gray-100'
                                                    }`}
                                                >
                                                    <img
                                                        src={activeTask === index ? task.icon.active : task.icon.inactive}
                                                        alt={`${task.title} icon`}
                                                        className="w-8 h-8 object-contain"
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
                        <Animate variant="pop" delay={200} className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto">
                            <div className="w-full h-full">
                                <div className="grid h-full">
                                    {tasks.map((task, index) => (
                                        <div
                                            key={index}
                                            className={`col-start-1 row-start-1 transition-opacity duration-500 ease-in-out ${activeTask === index ? 'opacity-100 showcase-active' : 'opacity-0 pointer-events-none'}`}
                                            aria-hidden={activeTask !== index}
                                        >
                                            {task.visual}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskShowcase;