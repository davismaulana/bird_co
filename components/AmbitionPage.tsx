
import React from 'react';
import Animate from './Animate';
import ValueProposition from './ValueProposition';

const AmbitionPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#27013D] text-white pt-32 pb-16">
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

      <ValueProposition />

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
      <section className="bg-gray-50 py-16">
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
