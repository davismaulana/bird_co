
import React, { useEffect, useRef } from 'react';
import Animate from './Animate';
import { services, ArrowRightIcon } from '../constants';

const ServicesOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopTimeoutRef = useRef<number | null>(null);
  const staggerTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.reveal-custom-logic')) as HTMLElement[];
    if (cards.length === 0) return;

    const staggerDelay = 600; // ms
    // Last card starts at (3 * 600ms). Reveal is 1000ms. Last content anim finishes 1600ms after reveal.
    const totalAnimationTime = (cards.length - 1) * staggerDelay + 1000 + 1600;
    const postAnimationDelay = 5000; // 5s

    const cleanup = () => {
      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
        loopTimeoutRef.current = null;
      }
      staggerTimeoutsRef.current.forEach(clearTimeout);
      staggerTimeoutsRef.current = [];
      cards.forEach(card => card.classList.remove('is-visible'));
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const animateLoop = () => {
          staggerTimeoutsRef.current.forEach(clearTimeout);
          staggerTimeoutsRef.current = [];

          cards.forEach((card, index) => {
            card.classList.remove('is-visible');
            const timeoutId = window.setTimeout(() => {
              card.classList.add('is-visible');
            }, index * staggerDelay);
            staggerTimeoutsRef.current.push(timeoutId);
          });

          loopTimeoutRef.current = window.setTimeout(() => {
            cards.forEach(card => card.classList.remove('is-visible'));
            setTimeout(animateLoop, 100); // Short delay for CSS to reset
          }, totalAnimationTime + postAnimationDelay);
        };
        animateLoop();
      } else {
        cleanup();
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  return (
    <section id="solutions" className="bg-gradient-to-b from-[#332932] to-[#4f3e69] min-h-screen flex flex-col justify-center py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Un soutien <span className="gradient-text-light">à vos côtés</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base md:text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Dans la <strong className="text-white">gestion quotidienne</strong> comme dans les <strong className="text-white">processus transactionnels</strong>
            </p>
          </Animate>
        </div>
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service: any, index) => {
            let iconSize;
            if (service.slug === 'services-ma') {
              iconSize = 'w-16 h-16';
            } else if (service.slug === 'cfo-part-time') {
              iconSize = 'w-12 h-12';
            } else {
              iconSize = 'w-14 h-14';
            }
            
            return (
              <Animate 
                key={index} 
                variant="pop" 
                className="h-full reveal-custom-logic" 
              >
                <a href={`/service/${service.slug}`} className="block h-full group">
                  <div
                    className="bg-white rounded-xl p-6 sm:p-8 flex flex-col text-left h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:bg-[#27013D] group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-105"
                  >
                    <div className="service-card-content">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                            <div className="anim-child" style={{'--i': 1} as React.CSSProperties}>
                              <h3 className="text-base font-bold text-black leading-tight transition-colors duration-300 group-hover:text-white mb-2">
                                {service.title}
                              </h3>
                            </div>
                            <div className="anim-child" style={{'--i': 2} as React.CSSProperties}>
                              <p className="text-sm font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                            </div>
                            <div className="anim-child" style={{'--i': 3} as React.CSSProperties}>
                              <p className="text-slate-700 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">{service.description}</p>
                            </div>
                        </div>
                        
                        <div className="flex-shrink-0 text-[#27013D] transition-colors duration-300 group-hover:text-white anim-child" style={{'--i': 0} as React.CSSProperties}>
                          {service.darkIcon ? (
                            <>
                              <div className="group-hover:hidden">
                                {React.cloneElement(service.icon, { className: `${iconSize} object-contain` })}
                              </div>
                              <div className="hidden group-hover:block">
                                {React.cloneElement(service.darkIcon, { className: `${iconSize} object-contain` })}
                              </div>
                            </>
                          ) : (
                            React.cloneElement(service.icon, { className: `${iconSize} object-contain` })
                          )}
                        </div>
                      </div>

                      <div className="flex-grow" />
                      
                      <div className="anim-child" style={{'--i': 4} as React.CSSProperties}>
                          <div className="w-full mt-6 flex items-end justify-between text-sm font-semibold text-[#27013D] transition-colors duration-300 group-hover:text-white">
                            <span>En savoir plus</span>
                            <ArrowRightIcon className="w-5 h-5" />
                          </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;