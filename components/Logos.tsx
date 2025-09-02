
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
          <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-20">
            Ils nous <span className="gradient-text">font confiance</span>
          </h2>
        </Animate>
        <div className="flex justify-center items-center flex-wrap gap-x-16 gap-y-12 lg:gap-x-24 stagger">
          {logos.map((logo, index) => (
            <Animate key={index} variant="pop">
              <div className="h-20 flex items-center justify-center w-48 text-gray-500 hover:text-gray-800 transition-colors">
                {React.cloneElement(logo.component, { className: "max-h-full max-w-full object-contain" })}
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;