import React, { useState } from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const faqs = [
  {
    category: "À propos de Bird / Identité",
    items: [
      {
        question: "Qu’est-ce que Bird exactement (cabinet, agence, partenaire) ?",
        answer: <>Bird est un <strong>partenaire stratégique et financier</strong>.<br />Nous aidons les dirigeants à structurer leur vision, renforcer leur modèle économique, piloter leur croissance et ancrer leur impact.<br />Nous ne sommes pas un cabinet de conseil classique : plus agile, plus impliqué, plus opérationnel.</>
      },
      {
        question: "Quelle est votre mission / votre vision à long terme ?",
        answer: <>Notre mission : <strong>aider les organisations à concilier performance économique, clarté stratégique et responsabilité durable</strong>.<br />Notre vision : un écosystème où stratégie, finances et impact ne s’opposent pas — ils se renforcent.</>
      },
      {
        question: "Comment est né Bird ? (origines, fondateur)",
        answer: <>Bird est né d’un constat : beaucoup de dirigeants portent une forte ambition, mais manquent d’un partenaire capable de leur apporter une structure robuste, une hauteur de vue et une exécution fiable.<br />Bird a été créé pour combler ce besoin : un pont entre vision, rigueur et impact.</>
      },
      {
        question: "Pourquoi le nom “Bird” ?",
        answer: <>Parce qu’un oiseau <strong>voit loin, prend de la hauteur et déploie ses ailes</strong>.<br />C’est l’essence de notre approche : apporter de la clarté, révéler un potentiel, donner de l’élan.</>
      },
      {
        question: "Dans quelles zones géographiques intervenez-vous ?",
        answer: <>Paris, France, Europe, international, missions ponctuelles en Asie — <strong>en présentiel, hybride ou 100% à distance</strong>.</>
      },
      {
        question: "Avec quels profils travaillez-vous ?",
        answer: <>Startups, PME en croissance, scale-ups, associations, ONG, institutions publiques.<br />Tous ceux qui veulent <strong>structurer, accélérer, se transformer ou intégrer plus d’impact dans leur modèle</strong>.</>
      }
    ]
  },
  {
    category: "Services & domaine d’intervention",
    items: [
      {
        question: "Quels services proposez-vous (stratégie, finances, RSE, accompagnement) ?",
        answer: <>
          Nos interventions s’articulent autour de quatre piliers :
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Stratégie</strong> : vision, plan stratégique, structuration d’offres.</li>
            <li><strong>Finance</strong> : business plan, modèles financiers, pilotage, KPIs, cash.</li>
            <li><strong>Organisation & croissance</strong> : structuration interne, process, levier d’efficacité.</li>
            <li><strong>Impact / RSE</strong> : stratégie durable, mesure d’impact, alignement avec les valeurs.</li>
          </ul>
        </>
      },
      {
        question: "Comment restructurer mon activité ?",
        answer: <>
          <p className="mb-2">La restructuration dépend toujours de votre situation.</p>
          <p className="mb-4">Avant toute décision, il est essentiel de réaliser un <strong>diagnostic économique, financier et opérationnel</strong>, souvent mené avec un expert, afin d’identifier les causes réelles des difficultés et les leviers d’action.</p>
          
          <p className="mb-2">Selon les conclusions du diagnostic, plusieurs options peuvent être envisagées :</p>
          
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>
              <strong>Plan de relance ou plan d’amélioration de la performance</strong><br />
              (optimisation des coûts, organisation, priorisation des activités, plan de trésorerie…)
            </li>
            <li>
              <strong>Procédures amiables</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li><strong>Mandat ad hoc</strong> : intervention d’un mandataire désigné par le tribunal pour faciliter les négociations.</li>
                <li><strong>Conciliation</strong> : procédure confidentielle permettant de renégocier les dettes avec les créanciers.</li>
              </ul>
            </li>
            <li>
              <strong>Procédures judiciaires</strong> (en cas de difficultés avérées)
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li><strong>Sauvegarde</strong> : protection de l’entreprise avant l’état de cessation de paiements.</li>
                <li><strong>Redressement judiciaire</strong> : poursuite d’activité avec élaboration d’un plan de redressement.</li>
                <li><strong>Liquidation judiciaire</strong> (ultime recours).</li>
              </ul>
            </li>
          </ul>

          <p className="mb-4">Dans certaines situations, il est nécessaire de travailler avec un <strong>avocat spécialisé en restructuring</strong> pour définir la meilleure stratégie, et de solliciter un <strong>administrateur judiciaire</strong> qui peut intervenir comme <strong>mandataire ad hoc</strong>, <strong>conciliateur</strong> ou <strong>administrateur dans une procédure collective.</strong></p>

          <p><strong>Chaque situation est unique. Bird évalue d’abord votre environnement, vos chiffres et votre dynamique opérationnelle avant de recommander la démarche la plus adaptée.</strong></p>
        </>
      },
      {
        question: "Pouvez-vous aider à lever des fonds / structurer des partenariats financiers ?",
        answer: <>Oui.<br />Préparation BP, deck, dataroom, analyse des besoins, mise en relation.</>
      },
      {
        question: "Travaillez-vous sur l’impact / RSE / développement durable ?",
        answer: <>Oui, de manière intégrée.<br />L’impact n’est pas un supplément : c’est une dimension qui renforce la performance et la crédibilité.</>
      },
      {
        question: "Est-ce que Bird propose une offre « clé en main » ou personnalisée ?",
        answer: <><strong>100% sur mesure.</strong><br />Chaque mission est adaptée à vos enjeux, à votre stade de développement et à votre vision.</>
      },
      {
        question: "Comment se déroule l’accompagnement (phases, durée) ?",
        answer: <>
          <ol className="list-decimal pl-5 mb-2 space-y-1">
            <li><strong>Exploration</strong></li>
            <li><strong>Diagnostic</strong></li>
            <li><strong>Modélisation / structuration</strong></li>
            <li><strong>Déploiement</strong></li>
            <li><strong>Pilotage & ajustements</strong></li>
          </ol>
          La durée va de <strong>3 semaines à plusieurs mois</strong>, selon l’ambition.
        </>
      },
      {
        question: "Quel est le coût / modèle tarifaire / mode de tarification ?",
        answer: <>
          Selon les projets :
          <ul className="list-disc pl-5 mt-1 mb-2 space-y-1">
            <li><strong>forfait</strong>,</li>
            <li><strong>jour/homme</strong>,</li>
            <li><strong>abonnement mensuel</strong>.</li>
          </ul>
          Transparence dès le cadrage.
        </>
      },
      {
        question: "Est-ce que vous faites uniquement de la finance ?",
        answer: "Non. Nous travaillons aussi sur la stratégie, la gouvernance et les opérations."
      },
      {
        question: "Est-ce que vous êtes spécialisés dans un secteur ?",
        answer: "Notre réseau de bras droit est complet et peut intervenir sur tous les secteurs."
      }
    ]
  },
  {
    category: "Collaboration & clients",
    items: [
      {
        question: "Comment démarrer une collaboration ?",
        answer: <>Un <strong>échange introductif gratuit</strong> permet de cadrer vos besoins et de définir la meilleure approche.<br />Puis une proposition structurée à partir d’un mini-diagnostic.</>
      },
      {
        question: "Quels types d’organisations accompagnez-vous ?",
        answer: <>
          Selon les enjeux auxquels ils sont confrontés nous accompagnons :
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>TPE, PME, ETI, Grandes entreprises</li>
            <li>Fonds d'investissements, Banque d'investissement</li>
            <li>Institutions publiques, associations</li>
          </ul>
          <p className="mt-2">Nous nous adressons également aux avocats, experts comptables, CSE, administrateurs judiciaires qui sollicitent notre réseau pour leurs clients.</p>
        </>
      },
      {
        question: "Est-ce que vous prenez des alternants / stagiaires / partenariats avec des écoles ?",
        answer: "Oui, sur des sujets ciblés (finance, analyse stratégique, impact)."
      },
      {
        question: "Comment garantir la confidentialité / sécurité des données ?",
        answer: "Clauses NDA systématiques, pratiques internes strictes, stockage sécurisé, datarooms chiffrées."
      },
      {
        question: "Quels sont les critères pour accepter un projet ?",
        answer: <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enjeux stratégiques réels</li>
            <li>Valeurs compatibles</li>
            <li>Transparence de la relation</li>
            <li>Volonté d’avancer</li>
            <li>Impact positif potentiel</li>
          </ul>
        </>
      }
    ]
  },
  {
    category: "Valeur & différenciation",
    items: [
      {
        question: "En quoi Bird est différent des cabinets de conseil “classiques” ?",
        answer: <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rigueur financière + ambition stratégique + impact</li>
            <li>Approche pragmatique, opérationnelle</li>
            <li>Relation partenaire, pas fournisseur</li>
            <li>Adaptation au rythme du dirigeant</li>
            <li>Livrables actionnables, pas théoriques</li>
          </ul>
        </>
      },
      {
        question: "Quels résultats vos clients peuvent-ils attendre ?",
        answer: <>
          Selon les missions :
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Vision clarifiée</li>
            <li>Modèle financier robuste</li>
            <li>KPIs fiables</li>
            <li>Décisions sécurisées</li>
            <li>Levée de fonds accélérée</li>
            <li>Organisation plus performante</li>
            <li>Stratégie d’impact activée</li>
          </ul>
        </>
      },
      {
        question: "Que signifie “réussir avec sens” chez Bird ?",
        answer: <>Être performant <strong>et</strong> responsable.<br />Aligner ambitions économiques, humaines et durables.</>
      },
      {
        question: "Quels engagements éthiques ou durables avez-vous ?",
        answer: "Transparence, sélection responsable des partenaires, méthodologies éthiques, orientation vers des projets ayant un sens pour les parties prenantes."
      }
    ]
  },
  {
    category: "Pratique & logistique",
    items: [
      {
        question: "Intervenez-vous à distance / en présentiel ?",
        answer: <>Les deux.<br />Nous travaillons régulièrement en <strong>hybride</strong>.</>
      },
      {
        question: "Combien de temps dure généralement une mission ?",
        answer: <>De <strong>3–6 semaines</strong> (audit, BP) à <strong>3–9 mois</strong> (déploiement, pilotage).</>
      },
      {
        question: "Quels sont les livrables ou outputs typiques ?",
        answer: <>
          <ul className="list-disc pl-5 space-y-1">
            <li>Plans stratégiques</li>
            <li>Business plan</li>
            <li>Modèles financiers</li>
            <li>KPIs & dashboards</li>
            <li>Scénarios & analyses</li>
            <li>Rapports d’impact</li>
            <li>Feuilles de route opérationnelles</li>
            <li>Investor deck</li>
          </ul>
        </>
      },
      {
        question: "Quelle est la démarche en cas de désaccord / révision de mission ?",
        answer: "Ajustement immédiat en transparence via échanges réguliers et validations intermédiaires."
      },
      {
        question: "Quelles garanties / assurances / responsabilités prenez-vous ?",
        answer: "Responsabilité professionnelle engagée dans le cadre des normes applicables.\nContrats structurés, obligations de moyens, collaboration sécurisée."
      }
    ]
  },
  {
    category: "Après-vente & suivi",
    items: [
      {
        question: "Proposez-vous un suivi après la mission ?",
        answer: <>
          Oui :
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Monitoring</li>
            <li>Pilotage mensuel</li>
            <li>Suivi post-levée</li>
            <li>Accompagnement de direction</li>
            <li>Advisory board ponctuel</li>
          </ul>
        </>
      },
      {
        question: "Comment mesurez-vous l’impact ou le succès des projets ?",
        answer: <>Par les <strong>KPIs stratégiques et financiers</strong> définis ensemble, mais aussi par les <strong>résultats qualitatifs</strong> (clarté, structuration, efficacité).</>
      },
      {
        question: "Peut-on revenir vers vous pour de nouvelles phases ou projets complémentaires ?",
        answer: <>Oui.<br />Beaucoup de clients prolongent sur :<br />organisation, nouvelle offre, levée suivante, repositionnement.</>
      },
      {
        question: "Avez-vous des témoignages / cas clients accessibles ?",
        answer: "Oui, certains peuvent être présentés en échange direct, dans le respect des NDA."
      }
    ]
  },
  {
    category: "Questions supplémentaires",
    items: [
      {
        question: "À quel moment dois-je faire appel à Bird ?",
        answer: "Lorsque vous devez structurer une vision, sécuriser vos décisions financières, préparer une levée, clarifier votre modèle, accélérer ou vous transformer."
      },
      {
        question: "Pouvez-vous intervenir auprès de mon comité de direction ?",
        answer: "Oui. Nous accompagnons CODIR, fondateurs, boards, directions financières et équipes opérationnelles."
      },
      {
        question: "Pouvez-vous travailler avec mes autres partenaires (experts-comptables, avocats, fonds, banques) ?",
        answer: "Oui. Bird peut coordonner, aligner ou challenger les différentes parties prenantes."
      },
      {
        question: "Accompagnez-vous les structures en difficulté ou en transformation ?",
        answer: "Oui, si la direction souhaite réellement restructurer ou relancer une dynamique."
      },
      {
        question: "Est-ce que Bird propose des ateliers ou formations internes ?",
        answer: "Oui : stratégie, finance, pilotage, impact — sur mesure."
      }
    ]
  }
];

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-gray-900"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
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
          <div className="pt-4 pr-12 text-base text-gray-700 leading-relaxed">
            {answer}
          </div>
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
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Questions <span>Fréquentes</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-6 text-base md:text-lg text-gray-200 max-w-5xl">
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
                        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">{category.category}</h2>
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
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
                    Vous avez d'autres <span className="gradient-text">questions ?</span>
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-base text-gray-800 max-w-3xl mx-auto">
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