import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="notre-equipe" className="bg-gradient-to-br from-[#27013D] to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Title */}
        <div className="text-center mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              À l'origine du <span className="gradient-text-light">réseau de bras droit</span>
            </h2>
          </Animate>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Column 1: Intro Text */}
          <div className="lg:col-span-1">
            <Animate variant="pop" delay={200}>
              <p className="text-sm text-gray-300 leading-relaxed">
                Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur mesure et accessible. Notre démarche ne remet pas en cause la valeur des cabinets traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau.
              </p>
            </Animate>
          </div>

          {/* Column 2: Benjamin Le Gal */}
          <div className="lg:col-span-1">
            <Animate variant="pop" delay={300}>
              <div className="bg-gray-300 rounded-lg p-1.5 shadow-2xl h-full">
                <div className="bg-white rounded-md h-full flex flex-col overflow-hidden">
                  <img
                    src={teamMembers[1].imageUrl}
                    alt={`Photo de ${teamMembers[1].name}`}
                    className="w-full h-64 object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#27013D] mb-4">{teamMembers[1].name}</h3>
                      <div className="space-y-3 text-gray-800 text-xs">
                        {teamMembers[1].description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-[#27013D]">{teamMembers[1].alumni}</p>
                        <p className="text-gray-600">{teamMembers[1].diploma}</p>
                      </div>
                      <a 
                        href={teamMembers[1].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${teamMembers[1].name}`} 
                        className="text-[#27013D] hover:text-[#6D0037] transition-colors"
                      >
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>

          {/* Column 3: Seydina Samb */}
          <div className="lg:col-span-1">
            <Animate variant="pop" delay={400}>
              <div className="bg-gray-300 rounded-lg p-1.5 shadow-2xl h-full">
                <div className="bg-white rounded-md h-full flex flex-col overflow-hidden">
                  <img
                    src={teamMembers[0].imageUrl}
                    alt={`Photo de ${teamMembers[0].name}`}
                    className="w-full h-64 object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#27013D] mb-4">{teamMembers[0].name}</h3>
                      <div className="space-y-3 text-gray-800 text-xs">
                        {teamMembers[0].description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 text-xs flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-[#27013D]">{teamMembers[0].alumni}</p>
                        <p className="text-gray-600">{teamMembers[0].diploma}</p>
                      </div>
                      <a 
                        href={teamMembers[0].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${teamMembers[0].name}`} 
                        className="text-[#27013D] hover:text-[#6D0037] transition-colors"
                      >
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Team;