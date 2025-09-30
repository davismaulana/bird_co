import React from 'react';
import Animate from './Animate';
import ValueProposition from './ValueProposition';
import HeroAnimation from './HeroAnimation';
import { CheckmarkCircleIcon } from '../constants';

const dnaItems = [
    {
      text: "<strong>Engagement :</strong> Nous sommes à vos côtés, pleinement investis dans la réussite de vos projets."
    },
    {
      text: "<strong>Excellence :</strong> Nous visons les plus hauts standards de qualité dans chacune de nos missions."
    },
    {
      text: "<strong>Pragmatisme :</strong> Nous apportons des solutions concrètes, opérationnelles et adaptées à votre réalité."
    },
    {
      text: "<strong>Confiance :</strong> Nous construisons des relations durables basées sur la transparence et l'intégrité."
    }
];

const AmbitionPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Nos <span>Piliers</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 text-base text-gray-200 max-w-5xl">
                Notre engagement repose sur quatre piliers fondamentaux qui guident chacune de nos interventions et façonnent notre approche unique.
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-base"
                >
                  Échanger avec un bras droit
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
              <Animate variant="pop">
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                      Les Piliers de <span className="gradient-text">Notre Engagement</span>
                  </h2>
              </Animate>
              <Animate variant="pop" delay={150}>
                  <p className="text-base text-gray-800 leading-relaxed">Ces quatre valeurs fondamentales définissent qui nous sommes, comment nous travaillons, et ce que nous nous engageons à vous apporter.</p>
              </Animate>
          </div>
          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto stagger">
              {dnaItems.map((item, index) => (
              <Animate as="li" key={index} variant="pop" className="flex items-start">
                  <CheckmarkCircleIcon className="w-6 h-6 flex-shrink-0 mr-4 text-green-500 mt-1" />
                  <p className="text-base text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </Animate>
              ))}
          </ul>
        </div>
      </section>

      <ValueProposition />

      {/* Quote/Image Section */}
      <section className="bg-white">
          <div className="max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <Animate variant="pop" className="h-full lg:order-last">
                    <div className="h-[400px] lg:h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                    </div>
                </Animate>
                <div className="lg:order-first">
                    <div className="p-8 sm:p-12 md:p-20 container">
                        <Animate variant="pop">
                            <blockquote className="text-xl md:text-2xl xl:text-3xl font-bold text-[#27013D] leading-snug">
                                "La meilleure façon de prédire l'avenir, c'est de le créer."
                            </blockquote>
                        </Animate>
                        <Animate variant="pop" delay={150}>
                            <p className="mt-4 text-base text-gray-800">— Peter Drucker</p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <p className="mt-8 text-gray-800 leading-relaxed text-sm">
                                Cette philosophie est au cœur de notre démarche. Nous ne nous contentons pas de réagir aux événements ; nous vous donnons les moyens de façonner activement l'avenir de votre entreprise, en transformant l'incertitude en opportunité et la vision en réalité.
                            </p>
                        </Animate>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#27013D] to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
                    Prêt à bâtir sur des <span className="gradient-text-light">fondations solides ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto">
                    Discutons de la manière dont nos piliers peuvent soutenir la croissance durable de votre entreprise.
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#27013D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 text-base"
                    >
                      Échanger avec un bras droit
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default AmbitionPage;