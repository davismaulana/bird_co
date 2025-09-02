
import React from 'react';
import Animate from './Animate';
import LottieGraph from './LottieGraph';

const heroItems = [
    "Plus de 50M€ levés pour nos clients",
    "Plus de 100 missions réalisées",
    "Plus de 30 ans d'expérience cumulée",
    "Une vision stratégique et collaborative"
];

const AmbitionSection: React.FC = () => {
    return (
        <section className="bg-[#27013D] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-center lg:text-left">
                        <Animate variant="pop">
                            <p className="font-semibold text-violet-300 uppercase tracking-widest mb-4">Notre Ambition</p>
                        </Animate>
                        <Animate variant="pop" delay={100}>
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                                Façonner l'avenir de votre entreprise
                            </h2>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                                Vous permettre d'anticiper les enjeux financiers et opérationnels futurs et prévenir les éventuelles difficultés.
                            </p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
                                {heroItems.map((item: string) => (
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
    );
};

export default AmbitionSection;
