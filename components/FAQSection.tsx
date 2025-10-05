
import React, { useState } from 'react';
import Animate from './Animate';

const faqs = [
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
    answer: "Bird est né de la rencontre d’anciens consultants convaincus qu’il existe une autre façon d’accompagner les organisations. À mi-chemin entre l’expertise structurée du conseil et la flexibilité d’un consultant autonome, nous offrons un accompagnement sur mesure et accessible. Notre démarche ne remet pas en cause la valeur des cabinets traditionnels, mais vise à combler un vide : permettre à des organisations qui n’en ont pas toujours les moyens de bénéficier, elles aussi, d’un soutien stratégique et financier de haut niveau."
  },
  {
    question: "Quels types d’organisations accompagnez-vous ?",
    answer: "TPE, PME, ETI, Grandes entreprises, Fonds d'investissements, Banque d'investissement, institutions publiques, associations selon les enjeux auxquels elles sont confrontées. Nous nous adressons également aux avocats, experts comptables, CSE, administrateurs judiciaires."
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

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq-home" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Animate variant="pop">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-[#27013D] to-[#6D0037] rounded-full"></div>
                      </div>
                    </Animate>
                    <Animate variant="pop" delay={100}>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-gray-900">
                          Questions <span className="gradient-text">fréquentes</span>
                        </h2>
                    </Animate>
                </div>
                <div className="max-w-3xl mx-auto stagger">
                    {faqs.map((faq, index) => (
                        <Animate variant="pop" key={index}>
                            <AccordionItem
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </Animate>
                    ))}
                </div>
                 <Animate variant="pop" delay={300}>
                    <div className="mt-12 text-center">
                        <a
                          href="/faq"
                          className="inline-block bg-white border border-gray-300 text-[#27013D] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 text-sm"
                        >
                          Voir toutes les questions
                        </a>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default FAQSection;