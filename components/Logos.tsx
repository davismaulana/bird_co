import React from 'react';
import { PARTNER_LOGOS, ENLARGED_LOGOS, SUPER_ENLARGED_LOGOS } from '../constants';
import Animate from './Animate';



interface LogosProps {
  backgroundColor?: string;
}

const Logos: React.FC<LogosProps> = ({ backgroundColor = 'bg-gray-50' }) => {
  // Shared configuration is now imported

  return (
    <section className={`${backgroundColor} flex flex-col items-center justify-center py-16 sm:py-24 min-h-screen`}>
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
          {PARTNER_LOGOS.map((logo, index) => {
            const isEnlarged = ENLARGED_LOGOS.includes(logo.name);
            const isSuperEnlarged = SUPER_ENLARGED_LOGOS.includes(logo.name);

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