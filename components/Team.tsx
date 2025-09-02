import React from 'react';
import Animate from './Animate';
import { LinkedInIcon, teamMembers } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="notre-equipe" className="bg-[#27013D] text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold">Notre équipe</h2>
          </Animate>
          <Animate variant="pop" delay={100}>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Seydina Samb */}
          <div className="bg-[#3A224E] rounded-lg h-full flex flex-col overflow-hidden shadow-2xl">
            <Animate variant="pop" delay={200}>
              <img
                src={teamMembers[0].imageUrl}
                alt={`Photo de ${teamMembers[0].name}`}
                className="w-full aspect-square object-cover object-top"
              />
            </Animate>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                  <Animate variant="pop" delay={300}>
                  <h3 className="text-2xl font-bold mb-4">{teamMembers[0].name}</h3>
                  </Animate>
                <div className="space-y-4 text-gray-300">
                  {teamMembers[0].description.map((paragraph, pIndex) => (
                    <Animate key={pIndex} variant="pop" delay={400 + pIndex * 100}>
                      <p>{paragraph}</p>
                    </Animate>
                  ))}
                </div>
                <Animate variant="pop" delay={400 + teamMembers[0].description.length * 100}>
                  <div className="mt-6 pt-6 border-t border-white/20 text-sm">
                    <p className="font-semibold">{teamMembers[0].alumni}</p>
                    <p className="text-gray-400">{teamMembers[0].diploma}</p>
                  </div>
                </Animate>
              </div>
                <Animate variant="pop" delay={500 + teamMembers[0].description.length * 100}>
                  <div className="mt-6 text-left">
                    <a 
                      href={teamMembers[0].linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${teamMembers[0].name}`} 
                      className="text-white hover:text-gray-300 transition-colors inline-block"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                    </a>
                  </div>
                </Animate>
            </div>
          </div>

          {/* Benjamin Le Gal */}
          <div className="bg-[#3A224E] rounded-lg h-full flex flex-col overflow-hidden shadow-2xl">
            <Animate variant="pop" delay={700}>
              <img
                src={teamMembers[1].imageUrl}
                alt={`Photo de ${teamMembers[1].name}`}
                className="w-full aspect-square object-cover object-top"
              />
            </Animate>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                  <Animate variant="pop" delay={800}>
                  <h3 className="text-2xl font-bold mb-4">{teamMembers[1].name}</h3>
                  </Animate>
                <div className="space-y-4 text-gray-300">
                  {teamMembers[1].description.map((paragraph, pIndex) => (
                    <Animate key={pIndex} variant="pop" delay={900 + pIndex * 100}>
                      <p>{paragraph}</p>
                    </Animate>
                  ))}
                </div>
                <Animate variant="pop" delay={900 + teamMembers[1].description.length * 100}>
                  <div className="mt-6 pt-6 border-t border-white/20 text-sm">
                    <p className="font-semibold">{teamMembers[1].alumni}</p>
                    <p className="text-gray-400">{teamMembers[1].diploma}</p>
                  </div>
                </Animate>
              </div>
                <Animate variant="pop" delay={1000 + teamMembers[1].description.length * 100}>
                  <div className="mt-6 text-left">
                    <a 
                      href={teamMembers[1].linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${teamMembers[1].name}`} 
                      className="text-white hover:text-gray-300 transition-colors inline-block"
                    >
                      <LinkedInIcon className="w-6 h-6" />
                    </a>
                  </div>
                </Animate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;