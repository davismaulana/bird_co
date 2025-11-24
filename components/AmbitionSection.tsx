import React from 'react';
import Animate from './Animate';

const credentials = [
    "+50 missions réalisées en un an (TPE à Grande entreprise)",
    "+30 consultants qualifiés entre 8 et 30 ans d'expérience issus de cabinets de renom (BCG etc.)",
    "+50M€ levés pour nos clients"
];

const AmbitionSection: React.FC = () => {
    return (
        <section className="bg-[#27013D] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
                <div className="grid grid-cols-1 gap-10 items-center">
                    <div className="text-center max-w-3xl mx-auto">
                        <Animate variant="pop">
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                                Façonner l'avenir de votre entreprise
                            </h2>
                        </Animate>
                        <Animate variant="pop" delay={100}>
                            <p className="mt-6 text-base text-gray-300">
                                Cette philosophie est au cœur de notre ambition. Nous ne nous contentons pas de réagir aux événements, nous vous donnons les moyens de façonner activement l'avenir de votre entreprise, de prévenir les difficultés, en transformant l'incertitude en opportunité et la vision en réalité.
                            </p>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                            <ul className="mt-8 space-y-3 text-gray-300 inline-block text-left text-sm">
                                {credentials.map((item: string) => (
                                    <li key={item} className="flex items-start">
                                        <span className="text-violet-400 mr-3 font-bold text-lg leading-tight mt-1">{item.charAt(0)}</span>
                                        <span className="flex-1">{item.substring(1).trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="https://calendly.com/contact-birdandco/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-center bg-white text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform hover:scale-105"
                                >
                                    Prenons rendez-vous
                                </a>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmbitionSection;