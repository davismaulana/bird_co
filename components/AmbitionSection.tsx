import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';

const AmbitionSection: React.FC = () => {
    const { t } = useTranslation();
    const stats = t('pages:ambitionSection.stats', { returnObjects: true }) as string[];

    return (
        <section className="bg-[#27013D] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
                <div className="grid grid-cols-1 gap-10 items-center">
                    <div className="text-center max-w-3xl mx-auto">
                        <Animate variant="pop">
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
                                {t('pages:ambitionSection.title')}
                            </h2>
                        </Animate>
                        <Animate variant="pop" delay={100}>
                            <p className="mt-6 text-base text-gray-300">
                                {t('pages:ambitionSection.description')}
                            </p>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                            <ul className="mt-8 space-y-3 text-gray-300 inline-block text-left text-sm">
                                {stats.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-violet-400 mr-3 font-bold text-lg leading-tight mt-1">{item.charAt(0)}</span>
                                        <span className="flex-1">{item.substring(1).trim()}</span>
                                    </li>
                                ))}
                            </ul>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="https://calendly.com/contact-birdandco/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-center bg-white text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform hover:scale-105"
                                >
                                    {t('pages:ambitionSection.cta')}
                                </a>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AmbitionSection;