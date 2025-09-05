import React from 'react';
import Animate from './Animate';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative bg-white text-gray-900 flex items-center min-h-screen overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 overflow-hidden z-0 pointer-events-none">
        <svg className="w-full h-auto" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0"></stop>
                    <stop offset="20%" stopColor="#cbd5e1"></stop>
                    <stop offset="80%" stopColor="#cbd5e1"></stop>
                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0"></stop>
                </linearGradient>
                <filter id="hero-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
                </filter>
            </defs>
            <path d="M-200,200 C400,0 1040,0 1640,200" stroke="url(#hero-line-gradient)" strokeWidth="5" fill="none" filter="url(#hero-glow-filter)" strokeOpacity="0.5"></path>
            <path d="M-200,200 C400,0 1040,0 1640,200" stroke="url(#hero-line-gradient)" strokeWidth="2" fill="none"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          
          {/* Left side: Text content */}
          <div className="text-center lg:text-left relative z-10">
            <Animate variant="pop">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span className="text-black">Bras droit</span><br />
                <span className="gradient-text">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-800 max-w-xl mx-auto lg:mx-0">
                Sollicitez une <span className="gradient-text font-semibold">ressource experte, ingénieuse et polyvalente</span> dédiée au succès de votre organisation.
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#27013D] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors transform hover:scale-105 text-base sm:text-lg"
                >
                  Prenons rendez-vous
                </a>
              </div>
            </Animate>
          </div>

          {/* Vertical gradient line */}
          <div className="hidden lg:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none lg:-ml-16">
              <div className="relative w-1 h-80">
                  <div 
                      className="absolute inset-0 rounded-full"
                      style={{ 
                          backgroundImage: 'linear-gradient(to bottom, #27013D, #A41752)',
                      }}
                  ></div>
              </div>
          </div>

          {/* Right side: Image */}
          <Animate variant="pop" delay={300} className="relative z-10">
            <div>
              <img 
                src="https://images2.imgbox.com/4f/e9/diP7DQeM_o.jpg" 
                alt="Équipe de professionnels collaborant dans un bureau moderne" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </Animate>

        </div>
      </div>
    </section>
  );
};

export default Hero;