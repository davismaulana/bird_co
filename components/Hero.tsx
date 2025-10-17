
import React from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';
import { 
  WellowLogo,
  RegenSchoolLogo,
  PomadLogo,
  BredLogo,
  EricKayserLogo,
  SquareLogo,
  CasaLogo,
  TmhAvocatsLogo,
  FoodPilotLogo,
  OctoGamingLogo,
  CameroneCapitalLogo,
  SOCABEGLogo,
} from '../constants';

const heroLogos = [
  { name: 'Wellow', component: <WellowLogo /> },
  { name: 'RegenSchool', component: <RegenSchoolLogo /> },
  { name: 'Pomad', component: <PomadLogo /> },
  { name: 'CameroneCapital', component: <CameroneCapitalLogo /> },
  { name: 'Casa', component: <CasaLogo /> },
  { name: 'Bred', component: <BredLogo /> },
  { name: 'EricKayser', component: <EricKayserLogo /> },
  { name: 'Square', component: <SquareLogo /> },
  { name: 'TmhAvocats', component: <TmhAvocatsLogo /> },
  { name: 'FoodPilot', component: <FoodPilotLogo /> },
  { name: 'OctoGaming', component: <OctoGamingLogo /> },
  { name: 'SOCABEG', component: <SOCABEGLogo /> },
];

const allHeroLogos = [...heroLogos, ...heroLogos];


const Hero: React.FC = () => {
  const logosToEnlarge = ['Wellow', 'EricKayser', 'OctoGaming'];

  return (
    <section id="accueil" className="relative bg-white text-gray-900 flex flex-col h-full overflow-hidden pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative w-full">
          
          {/* Left side: Text content */}
          <div className="text-center md:text-left relative z-10 md:pl-8 lg:pl-16">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span>Bras droit</span><br />
                <span className="gradient-text">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-base md:text-lg text-gray-800 max-w-xl mx-auto md:mx-0">
                Sollicitez une <span className="gradient-text font-semibold">ressource experte, ingénieuse et accessible,</span><br />
                dédiée à la réussite de vos ambitions
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-10 flex justify-center md:justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#27013D] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors transform hover:scale-105 text-sm"
                >
                  Réserver une consultation
                </a>
              </div>
            </Animate>
          </div>

          {/* Vertical gradient line */}
          <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none">
              <div className="relative w-1 h-96">
                  <div 
                      className="absolute inset-0 rounded-full"
                      style={{ 
                          backgroundImage: 'linear-gradient(to bottom, #27013D, #6D0037)',
                      }}
                  ></div>
              </div>
          </div>

          {/* Right side: Animation */}
          <Animate variant="pop" delay={300} className="relative z-10 w-full aspect-square md:aspect-auto md:h-96">
            <HeroAnimation />
          </Animate>

        </div>
      </div>
      
      <Animate variant="pop" delay={600} className="w-full pb-8">
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-scroll-x hover:[animation-play-state:paused] items-center">
            {allHeroLogos.map((logo, index) => {
              const isEnlarged = logosToEnlarge.includes(logo.name);
              const sizeClass = isEnlarged ? "w-40 h-16 sm:w-52 sm:h-20" : "w-36 h-14 sm:w-44 sm:h-16";
              return (
                <div key={index} className={`flex-shrink-0 px-4 sm:px-6 py-2 ${sizeClass} flex items-center justify-center filter grayscale hover:filter-none opacity-60 hover:opacity-100 transition-all duration-300`}>
                  {React.cloneElement(logo.component, { className: 'max-h-full max-w-full object-contain' })}
                </div>
              );
            })}
          </div>
        </div>
      </Animate>
      
    </section>
  );
};

export default Hero;
