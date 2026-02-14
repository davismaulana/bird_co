import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';

const Personas: React.FC = () => {
  const { t } = useTranslation();
  const personaItems = t('pages:personas.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  const icons = [
    <img src="https://images2.imgbox.com/5c/0a/1tuigqwq_o.png" alt={personaItems[0]?.title + ' icon'} className="w-16 h-16 object-contain" />,
    <img src="https://images2.imgbox.com/88/a2/fagQVMCi_o.png" alt={personaItems[1]?.title + ' icon'} className="w-16 h-16 object-contain" />,
    <img src="https://images2.imgbox.com/4f/d9/hcbc6lOc_o.png" alt={personaItems[2]?.title + ' icon'} className="w-16 h-16 object-contain" />,
    <img src="https://images2.imgbox.com/78/c2/3dK6Hk8k_o.png" alt={personaItems[3]?.title + ' icon'} className="w-21 h-21 object-contain" />,
  ];
  return (
    <section id="personas" className="bg-gray-50 flex flex-col justify-center py-16 overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animate variant="pop">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
            </div>
          </Animate>
          <Animate variant="pop" delay={100}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {t('pages:personas.title')} <span className="gradient-text">{t('pages:personas.titleHighlight')}</span>
            </h2>
          </Animate>
        </div>
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
            {personaItems.map((persona, index) => (
              <Animate key={index} variant="pop">
                <div className="bg-white rounded-xl p-4 sm:p-5 h-full flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50">
                  <div className="flex-shrink-0 bg-gradient-to-br from-violet-100 to-pink-100 rounded-2xl p-4 shadow-inner flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                    {icons[index]}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-[#27013D] mb-2">{persona.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{persona.description}</p>
                  </div>
                </div>
              </Animate>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;