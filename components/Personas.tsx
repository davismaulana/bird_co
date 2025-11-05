import React from 'react';
import Animate from './Animate';

const personas = [
  {
    icon: <img src="https://images2.imgbox.com/5c/0a/1tuigqwq_o.png" alt="Dirigeants & Fondateurs icon" className="w-16 h-16 object-contain" />,
    title: "Dirigeants & Fondateurs",
    description: "Nous agissons comme votre bras-droit pour structurer votre croissance, prendre les bonnes décisions et exécuter votre vision avec sérénité, en sécurisant votre performance financière et opérationnelle.",
  },
  {
    icon: <img src="https://images2.imgbox.com/88/a2/fagQVMCi_o.png" alt="Actionnaires icon" className="w-16 h-16 object-contain" />,
    title: "Actionnaires",
    description: "Bénéficiez d'une vision stratégique et d'un cadre financier solide pour valoriser votre investissement. Notre analyse indépendante et notre reporting sur mesure vous apportent une clarté totale pour vos décisions.",
  },
  {
    icon: <img src="https://images2.imgbox.com/4f/d9/hcbc6lOc_o.png" alt="Avocats icon" className="w-16 h-16 object-contain" />,
    title: "Avocats",
    description: "Nous collaborons sur des dossiers complexes (litiges, M&A, restructurations) en apportant une expertise financière pointue, des analyses chiffrées robustes et des évaluations pour renforcer vos argumentaires juridiques.",
  },
  {
    icon: <img src="https://images2.imgbox.com/78/c2/3dK6Hk8k_o.png" alt="Experts-Comptables icon" className="w-21 h-21 object-contain" />,
    title: "Experts-Comptables",
    description: "En appui sur des missions exceptionnelles (levée de fonds, reporting avancé, restructuration), nous complétons vos services avec une expertise financière spécialisée et ciblée pour atteindre vos objectifs.",
  },
];

const Personas: React.FC = () => {
  return (
    <section id="personas" className="bg-gray-50 flex flex-col justify-center py-16 overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              À qui nous <span className="gradient-text">adressons-nous ?</span>
            </h2>
          </Animate>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 stagger">
            {personas.map((persona, index) => (
              <Animate 
                key={index} 
                variant="pop"
              >
                <div className="bg-white rounded-xl p-8 h-full flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6 sm:gap-8 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-violet-100 to-pink-100 rounded-2xl p-5 shadow-inner flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28">
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#27013D] mb-3">{persona.title}</h3>
                    <p className="text-black leading-relaxed text-xs">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </Animate>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;