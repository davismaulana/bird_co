
import React from 'react';
import Animate from './Animate';

const stats = [
  {
    icon: <img src="https://images2.imgbox.com/87/dd/sN3rtZQi_o.png" alt="Levés pour nos clients icon" className="w-16 h-16 object-contain" />,
    value: "50M€+",
    label: "Levés pour nos clients",
  },
  {
    icon: <img src="https://images2.imgbox.com/0e/6d/ydTjAfbc_o.png" alt="Missions réalisées icon" className="w-16 h-16 object-contain" />,
    value: "100+",
    label: "Missions réalisées",
  },
  {
    icon: <img src="https://images2.imgbox.com/a2/4e/MpHeVXjA_o.png" alt="Années d'expérience cumulée icon" className="w-16 h-16 object-contain" />,
    value: "30+",
    label: "Années d'expérience cumulée",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Animate variant="pop">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-16">
              Un impact qui <span className="gradient-text">fait la différence</span>
            </h2>
        </Animate>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto stagger">
          {stats.map((stat, index) => (
            <Animate key={index} variant="pop">
              <div className="flex flex-col items-center">
                <div className="mb-6">{stat.icon}</div>
                <p className="text-4xl lg:text-5xl font-extrabold text-[#27013D] tracking-tighter">{stat.value}</p>
                <p className="text-gray-600 mt-2 text-base font-medium">{stat.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
