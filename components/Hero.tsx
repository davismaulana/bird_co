import React from 'react';
import Animate from './Animate';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Text content */}
          <div className="text-center lg:text-left">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span className="text-black">Bras droit</span><br />
                <span className="gradient-text whitespace-nowrap">stratégique et financier</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-800 max-w-xl mx-auto lg:mx-0">
                Sollicitez une <span className="gradient-text font-semibold">ressource experte, ingénieuse et polyvalente</span> dédiée au succès de votre organisation.
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href="https://calendly.com/contact-birdandco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#27013D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors transform hover:scale-105 text-lg"
                >
                  Prenons rendez-vous
                </a>
              </div>
            </Animate>
          </div>

          {/* Right side: Image */}
          <Animate variant="pop" delay={300}>
            <div>
              <img 
                src="https://images2.imgbox.com/2b/ac/rVShk4iB_o.jpg" 
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