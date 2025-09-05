import React from 'react';
import { WellowLogo, RegenSchoolLogo, PomadLogo, OctoLogo, CameroneCapitalLogo, FinpalLogo, LaBruneEtLaBlondeLogo, LesTontonsLogo, SquareLogo } from '../constants';
import Animate from './Animate';

const logos = [
  { component: <WellowLogo />, name: 'Wellow' },
  { component: <RegenSchoolLogo />, name: 'Regen School' },
  { component: <PomadLogo />, name: 'Pomad' },
  { component: <OctoLogo />, name: 'Octo' },
  { component: <CameroneCapitalLogo />, name: 'Camerone Capital' },
  { component: <FinpalLogo />, name: 'Finpal' },
  { component: <LaBruneEtLaBlondeLogo />, name: 'La Brune & La Blonde' },
  { component: <LesTontonsLogo />, name: 'Les Tontons' },
  { component: <SquareLogo />, name: 'Square' },
];

const Logos: React.FC = () => {
  const allLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate variant="pop">
          <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-20">
            Ils nous <span className="gradient-text">font confiance</span>
          </h2>
        </Animate>
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll-x hover:[animation-play-state:paused]">
            {allLogos.map((logo, index) => {
              // Based on user request "octo, eric, wellow, UI investment", we are increasing size for these logos.
              // "eric" is interpreted as "Regen School" and "UI investment" as "Camerone Capital"
              const isLargeLogo = ['Wellow', 'Octo', 'Regen School', 'Camerone Capital'].includes(logo.name);
              
              let logoClassName;

              if (isLargeLogo) {
                logoClassName = "max-h-full max-w-full object-contain transform scale-125";
              } else {
                logoClassName = "max-h-full max-w-full object-contain";
              }

              return (
                <div key={index} className="flex-shrink-0 px-6 lg:px-10 py-2">
                  <div className="h-32 flex items-center justify-center w-48 text-gray-500 hover:text-gray-800 transition-colors">
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
