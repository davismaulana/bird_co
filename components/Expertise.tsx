
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
  { icon: <CfoIcon />, label: 'Optimisation BFR' },
  { icon: <DiagnosticIcon />, label: 'Restructuration' },
  { icon: <ExpertiseSearchIcon />, label: 'Due Diligence' },
  { icon: <ExpertiseCompassIcon />, label: 'Pilotage Stratégique' },
  { icon: <HandshakeIcon />, label: 'Fusions & Acquisitions' },
  { icon: <BriefcaseIcon />, label: 'Direction Financière' },
  { icon: <TrendingUpIcon />, label: 'Levée de fonds' },
];

const Expertise: React.FC = () => {
  const allItems: (typeof expertiseItems[number] | { cta: true; label: string })[] = [
    ...expertiseItems.slice(0, 4),
    { cta: true, label: 'CTA' },
    ...expertiseItems.slice(4),
  ];

  return (
    <section className="bg-[#1C1C27] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Animate variant="pop">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-white">Nos domaines </span>
              <span className="gradient-text-expertise">d'expertise</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={150}>
            <p className="text-lg text-gray-300 mt-4">
              Une expertise financière et stratégique complète pour répondre à l'ensemble de vos défis.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/20 max-w-6xl mx-auto">
          {allItems.map((item, index) => {
            const isMiddleCol = index % 3 === 1;
            const borderClass = isMiddleCol ? 'border-x border-white/20' : '';

            if ('icon' in item) {
              return (
                <Animate key={index} variant="pop" className={`${borderClass} p-8 flex flex-col items-center text-center justify-center min-h-[220px] transition-colors hover:bg-white/5`}>
                  {React.cloneElement(item.icon, { className: 'w-16 h-16 text-white' })}
                  <p className="text-white/90 font-medium mt-4 text-lg">{item.label}</p>
                </Animate>
              );
            } else {
              return (
                <Animate key={index} variant="pop" className={borderClass}>
                  <a href="#contact" className="bg-white h-full flex flex-col justify-center items-center text-center p-8 transition-transform hover:scale-105 group">
                    <h3 className="text-xl font-bold text-black">Et bien plus encore...</h3>
                    <p className="mt-2 text-gray-700 flex items-center gap-2 group-hover:text-[#27013D] transition-colors">
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