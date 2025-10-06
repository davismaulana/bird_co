import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

const Team: React.FC = () => {
  // Reverse to match the original display order (Benjamin then Seydina)
  const displayedTeamMembers = [...teamMembers].reverse();

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
        
        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          
          {displayedTeamMembers.map((member, index) => (
            <Animate key={member.name} variant="pop" delay={300 + index * 100}>
              <div className="bg-white rounded-xl shadow-2xl shadow-violet-900/20 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                  {/* Image Column */}
                  <div className="sm:col-span-1">
                    <img 
                      className="w-full h-32 sm:h-80 object-cover" 
                      loading="lazy" 
                      src={member.imageUrl} 
                      alt={`Photo de ${member.name}`}
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                
                  {/* Text Column */}
                  <div className="sm:col-span-2 p-6 sm:p-8 flex items-center">
                    <div className="flex-1 flex flex-col gap-3 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                        <div className="flex flex-col mb-4 sm:mb-0">
                          <span className="text-2xl font-bold text-[#27013D]">{member.name}</span>
                          <div className="text-lg text-gray-800">{member.role}</div>
                        </div>
                        <div className="flex gap-5">
                          <a 
                            href={member.linkedinUrl} 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            aria-label={`LinkedIn de ${member.name}`}
                            className="text-[#27013D] hover:text-[#6D0037] transition-colors"
                          >
                            <LinkedInIcon className="h-8 w-8" />
                          </a>
                        </div>
                      </div>
                      <div className="text-gray-800 text-xs space-y-2">
                          {member.description.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200 text-xs">
                          <p className="font-semibold text-[#27013D]">{member.alumni}</p>
                          <p className="text-gray-600">{member.diploma}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
          
        </div>

        {/* Description moved below cards */}
        <div className="text-center mt-16">
          <Animate variant="pop" delay={200}>
            <p className="text-sm text-gray-300 leading-relaxed max-w-5xl mx-auto">
              Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur mesure et accessible. Notre démarche ne remet pas en cause la valeur des cabinets traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau.
            </p>
          </Animate>
        </div>

      </div>
    </section>
  );
};

export default Team;