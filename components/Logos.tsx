
import React from 'react';
import { WellowLogo, RegenSchoolLogo, PomadLogo, BredLogo, EricKayserLogo, SquareLogo, CasaLogo, TmhAvocatsLogo, FoodPilotLogo, OctoGamingLogo, CameroneCapitalLogo, SOCABEGLogo } from '../constants';
import Animate from './Animate';

const logos = [
  { component: <SquareLogo />, name: 'UI Investment', href: 'https://www.ui-investissement.com/' },
  { component: <BredLogo />, name: 'BRED', href: 'https://www.bred.fr/' },
  { component: <EricKayserLogo />, name: 'Eric Kayser', href: 'https://maison-kayser.com/' },
  { component: <CasaLogo />, name: 'CASA', href: 'https://www.instagram.com/casashops_belgium' },
  { component: <PomadLogo />, name: 'Pomad', href: 'https://pomad.paris/' },
  { component: <RegenSchoolLogo />, name: 'Regen School', href: 'https://www.regen-school.com/' },
  { component: <WellowLogo />, name: 'Wellow', href: 'https://www.wellowhouse.com/' },
  { component: <TmhAvocatsLogo />, name: 'TMH Avocats', href: 'https://tmhavocats.com/' },
  { component: <FoodPilotLogo />, name: 'Food Pilot', href: 'https://foodpilot.io/fr/' },
  { component: <OctoGamingLogo />, name: 'Octo Gaming', href: 'https://octo-gaming.com' },
  { component: <CameroneCapitalLogo />, name: 'Camerone Capital', href: 'https://cameronecap.fr/' },
  { component: <SOCABEGLogo />, name: 'SOCABEG', href: 'https://socabeg.com/' },
];

interface LogosProps {
  backgroundColor?: string;
}

const Logos: React.FC<LogosProps> = ({ backgroundColor = 'bg-white' }) => {
  const allLogos = [...logos, ...logos]; // Duplicate logos for a seamless loop

  return (
    <section className={`${backgroundColor} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Ils nous <span className="gradient-text">font confiance</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-4">
              Un <strong>allié</strong> et un <strong>soutien sur-mesure</strong> pour votre structure (<span className="gradient-text font-bold">TPE à Grandes entreprises et Fonds d'investissements</span>)
            </p>
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
              const isEnlarged = ['Wellow', 'Octo Gaming', 'Camerone Capital'].includes(logo.name);
              const sizeClass = isEnlarged ? "h-32 w-52" : "h-24 w-40";

              return (
                <div key={index} className="flex-shrink-0 px-6 lg:px-10 py-2">
                  <a href={logo.href} target="_blank" rel="noopener noreferrer" className={`${sizeClass} flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors`}>
                    {React.cloneElement(logo.component, { className: logoClassName })}
                  </a>
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