import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="notre-equipe" className="bg-gradient-to-br from-[#27013D] to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
              À l'origine du <span className="gradient-text-light">réseau de bras droit</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
              Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur mesure et accessible. Notre démarche ne remet pas en cause la valeur des cabinets traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau.
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Benjamin Le Gal */}
          <div className="bg-gray-300 rounded-lg p-2 shadow-2xl">
            <div className="bg-white rounded-md h-full flex flex-col overflow-hidden">
              <Animate variant="pop" delay={300}>
                <img
                  src={teamMembers[1].imageUrl}
                  alt={`Photo de ${teamMembers[1].name}`}
                  className="w-full aspect-square object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </Animate>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                    <Animate variant="pop" delay={400}>
                      <h3 className="text-xl font-bold text-[#27013D] mb-4">{teamMembers[1].name}</h3>
                    </Animate>
                  <div className="space-y-4 text-gray-800 text-xs">
                    {teamMembers[1].description.map((paragraph, pIndex) => (
                      <Animate key={pIndex} variant="pop" delay={500 + pIndex * 100}>
                        <p>{paragraph}</p>
                      </Animate>
                    ))}
                  </div>
                </div>
                <Animate variant="pop" delay={500 + teamMembers[1].description.length * 100}>
                    <div className="mt-6 pt-6 border-t border-gray-200 text-xs flex justify-between items-center">
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
                </Animate>
              </div>
            </div>
          </div>

          {/* Seydina Samb */}
          <div className="bg-gray-300 rounded-lg p-2 shadow-2xl">
            <div className="bg-white rounded-md h-full flex flex-col overflow-hidden">
              <Animate variant="pop" delay={800}>
                <img
                  src={teamMembers[0].imageUrl}
                  alt={`Photo de ${teamMembers[0].name}`}
                  className="w-full aspect-square object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </Animate>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                    <Animate variant="pop" delay={900}>
                      <h3 className="text-xl font-bold text-[#27013D] mb-4">{teamMembers[0].name}</h3>
                    </Animate>
                  <div className="space-y-4 text-gray-800 text-xs">
                    {teamMembers[0].description.map((paragraph, pIndex) => (
                      <Animate key={pIndex} variant="pop" delay={1000 + pIndex * 100}>
                        <p>{paragraph}</p>
                      </Animate>
                    ))}
                  </div>
                </div>
                <Animate variant="pop" delay={1000 + teamMembers[0].description.length * 100}>
                    <div className="mt-6 pt-6 border-t border-gray-200 text-xs flex justify-between items-center">
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
                </Animate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
