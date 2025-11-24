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
  ChevronDownIcon,
} from '../constants';

const heroLogos = [
  { name: 'Wellow', component: <WellowLogo />, href: 'https://www.wellowhouse.com/' },
  { name: 'RegenSchool', component: <RegenSchoolLogo />, href: 'https://www.regen-school.com/' },
  { name: 'Pomad', component: <PomadLogo />, href: 'https://pomad.paris/' },
  { name: 'CameroneCapital', component: <CameroneCapitalLogo />, href: 'https://cameronecap.fr/' },
  { name: 'Casa', component: <CasaLogo />, href: 'https://www.instagram.com/casashops_belgium' },
  { name: 'Bred', component: <BredLogo />, href: 'https://www.bred.fr/' },
  { name: 'EricKayser', component: <EricKayserLogo />, href: 'https://maison-kayser.com/' },
  { name: 'Square', component: <SquareLogo />, href: 'https://www.ui-investissement.com/' },
  { name: 'TmhAvocats', component: <TmhAvocatsLogo />, href: 'https://tmhavocats.com/' },
  { name: 'FoodPilot', component: <FoodPilotLogo />, href: 'https://foodpilot.io/fr/' },
  { name: 'OctoGaming', component: <OctoGamingLogo />, href: 'https://octo-gaming.com' },
  { name: 'SOCABEG', component: <SOCABEGLogo />, href: 'https://socabeg.com/' },
];

const allHeroLogos = [...heroLogos, ...heroLogos];


const Hero: React.FC = () => {
  const logosToEnlarge = ['Casa', 'EricKayser', 'RegenSchool'];
  const logosToSuperEnlarge = ['Wellow', 'OctoGaming'];

  return (
    <section id="accueil" className="relative bg-white text-gray-900 flex flex-col min-h-screen overflow-hidden pt-16">
      <div className="w-full relative z-10 flex-grow flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 gap-0 items-center relative w-full">
          
          {/* Left side: Text content */}
          <div className="text-center md:text-left relative z-10 md:pl-8 lg:pl-16">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span>Votre bras droit</span><br />
                <span className="gradient-text">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 md:mt-6 text-xs sm:text-base md:text-lg text-gray-800 max-w-xl mx-auto md:mx-0 tracking-tight">
                Sollicitez une <span className="gradient-text font-semibold">ressource experte, ingénieuse et accessible,</span><br />
                dédiée à la réussite de vos ambitions
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
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
          <Animate variant="pop" delay={300} className="relative z-10 w-full aspect-square md:aspect-auto md:h-[500px] mr-0">
            <HeroAnimation />
          </Animate>

        </div>
        
        {/* Scroll down arrow */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <Animate variant="pop" delay={800}>
            <a href="/#vos-enjeux" aria-label="Faire défiler vers le bas" className="p-2 text-[#6D0037] animate-bounce block">
              <ChevronDownIcon className="w-8 h-8" />
            </a>
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
              const isSuperEnlarged = logosToSuperEnlarge.includes(logo.name);
              
              let sizeClass = "w-36 h-14 sm:w-44 sm:h-16"; // base size
              if (isEnlarged) {
                  sizeClass = "w-44 h-16 sm:w-52 sm:h-20"; // ~20% larger
              } else if (isSuperEnlarged) {
                  sizeClass = "w-56 h-20 sm:w-64 sm:h-24"; // ~50% larger
              }

              return (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.name}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2 ${sizeClass} flex items-center justify-center filter grayscale hover:filter-none opacity-60 hover:opacity-100 transition-all duration-300`}
                >
                  {React.cloneElement(logo.component, { className: 'max-h-full max-w-full object-contain' })}
                </a>
              );
            })}
          </div>
        </div>
      </Animate>
      
    </section>
  );
};

export default Hero;