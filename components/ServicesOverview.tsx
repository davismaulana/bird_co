import React from 'react';
import Animate from './Animate';
import { services, ArrowRightIcon } from '../constants';

const ServicesOverview: React.FC = () => {
  return (
    <section id="solutions" className="bg-gradient-to-b from-[#332932] to-[#4f3e69] flex flex-col justify-center py-16 md:py-24 min-h-screen">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger">
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
              <Animate key={index} variant="pop" className="h-full">
                <a href={`/service/${service.slug}`} className="block h-full group">
                  <div
                    className={`bg-white rounded-xl p-6 sm:p-8 flex flex-col text-left h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:bg-[#27013D] group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-105`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                          <h3 className="text-base font-bold text-black leading-tight transition-colors duration-300 group-hover:text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                          <p className="text-slate-700 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">{service.description}</p>
                      </div>
                      
                      <div className="flex-shrink-0 text-[#27013D] transition-colors duration-300 group-hover:text-white">
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
                    
                    <div>
                        <div className="w-full mt-6 flex items-end justify-between text-sm font-semibold text-[#27013D] transition-colors duration-300 group-hover:text-white">
                          <span>En savoir plus</span>
                          <ArrowRightIcon className="w-5 h-5" />
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