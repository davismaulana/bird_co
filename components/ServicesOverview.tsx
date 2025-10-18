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
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Un soutien <span className="gradient-text">à vos côtés</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
              Dans la <strong>gestion quotidienne</strong> comme dans les <strong>processus transactionnels</strong>
            </p>
          </Animate>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service: any, index) => {
            let iconSize;
            if (service.slug === 'services-ma') {
              iconSize = 'w-16 h-16';
            } else if (service.slug === 'diagnostic-restructuration') {
              iconSize = 'w-14 h-14';
            } else {
              iconSize = 'w-12 h-12';
            }
            
            return (
              <div
                key={index}
                className={`h-full service-card-animated service-card-animated--${index + 1}`}
              >
                <a href={`/service/${service.slug}`} className="block h-full group">
                  <div className="relative bg-white rounded-xl p-6 sm:p-8 flex flex-col items-start text-left h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:bg-[#27013D] group-hover:shadow-xl">
                    <div className="absolute top-8 right-8 flex-shrink-0 text-[#27013D] transition-colors duration-300 group-hover:text-white">
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
                    <h3 className="text-base font-bold text-black leading-tight transition-colors duration-300 group-hover:text-white mb-2 pr-16">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                    <p className="text-slate-700 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">{service.description}</p>
                    <div className="flex-grow" />
                    <div className="w-full mt-6 flex items-end justify-between text-sm font-semibold text-[#27013D] transition-colors duration-300 group-hover:text-white">
                      <span>En savoir plus</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;