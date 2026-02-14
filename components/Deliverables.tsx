
import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import { FinancialReportMockup, KpiDashboardMockup, FieldWorkMockup } from '../constants';

const Deliverables: React.FC = () => {
  const { t } = useTranslation();
  const items = t('pages:deliverables.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  const mockups = [<FinancialReportMockup />, <KpiDashboardMockup />, <FieldWorkMockup />];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
              {t('pages:deliverables.title')} <span className="gradient-text">{t('pages:deliverables.titleHighlight')}</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-4 max-w-3xl mx-auto">
              {t('pages:deliverables.subtitle')}
            </p>
          </Animate>
        </div>
        <div className="space-y-20">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
            >
              <Animate
                variant={'pop'}
                delay={200}
              >
                {mockups[index]}
              </Animate>
              <Animate variant={'pop'} delay={300}>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[#27013D] mb-3">{item.title}</h3>
                  <p className="text-gray-800 leading-relaxed text-sm">{item.description}</p>
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
