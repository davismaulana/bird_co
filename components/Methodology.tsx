
import React from 'react';
import Animate from './Animate';

const methodologySteps = [
  {
    number: '01',
    title: 'Diagnostic',
    points: [
      'Analyse de l’existant',
      'Identification des besoins',
    ],
  },
  {
    number: '02',
    title: 'Conception',
    points: [
      'Modélisation sur-mesure',
      'Validation avec vos équipes',
    ],
  },
  {
    number: '03',
    title: 'Implémentation',
    points: [
      'Déploiement progressif',
      'Formation des utilisateurs',
    ],
  },
  {
    number: '04',
    title: 'Suivi',
    points: [
      'Accompagnement continu',
      'Optimisation des outils',
    ],
  },
];

const Methodology: React.FC = () => {
  return (
    <section id="notre-approche" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Animate variant="pop">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#27013D]">
              Notre approche méthodologique
            </h2>
          </Animate>
          <Animate variant="pop" delay={150}>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Une démarche structurée pour garantir le succès de vos projets.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {methodologySteps.map((step, index) => (
            <div key={index}>
              <Animate variant="pop" delay={300 + index * 200} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="text-5xl sm:text-6xl font-black text-gray-100">{step.number}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#27013D] -ml-3">{step.title}</h3>
                </div>
              </Animate>
              <div className="mt-4 sm:pl-1 space-y-2">
                {step.points.map((point, pIndex) => (
                    <Animate key={pIndex} variant="pop" delay={300 + index * 200 + (pIndex + 1) * 100}>
                        <p className="text-gray-600 text-base text-center sm:text-left">{point}</p>
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