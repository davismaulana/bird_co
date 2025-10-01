
import React, { useState } from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const faqs = [
  {
    category: "Général",
    items: [
      {
        question: "Qu’est-ce que Bird ?",
        answer: "Bird est un partenaire stratégique et financier qui aide les organisations à structurer, financer et développer leurs ambitions avec impact."
      },
      {
        question: "Pourquoi le nom Bird ?",
        answer: "Parce qu’il incarne la hauteur de vue, la trajectoire claire et l’élan nécessaire pour faire grandir vos projets."
      },
      {
        question: "Comment est né Bird ?",
        answer: "De la conviction qu’il faut conjuguer performance et sens pour relever les défis économiques, sociaux et environnementaux."
      },
      {
        question: "Dans quelles zones géographiques intervenez-vous ?",
        answer: "Nous accompagnons en France et à l’international, en présentiel ou à distance."
      },
      {
        question: "Qui se cache derrière Bird ?",
        answer: "Une équipe passionnée par la stratégie, la finance et l’impact positif."
      }
    ]
  },
  {
    category: "Services & expertise",
    items: [
      {
        question: "Quels services proposez-vous ?",
        answer: "Stratégie, modélisation financière, levée de fonds, structuration RSE/ESG, business plans et accompagnement opérationnel."
      },
      {
        question: "Aidez-vous à lever des fonds ?",
        answer: "Oui. Nous clarifions vos besoins, préparons vos dossiers et vous connectons aux bons partenaires financiers."
      },
      {
        question: "Est-ce que vous faites uniquement de la finance ?",
        answer: "Non. Nous travaillons aussi sur la stratégie, la gouvernance et l’impact durable."
      },
      {
        question: "Est-ce un accompagnement standard ?",
        answer: "Non, chaque mission est personnalisée selon votre réalité et vos enjeux."
      },
      {
        question: "Quels types d’organisations accompagnez-vous ?",
        answer: "Startups, PME, associations, écoles, institutions publiques, fonds à impact."
      },
      {
        question: "Est-ce que vous êtes spécialisés dans un secteur ?",
        answer: "Nous intervenons de façon transversale (éducation, ESS, économie circulaire, environnement, green tech, etc.)."
      }
    ]
  }
];

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-gray-900"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 text-[#27013D] ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 pr-12 text-sm text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const handleToggle = (categoryIndex: number, itemIndex: number) => {
        const indexKey = `${categoryIndex}-${itemIndex}`;
        setOpenIndex(openIndex === indexKey ? null : indexKey);
    };

    return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#27013D] to-gray-900 text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                Questions <span>Fréquentes</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 text-sm md:text-base text-gray-200 max-w-5xl">
                Trouvez les réponses à vos questions sur nos services, notre approche et notre expertise.
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href="/#contact"
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-sm"
                >
                  Poser une autre question
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className={categoryIndex > 0 ? 'mt-16' : ''}>
                    <Animate variant="pop">
                        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-8">{category.category}</h2>
                    </Animate>
                    <div className="stagger">
                        {category.items.map((item, itemIndex) => (
                            <Animate variant="pop" key={itemIndex}>
                                <AccordionItem
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === `${categoryIndex}-${itemIndex}`}
                                    onClick={() => handleToggle(categoryIndex, itemIndex)}
                                />
                            </Animate>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900">
                    Vous avez d'autres <span className="gradient-text">questions ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-sm text-gray-800 max-w-2xl mx-auto">
                    Notre équipe est à votre disposition pour discuter de vos projets et répondre à toutes vos interrogations.
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="https://calendly.com/contact-birdandco/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-sm"
                    >
                      Échanger avec un bras droit
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
