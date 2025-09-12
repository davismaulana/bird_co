import React from 'react';
import { WellowLogo, RegenSchoolLogo, PomadLogo, BredLogo, EricKayserLogo, SquareLogo, FinpalLogo } from '../constants';
import Animate from './Animate';

const logos = [
  { component: <SquareLogo />, name: 'UI Investment' },
  { component: <BredLogo />, name: 'BRED' },
  { component: <EricKayserLogo />, name: 'Eric Kayser' },
  { component: <FinpalLogo />, name: 'Finpal' },
  { component: <PomadLogo />, name: 'Pomad' },
  { component: <RegenSchoolLogo />, name: 'Regen School' },
  { component: <WellowLogo />, name: 'Wellow' },
];

const Logos: React.FC = () => {
  const allLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900">
              Ils nous <span className="gradient-text">font confiance</span>
            </h2>
          </Animate>
        </div>
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll-x hover:[animation-play-state:paused] items-center">
            {allLogos.map((logo, index) => {
              const logoClassName = "max-h-full max-w-full object-contain";
              const isEnlarged = logo.name === 'Wellow';
              const sizeClass = isEnlarged ? "h-32 w-52" : "h-24 w-40";

              return (
                <div key={index} className="flex-shrink-0 px-6 lg:px-10 py-2">
                  <div className={`${sizeClass} flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors`}>
                    {React.cloneElement(logo.component, { className: logoClassName })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;