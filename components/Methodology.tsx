
import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';

const stepNumbers = ['01', '02', '03', '04'];

const Methodology: React.FC = () => {
  const { t } = useTranslation();
  const steps = t('pages:methodology.steps', { returnObjects: true }) as Array<{ title: string; points: string[] }>;
  return (
    <section id="notre-approche" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Animate variant="pop">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#27013D]">
              {t('pages:methodology.title')}
            </h2>
          </Animate>
          <Animate variant="pop" delay={150}>
            <p className="text-sm sm:text-base text-gray-800 mt-4 max-w-2xl mx-auto">
              {t('pages:methodology.subtitle')}
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <div key={index}>
              <Animate variant="pop" delay={300 + index * 200} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="text-4xl sm:text-5xl font-black text-gray-100">{stepNumbers[index]}</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#27013D] -ml-3">{step.title}</h3>
                </div>
              </Animate>
              <div className="mt-4 sm:pl-1 space-y-2">
                {step.points.map((point, pIndex) => (
                    <Animate key={pIndex} variant="pop" delay={300 + index * 200 + (pIndex + 1) * 100}>
                        <p className="text-gray-800 text-sm text-center sm:text-left">{point}</p>
                    </Animate>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;