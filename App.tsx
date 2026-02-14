import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Footer from './components/Footer';
import ServicesOverview from './components/ServicesOverview';
import Stats from './components/Stats';
import Personas from './components/Personas';
import Team from './components/Team';
import Contact from './components/Contact';
import ServiceDetailPage from './components/ServiceDetailPage';
import Expertise from './components/Expertise';
import TaskShowcase from './components/TaskShowcase';
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

// Service slug mappings for URL translation
const serviceSlugMappings: Record<string, Record<string, string>> = {
  en: {
    'steering-planning': 'pilotage-planification',
    'part-time-cfo': 'cfo-part-time',
    'diagnostic-restructuring': 'diagnostic-restructuration',
    'ma-services': 'services-ma',
  },
  fr: {
    'pilotage-planification': 'pilotage-planification',
    'cfo-part-time': 'cfo-part-time',
    'diagnostic-restructuration': 'diagnostic-restructuration',
    'services-ma': 'services-ma',
  },
};

// Get the internal service ID from a URL slug
const getInternalServiceId = (slug: string, lang: string): string => {
  const mapping = serviceSlugMappings[lang];
  return mapping?.[slug] || slug;
};

const App: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Extract language from URL and update i18n
  useEffect(() => {
    const langMatch = pathname.match(/^\/(en|fr)/);
    if (langMatch) {
      const urlLang = langMatch[1];
      if (i18n.language !== urlLang) {
        i18n.changeLanguage(urlLang);
      }
    }
  }, [pathname, i18n]);

  // Keep <html lang="..."> and meta descriptions in sync with current language
  useEffect(() => {
    const lang = i18n.language || 'fr';
    document.documentElement.lang = lang;

    const descriptions: Record<string, string> = {
      fr: 'Bird& | Votre bras droit stratégique et financier',
      en: 'Bird& | Your strategic and financial partner',
    };
    const description = descriptions[lang] || descriptions.fr;

    const metaSelectors = [
      'meta[property="og:description"]',
      'meta[property="twitter:description"]',
    ];
    metaSelectors.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', description);
    });
  }, [i18n.language]);

  // Redirect root path to language-prefixed path
  useEffect(() => {
    if (pathname === '/') {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      const targetLang = browserLang === 'en' ? 'en' : 'fr';
      navigate(`/${targetLang}`, { replace: true });
    }
  }, [pathname, navigate]);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after i18n loads
    const initReveal = () => {
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

      // Fallback: if elements are still not visible after 500ms, force them visible
      // This handles edge cases where IntersectionObserver doesn't trigger
      const fallbackTimer = setTimeout(() => {
        revealEls.forEach(el => {
          if (!el.classList.contains('is-visible')) {
            el.classList.add('is-visible');
          }
        });
      }, 500);

      return () => {
        revealEls.forEach(el => io.unobserve(el));
        clearTimeout(fallbackTimer);
      };
    };

    // Use requestAnimationFrame to ensure DOM is painted
    const rafId = requestAnimationFrame(() => {
      const cleanup = initReveal();
      // Store cleanup function
      (window as any).__revealCleanup = cleanup;
    });

    return () => {
      cancelAnimationFrame(rafId);
      if ((window as any).__revealCleanup) {
        (window as any).__revealCleanup();
      }
    };
  }, [pathname]);

  // Handle scrolling to anchor links on page load
  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 550);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Get current language from URL
  const currentLang = pathname.startsWith('/en') ? 'en' : 'fr';
  
  // Remove language prefix for route matching
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';

  const AppContent: React.FC = () => {
    // Service detail pages: /:lang/service/:slug
    const serviceMatch = pathWithoutLang.match(/^\/service\/(.+)$/);
    if (serviceMatch) {
      const urlSlug = serviceMatch[1];
      const internalServiceId = getInternalServiceId(urlSlug, currentLang);
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <ServiceDetailPage serviceId={internalServiceId} />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    // FAQ page
    if (pathWithoutLang === '/faq') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <FAQPage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    // Privacy policy (supports both FR and EN slugs)
    if (pathWithoutLang === '/politique-de-confidentialite' || pathWithoutLang === '/privacy-policy') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <PrivacyPolicyPage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    // Terms of service (supports both FR and EN slugs)
    if (pathWithoutLang === '/conditions-generales-utilisation' || pathWithoutLang === '/terms-of-service') {
      return (
        <div className="bg-white overflow-x-hidden">
          <Header pathname={pathname} />
          <TermsOfServicePage />
          <Logos backgroundColor="bg-gray-50" />
          <Footer />
        </div>
      );
    }

    // Editor (no language prefix needed)
    if (pathname === '/editor') {
      return <Editor />;
    }

    // Homepage: /:lang or /:lang/
    if (pathWithoutLang === '/' || pathWithoutLang === '') {
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
                            {t('home:quote.text')}
                          </blockquote>
                        </Animate>
                        <Animate variant="pop" delay={200}>
                          <p className="mt-6 text-lg text-gray-800">{t('home:quote.author')}</p>
                        </Animate>
                        <Animate variant="pop" delay={300}>
                          <p className="mt-8 text-lg text-gray-800 leading-relaxed">
                            {t('home:quote.description')}
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
            <h1 className="text-4xl font-bold mb-4">{t('common:errors.404')}</h1>
            <p className="text-xl">{t('common:errors.pageNotFound')}</p>
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
