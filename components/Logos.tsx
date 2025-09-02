import React from 'react';
import { WellowLogo, RegenSchoolLogo, PomadLogo, OctoLogo, CameroneCapitalLogo } from '../constants';
import Animate from './Animate';

const logos = [
  { component: <WellowLogo />, name: 'Wellow' },
  { component: <RegenSchoolLogo />, name: 'Regen School' },
  { component: <PomadLogo />, name: 'Pomad' },
  { component: <OctoLogo />, name: 'Octo' },
  { component: <CameroneCapitalLogo />, name: 'Camerone Capital' },
];

const Logos: React.FC = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animate variant="pop">
          <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-gray-900 mb-20">
            Ils nous <span className="gradient-text">font confiance</span>
          </h2>
        </Animate>
      </div>
      <div 
        className="w-full inline-flex flex-nowrap overflow-hidden logos-scroller"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}
      >
        <ul className="flex items-center justify-center animate-scroll">
          {logos.map((logo, index) => (
            <li key={index} className="mx-24 flex-shrink-0">
              <div className="h-36 flex items-center justify-center" style={{ width: '280px' }}>
                {React.cloneElement(logo.component, { className: "max-h-full max-w-full object-contain" })}
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center animate-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <li key={index} className="mx-24 flex-shrink-0">
              <div className="h-36 flex items-center justify-center" style={{ width: '280px' }}>
                {React.cloneElement(logo.component, { className: "max-h-full max-w-full object-contain" })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Logos;