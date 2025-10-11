
import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers, CheckmarkCircleIcon } from '../constants';

const Team: React.FC = () => {
  const displayedTeamMembers = [...teamMembers].reverse();

  return (
    <section
      id="notre-equipe"
      className="bg-gradient-to-br from-[#27013D] to-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-16 sm:px-24 lg:px-40">
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

        {/* Main content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
          {/* Team Members */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {displayedTeamMembers.map((member, index) => {
              return (
                <Animate key={member.name} variant="pop" delay={200 + index * 100}>
                  <div className="bg-white rounded-lg shadow-2xl shadow-violet-900/20 overflow-hidden h-full flex flex-col border-2 border-gray-300 max-w-72 mx-auto">
                    <div
                      className="w-full aspect-square md:h-64 flex-shrink-0"
                      style={{
                        backgroundImage: `url(${member.imageUrl})`,
                        backgroundPosition: 'center 15%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex-1 flex flex-col gap-1 text-left">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <span className="text-sm font-bold text-[#27013D]">
                              {member.name}
                            </span>
                          </div>
                          <a
                            href={member.linkedinUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={`LinkedIn de ${member.name}`}
                            className="text-[#27013D] hover:text-[#6D0037] transition-colors flex-shrink-0"
                          >
                            <LinkedInIcon className="h-4 w-4" />
                          </a>
                        </div>

                        <div className="text-gray-800 text-[10px] leading-snug space-y-1">
                          {member.description.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>

                        <div className="mt-auto pt-2 border-t border-gray-200 text-[10px]">
                          <p className="font-semibold text-[#27013D]">{member.alumni}</p>
                          <p className="text-gray-600">{member.diploma}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Animate>
              )
            })}
          </div>

          {/* Right Column: Text */}
          <Animate variant="pop" className="lg:col-span-1 lg:sticky lg:top-24">
            <p className="text-sm text-gray-300 leading-relaxed">
              Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur mesure et accessible.
            </p>
            <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                    <CheckmarkCircleIcon className="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-violet-300" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        <strong>Écoute & Analyse:</strong> Comprendre vos défis en profondeur.
                    </p>
                </li>
                <li className="flex items-start">
                    <CheckmarkCircleIcon className="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-violet-300" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        <strong>Stratégie sur Mesure:</strong> Développer des solutions adaptées à votre contexte.
                    </p>
                </li>
                <li className="flex items-start">
                    <CheckmarkCircleIcon className="w-5 h-5 flex-shrink-0 mr-3 mt-0.5 text-violet-300" />
                    <p className="text-sm text-gray-300 leading-relaxed">
                        <strong>Exécution & Suivi:</strong> Vous accompagner activement dans la mise en œuvre.
                    </p>
                </li>
            </ul>
            <Animate variant="pop" delay={400}>
              <img 
                src="https://images2.imgbox.com/e1/6b/xi2on8YK_o.png" 
                alt="Illustration de la collaboration et de la stratégie d'entreprise" 
                className="mt-8 rounded-lg shadow-lg w-1/2 mx-auto h-auto"
              />
            </Animate>
          </Animate>
        </div>

        {/* Mission Paragraph Below */}
        <Animate variant="pop">
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-300 leading-relaxed">
              Notre démarche ne remet pas en cause la valeur des cabinets traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau.
            </p>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Team;
