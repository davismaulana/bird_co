import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';

const ValueProposition: React.FC = () => {
  const { t } = useTranslation();
  const items = t('pages:valueProposition.items', { returnObjects: true }) as Array<{ title: string; description: string }>;
  return (
    <section className="grid min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#EBE5F0] flex items-center justify-center p-8 sm:p-12 md:p-16">
          <div className="relative text-left w-full">
            <Animate variant="pop" delay={200}>
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#27013D] leading-tight" dangerouslySetInnerHTML={{ __html: t('pages:valueProposition.heading') }} />
            </Animate>
          </div>
        </div>
        <div className="bg-white flex items-center gradient-border-l">
            <div className="p-8 sm:p-12 md:p-16 w-full">
              <div className="space-y-10">
                {items.map((point, index) => (
                  <div key={index}>
                    <Animate variant="pop" delay={index * 200}>
                      <h3 className="text-2xl font-bold text-[#27013D] mb-3">{point.title}</h3>
                    </Animate>
                    <Animate variant="pop" delay={index * 200 + 100}>
                      <p className="text-gray-900 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: point.description }} />
                    </Animate>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;