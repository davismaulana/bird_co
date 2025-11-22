import React, { useState, useEffect, useRef } from 'react';
import { services, HamburgerIcon, CloseIcon, ArrowRightIcon, ChevronRightIcon, ChevronLeftIcon } from '../constants';

const navItems = [
  { name: 'Enjeux', href: '/#vos-enjeux' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'À l\'origine', href: '/#notre-equipe' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/#contact' },
];

const Header: React.FC<{ pathname: string }> = ({ pathname }) => {
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
    }, 200); // Delay to allow moving mouse to the menu
  };

  useEffect(() => {
    let timer: number;
    if (isDropdownOpen) {
      // Small delay to ensure elements are in the DOM before animation starts.
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
      // Reset panel state when menu is closed
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
    const mainPath = '/';
    if (pathname !== mainPath && !pathname.startsWith('/#')) {
        setActiveSection('');
        return;
    }

    const sectionIds = ['vos-enjeux', 'solutions', 'notre-equipe', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerOffset = window.innerHeight * 0.3; // Trigger active state sooner
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

  const isPropositionSectionActive = pathname.startsWith('/service/');
  const ctaText = 'Réserver une consultation';

  return (
    <>
      <header 
        className={`bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'border-b border-gray-200' : 'border-b border-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="header-logo-container text-3xl font-bold tracking-tight text-[#27013D]">
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
                  if (item.name === 'Solutions') {
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
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  }

                  const isPageLink = item.href !== '/' && !item.href.startsWith('/#');
                  
                  const isPageActive = isPageLink && pathname === item.href;
                  
                  const getSectionId = (href: string) => {
                      if (href.startsWith('/#')) return href.substring(2);
                      return null;
                  }
                  const sectionId = getSectionId(item.href);
                  const isSectionActive = sectionId ? activeSection === sectionId : false;

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
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>

              {/* CTA Button */}
              <a 
                href="https://calendly.com/contact-birdandco/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 bg-[#27013D] text-white px-3 py-2 rounded-full font-semibold text-sm hover:bg-[#1c0e2a] transition-colors whitespace-nowrap"
              >
                {ctaText}
              </a>
            </div>


            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Ouvrir le menu"
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
                    <a href={`/service/${service.slug}`} className="block h-full group">
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
                          <span>En savoir plus</span>
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
                aria-label="Fermer le menu"
                className="absolute top-6 right-5 p-2 text-black"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
              
              <nav className="flex flex-col items-center space-y-2 text-center w-full">
                {navItems.map((item) => {
                  const isPageLink = item.href !== '/' && !item.href.startsWith('/#');
                  const isPageActive = isPageLink && pathname === item.href;
                  
                  if (item.name === 'Solutions') {
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
                      onClick={() => setIsMobileMenuOpen(false)}
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
                <button onClick={() => setMobilePanel('main')} aria-label="Retour au menu principal" className="absolute left-4 top-1/2 -translate-y-1/2 p-2">
                  <ChevronLeftIcon className="w-7 h-7" />
                </button>
                <h3 className="font-bold text-lg text-gray-900">Nos Solutions</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fermer le menu" className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-black">
                  <CloseIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4">
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service, index) => (
                    <a 
                      key={index} 
                      href={`/service/${service.slug}`} 
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
                          <span>En savoir plus</span>
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