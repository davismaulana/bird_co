import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import PillarsSection from './components/PillarsSection';
import StakesSection from './components/StakesSection';
import Animate from './components/Animate';
import FAQPage from './components/FAQPage';
import FAQSection from './components/FAQSection';
import ValueProposition from './components/ValueProposition';
import HeroAnimation from './components/HeroAnimation';
import Editor from './components/Editor';

const App: React.FC = () => {

  const { pathname, hash } = useLocation();

  useEffect(() => {
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
  }, [pathname]);

  // Handle scrolling to anchor links on page load
  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Wait for the main content fade-in animation to complete before scrolling
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 550);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

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

    if (pathname === '/editor') {
      return <Editor />;
    }

    if (pathname === '/') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <main>
            <Hero />
            <StakesSection />
            <ServicesOverview />
            <ValueProposition />
            <Expertise />
            <TaskShowcase />
            <PillarsSection />
            <Personas />
            <Stats />
            <Logos />
            <Team />
            <section id="citation" className="min-h-screen grid">
              <div className="bg-white grid">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  <Animate variant="pop" className="relative h-[300px] sm:h-[350px] md:h-full md:order-last">
                    <HeroAnimation />
                  </Animate>
                  <div className="md:order-first flex items-center">
                    <div className="w-full px-6 sm:px-8 md:px-14 lg:px-20 py-6 flex flex-col justify-center">
                      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <Animate variant="pop" delay={100}>
                          <blockquote className="text-2xl md:text-3xl xl:text-4xl font-bold text-[#27013D] leading-tight">
                            "La meilleure façon de prédire l'avenir, c'est de le créer."
                          </blockquote>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                          <p className="mt-6 text-lg text-gray-800">— Peter Drucker</p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                          <p className="mt-8 text-lg text-gray-800 leading-relaxed">
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
            <div id="contact">
              <Contact />
              <Footer />
            </div>
          </main>
        </div>
      );
    }

    // Default catch-all (404)
    return (
      <div className="bg-white min-h-screen flex flex-col">
        <Header pathname={pathname} />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl">Page non trouvée</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <>
      <AppContent />
    </>
  );
};

export default App;