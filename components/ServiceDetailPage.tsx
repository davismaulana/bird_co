
import React from 'react';
import { services, serviceDetails, GradientCheckIcon, FinancialReportMockup } from '../constants';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const ServiceDetailPage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const details = serviceDetails[serviceId];
  const service = services.find(s => s.slug === serviceId);

  if (!details || !service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 text-center">
        <Animate variant="pop">
            <h1 className="text-4xl font-bold text-gray-900">Service Bientôt Disponible</h1>
            <p className="mt-4 text-gray-800">Cette page est en cours de construction.</p>
            <a href="/" className="mt-8 inline-block bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors">
            Retour à l'accueil
            </a>
        </Animate>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl text-left">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                <span>{details.title}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className={`mt-6 text-gray-200 max-w-3xl ${serviceId === 'pilotage-planification' || serviceId === 'cfo-part-time' ? 'text-base' : 'text-base md:text-lg'}`}>
                {details.subtitle}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-10 flex justify-start">
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

      {/* Diagnostic Section */}
      {details.diagnostic && (
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <Animate variant="pop">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                  </div>
                </Animate>
                <Animate variant="pop" delay={100}>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                    {details.diagnostic.title}
                  </h2>
                </Animate>
                <Animate variant="pop" delay={200}>
                  <p className="text-lg text-gray-800 mt-4">
                    {details.diagnostic.description}
                  </p>
                </Animate>
            </div>
            {details.diagnostic.content && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
                  <Animate variant={'pop'} delay={200} className="aspect-[4/3] lg:aspect-auto h-full">
                      {details.diagnostic.content.visual}
                  </Animate>
                  <Animate variant={'pop'} delay={300}>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-[#27013D] mb-4">{details.diagnostic.content.title}</h3>
                        <div className="text-gray-800 leading-relaxed">
                          {details.diagnostic.content.description}
                        </div>
                      </div>
                  </Animate>
              </div>
            )}
          </div>
        </section>
      )}
      
      {/* Ambition Section */}
      {details.ambition && (
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Animate variant="pop">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                </div>
              </Animate>
              <Animate variant="pop" delay={100}>
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                      <span className="gradient-text">{details.ambition.title}</span>
                  </h2>
              </Animate>
              <Animate variant="pop" delay={200}>
                  <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
                      {details.ambition.description}
                  </p>
              </Animate>
          </div>
        </section>
      )}

      {/* Content Section */}
      <main id="content" className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
                <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-32">
                        <Animate variant="pop" delay={100}>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight gradient-text">{details.mainContent.title}</h2>
                        </Animate>
                        {details.mainContent.description && (
                            <Animate variant="pop" delay={200}>
                                <p className="mt-4 text-gray-800 leading-relaxed">{details.mainContent.description}</p>
                            </Animate>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="space-y-12">
                        {details.mainContent.categories.map((category: any, index: number) => (
                             <div key={index}>
                                <Animate variant="pop" delay={200 + index * 100}>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-[#27013D] border-b-2 border-[#6D0037]/20 pb-3 mb-6">{category.title}</h3>
                                </Animate>
                                <ul className="space-y-4 stagger text-lg">
                                    {category.list.map((item: string, itemIndex: number) => (
                                        <Animate as="li" key={itemIndex} variant="pop" className="flex items-center">
                                            <GradientCheckIcon className="w-6 h-6 flex-shrink-0 mr-3" />
                                            <span className="text-gray-800">{item}</span>
                                        </Animate>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      {/* Final CTA section */}
      <section className="py-16 bg-gradient-to-br from-[#27013D] to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
              </div>
            </Animate>
            <Animate variant="pop" delay={100}>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                    <span className="gradient-text-light">Prêt à prendre le contrôle ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={200}>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Contactez-nous pour discuter de la manière dont nous pouvons construire ensemble les outils de votre succès.
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#27013D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 text-lg"
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

export default ServiceDetailPage;