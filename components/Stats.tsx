import React from 'react';
import Animate from './Animate';

const stats = [
  {
    icon: <img src="https://images2.imgbox.com/87/dd/sN3rtZQi_o.png" alt="Naissance du réseau Bird& icon" className="w-16 h-16 object-contain" />,
    value: "2024",
    label: "Naissance du réseau Bird&",
  },
  {
    icon: <img src="https://images2.imgbox.com/0e/6d/ydTjAfbc_o.png" alt="Dirigeants et actionnaires accompagnés icon" className="w-20 h-20 object-contain" />,
    value: "20+",
    label: <>Dirigeants et actionnaires<br />accompagnés</>,
  },
  {
    icon: <img src="https://images2.imgbox.com/80/73/qtj75VEW_o.png" alt="Experts partenaires icon" className="w-20 h-20 object-contain" />,
    value: "10+",
    label: "Experts partenaires avec 5+ années d'expérience, issus de cabinets de conseil de renom",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-20">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Un impact qui <span className="gradient-text">fait la différence</span>
            </h2>
          </Animate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto stagger">
          {stats.map((stat, index) => (
            <Animate key={index} variant="pop">
              <div className="flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center h-20">
                  {stat.icon}
                </div>
                <p className="text-4xl lg:text-5xl font-extrabold text-[#27013D] tracking-tighter">{stat.value}</p>
                <p className="text-gray-800 mt-2 text-base font-medium">{stat.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;