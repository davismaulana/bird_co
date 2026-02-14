import React from 'react';
import { useTranslation } from 'react-i18next';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';
import {
    PARTNER_LOGOS,
    ENLARGED_LOGOS,
    SUPER_ENLARGED_LOGOS,
    ChevronDownIcon,
} from '../constants';

const allHeroLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

interface HeroProps {
    heading?: string;
    subheading?: string;
    backgroundImage?: any;
    ctaText?: string;
    ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
    heading,
    subheading,
    ctaText,
    ctaLink = "https://calendly.com/contact-birdandco/30min"
}) => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'fr';
    
    return (
        <section id="accueil" className="relative bg-white text-gray-900 flex flex-col min-h-screen overflow-hidden pt-16">
            <div className="w-full relative z-10 flex-grow flex flex-col items-center justify-center">
                <div className="grid md:grid-cols-2 gap-0 items-center relative w-full">

                    {/* Left side: Text content */}
                    <div className="text-center md:text-left relative z-10 md:pl-8 lg:pl-16">
                        <Animate variant="pop">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                                {heading ? (
                                    <span>{heading}</span>
                                ) : (
                                    <>
                                        <span>{t('home:hero.title1')}</span><br />
                                        <span className="gradient-text">{t('home:hero.title2')}</span>
                                    </>
                                )}
                            </h1>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                            <p className="mt-4 md:mt-6 text-xs sm:text-base md:text-lg text-gray-800 max-w-xl mx-auto md:mx-0 tracking-tight">
                                {subheading ? (
                                    <span>{subheading}</span>
                                ) : (
                                    <>
                                        {t('home:hero.subtitle1')} <span className="gradient-text font-semibold">{t('home:hero.subtitleHighlight')}</span><br />
                                        {t('home:hero.subtitle2')}
                                    </>
                                )}
                            </p>
                        </Animate>
                        <Animate variant="pop" delay={400}>
                            <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                                <a
                                    href={ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-center bg-[#27013D] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors transform hover:scale-105 text-sm"
                                >
                                    {ctaText || t('common:cta.discussProjects')}
                                </a>
                            </div>
                        </Animate>
                    </div>

                    {/* Vertical gradient line */}
                    <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 items-center justify-center pointer-events-none">
                        <div className="relative w-1 h-96">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    backgroundImage: 'linear-gradient(to bottom, #27013D, #6D0037)',
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Right side: Animation */}
                    <Animate variant="pop" delay={300} className="relative z-10 w-full aspect-square md:aspect-auto md:h-[500px] mr-0 md:pl-8">
                        <HeroAnimation />
                    </Animate>

                </div>

                {/* Scroll down arrow */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
                    <Animate variant="pop" delay={800}>
                        <a href={`/${currentLang}/#vos-enjeux`} aria-label={t('common:accessibility.scrollDown')} className="p-2 text-[#6D0037] animate-bounce block">
                            <ChevronDownIcon className="w-8 h-8" />
                        </a>
                    </Animate>
                </div>
            </div>

            <Animate variant="pop" delay={600} className="w-full pb-8">
                <div
                    className="w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <div className="flex w-max animate-scroll-x hover:[animation-play-state:paused] items-center">
                        {allHeroLogos.map((logo, index) => {
                            const isEnlarged = ENLARGED_LOGOS.includes(logo.name);
                            const isSuperEnlarged = SUPER_ENLARGED_LOGOS.includes(logo.name);

                            // Match sizing logic from Logos.tsx
                            let logoClassName = "max-h-14 max-w-[9rem] sm:max-h-16 sm:max-w-[10rem] object-contain"; // Base size
                            if (isEnlarged) {
                              logoClassName = "max-h-16 max-w-[10rem] sm:max-h-20 sm:max-w-[12rem] object-contain"; // ~20% larger
                            } else if (isSuperEnlarged) {
                              logoClassName = "max-h-20 max-w-[12rem] sm:max-h-24 sm:max-w-[15rem] object-contain"; // ~50% larger
                            }

                            return (
                                <a
                                    key={index}
                                    href={logo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={logo.name}
                                    className={`flex-shrink-0 px-8 py-4 flex items-center justify-center filter grayscale hover:filter-none opacity-60 hover:opacity-100 transition-all duration-300`}
                                >
                                    {React.cloneElement(logo.component, { className: logoClassName })}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Animate>

        </section>
    );
};

export default Hero;