
import React from 'react';
import Animate from './Animate';
import { DiagnosticIcon, GearIcon, PaperPlaneIcon, TrendingUpIcon } from '../constants';

const steps = [
  {
    icon: <DiagnosticIcon />,
    number: "01",
    title: "Diagnostic & Analyse",
    description: "Nous commençons par une immersion complète dans votre environnement pour comprendre vos enjeux, analyser vos données et identifier avec précision vos besoins. Cette phase est cruciale pour poser des bases solides et définir des objectifs clairs et pertinents.",
  },
  {
    icon: <GearIcon />,
    number: "02",
    title: "Conception & Stratégie",
    description: "À partir du diagnostic, nous concevons des solutions sur-mesure : modélisation financière, plan stratégique, structuration de processus... Chaque recommandation est validée en collaboration avec vos équipes pour assurer son adéquation et sa faisabilité.",
  },
  {
    icon: <PaperPlaneIcon />,
    number: "03",
    title: "Implémentation & Déploiement",
    description: "Nous ne nous arrêtons pas à la stratégie. Nous vous accompagnons activement dans le déploiement des solutions, la mise en place des outils et la formation de vos équipes pour garantir une adoption réussie et une autonomie future.",
  },
  {
    icon: <TrendingUpIcon />,
    number: "04",
    title: "Suivi & Optimisation",
    description: "Notre mission se poursuit avec un suivi régulier de la performance des solutions implémentées. Nous analysons les résultats, ajustons les outils si nécessaire et restons à votre écoute pour optimiser continuellement votre performance.",
  },
];

const MethodologiePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Notre Méthodologie
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
                    Une démarche structurée et collaborative pour transformer vos ambitions en succès tangibles.
                </p>
            </Animate>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-9 top-4 bottom-4 w-0.5 bg-gray-200" aria-hidden="true"></div>
                    
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <Animate key={index} variant="pop">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-[#27013D] text-white flex items-center justify-center text-xl font-bold z-10 ring-8 ring-white">
                                           {step.number}
                                        </div>
                                    </div>
                                    <div className="ml-8">
                                        <div className="text-[#6D0037] mb-3">{React.cloneElement(step.icon, { className: 'w-8 h-8' })}</div>
                                        <h3 className="text-2xl font-bold text-[#27013D] mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </Animate>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Appliquons notre méthodologie <span className="gradient-text">à votre projet</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Planifions un échange pour discuter de vos défis et voir comment notre approche peut y répondre.
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
                      Discutons-en
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default MethodologiePage;
