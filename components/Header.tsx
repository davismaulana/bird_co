
import React, { useState, useEffect } from 'react';
import { services, BrandLogo, HamburgerIcon, CloseIcon } from '../constants';

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
  
  const isPropositionSectionActive = pathname.startsWith('/service/');

  return (
    <>
      <header className={`bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'border-b border-gray-200' : 'border-b border-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/">
              <BrandLogo className="text-gray-900" />
            </a>
            
            <div className="hidden lg:flex items-center">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-2">
                {navItems.map((item) => {
                  if (item.name === 'Notre proposition') {
                    return (
                      <div 
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <a
                          href={item.href}
                          className={`px-4 py-2 rounded-lg text-base font-medium transition-colors flex items-center gap-2 ${
                            isDropdownOpen || isPropositionSectionActive
                            ? 'bg-[#27013D] text-white' 
                            : 'text-gray-700 hover:bg-[#27013D] hover:text-white'
                          }`}
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
                                      : 'text-gray-700 hover:bg-[#27013D] hover:text-white'
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

                  const isActive = (item.name === 'Notre ambition' && pathname === item.href) || 
                                 (item.name === 'Notre équipe' && pathname === item.href);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#27013D] text-white'
                          : 'text-gray-700 hover:bg-[#27013D] hover:text-white'
                      }`}
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
                className="text-gray-800 p-2 -mr-2"
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
              className="absolute top-6 right-5 p-2 text-gray-800"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col items-center space-y-2 text-center w-full">
              {navItems.map((item) => {
                if (item.name === 'Notre proposition') {
                  return (
                    <div key={item.name} className="w-full">
                       <a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-3xl font-semibold py-3 rounded-lg text-gray-900 hover:bg-[#27013D] hover:text-white transition-colors ${
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
                                    : 'text-gray-600 hover:bg-[#27013D] hover:text-white'
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
                    className={`block w-full text-3xl font-semibold text-gray-900 py-3 rounded-lg hover:bg-[#27013D] hover:text-white transition-colors ${
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
