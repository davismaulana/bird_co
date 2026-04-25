import React, { useEffect, useRef } from 'react';
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
import ConsentBanner from './components/ConsentBanner';
import { useTracking } from './lib/tracking';

// Slug mappings for language switching and validation
const SLUG_MAPPINGS: Record<string, Record<string, string>> = {
  fr: {
    'steering-planning': 'pilotage-planification',
    'part-time-cfo': 'cfo-part-time',
    'diagnostic-restructuring': 'diagnostic-restructuration',
    'ma-services': 'services-ma',
    'privacy-policy': 'politique-de-confidentialite',
    'terms-of-service': 'conditions-generales-utilisation',
  },
  en: {
    'pilotage-planification': 'steering-planning',
    'cfo-part-time': 'part-time-cfo',
    'diagnostic-restructuration': 'diagnostic-restructuring',
    'services-ma': 'ma-services',
    'politique-de-confidentialite': 'privacy-policy',
    'conditions-generales-utilisation': 'terms-of-service',
  },
};

// Valid service slugs per language
const VALID_SERVICE_SLUGS: Record<string, string[]> = {
  fr: ['pilotage-planification', 'cfo-part-time', 'diagnostic-restructuration', 'services-ma'],
  en: ['steering-planning', 'part-time-cfo', 'diagnostic-restructuring', 'ma-services'],
};

// SEO metadata per page/language
const PAGE_META: Record<string, Record<string, { title: string; description: string }>> = {
  home: {
    fr: {
      title: 'Bird& | Votre bras droit stratégique et financier',
      description: 'Bird& accompagne les entreprises dans leur développement stratégique et financier. CFO Part-Time, M&A, Diagnostic & Restructuration.',
    },
    en: {
      title: 'Bird& | Your strategic and financial partner',
      description: 'Bird& supports companies in their strategic and financial development. Part-Time CFO, M&A, Diagnostic & Restructuring.',
    },
  },
  faq: {
    fr: {
      title: 'FAQ | Bird&',
      description: 'Questions fréquemment posées sur Bird& et nos services de conseil stratégique et financier.',
    },
    en: {
      title: 'FAQ | Bird&',
      description: 'Frequently asked questions about Bird& and our strategic and financial consulting services.',
    },
  },
  privacy: {
    fr: {
      title: 'Politique de Confidentialité | Bird&',
      description: 'Politique de confidentialité de Bird&. Découvrez comment nous protégeons vos données personnelles.',
    },
    en: {
      title: 'Privacy Policy | Bird&',
      description: 'Bird& privacy policy. Learn how we protect your personal data.',
    },
  },
  terms: {
    fr: {
      title: "Conditions Générales d'Utilisation | Bird&",
      description: "Conditions générales d'utilisation du site Bird&.",
    },
    en: {
      title: 'Terms of Service | Bird&',
      description: 'Terms of service for the Bird& website.',
    },
  },
  services: {
    fr: {
      'pilotage-planification': {
        title: 'Pilotage & Planification | Bird&',
        description: 'Construisez les outils indispensables au pilotage de votre entreprise : reporting, business plan, prévisionnel de trésorerie.',
      },
      'cfo-part-time': {
        title: 'CFO Part-Time | Bird&',
        description: 'Structurez votre croissance et exécutez votre stratégie financière avec un bras droit dédié à temps partagé.',
      },
      'diagnostic-restructuration': {
        title: 'Diagnostic & Restructuration | Bird&',
        description: 'Rassurez vos actionnaires et créanciers sur la santé financière de votre entreprise et votre capacité à la redresser.',
      },
      'services-ma': {
        title: 'Services M&A | Bird&',
        description: 'Accompagnement de vos opérations capitalistiques : cessions, levées de fonds, croissance externe, réorganisation.',
      },
    },
    en: {
      'steering-planning': {
        title: 'Steering & Planning | Bird&',
        description: 'Build the essential tools for optimal management: reporting, business plans, cash flow forecasts.',
      },
      'part-time-cfo': {
        title: 'Part-Time CFO | Bird&',
        description: 'Structure your growth and execute your financial strategy with a dedicated part-time right-hand partner.',
      },
      'diagnostic-restructuring': {
        title: 'Diagnostic & Restructuring | Bird&',
        description: 'Reassure your shareholders and creditors about your business financial health and your ability to turn it around.',
      },
      'ma-services': {
        title: 'M&A Services | Bird&',
        description: 'Support your capital projects: divestitures, fundraising, external growth, and reorganization.',
      },
    },
  },
};

// Helper to update SEO meta tags
const updateSEOMeta = (lang: string, pageKey: string, serviceSlug?: string) => {
  let meta: { title: string; description: string } | undefined;

  if (pageKey === 'service' && serviceSlug) {
    const serviceMeta = PAGE_META.services[lang] as Record<string, { title: string; description: string }> | undefined;
    meta = serviceMeta?.[serviceSlug];
  } else {
    meta = PAGE_META[pageKey]?.[lang];
  }

  if (!meta) {
    meta = PAGE_META.home[lang] || PAGE_META.home.fr;
  }

  // Update document title
  document.title = meta.title;

  // Update or create meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', meta.description);

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  const twitterDesc = document.querySelector('meta[property="twitter:description"]');

  if (ogTitle) ogTitle.setAttribute('content', meta.title);
  if (ogDesc) ogDesc.setAttribute('content', meta.description);
  if (twitterTitle) twitterTitle.setAttribute('content', meta.title);
  if (twitterDesc) twitterDesc.setAttribute('content', meta.description);
};

// Helper to update hreflang and canonical tags
const updateHreflangTags = (currentLang: string, pathname: string) => {
  // Remove existing hreflang and canonical tags
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
  document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());

  const baseUrl = 'https://www.birdandco.fr';
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/, '') || '/';

  // Get alternate path for the other language
  const otherLang = currentLang === 'fr' ? 'en' : 'fr';
  let alternatePath = pathWithoutLang;

  // Translate slugs for the alternate language
  const mappings = SLUG_MAPPINGS[currentLang];
  if (mappings) {
    Object.entries(mappings).forEach(([fromSlug, toSlug]) => {
      alternatePath = alternatePath.replace(fromSlug, toSlug);
    });
  }

  const currentUrl = `${baseUrl}/${currentLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  const alternateUrl = `${baseUrl}/${otherLang}${alternatePath === '/' ? '' : alternatePath}`;

  // Add canonical
  const canonical = document.createElement('link');
  canonical.setAttribute('rel', 'canonical');
  canonical.setAttribute('href', currentUrl);
  document.head.appendChild(canonical);

  // Add hreflang for current language
  const hreflangCurrent = document.createElement('link');
  hreflangCurrent.setAttribute('rel', 'alternate');
  hreflangCurrent.setAttribute('hreflang', currentLang);
  hreflangCurrent.setAttribute('href', currentUrl);
  document.head.appendChild(hreflangCurrent);

  // Add hreflang for alternate language
  const hreflangAlt = document.createElement('link');
  hreflangAlt.setAttribute('rel', 'alternate');
  hreflangAlt.setAttribute('hreflang', otherLang);
  hreflangAlt.setAttribute('href', alternateUrl);
  document.head.appendChild(hreflangAlt);

  // Add x-default (points to French as default)
  const hreflangDefault = document.createElement('link');
  hreflangDefault.setAttribute('rel', 'alternate');
  hreflangDefault.setAttribute('hreflang', 'x-default');
  hreflangDefault.setAttribute('href', `${baseUrl}/fr${pathWithoutLang === '/' ? '' : pathWithoutLang}`);
  document.head.appendChild(hreflangDefault);

  // Update og:url
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const twitterUrl = document.querySelector('meta[property="twitter:url"]');
  if (ogUrl) ogUrl.setAttribute('content', currentUrl);
  if (twitterUrl) twitterUrl.setAttribute('content', currentUrl);
};

// AppContent component moved OUTSIDE of App to prevent remounting (FIX #1)
interface AppContentProps {
  pathname: string;
  pathWithoutLang: string;
  currentLang: string;
  t: (key: string) => string;
}

const AppContent: React.FC<AppContentProps> = ({ pathname, pathWithoutLang, currentLang, t }) => {
  // Service detail pages: /:lang/service/:slug
  const serviceMatch = pathWithoutLang.match(/^\/service\/(.+)$/);
  if (serviceMatch) {
    const urlSlug = serviceMatch[1];

    // Validate slug is correct for current language, redirect if wrong (FIX #24)
    const validSlugs = VALID_SERVICE_SLUGS[currentLang] || [];
    if (!validSlugs.includes(urlSlug)) {
      // Check if it's a valid slug for the other language
      const otherLang = currentLang === 'fr' ? 'en' : 'fr';
      const otherValidSlugs = VALID_SERVICE_SLUGS[otherLang] || [];
      if (otherValidSlugs.includes(urlSlug)) {
        // Redirect to correct slug for current language
        const correctSlug = SLUG_MAPPINGS[otherLang]?.[urlSlug];
        if (correctSlug) {
          window.location.href = `/${currentLang}/service/${correctSlug}`;
          return null;
        }
      }
    }

    return (
      <div className="bg-white overflow-x-hidden">
        <Header pathname={pathname} />
        <ServiceDetailPage serviceId={urlSlug} />
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

const App: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const revealCleanupRef = useRef<(() => void) | undefined>(undefined); // FIX #20: Use ref instead of window

  // Normalize pathname to lowercase and redirect if needed (FIX #15)
  useEffect(() => {
    const lowercasePath = pathname.toLowerCase();
    if (pathname !== lowercasePath) {
      navigate(lowercasePath, { replace: true });
      return;
    }
  }, [pathname, navigate]);

  // Get current language from URL
  const currentLang = pathname.toLowerCase().startsWith('/en') ? 'en' : 'fr';

  // Remove language prefix for route matching
  const pathWithoutLang = pathname.replace(/^\/(en|fr)/i, '') || '/';

  // Redirect non-prefixed paths to language-prefixed paths (FIX #5)
  useEffect(() => {
    // Skip if path already has language prefix or is editor
    if (pathname.match(/^\/(en|fr)/i) || pathname === '/editor') {
      return;
    }

    // Detect browser language for redirect
    const browserLang = navigator.language.split('-')[0];
    const targetLang = browserLang === 'en' ? 'en' : 'fr';

    if (pathname === '/') {
      navigate(`/${targetLang}`, { replace: true });
    } else {
      // Redirect other non-prefixed paths
      navigate(`/${targetLang}${pathname}`, { replace: true });
    }
  }, [pathname, navigate]);

  // Extract language from URL and update i18n
  useEffect(() => {
    const langMatch = pathname.match(/^\/(en|fr)/i);
    if (langMatch) {
      const urlLang = langMatch[1].toLowerCase();
      if (i18n.language !== urlLang) {
        i18n.changeLanguage(urlLang);
      }
    }
  }, [pathname, i18n]);

  // Keep <html lang="..."> in sync with current language
  useEffect(() => {
    const lang = i18n.language || 'fr';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  // Update SEO meta tags based on current page (FIX #2, #3, #4, #9, #13, #14)
  useEffect(() => {
    const lang = currentLang;

    // Determine page key for SEO
    let pageKey = 'home';
    let serviceSlug: string | undefined;

    const serviceMatch = pathWithoutLang.match(/^\/service\/(.+)$/);
    if (serviceMatch) {
      pageKey = 'service';
      serviceSlug = serviceMatch[1];
    } else if (pathWithoutLang === '/faq') {
      pageKey = 'faq';
    } else if (pathWithoutLang === '/politique-de-confidentialite' || pathWithoutLang === '/privacy-policy') {
      pageKey = 'privacy';
    } else if (pathWithoutLang === '/conditions-generales-utilisation' || pathWithoutLang === '/terms-of-service') {
      pageKey = 'terms';
    }

    updateSEOMeta(lang, pageKey, serviceSlug);
    updateHreflangTags(lang, pathname);
  }, [pathname, currentLang, pathWithoutLang]);

  // Scroll to top on page navigation (FIX #18)
  useEffect(() => {
    // Don't scroll to top if there's a hash (anchor link)
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  // Reveal animation setup
  useEffect(() => {
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
      revealCleanupRef.current = cleanup; // FIX #20: Store in ref instead of window
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (revealCleanupRef.current) {
        revealCleanupRef.current();
      }
    };
  }, [pathname]);

  // Handle scrolling to anchor links on page load (FIX #19 - improved)
  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        // Use a slightly longer delay to ensure smooth scroll works
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return (
    <>
      <AppContent pathname={pathname} pathWithoutLang={pathWithoutLang} currentLang={currentLang} t={t} />
      <ConsentBanner />
      <Tracker />
    </>
  );
};

const Tracker: React.FC = () => {
  useTracking();
  return null;
};

export default App;
