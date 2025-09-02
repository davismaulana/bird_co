import React from 'react';
import { services, serviceDetails, CheckmarkCircleIcon } from '../constants';
import Animate from './Animate';
import LottieGraph from './LottieGraph';

const ServiceDetailPage: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const details = serviceDetails[serviceId];
  const service = services.find(s => s.slug === serviceId);

  if (!details || !service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 text-center">
        <Animate variant="pop">
            <h1 className="text-4xl font-bold text-gray-900">Service Bientôt Disponible</h1>
            <p className="mt-4 text-gray-600">Cette page est en cours de construction.</p>
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
      <section className="bg-[#27013D] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="text-center lg:text-left">
                    <Animate variant="pop">
                        <p className="font-semibold text-violet-300 uppercase tracking-widest mb-4">{service.subTitle}</p>
                    </Animate>
                    <Animate variant="pop" delay={100}>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                            {details.title}
                        </h1>
                    </Animate>
                    <Animate variant="pop" delay={200}>
                        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                            {details.subtitle}
                        </p>
                    </Animate>
                    <Animate variant="pop" delay={300}>
                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
                            {details.heroItems.map((item: string) => (
                                <li key={item} className="flex">
                                    <span className="text-violet-400 mr-3">—</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                    <Animate variant="pop" delay={400}>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://calendly.com/contact-birdandco/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center bg-white text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform hover:scale-105 w-full sm:w-auto">
                                Prenons rendez-vous
                            </a>
                        </div>
                    </Animate>
                </div>

                <Animate variant="pop" delay={300} className="flex items-center justify-center">
                    <LottieGraph className="w-full max-w-xl mx-auto lg:mx-0" />
                </Animate>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <main id="content" className="bg-white py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
                <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-32">
                        <Animate variant="pop">
                            <h2 className="text-3xl font-bold text-gray-900">{details.mainContent.title}</h2>
                        </Animate>
                        <Animate variant="pop" delay={150}>
                            <p className="mt-4 text-gray-600 leading-relaxed">{details.mainContent.description}</p>
                        </Animate>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="space-y-12">
                        {details.mainContent.categories.map((category: any, index: number) => (
                             <div key={index}>
                                <Animate variant="pop" delay={200 + index * 100}>
                                    <h3 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-6">{category.title}</h3>
                                </Animate>
                                <ul className="space-y-4 stagger">
                                    {category.list.map((item: string, itemIndex: number) => (
                                        <Animate as="li" key={itemIndex} variant="pop" className="flex items-center">
                                            <CheckmarkCircleIcon className="w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="text-gray-700">{item}</span>
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Prêt à prendre <span className="gradient-text">le contrôle ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Contactez-nous pour discuter de la manière dont nous pouvons construire ensemble les outils de votre succès.
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
                      Planifier une consultation
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;