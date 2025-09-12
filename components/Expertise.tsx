import React from 'react';
import Animate from './Animate';
import {
  BarChartIcon,
  CfoIcon,
  DiagnosticIcon,
  HandshakeIcon,
  BriefcaseIcon,
  TrendingUpIcon,
  ExpertiseSearchIcon,
  ExpertiseCompassIcon,
  ArrowRightIcon,
} from '../constants';

const expertiseItems = [
  { icon: <BarChartIcon />, label: 'Modélisation Financière' },
  { icon: <CfoIcon />, label: 'Gestion de la\u00a0trésorerie' },
  { icon: <DiagnosticIcon />, label: 'Restructuration' },
  { icon: <ExpertiseSearchIcon />, label: 'Due Diligence' },
  { icon: <ExpertiseCompassIcon />, label: 'Reporting & Tableau\u00a0de\u00a0bord' },
  { icon: <HandshakeIcon />, label: 'Fusions & Acquisitions' },
  { icon: <BriefcaseIcon />, label: 'Gestion\u00a0de\u00a0projets' },
  { icon: <TrendingUpIcon />, label: 'Levée de fonds' },
];

const Expertise: React.FC = () => {
  const allItems: (typeof expertiseItems[number] | { cta: true; label: string })[] = [
    ...expertiseItems.slice(0, 4),
    { cta: true, label: 'CTA' },
    ...expertiseItems.slice(4),
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Animate variant="pop">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-black">Nos domaines </span>
              <span className="gradient-text">d'expertise</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={150}>
            <p className="text-lg text-gray-800 mt-4">
              Une expertise financière et stratégique complète pour répondre à l'ensemble de vos défis.
            </p>
          </Animate>
        </div>
        <div className="bg-[#27013D] rounded-2xl grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto overflow-hidden border border-white/10">
          {allItems.map((item, index) => {
            const isMiddleCol = index % 3 === 1;
            const borderClass = isMiddleCol ? 'border-x border-white/10' : '';

            if ('icon' in item) {
              return (
                <Animate key={index} variant="pop" className={`${borderClass} p-8 flex flex-col items-center text-center justify-center min-h-[220px] transition-colors duration-300 hover:bg-white/5`}>
                  {React.cloneElement(item.icon, { className: 'w-16 h-16 text-white' })}
                  <p className="text-gray-100 font-medium mt-4 text-lg">{item.label}</p>
                </Animate>
              );
            } else {
              return (
                <Animate key={index} variant="pop" className={borderClass}>
                  <a href="#contact" className="bg-[#3A224E] h-full flex flex-col justify-center items-center text-center p-8 transition-all duration-300 hover:bg-[#4f3066] group">
                    <h3 className="text-xl font-bold text-white">Et bien plus encore...</h3>
                    <p className="mt-2 text-violet-200 flex items-center gap-2 group-hover:text-white transition-colors">
                      Discutons de votre projet
                      <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </p>
                  </a>
                </Animate>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;