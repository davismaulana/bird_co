import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

const Team: React.FC = () => {
  const displayedTeamMembers = [...teamMembers].reverse();

  return (
    <section
      id="notre-equipe"
      className="bg-gradient-to-br from-[#27013D] to-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full" />
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              À l'origine du <span className="gradient-text-light">réseau de bras droit</span>
            </h2>
          </Animate>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {displayedTeamMembers.map((member, index) => (
            <Animate key={member.name} variant="pop" delay={300 + index * 100}>
              <div className="bg-white rounded-xl shadow-2xl shadow-violet-900/20 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-[minmax(200px,230px)_1fr] items-stretch">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none">
                    <img
                      className="w-full h-[clamp(140px,25vw,200px)] sm:h-full sm:max-h-[220px] md:max-h-[240px] object-cover"
                      loading="lazy"
                      src={member.imageUrl}
                      alt={`Photo de ${member.name}`}
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>

                  {/* Text */}
                  <div className="px-5 py-3 sm:px-6 sm:py-3 md:px-7 md:py-4 flex items-center">
                    <div className="flex-1 flex flex-col gap-1.5 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2">
                        <div className="flex flex-col mb-2 sm:mb-0">
                          <span className="text-lg md:text-xl font-bold text-[#27013D]">
                            {member.name}
                          </span>
                          <div className="text-sm md:text-base text-gray-800">{member.role}</div>
                        </div>
                        <a
                          href={member.linkedinUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={`LinkedIn de ${member.name}`}
                          className="text-[#27013D] hover:text-[#6D0037] transition-colors"
                        >
                          <LinkedInIcon className="h-6 w-6" />
                        </a>
                      </div>

                      <div className="text-gray-800 text-xs leading-relaxed space-y-1">
                        {member.description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-gray-200 text-[11px]">
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

        {/* Description below cards */}
        <div className="text-center mt-14">
          <Animate variant="pop" delay={200}>
            <p className="text-sm text-gray-300 leading-relaxed max-w-5xl mx-auto">
              Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre
              façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du
              conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur
              mesure et accessible. Notre démarche ne remet pas en cause la valeur des cabinets
              traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en
              ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et
              financier de haut niveau.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Team;
