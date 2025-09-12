
import React, { useState, useEffect } from 'react';
import { services, HamburgerIcon, CloseIcon } from '../constants';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Notre ambition', href: '/ambition' },
  { name: 'Notre proposition', href: '/#notre-proposition' },
  { name: 'Notre équipe', href: '/notre-equipe' },
  { name: 'Contact', href: '/#contact' },
];

const Header: React.FC<{ pathname: string }> = ({ pathname }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['accueil', 'notre-proposition', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(el => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    const handleScroll = () => {
      const headerOffset = 150;
      const reversedSections = [...sections].reverse();
      const currentSection = reversedSections.find(section => window.scrollY >= section.offsetTop - headerOffset);

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (window.scrollY < sections[0].offsetTop - headerOffset) {
        setActiveSection('accueil');
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

  return (
    <>
      <header 
        className={`bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'border-b border-gray-200' : 'border-b border-transparent'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="text-4xl font-black text-[#27013D] tracking-tight">
              BIRD&
            </a>
            
            <div className="hidden lg:flex items-center">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-2">
                {navItems.map((item) => {
                  if (item.name === 'Notre proposition') {
                    const isSectionActive = activeSection === 'notre-proposition';
                    const hasBackground = isDropdownOpen || isPropositionSectionActive;

                    let classes = 'nav-link-anchor px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center gap-2';
                    if (hasBackground) {
                        classes += ' bg-[#27013D] text-white';
                    } else {
                        if (isSectionActive && pathname === '/') {
                            classes += ' active text-[#27013D] font-semibold';
                        } else {
                            classes += ' text-black hover:bg-[#27013D] hover:text-white';
                        }
                    }
                    return (
                      <div 
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <a
                          href={item.href}
                          className={classes}
                        >
                          {item.name}
                        </a>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-72">
                            <div className="h-2" /> {/* Bridge to prevent premature closing */}
                            <div className="bg-white rounded-lg shadow-2xl ring-1 ring-black/5 py-2 z-50">
                              {services.map(service => {
                                const isServiceActive = pathname === `/service/${service.slug}`;
                                return (
                                  <a 
                                    key={service.slug}
                                    href={`/service/${service.slug}`}
                                    className={`block px-4 py-3 text-base transition-colors ${
                                      isServiceActive
                                      ? 'bg-[#27013D] text-white'
                                      : 'text-black hover:bg-[#27013D] hover:text-white'
                                    }`}
                                  >
                                    <span>{service.title}</span>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  const isPageLink = item.href !== '/' && !item.href.startsWith('/#');
                  const isAnchorLink = !isPageLink;
                  
                  const isPageActive = isPageLink && pathname === item.href;
                  
                  const getSectionId = (href: string) => {
                      if (href === '/') return 'accueil';
                      if (href.startsWith('/#')) return href.substring(2);
                      return null;
                  }
                  const sectionId = getSectionId(item.href);
                  const isSectionActive = pathname === '/' && sectionId ? activeSection === sectionId : false;

                  const finalClasses = ['px-4', 'py-2', 'rounded-lg', 'text-base', 'font-medium', 'transition-colors'];

                  if (isAnchorLink) {
                      finalClasses.push('nav-link-anchor');
                      if (isSectionActive) {
                          finalClasses.push('active', 'text-[#27013D]', 'font-semibold');
                      } else {
                          finalClasses.push('text-black', 'hover:bg-[#27013D]', 'hover:text-white');
                      }
                  } else { // isPageLink
                      if (isPageActive) {
                          finalClasses.push('bg-[#27013D]', 'text-white');
                      } else {
                          finalClasses.push('text-black', 'hover:bg-[#27013D]', 'hover:text-white');
                      }
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
                className="ml-6 bg-[#27013D] text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#1c0e2a] transition-colors whitespace-nowrap"
              >
                Prenons rendez-vous
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
            className="lg:hidden fixed inset-0 bg-white z-[100]"
        >
          <div 
            className="flex flex-col items-center justify-center h-full p-6 pb-10 overflow-y-auto"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="absolute top-6 right-5 p-2 text-black"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col items-center space-y-2 text-center w-full">
              {navItems.map((item) => {
                if (item.name === 'Notre proposition') {
                  return (
                    <div key={item.name} className="w-full">
                       <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-3xl font-semibold py-3 rounded-lg text-black hover:bg-[#27013D] hover:text-white transition-colors ${
                         isPropositionSectionActive && 'bg-[#27013D] text-white'
                       }`}>{item.name}</a>
                       <div className="mt-4 space-y-1">
                          {services.map((service) => {
                             const isServiceActive = pathname === `/service/${service.slug}`;
                             return (
                               <a
                                  key={service.slug}
                                  href={`/service/${service.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block text-center w-full py-2 text-xl rounded-lg transition-colors ${
                                    isServiceActive
                                    ? 'bg-[#27013D] text-white'
                                    : 'text-black hover:bg-[#27013D] hover:text-white'
                                  }`}
                               >
                                  <span>{service.title}</span>
                               </a>
                            );
                          })}
                       </div>
                    </div>
                  );
                }
                const isActive = (item.name === 'Notre ambition' && pathname === item.href) ||
                               (item.name === 'Notre équipe' && pathname === item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-3xl font-semibold text-black py-3 rounded-lg hover:bg-[#27013D] hover:text-white transition-colors ${
                      isActive && 'bg-[#27013D] text-white'
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
                  className="block w-full text-center bg-[#27013D] text-white px-6 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-colors text-xl"
              >
                  Prenons rendez-vous
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
