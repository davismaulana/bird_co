
import React from 'react';
import Animate from './Animate';
import { LinkedInIcon } from '../constants';

const teamMembers = [
  {
    name: 'Seydina Samb - Associé',
    imageUrl: 'https://images2.imgbox.com/9c/93/phlhJhmT_o.jpg',
    description: [
      'Spécialiste des situations complexes et entreprises nécessitant structuration voire restructuration financière, stratégique et opérationnelle.',
      'Tout au long de son parcours, il s’est montré résilient, agile et créatif notamment dans des processus transactionnels lourds.',
      'Sa passion pour la musique et le cinéma, deux univers exigeants, témoigne d’un esprit curieux, structuré et d’un sens du détail prononcé.',
    ],
    alumni: 'Alumni Eight Advisory & KPMG',
    diploma: 'Diplômé de l’IESEG School Of Management',
    linkedinUrl: 'https://www.linkedin.com/in/seydina-samb-6638ba56/'
  },
  {
    name: 'Benjamin Le Gal - Associé',
    imageUrl: 'https://images2.imgbox.com/c8/cf/0Mcqh5DP_o.jpg',
    description: [
      'Expert dans l’assistance des entreprises et fonds dans leur processus de cessions-acquisitions notamment due diligence et recherche de repreneurs.',
      'Il bénéfice également d’une expérience solide en Direction financière de start-ups et ETI dont il a accompagné les levées de fonds.',
      'Ancien footballeur semi-professionnel, il est toujours guidé par la discipline, la stratégie et l’engagement.'
    ],
    alumni: 'Alumni EY, E-Wingels & Payfit',
    diploma: 'Diplômé de l’IESEG School Of Management',
    linkedinUrl: 'https://www.linkedin.com/in/benjaminlegal/'
  }
];

const Team: React.FC = () => {
  return (
    <section id="notre-equipe" className="bg-[#27013D] text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <h2 className="text-4xl lg:text-5xl font-bold">Notre équipe</h2>
          </Animate>
          <Animate variant="pop" delay={100}>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#3A224E] rounded-lg h-full flex flex-col overflow-hidden shadow-2xl">
              <Animate variant="pop" delay={200 + index * 500}>
                <img
                  src={member.imageUrl}
                  alt={`Photo de ${member.name}`}
                  className="w-full aspect-square object-cover object-[50%_25%]"
                />
              </Animate>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                   <Animate variant="pop" delay={300 + index * 500}>
                    <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                   </Animate>
                  <div className="space-y-4 text-gray-300">
                    {member.description.map((paragraph, pIndex) => (
                      <Animate key={pIndex} variant="pop" delay={400 + index * 500 + pIndex * 100}>
                        <p>{paragraph}</p>
                      </Animate>
                    ))}
                  </div>
                  <Animate variant="pop" delay={500 + index * 500 + member.description.length * 100}>
                    <div className="mt-6 pt-6 border-t border-white/20 text-sm">
                      <p className="font-semibold">{member.alumni}</p>
                      <p className="text-gray-400">{member.diploma}</p>
                    </div>
                  </Animate>
                </div>
                 <Animate variant="pop" delay={600 + index * 500 + member.description.length * 100}>
                    <div className="mt-6 text-left">
                      <a 
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${member.name}`} 
                        className="text-white hover:text-gray-300 transition-colors inline-block"
                      >
                        <LinkedInIcon className="w-6 h-6" />
                      </a>
                    </div>
                  </Animate>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;