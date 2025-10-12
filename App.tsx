
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
// import Deliverables from './components/Deliverables';
import ServiceDetailPage from './components/ServiceDetailPage';
import Expertise from './components/Expertise';
// import Methodology from './components/Methodology';
import TaskShowcase from './components/TaskShowcase';
// import AmbitionPage from './components/AmbitionPage';
import LoadingScreen from './components/LoadingScreen';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import BackToTopButton from './components/BackToTopButton';
import PillarsSection from './components/PillarsSection';
import StakesSection from './components/StakesSection';
import Animate from './components/Animate';
import FAQPage from './components/FAQPage';
import FAQSection from './components/FAQSection';
import ValueProposition from './components/ValueProposition';
import StairsAnimation from './components/StairsAnimation';

const App: React.FC = () => {
  const { pathname } = window.location;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return; // Don't setup observers until content is visible

    const revealEls = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window) || revealEls.length === 0) {
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

  // Handle scrolling to anchor links on page load
  useEffect(() => {
    if (isLoading) return;

    const { hash } = window.location;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Wait for the main content fade-in animation to complete before scrolling
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 550);

        return () => clearTimeout(timer);
      }
    }
  }, [isLoading]);

  const AppContent: React.FC = () => {
    if (pathname.startsWith('/service/')) {
      const serviceId = pathname.substring('/service/'.length);
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <ServiceDetailPage serviceId={serviceId} />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    /*
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
    */

    if (pathname === '/faq') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <FAQPage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    if (pathname === '/politique-de-confidentialite') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <PrivacyPolicyPage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    if (pathname === '/conditions-generales-utilisation') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <TermsOfServicePage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    return (
      <div className="bg-[#FFFFFF] overflow-x-hidden">
        <Header pathname={pathname} />
        <main>
          <Hero />
          <StakesSection />
          <ValueProposition />
          {/* <Methodology /> */}
          <TaskShowcase />
          <PillarsSection />
          <Personas />
          <Logos backgroundColor="bg-white" />
          <Stats />
          <Expertise />
          {/* <Deliverables /> */}
          <Team />
          <section className="bg-white">
            <div className="max-w-none">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <Animate variant="pop" className="h-[300px] lg:h-full lg:order-last">
                  <div className="h-[300px] lg:h-full">
                    <StairsAnimation />
                  </div>
                </Animate>
                <div className="lg:order-first flex items-center">
                  <div className="w-full px-6 sm:px-10 md:px-14 lg:px-20 py-6 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto lg:mx-0">
                      <Animate variant="pop">
                        <blockquote className="text-lg md:text-xl xl:text-2xl font-bold text-[#27013D] leading-snug">
                          "La meilleure façon de prédire l'avenir, c'est de le créer."
                        </blockquote>
                      </Animate>
                      <Animate variant="pop" delay={150}>
                        <p className="text-sm text-gray-800 mt-4">— Peter Drucker</p>
                      </Animate>
                      <Animate variant="pop" delay={300}>
                        <p className="text-gray-800 leading-relaxed text-sm mt-6">
                          Cette philosophie est au cœur de notre démarche. Nous ne nous contentons pas de réagir aux événements ; nous vous donnons les moyens de façonner activement l'avenir de votre entreprise, en transformant l'incertitude en opportunité et la vision en réalité.
                        </p>
                      </Animate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FAQSection />
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