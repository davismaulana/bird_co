import React from 'react';
import Animate from './Animate';
import {
  ArrowRightIcon,
} from '../constants';

const expertiseItems = [
  { icon: <img src="https://images2.imgbox.com/df/52/6W0vqaOM_o.png" alt="Reporting & Tableau de bord icon" />, label: 'Reporting & Tableau\u00a0de\u00a0bord' },
  { icon: <img src="https://images2.imgbox.com/c9/3a/aTMjbvJm_o.png" alt="Gestion de la trésorerie icon" />, label: 'Gestion de la\u00a0trésorerie' },
  { icon: <img src="https://images2.imgbox.com/3d/3e/Xmi67EFc_o.png" alt="Modélisation Financière icon" />, label: 'Modélisation Financière' },
  { icon: <img src="https://images2.imgbox.com/1c/0d/cqWjAv3g_o.png" alt="Gestion de projets icon" />, label: 'Gestion\u00a0de\u00a0projets' },
  { icon: <img src="https://images2.imgbox.com/be/67/EKki9YYj_o.png" alt="Restructuration icon" />, label: 'Restructuration' },
  { icon: <img src="https://images2.imgbox.com/c5/04/90xx8pVB_o.png" alt="Fusions & Acquisitions icon" />, label: 'Fusions & Acquisitions' },
  { icon: <img src="https://images2.imgbox.com/79/f8/8XIMmfYK_o.png" alt="Levée de fonds icon" />, label: 'Levée de fonds' },
  { icon: <img src="https://images2.imgbox.com/b9/14/MF1gdmdv_o.png" alt="Due Diligence icon" />, label: 'Due Diligence' },
];

const Expertise: React.FC = () => {
  const allItems: (typeof expertiseItems[number] | { cta: true; label: string })[] = [
    ...expertiseItems.slice(0, 4),
    { cta: true, label: 'CTA' },
    ...expertiseItems.slice(4),
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Nos domaines <span className="gradient-text">d'expertise</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-4">
              Une expertise financière et stratégique complète <span className="gradient-text font-bold">pour répondre à l'ensemble de vos défis.</span>
            </p>
          </Animate>
        </div>
        <div className="bg-[#27013D] rounded-2xl grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto overflow-hidden">
          {allItems.map((item, index) => {
            const isLastItem = index === allItems.length - 1;
            const isLastRowOnDesktop = index >= 6;
            const isLastColOnDesktop = (index + 1) % 3 === 0;
            const borderStyle = 'border-gray-500/20';

            const borderClasses = [];
            if (!isLastItem) borderClasses.push('border-b');
            if (!isLastRowOnDesktop) borderClasses.push('md:border-b');
            else borderClasses.push('md:border-b-0');
            if (!isLastColOnDesktop) borderClasses.push('md:border-r');
            if (borderClasses.length > 0) borderClasses.push(borderStyle);

            if ('icon' in item) {
              return (
                <Animate key={index} variant="pop" className={`${borderClasses.join(' ')} px-5 py-12 flex flex-col items-center text-center justify-center transition-colors duration-300 hover:bg-white/5`}>
                  {React.cloneElement(item.icon, { className: 'w-10 h-10 object-contain' })}
                  <p className="text-gray-100 font-medium mt-2 text-sm">{item.label}</p>
                </Animate>
              );
            } else {
              // CTA
              return (
                <Animate key={index} variant="pop" className={`${borderClasses.join(' ')} h-full`}>
                  <a href="#contact" className="bg-[#3A224E] h-full flex flex-col justify-center items-center text-center px-5 py-12 transition-all duration-300 hover:bg-[#4f3066] group">
                    <h3 className="text-sm font-bold text-white">Et bien plus encore...</h3>
                    <p className="mt-2 text-violet-200 flex items-center gap-2 group-hover:text-white transition-colors text-xs">
                      Discutons de votre projet
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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