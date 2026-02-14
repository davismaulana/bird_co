import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import {
  ArrowRightIcon,
} from '../constants';

const expertiseIcons = [
  <img src="https://images2.imgbox.com/df/52/6W0vqaOM_o.png" alt="Reporting icon" />,
  <img src="https://images2.imgbox.com/c9/3a/aTMjbvJm_o.png" alt="Treasury icon" />,
  <img src="https://images2.imgbox.com/3d/3e/Xmi67EFc_o.png" alt="Modelling icon" />,
  <img src="https://images2.imgbox.com/1c/0d/cqWjAv3g_o.png" alt="Project management icon" />,
  <img src="https://images2.imgbox.com/be/67/EKki9YYj_o.png" alt="Restructuring icon" />,
  <img src="https://images2.imgbox.com/c5/04/90xx8pVB_o.png" alt="M&A icon" />,
  <img src="https://images2.imgbox.com/79/f8/8XIMmfYK_o.png" alt="Fundraising icon" />,
  <img src="https://images2.imgbox.com/b9/14/MF1gdmdv_o.png" alt="Due Diligence icon" />,
];

const Expertise: React.FC = () => {
  const { t } = useTranslation();
  const labels = t('pages:expertise.items', { returnObjects: true }) as string[];
  const expertiseItems = expertiseIcons.map((icon, i) => ({ icon, label: labels[i] }));
  const allItems: (typeof expertiseItems[number] | { cta: true; label: string })[] = [
    ...expertiseItems.slice(0, 4),
    { cta: true, label: 'CTA' },
    ...expertiseItems.slice(4),
  ];

  return (
    <section className="bg-white flex flex-col justify-center py-16 overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {t('pages:expertise.title')} <span className="gradient-text">{t('pages:expertise.titleHighlight')}</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 md:whitespace-nowrap">
              {t('pages:expertise.subtitle')} <span className="gradient-text font-bold">{t('pages:expertise.subtitleHighlight')}</span>
            </p>
          </Animate>
        </div>
        <div className="bg-gray-500/20 rounded-2xl grid grid-cols-2 md:grid-cols-3 gap-px max-w-6xl mx-auto overflow-hidden">
          {allItems.map((item, index) => {
            if ('icon' in item) {
              return (
                <Animate key={index} variant="pop" className="bg-[#27013D] px-5 py-12 sm:py-14 md:py-16 flex flex-col items-center text-center justify-center transition-colors duration-300 hover:bg-[#351a4d]">
                  {React.cloneElement(item.icon, { className: 'w-12 h-12 object-contain' })}
                  <p className="text-gray-100 font-medium mt-4 text-lg">{item.label}</p>
                </Animate>
              );
            } else {
              // CTA
              return (
                <Animate key={index} variant="pop" className="h-full">
                  <a
                    href="https://calendly.com/contact-birdandco/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3A224E] h-full flex flex-col justify-center items-center text-center px-5 py-12 sm:py-14 md:py-16 transition-all duration-300 hover:bg-[#4f3066] group"
                  >
                    <h3 className="text-base font-bold text-white">{t('pages:expertise.ctaTitle')}</h3>
                     <p className="mt-2 text-violet-200 flex items-center gap-2 group-hover:text-white transition-colors text-sm">
                       {t('pages:expertise.ctaCta')}
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