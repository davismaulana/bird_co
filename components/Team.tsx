import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

interface TeamProps {
  heading?: string;
  introText?: string;
  teamMembers?: typeof teamMembers;
  bottomText?: string;
}

const Team: React.FC<TeamProps> = ({
  heading = "À l'origine du réseau de bras droit",
  introText,
  teamMembers: propTeamMembers,
  bottomText
}) => {
  const membersToDisplay = propTeamMembers || teamMembers;
  const displayedTeamMembers = [...membersToDisplay].reverse();

  return (
    <section
      id="notre-equipe"
      className="relative text-white py-12 md:py-16 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="parallax-bg"
        style={{ backgroundImage: 'linear-gradient(to bottom right, #27013D, rgb(17 24 39))' }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full" />
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
              {heading}
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <div className="text-xl text-gray-300 leading-relaxed mt-4 max-w-6xl mx-auto">
              {introText ? (
                <p className="text-lg">{introText}</p>
              ) : (
                <p className="text-lg">
                  Bird est né de la <strong className="font-bold text-white">rencontre d’anciens consultants</strong> convaincus qu’il existe une autre façon d’accompagner les organisations.<br />
                  Nous offrons <strong className="font-bold text-white">un accompagnement sur-mesure et accessible</strong>, <strong className="font-bold text-white">à mi-chemin</strong> entre <strong className="font-bold text-white">l’expertise structurée du conseil</strong> et la <strong className="font-bold text-white">flexibilité d’un consultant autonome</strong>.
                </p>
              )}
            </div>
          </Animate>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {displayedTeamMembers.map((member, index) => {
            return (
              <Animate key={member.name} variant="pop" delay={200 + index * 100}>
                <div className="bg-white rounded-lg shadow-2xl shadow-violet-900/20 overflow-hidden h-full flex flex-col border-2 border-gray-300">
                  <div
                    className="w-full aspect-square md:h-[450px] flex-shrink-0"
                    style={{
                      backgroundImage: `url(${member.imageUrl})`,
                      backgroundPosition: 'center 20%',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-1 flex flex-col gap-4 text-left">
                      <div>
                        <span className="text-lg font-bold text-[#27013D]">
                          {member.name}
                        </span>
                      </div>

                      <div className="text-gray-800 text-sm leading-snug space-y-3">
                        {member.description.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-200 text-xs flex justify-between items-end">
                        <div>
                          <p className="font-semibold text-[#27013D]">{member.alumni}</p>
                          <p className="text-gray-600">{member.diploma}</p>
                        </div>
                        <a
                          href={member.linkedinUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={`LinkedIn de ${member.name}`}
                          className="text-[#27013D] hover:text-[#6D0037] transition-colors flex-shrink-0"
                        >
                          <LinkedInIcon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Animate>
            )
          })}
        </div>

        {/* Philosophy Text */}
        <Animate variant="pop" delay={400}>
          <div className="text-lg text-gray-300 leading-relaxed mt-10 max-w-5xl mx-auto text-center">
            <p>
              Notre démarche ne remet pas en cause la valeur des cabinets traditionnels. Elle vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens, surtout dans le contexte actuel de crise, de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau.
            </p>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Team;