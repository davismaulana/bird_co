
import React from 'react';
import Animate from './Animate';

const personas = [
  {
    icon: <img src="https://images2.imgbox.com/87/dd/sN3rtZQi_o.png" alt="Actionnaires icon" className="w-16 h-16 object-contain" />,
    title: "Actionnaires",
    description: "Nous vous apportons une vision stratégique et un cadre financier solide pour sécuriser et valoriser votre investissement.",
  },
  {
    icon: <img src="https://images2.imgbox.com/d8/ce/23Kq8TYw_o.png" alt="Dirigeants & Fondateurs icon" className="w-16 h-16 object-contain" />,
    title: "Dirigeants & Fondateurs",
    description: "Nous vous renforçons pour faire face aux projets de transformation et aux défis de croissance, en agissant comme votre bras-droit.",
  },
  {
    icon: <img src="https://images2.imgbox.com/a2/10/4l4MqUDL_o.png" alt="Avocats icon" className="w-16 h-16 object-contain" />,
    title: "Avocats",
    description: "Nous collaborons sur des dossiers complexes nécessitant une expertise financière pointue, comme les litiges, les M&A ou les restructurations.",
  },
  {
    icon: <img src="https://images2.imgbox.com/43/96/4i7F4XMX_o.png" alt="Experts-Comptables icon" className="w-16 h-16 object-contain" />,
    title: "Experts-Comptables",
    description: "Nous intervenons en appui sur des missions exceptionnelles qui dépassent le cadre de votre mission récurrente : évaluation, due diligence, business plan.",
  },
];


const Personas: React.FC = () => {
  return (
    <section id="personas" className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
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
                <div className="bg-gray-50 rounded-xl p-8 h-full flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6 border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-violet-100/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-violet-100 to-pink-100 rounded-2xl p-4 shadow-inner flex items-center justify-center">
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#27013D] mb-2">{persona.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
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