
import React from 'react';
import { services, serviceDetails } from '../constants';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const ServiceDetailPage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const details = serviceDetails[serviceId];
  const service = services.find(s => s.slug === serviceId);

  if (!details || !service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 text-center">
        <Animate variant="pop">
            <h1 className="text-3xl font-bold text-gray-900">Service Bientôt Disponible</h1>
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
      <section className="relative bg-gradient-to-br from-[#27013D] to-gray-900 text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                <span>{details.title}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className={`mt-4 text-gray-200 max-w-5xl ${serviceId === 'pilotage-planification' || serviceId === 'cfo-part-time' ? 'text-sm' : 'text-sm md:text-base'}`}>
                {details.subtitle}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm"
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
            <div className="text-center mb-16 max-w-5xl mx-auto">
                <Animate variant="pop">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                  </div>
                </Animate>
                <Animate variant="pop" delay={100}>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                    {details.diagnostic.title}
                  </h2>
                </Animate>
                <Animate variant="pop" delay={200}>
                  <p className="text-sm text-gray-800 mt-4">
                    {details.diagnostic.description}
                  </p>
                </Animate>
            </div>
            {details.diagnostic.content && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-baseline max-w-7xl mx-auto">
                  <Animate variant={'pop'} delay={300} className="lg:col-span-3 aspect-[4/3] lg:aspect-auto">
                      {details.diagnostic.content.visual}
                  </Animate>
                  <Animate variant={'pop'} delay={200} className="lg:col-span-2">
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-[#27013D] mb-4">{details.diagnostic.content.title}</h3>
                        <div className="text-gray-800 leading-relaxed text-xs">
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
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                      Notre <span className="gradient-text">ambition</span>
                  </h2>
              </Animate>
              <Animate variant="pop" delay={200}>
                  <p className="mt-4 text-sm text-gray-800 max-w-2xl mx-auto">
                      {details.ambition.description}
                  </p>
              </Animate>
          </div>
        </section>
      )}

      {/* Content Section */}
      <main id="content" className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <Animate variant="pop">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                  </div>
                </Animate>
                <Animate variant="pop" delay={100}>
                  <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                    <span className="gradient-text">{details.mainContent.title}</span>
                  </h2>
                </Animate>
                {details.mainContent.description && (
                    <Animate variant="pop" delay={200}>
                        <p className="text-sm text-gray-800 mt-4">
                            {details.mainContent.description}
                        </p>
                    </Animate>
                )}
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="space-y-12">
                    {details.mainContent.categories.map((category: any, index: number) => (
                         <div key={index}>
                            <Animate variant="pop" delay={300 + index * 50}>
                                <h3 className="text-lg font-semibold text-[#27013D] mb-6">{category.title}</h3>
                            </Animate>
                            
                            <div className="flex flex-wrap gap-3">
                                {category.list.map((tag: string, tagIndex: number) => (
                                    <Animate
                                        key={tagIndex}
                                        variant="pop"
                                        delay={400 + index * 50 + tagIndex * 20}
                                    >
                                      <div className="bg-violet-50 text-[#27013D] px-4 py-2 rounded-xl text-xs font-medium border border-violet-100">
                                          {tag}
                                      </div>
                                    </Animate>
                                ))}
                            </div>
                        </div>
                    ))}
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
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-white">
                    Vous avez des <span className="gradient-text-light">questions ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={200}>
                <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
                    Laissez-nous un message
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#27013D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 text-sm"
                    >
                      On&nbsp;vous&nbsp;écoute
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
