
import React from 'react';
import Animate from './Animate';
import { services } from '../constants';

const ServicesOverview: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
              <span className="gradient-text">Un soutien à vos côtés</span>
            </h2>
          </Animate>
          <Animate variant="pop" delay={200}>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              dans la gestion quotidienne comme dans les processus transactionnels
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
              <a href={`/service/${service.slug}`} className="block h-full">
                <div className="bg-white rounded-xl p-6 lg:p-8 flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:opacity-50 hover:!opacity-100 hover:scale-105 hover:shadow-2xl hover:shadow-violet-100/50">
                  <div className="text-[#27013D] mb-6">{React.cloneElement(service.icon, { className: service.iconClassName || 'w-16 h-16' })}</div>
                  <h3 className="text-lg font-bold text-[#27013D] leading-tight min-h-[56px] flex items-center justify-center">
                    {service.title}
                  </h3>
                  <p className="text-base font-semibold text-[#6D0037] my-2 whitespace-nowrap">{service.subTitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
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
