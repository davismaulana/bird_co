import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { services, HamburgerIcon, CloseIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '../constants';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC<{ pathname: string }> = ({ pathname }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';
  
  // Generate nav items with current language
  const getNavItems = () => [
    { name: t('common:nav.stakes'), href: `/${currentLang}/#vos-enjeux`, sectionId: 'vos-enjeux' },
    { name: t('common:nav.solutions'), href: `/${currentLang}/#solutions`, sectionId: 'solutions' },
    { name: t('common:nav.origin'), href: `/${currentLang}/#notre-equipe`, sectionId: 'notre-equipe' },
    { name: t('common:nav.about'), href: `/${currentLang}/faq` },
    { name: t('common:nav.contact'), href: `/${currentLang}/#contact`, sectionId: 'contact' },
  ];

  const navItems = getNavItems();

  // Service slugs based on language
  const getServiceSlug = (service: typeof services[0]) => {
    if (currentLang === 'en') {
      const slugMap: Record<string, string> = {
        'pilotage-planification': 'steering-planning',
        'cfo-part-time': 'part-time-cfo',
        'diagnostic-restructuration': 'diagnostic-restructuring',
        'services-ma': 'ma-services',
      };
      return slugMap[service.slug] || service.slug;
    }
    return service.slug;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<'main' | 'solutions'>('main');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const solutionsMenuTimer = useRef<number | null>(null);

  const handleSolutionsEnter = () => {
    if (solutionsMenuTimer.current) {
      clearTimeout(solutionsMenuTimer.current);
    }
    setIsDropdownOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsMenuTimer.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    let timer: number;
    if (isDropdownOpen) {
      timer = window.setTimeout(() => {
        setIsDropdownActive(true);
      }, 50);
    } else {
      setIsDropdownActive(false);
    }
    return () => clearTimeout(timer);
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      const timer = setTimeout(() => setMobilePanel('main'), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if we're on the homepage (with or without language prefix)
    const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';
    const isHomepage = pathWithoutLang === '/' || pathWithoutLang === '';
    
    if (!isHomepage) {
      setActiveSection('');
      return;
    }

    const sectionIds = ['vos-enjeux', 'solutions', 'notre-equipe', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerOffset = window.innerHeight * 0.3;
      const isAtBottom = window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const reversedSections = [...sections].reverse();
      const currentSection = reversedSections.find(section => scrollTop >= section.offsetTop - headerOffset);

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const isPropositionSectionActive = pathname.includes('/service/');
  const ctaText = t('common:cta.discussProjects');

  // Get homepage path with current language
  const getHomePath = () => `/${currentLang}`;
  
  // Check if current path is homepage
  const isHomepage = () => {
    const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';
    return pathWithoutLang === '/' || pathWithoutLang === '';
  };

  return (
    <>
      <header 
        className={`bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'border-b border-gray-200' : 'border-b border-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href={getHomePath()} className="header-logo-container text-3xl font-bold tracking-tight text-[#27013D]">
              <span className="sr-only">BIRD&</span>
              <span 
                className="header-logo-outline"
                aria-hidden="true"
              >
                BIRD&
              </span>
              <div className="header-logo-fill-wrapper" aria-hidden="true">
                <span className="header-logo-fill">BIRD&</span>
              </div>
            </a>
            
            <div className="hidden lg:flex items-center">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-2">
                {navItems.map((item) => {
                  const isSolutionsNav = item.sectionId === 'solutions';
                  
                  if (isSolutionsNav) {
                    const isSectionActive = activeSection === 'solutions';
                    const hasBackground = isDropdownOpen || isPropositionSectionActive || isSectionActive;

                    let classes = 'px-4 py-2 rounded-lg text-base font-normal transition-colors flex items-center gap-2';
                    if (hasBackground) {
                        classes += ' bg-[#27013D] text-white';
                    } else {
                        classes += ' text-black hover:bg-[#27013D] hover:text-white';
                    }
                    return (
                      <div 
                        key={item.name}
                        onMouseEnter={handleSolutionsEnter}
                        onMouseLeave={handleSolutionsLeave}
                      >
                        <a
                          href={item.href}
                          className={classes}
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen}
                          onClick={(e) => {
                            if (isHomepage()) {
                              e.preventDefault();
                              const element = document.getElementById('solutions');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, '', `/${currentLang}/#solutions`);
                              }
                            }
                          }}
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  }

                  const isPageLink = !item.href.includes('/#');
                  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';
                  const itemPathWithoutLang = item.href.replace(/^\/(en|fr)/, '') || '/';
                  const isPageActive = isPageLink && pathWithoutLang === itemPathWithoutLang;
                  
                  const isSectionActive = item.sectionId ? activeSection === item.sectionId : false;

                  const finalClasses = ['px-4', 'py-2', 'rounded-lg', 'text-base', 'font-normal', 'transition-colors'];

                  if (isPageActive || isSectionActive) {
                      finalClasses.push('bg-[#27013D]', 'text-white');
                  } else {
                      finalClasses.push('text-black', 'hover:bg-[#27013D]', 'hover:text-white');
                  }
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={finalClasses.join(' ')}
                      onClick={(e) => {
                        if (item.href.includes('/#') && isHomepage()) {
                          e.preventDefault();
                          const id = item.sectionId;
                          if (id) {
                            const element = document.getElementById(id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                              window.history.pushState(null, '', item.href);
                            }
                          }
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              {/* Language Switcher */}
              <div className="ml-4">
                <LanguageSwitcher />
              </div>

              {/* CTA Button */}
              <a 
                href="https://calendly.com/contact-birdandco/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-[#27013D] text-white px-3 py-2 rounded-full font-semibold text-sm hover:bg-[#1c0e2a] transition-colors whitespace-nowrap"
              >
                {ctaText}
              </a>
            </div>


            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label={t('common:accessibility.openMenu')}
                className="text-black p-2 -mr-2"
              >
                <HamburgerIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Solutions Dropdown Panel */}
      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsDropdownOpen(false)}
            onMouseEnter={handleSolutionsLeave}
          ></div>
          <div
            className={`fixed top-16 left-0 right-0 z-50 bg-white shadow-2xl dropdown-container ${isDropdownActive ? 'is-active' : ''}`}
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <div className="w-full px-2 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="dropdown-item" style={{'--delay': `${50 + index * 80}ms`} as React.CSSProperties}>
                    <a href={`/${currentLang}/service/${getServiceSlug(service)}`} className="block h-full group">
                      <div className="bg-white rounded-xl p-6 flex flex-col items-start text-left h-full transition-all duration-300 ease-in-out border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 group-hover:bg-[#27013D]">
                        <h3 className="text-base font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-200 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex-grow" />
                        <div className="w-full mt-4 flex items-center justify-between text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                          <span>{t('common:nav.learnMore')}</span>
                          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[100] transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="relative h-full w-full overflow-x-hidden">
          
          {/* Panel 1: Main Menu */}
          <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${mobilePanel === 'main' ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center h-full p-6 pb-10 overflow-y-auto">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={t('common:accessibility.closeMenu')}
                className="absolute top-6 right-5 p-2 text-black"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
              
              <nav className="flex flex-col items-center space-y-2 text-center w-full">
                {navItems.map((item) => {
                  const isPageLink = !item.href.includes('/#');
                  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';
                  const itemPathWithoutLang = item.href.replace(/^\/(en|fr)/, '') || '/';
                  const isPageActive = isPageLink && pathWithoutLang === itemPathWithoutLang;
                  const isSolutionsNav = item.sectionId === 'solutions';
                  
                  if (isSolutionsNav) {
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setMobilePanel('solutions')}
                        className={`relative flex justify-center items-center w-full text-xl font-normal py-3 px-4 rounded-lg hover:bg-[#27013D] hover:text-white transition-colors ${
                          (isPropositionSectionActive) ? 'bg-[#27013D] text-white' : 'text-black'
                        }`}
                        aria-expanded={false}
                      >
                        <span>{item.name}</span>
                        <ChevronRightIcon className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2" />
                      </button>
                    );
                  }
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        if (item.href.includes('/#') && isHomepage()) {
                            e.preventDefault();
                            const id = item.sectionId;
                            if (id) {
                              const element = document.getElementById(id);
                              if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                  window.history.pushState(null, '', item.href);
                              }
                            }
                        }
                      }}
                      className={`block w-full text-xl font-normal py-3 rounded-lg hover:bg-[#27013D] hover:text-white transition-colors ${
                        isPageActive ? 'bg-[#27013D] text-white' : 'text-black'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-12 w-full max-w-xs">
                <a
                    href="https://calendly.com/contact-birdandco/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-[#27013D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors text-base"
                >
                    {ctaText}
                </a>
              </div>
            </div>
          </div>

          {/* Panel 2: Solutions Menu */}
          <div className={`absolute inset-0 transition-transform duration-300 ease-in-out bg-white ${mobilePanel === 'solutions' ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              <div className="relative flex-shrink-0 flex items-center justify-center border-b border-gray-200 h-16">
                <button onClick={() => setMobilePanel('main')} aria-label={t('common:accessibility.backToMainMenu')} className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
                  <ChevronLeftIcon className="w-7 h-7" />
                </button>
                <h3 className="font-bold text-lg text-gray-900">{t('common:nav.ourSolutions')}</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label={t('common:accessibility.closeMenu')} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-black">
                  <CloseIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4">
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <a 
                      key={index} 
                      href={`/${currentLang}/service/${getServiceSlug(service)}`} 
                      className="block h-full group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-start text-left h-full transition-all duration-300 ease-in-out border border-gray-200 group-hover:bg-[#27013D]">
                        <h3 className="text-base font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#6D0037] mb-2 group-hover:text-violet-200 transition-colors duration-300">{service.subTitle}</p>
                        <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                          {service.description}
                        </p>
                        <div className="flex-grow" />
                        <div className="w-full mt-4 flex items-center justify-between text-sm font-semibold text-[#27013D] transition-colors duration-300 group-hover:text-white">
                          <span>{t('common:nav.learnMore')}</span>
                          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
