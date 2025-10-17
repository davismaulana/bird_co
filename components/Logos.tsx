
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
  const enlargedLogos = ['CASA', 'Eric Kayser', 'Regen School'];
  const superEnlargedLogos = ['Wellow', 'Octo Gaming'];

  return (
    <section className={`${backgroundColor} min-h-screen flex flex-col items-center justify-center py-16 sm:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Ils nous <span className="gradient-text">font confiance</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-5xl mx-auto">
              Un <strong>allié</strong> et un <strong>soutien sur-mesure</strong> pour votre structure (<span className="gradient-text font-bold">TPE à Grandes entreprises et Fonds d'investissements</span>)
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-x-12 sm:gap-y-16 lg:gap-x-16 lg:gap-y-20 items-center justify-center stagger">
          {logos.map((logo, index) => {
            const isEnlarged = enlargedLogos.includes(logo.name);
            const isSuperEnlarged = superEnlargedLogos.includes(logo.name);
            
            let logoClassName = "max-h-16 max-w-[10rem] object-contain"; // Base size
            if (isEnlarged) {
              logoClassName = "max-h-20 max-w-[12rem] object-contain"; // ~20% larger
            } else if (isSuperEnlarged) {
              logoClassName = "max-h-24 max-w-[15rem] object-contain"; // ~50% larger
            }
            
            return (
              <Animate
                key={index}
                variant="pop"
              >
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.name}
                  className="flex items-center justify-center h-24 w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  {React.cloneElement(logo.component, { className: logoClassName })}
                </a>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Logos;