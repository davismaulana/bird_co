

import React from 'react';
import Animate from './Animate';
import { teamMembers, LinkedInIcon, GradientCheckIcon } from '../constants';

const dnaItems = [
    {
      icon: <GradientCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" />,
      text: "<strong>Engagement :</strong> Nous sommes à vos côtés, pleinement investis dans la réussite de vos projets."
    },
    {
      icon: <GradientCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" />,
      text: "<strong>Excellence :</strong> Nous visons les plus hauts standards de qualité dans chacune de nos missions."
    },
    {
      icon: <GradientCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" />,
      text: "<strong>Proactivité :</strong> Nous utilisons notre expertise et l'analyse de données pour identifier les opportunités et les risques futurs, vous permettant de garder une longueur d'avance."
    },
    {
      icon: <GradientCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" />,
      text: "<strong>Confiance :</strong> Nous construisons des relations durables basées sur la transparence et l'intégrité."
    }
];

const TeamPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-[#27013D] text-white overflow-hidden pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-10 items-center">
                        <div className="text-center">
                            <Animate variant="pop">
                                <p className="font-semibold text-violet-300 uppercase tracking-widest mb-2">Notre Équipe</p>
                            </Animate>
                            <Animate variant="pop" delay={100}>
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                                    Deux associés, une vision
                                </h1>
                            </Animate>
                            <Animate variant="pop" delay={200}>
                                <p className="mt-4 text-base text-gray-300 max-w-4xl mx-auto">
                                    Des expertises complémentaires au service de votre croissance. Nous sommes plus que des consultants, nous sommes vos partenaires.
                                </p>
                            </Animate>
                            <Animate variant="pop" delay={300}>
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="https://calendly.com/contact-birdandco/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-center bg-white text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform hover:scale-105 w-full sm:w-auto text-sm">
                                        Planifier un rendez-vous
                                    </a>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {/* Seydina Samb */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <Animate variant="pop" className="relative">
                            <div className="aspect-square">
                                <img
                                    src={teamMembers[0].imageUrl}
                                    alt={`Photo de ${teamMembers[0].name}`}
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-violet-200/50"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                            </div>
                        </Animate>
                        <div>
                            <Animate variant="pop" delay={150}>
                                <h2 className="text-xl lg:text-2xl font-bold text-[#27013D]">{teamMembers[0].name}</h2>
                                <p className="text-lg font-semibold text-[#6D0037] mt-1">{teamMembers[0].role}</p>
                            </Animate>
                            <div className="mt-6 space-y-4 text-gray-800 leading-relaxed text-xs">
                                {teamMembers[0].description.map((paragraph, pIndex) => (
                                    <Animate key={pIndex} variant="pop" delay={350 + pIndex * 100}>
                                        <p>{paragraph}</p>
                                    </Animate>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-between items-center">
                                <div>
                                    <Animate variant="pop" delay={250}>
                                        <p className="text-sm font-semibold text-[#6D0037]">{teamMembers[0].alumni}</p>
                                    </Animate>
                                    <Animate variant="pop" delay={300}>
                                        <p className="mt-1 text-xs text-gray-700">{teamMembers[0].diploma}</p>
                                    </Animate>
                                </div>
                                <Animate variant="pop" delay={450 + teamMembers[0].description.length * 100}>
                                    <a
                                        href={teamMembers[0].linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn de ${teamMembers[0].name}`}
                                        className="inline-flex items-center gap-2 text-[#27013D] font-semibold hover:text-[#6D0037] transition-colors text-xs"
                                    >
                                        <LinkedInIcon className="w-5 h-5" />
                                        Profil LinkedIn
                                    </a>
                                </Animate>
                            </div>
                        </div>
                    </div>

                    {/* Benjamin Le Gal */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <Animate variant="pop" className="relative lg:order-last">
                            <div className="aspect-square">
                                <img
                                    src={teamMembers[1].imageUrl}
                                    alt={`Photo de ${teamMembers[1].name}`}
                                    className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-violet-200/50"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                            </div>
                        </Animate>
                        <div>
                            <Animate variant="pop" delay={150}>
                                <h2 className="text-xl lg:text-2xl font-bold text-[#27013D]">{teamMembers[1].name}</h2>
                                <p className="text-lg font-semibold text-[#6D0037] mt-1">{teamMembers[1].role}</p>
                            </Animate>
                            <div className="mt-6 space-y-4 text-gray-800 leading-relaxed text-xs">
                                {teamMembers[1].description.map((paragraph, pIndex) => (
                                    <Animate key={pIndex} variant="pop" delay={350 + pIndex * 100}>
                                        <p>{paragraph}</p>
                                    </Animate>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-between items-center">
                                <div>
                                    <Animate variant="pop" delay={250}>
                                        <p className="text-sm font-semibold text-[#6D0037]">{teamMembers[1].alumni}</p>
                                    </Animate>
                                    <Animate variant="pop" delay={300}>
                                        <p className="mt-1 text-xs text-gray-700">{teamMembers[1].diploma}</p>
                                    </Animate>
                                </div>
                                <Animate variant="pop" delay={450 + teamMembers[1].description.length * 100}>
                                    <a
                                        href={teamMembers[1].linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn de ${teamMembers[1].name}`}
                                        className="inline-flex items-center gap-2 text-[#27013D] font-semibold hover:text-[#6D0037] transition-colors text-xs"
                                    >
                                        <LinkedInIcon className="w-5 h-5" />
                                        Profil LinkedIn
                                    </a>
                                </Animate>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* DNA Section */}
            <section className="bg-gray-50 py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Animate variant="pop">
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
                            Notre <span className="gradient-text">ADN</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={150}>
                        <p className="text-sm text-gray-800 leading-relaxed">Quatre valeurs fondamentales qui définissent qui nous sommes, comment nous travaillons, et ce que nous nous engageons à vous apporter.</p>
                    </Animate>
                </div>
                <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto stagger">
                    {dnaItems.map((item, index) => (
                    <Animate as="li" key={index} variant="pop" className="flex items-center">
                        {item.icon}
                        <span className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                    </Animate>
                    ))}
                </ul>
              </div>
            </section>


            {/* Final CTA section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Animate variant="pop">
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
                            Prêt à collaborer avec <span className="gradient-text">notre équipe ?</span>
                        </h2>
                    </Animate>
                    <Animate variant="pop" delay={150}>
                        <p className="mt-4 text-sm text-gray-800 max-w-2xl mx-auto">
                            Contactez-nous pour découvrir comment notre duo d'experts peut devenir le catalyseur de votre succès.
                        </p>
                    </Animate>
                    <Animate variant="pop" delay={300}>
                        <div className="mt-8">
                            <a
                                href="https://calendly.com/contact-birdandco/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-sm"
                            >
                                Rencontrons-nous
                            </a>
                        </div>
                    </Animate>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;