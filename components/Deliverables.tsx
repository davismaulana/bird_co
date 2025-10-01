import React from 'react';
import Animate from './Animate';
import { FinancialReportMockup, KpiDashboardMockup, FieldWorkMockup } from '../constants';

const deliverables = [
  {
    title: "Modélisation Financière & Business Plan",
    description: "Nous construisons des modèles financiers robustes et des business plans détaillés pour soutenir votre stratégie, vos levées de fonds et vos décisions d'investissement.",
    mockup: <FinancialReportMockup />,
  },
  {
    title: "Reporting & Tableau de Bord",
    description: "Des tableaux de bord sur-mesure et des reportings clairs pour un pilotage visuel et intuitif de votre activité.",
    mockup: <KpiDashboardMockup />,
  },
  {
    title: "Intervention sur site",
    description: "Nous nous déplaçons dans vos locaux pour des missions ponctuelles ou récurrentes, offrant un support physique et une collaboration directe avec vos équipes.",
    mockup: <FieldWorkMockup />,
  }
];

const Deliverables: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
              Des livrables <span className="gradient-text">clairs et impactants</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-4 max-w-3xl mx-auto">
              Nous transformons des données complexes en outils de pilotage visuels et intuitifs, conçus pour vous donner une visibilité complète sur votre activité.
            </p>
          </Animate>
        </div>
        <div className="space-y-20">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
            >
              <Animate
                variant={'pop'}
                delay={200}
              >
                {item.mockup}
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