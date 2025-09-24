
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Footer from './components/Footer';
import ServicesOverview from './components/ServicesOverview';
import Stats from './components/Stats';
import Personas from './components/Personas';
import Team from './components/Team';
import Contact from './components/Contact';
import Deliverables from './components/Deliverables';
import ServiceDetailPage from './components/ServiceDetailPage';
import Expertise from './components/Expertise';
// import Methodology from './components/Methodology';
import TaskShowcase from './components/TaskShowcase';
import AmbitionPage from './components/AmbitionPage';
import LoadingScreen from './components/LoadingScreen';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  const { pathname } = window.location;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return; // Don't setup observers until content is visible

    const revealEls = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver'in window) || revealEls.length === 0) {
      revealEls.forEach(el => el.classList.add('is-visible'));
      return;
    }

    document.querySelectorAll('.stagger').forEach(group => {
      Array.from(group.children)
        .filter(el => (el as HTMLElement).classList.contains('reveal'))
        .forEach((el, i) => (el as HTMLElement).style.setProperty('--i', String(i)));
    });

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          const delay = el.getAttribute('data-reveal-delay');
          if (delay) el.style.transitionDelay = delay;

          el.classList.add('is-visible');
          obs.unobserve(el);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealEls.forEach(el => io.observe(el));

    return () => {
      revealEls.forEach(el => io.unobserve(el));
    }
  }, [pathname, isLoading]);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
         document.body.style.overflow = 'unset';
      }, 500); // match transition duration
    }
  }, [isLoading]);

  const AppContent: React.FC = () => {
    if (pathname.startsWith('/service/')) {
      const serviceId = pathname.substring('/service/'.length);
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <ServiceDetailPage serviceId={serviceId} />
          <Logos />
          <Footer />
        </div>
      );
    }
  
    if (pathname === '/ambition') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <AmbitionPage />
          <Logos />
          <Footer />
        </div>
      );
    }
  
    if (pathname === '/politique-de-confidentialite') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <PrivacyPolicyPage />
          <Logos />
          <Footer />
        </div>
      );
    }

    if (pathname === '/conditions-generales-utilisation') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <TermsOfServicePage />
          <Logos />
          <Footer />
        </div>
      );
    }

    return (
      <div className="bg-[#FFFFFF] overflow-x-hidden">
        <Header pathname={pathname} />
        <main>
          <Hero />
          {/* <Methodology /> */}
          <ServicesOverview />
          <Logos />
          <Personas />
          <Stats />
          <Expertise />
          <Deliverables />
          <TaskShowcase />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
      <div 
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
        aria-hidden={isLoading}
      >
        <AppContent />
      </div>
      <BackToTopButton />
    </>
  );
};

export default App;
