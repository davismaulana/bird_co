
import React from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';
import { services } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative bg-white text-gray-900 flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-grow flex items-center pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative w-full">
          
          {/* Left side: Text content */}
          <div className="text-center md:text-left relative z-10 lg:pl-16">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span>Bras droit</span><br />
                <span className="gradient-text">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-sm md:text-base text-gray-800 max-w-xl mx-auto md:mx-0">
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
              <div className="relative w-1 h-80">
                  <div 
                      className="absolute inset-0 rounded-full"
                      style={{ 
                          backgroundImage: 'linear-gradient(to bottom, #27013D, #6D0037)',
                      }}
                  ></div>
              </div>
          </div>

          {/* Right side: Animation */}
          <Animate variant="pop" delay={300} className="relative z-10 w-full aspect-square md:aspect-auto md:h-[400px] lg:h-[500px]">
            <HeroAnimation />
          </Animate>

        </div>
      </div>
      
      {/* Service Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 mt-16 md:mt-12">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between">
          {services.map((service, index) => (
            <Animate key={index} variant="pop" delay={600 + index * 100}>
              <a
                href={`/service/${service.slug}`}
                className="text-xl font-normal text-center text-gray-900 hover-gradient-text transition-colors duration-300"
              >
                {service.title}
              </a>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
