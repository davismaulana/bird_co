
import React from 'react';
import Animate from './Animate';
import { services, ArrowRightIcon } from '../constants';

const ServicesOverview: React.FC = () => {
  return (
    <section id="notre-proposition" className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 group stagger">
          {services.map((service: any, index) => (
            <Animate
              key={index}
              variant="pop"
              className="h-full"
            >
              <a href={`/service/${service.slug}`} className="block h-full group">
                <div className="bg-white rounded-xl p-6 lg:p-4 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:shadow-2xl hover:shadow-violet-100/50">
                  <div className="h-20 w-20 flex items-center justify-center text-[#27013D] mb-2">
                    {React.cloneElement(service.icon, { className: service.iconClassName })}
                  </div>
                  <h3 className="text-sm font-bold text-black leading-tight h-10 flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#6D0037] mb-2 whitespace-nowrap">{service.subTitle}</p>
                  <p className="text-gray-800 text-xs leading-relaxed">{service.description}</p>
                  <div className="flex-grow" />
                  <div className="mt-4 flex items-center justify-center text-xs font-semibold text-[#27013D] transition-colors duration-300">
                    <span>En savoir plus</span>
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
