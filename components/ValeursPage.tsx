
import React from 'react';
import Animate from './Animate';
import { HandshakeIcon, CheckCircleIcon, WrenchIcon, PaperPlaneIcon } from '../constants';

const values = [
  {
    icon: <HandshakeIcon />,
    title: 'Engagement',
    description: "Nous sommes à vos côtés, pleinement investis dans la réussite de vos projets. Votre succès est notre priorité absolue, et nous nous engageons à mobiliser toutes nos ressources pour l'atteindre.",
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Excellence',
    description: "Nous visons les plus hauts standards de qualité dans chacune de nos missions. Notre rigueur et notre souci du détail garantissent des livrables irréprochables et des recommandations pertinentes.",
  },
  {
    icon: <WrenchIcon />,
    title: 'Pragmatisme',
    description: "Nous apportons des solutions concrètes, opérationnelles et parfaitement adaptées à votre réalité. Nous privilégions les actions qui ont un impact direct et mesurable sur votre performance.",
  },
  {
    icon: <PaperPlaneIcon />,
    title: 'Confiance',
    description: "Nous construisons des relations durables basées sur la transparence, l'intégrité et une éthique professionnelle sans faille. La confidentialité et la défense de vos intérêts sont au cœur de notre démarche.",
  },
];

const ValeursPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Nos Valeurs
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
                    Le socle de notre engagement et la garantie de notre excellence. Ces principes guident chacune de nos actions et définissent notre relation avec vous.
                </p>
            </Animate>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger">
            {values.map((value, index) => (
              <Animate key={index} variant="pop">
                <div className="bg-white rounded-xl p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1">
                  <div className="mb-5 text-[#27013D]">{React.cloneElement(value.icon, { className: 'w-10 h-10' })}</div>
                  <h3 className="text-2xl font-bold text-[#27013D] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Découvrez comment nos valeurs se traduisent <span className="gradient-text">dans nos actions</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Contactez-nous pour voir comment notre engagement peut servir votre ambition.
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-lg"
                    >
                      Planifier un entretien
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default ValeursPage;
