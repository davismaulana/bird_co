
import React from 'react';
import Animate from './Animate';
import { services, ArrowRightIcon } from '../constants';

const ServicesOverview: React.FC = () => {
  return (
    <section id="solutions" className="bg-white min-h-screen flex flex-col justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Un soutien <span className="gradient-text">à vos côtés</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-base text-gray-800 mt-2">
              Dans la <strong>gestion quotidienne</strong> comme dans les <strong>processus transactionnels</strong>
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger">
          {services.map((service: any, index) => {
            const iconSize = service.slug === 'services-ma' 
              ? 'w-10 h-10' 
              : service.slug === 'diagnostic-restructuration' 
                ? 'w-9 h-9' 
                : service.slug === 'pilotage-planification'
                  ? 'w-[2.1rem] h-[2.1rem]' // 5% larger than w-8 (2rem)
                  : 'w-8 h-8';
            return (
              <Animate
                key={index}
                variant="pop"
                className="h-full"
              >
                <a href={`/service/${service.slug}`} className="block h-full group">
                  <div className="relative bg-white rounded-xl p-6 flex flex-col items-start text-left h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:bg-[#27013D] group-hover:shadow-xl">
                    <div className="absolute top-6 right-6 flex-shrink-0 text-[#27013D] transition-colors duration-300 group-hover:text-white">
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
                    <h3 className="text-sm font-bold text-black leading-tight transition-colors duration-300 group-hover:text-white mb-2 pr-12">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                    <p className="text-gray-800 text-xs leading-relaxed transition-colors duration-300 group-hover:text-white">{service.description}</p>
                    <div className="flex-grow" />
                    <div className="w-full mt-4 flex items-end justify-between text-xs font-semibold text-[#27013D] transition-colors duration-300 group-hover:text-white">
                      <span>En savoir plus</span>
                      <ArrowRightIcon className="w-4 h-4" />
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
