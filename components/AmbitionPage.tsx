
import React from 'react';
import Animate from './Animate';

const pillars = [
  {
    icon: <img src="https://images2.imgbox.com/2f/13/L7k9WDsI_o.png" alt="Anticipation Proactive icon" />,
    title: 'Anticipation Proactive',
    description: "Nous utilisons notre expertise et l'analyse de données pour identifier les opportunités et les risques futurs, vous permettant de garder une longueur d'avance.",
  },
  {
    icon: <img src="https://images2.imgbox.com/e8/f0/9T0x7aLC_o.png" alt="Partenariat de Confiance icon" />,
    title: 'Partenariat de Confiance',
    description: "Plus qu'un consultant, nous sommes un véritable 'bras droit', impliqué à vos côtés pour atteindre vos objectifs les plus ambitieux.",
  },
  {
    icon: <img src="https://images2.imgbox.com/a0/6d/UoY4lF5N_o.png" alt="Clarté Décisionnelle icon" />,
    title: 'Clarté Décisionnelle',
    description: "Nous transformons la complexité en clarté, fournissant des analyses et des outils qui éclairent vos décisions stratégiques.",
  },
  {
    icon: <img src="https://images2.imgbox.com/71/39/QQ5Svc9D_o.png" alt="Performance Durable icon" />,
    title: 'Performance Durable',
    description: "Notre but est de bâtir des fondations solides pour une croissance résiliente et une création de valeur sur le long terme.",
  },
];

const AmbitionPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#27013D] text-white pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    Notre ambition
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-6 text-lg lg:text-xl text-violet-200 max-w-3xl mx-auto">
                    Vous permettre d'anticiper les enjeux financiers et opérationnels futurs et prévenir les éventuelles difficultés.
                </p>
            </Animate>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Animate variant="pop">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
                <span className="text-black">Les Piliers</span> <span className="gradient-text">de Notre Engagement</span>
              </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
              <p className="text-lg text-gray-800 mt-4 max-w-2xl mx-auto">
                Notre ambition repose sur quatre piliers fondamentaux qui guident chacune de nos interventions.
              </p>
            </Animate>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger">
            {pillars.map((pillar, index) => (
              <Animate key={index} variant="pop">
                <div className="bg-white rounded-xl p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1">
                  <div className="mb-5 text-[#27013D]">{React.cloneElement(pillar.icon, { className: 'w-10 h-10 object-contain' })}</div>
                  <h3 className="text-2xl font-bold text-[#27013D] mb-3">{pillar.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{pillar.description}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Image Section */}
      <section className="bg-white">
          <div className="max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <Animate variant="pop" className="h-full lg:order-last">
                    <div className="h-[400px] lg:h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                    </div>
                </Animate>
                <div className="lg:order-first">
                    <div className="p-8 sm:p-12 md:p-20 container">
                        <Animate variant="pop">
                            <blockquote className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#27013D] leading-snug">
                                "La meilleure façon de prédire l'avenir, c'est de le créer."
                            </blockquote>
                        </Animate>
                        <Animate variant="pop" delay={150}>
                            <p className="mt-4 text-lg text-gray-800">— Peter Drucker</p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <p className="mt-8 text-gray-800 leading-relaxed">
                                Cette philosophie est au cœur de notre démarche. Nous ne nous contentons pas de réagir aux événements ; nous vous donnons les moyens de façonner activement l'avenir de votre entreprise, en transformant l'incertitude en opportunité et la vision en réalité.
                            </p>
                        </Animate>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Prêt à réaliser <span className="gradient-text">votre ambition ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
                    Discutons de la manière dont notre expertise peut se mettre au service de votre succès.
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
                      Prenons rendez-vous
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default AmbitionPage;
