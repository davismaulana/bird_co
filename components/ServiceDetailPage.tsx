
import React, { useState } from 'react';
import { services, serviceDetails, GradientCheckIcon, FinancialReportMockup } from '../constants';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const ServiceDetailPage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const details = serviceDetails[serviceId];
  const service = services.find(s => s.slug === serviceId);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const categories = details.mainContent.categories;
  const categoriesWithContent = categories.filter((cat: any) => cat.list.filter((i: string) => i && i.trim() !== '').length > 0);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                <span>{details.title}</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className={`mt-4 text-gray-200 max-w-5xl ${serviceId === 'pilotage-planification' || serviceId === 'cfo-part-time' ? 'text-base' : 'text-base md:text-lg'}`}>
                {details.subtitle}
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
                  <p className="text-base text-gray-800 mt-4">
                    {details.diagnostic.description}
                  </p>
                </Animate>
            </div>
            {details.diagnostic.content && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
                  <Animate variant={'pop'} delay={300} className="aspect-[4/3] lg:aspect-auto h-full">
                      {details.diagnostic.content.visual}
                  </Animate>
                  <Animate variant={'pop'} delay={200}>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-[#27013D] mb-4">{details.diagnostic.content.title}</h3>
                        <div className="text-gray-800 leading-relaxed text-sm">
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
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                      Notre <span className="gradient-text">ambition</span>
                  </h2>
              </Animate>
              <Animate variant="pop" delay={200}>
                  <p className="mt-4 text-base text-gray-800 max-w-2xl mx-auto">
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
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
                        <span className="gradient-text">{details.mainContent.title}</span>
                    </h2>
                </Animate>
                {details.mainContent.description && (
                    <Animate variant="pop" delay={200}>
                        <p className="text-base text-gray-800 mt-4">
                            {details.mainContent.description}
                        </p>
                    </Animate>
                )}
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    {categories.map((category: any, index: number) => {
                        if (!isExpanded && index > 0) return null;

                        const pills = category.list.filter((item: string) => item && item.trim() !== '');
                        if (pills.length === 0) return null;

                        return (
                             <div key={index}>
                                <Animate variant="pop">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                                </Animate>
                                <Animate variant="pop" delay={100}>
                                  <div className="flex flex-wrap gap-3">
                                    {pills.map((item: string, itemIndex: number) => (
                                      <span key={itemIndex} className="bg-teal-50 text-teal-800 px-4 py-2 rounded-lg text-sm font-medium border border-teal-100">
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </Animate>
                            </div>
                        )
                    })}
                </div>

                {categoriesWithContent.length > 1 && (
                    <div className="mt-12 text-center">
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-lg font-semibold text-[#27013D] hover:text-[#6D0037] transition-colors flex items-center gap-2 mx-auto"
                            aria-expanded={isExpanded}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                            <span>{isExpanded ? 'Voir moins' : 'Voir plus'}</span>
                        </button>
                    </div>
                )}
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
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white">
                    Prêt à prendre <span className="gradient-text-light">le contrôle ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={200}>
                <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto">
                    Contactez-nous pour discuter de la manière dont nous pouvons construire ensemble les outils de votre succès.
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

export default ServiceDetailPage;
