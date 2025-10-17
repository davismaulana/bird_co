
import React from 'react';
import Animate from './Animate';

const propositionPoints = [
  {
    title: "Un support de haut niveau",
    description: () => (
      <>
        Un <strong>réseau constitué de spécialistes en finance d'entreprise</strong> qui combinent rigueur technique et capacité habile à prendre le recul nécessaire pour aider le dirigeant à la prise de décision. Un rôle clé pour <strong>soutenir votre stratégie financière</strong> et <strong>exécuter vos projets</strong>.
      </>
    ),
  },
  {
    title: "Allié stratégique",
    description: () => (
      <>
        Un partenaire <strong>proche du dirigeant</strong> impliqué dans les réflexions critiques. Un véritable <strong>"alter ego"</strong> pour le dirigeant capable de créer une relation de confiance permettant d'<strong>anticiper les besoins, soutenir la prise de décision</strong>, et <strong>gérer les sujets sensibles</strong>.
      </>
    ),
  },
  {
    title: "Catalyseur de progrès",
    description: () => (
      <>
       Un acteur clé capable de <strong>traduire la stratégie en actions concrètes</strong>, <strong>fixer des objectifs</strong>, <strong>suivre les résultats</strong>, et <strong>ajuster en conséquence</strong> pour avoir un impact direct sur la performance globale. Le bras-droit sait rythmer les missions confiées en se montrant <strong>pragmatique, dynamique et résilient</strong>.
      </>
    ),
  },
  {
    title: "Flexible et agile",
    description: () => (
      <>
        Une capacité à <strong>intervenir dans des situations variées</strong> : structuration, accélération de croissance, levée de fonds, gestion de crise, restructuration. Une <strong>posture polyvalente</strong> qui s’adapte aux besoins spécifiques de l’entreprise et à son évolution.
      </>
    ),
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="min-h-screen grid">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#EBE5F0] flex items-center justify-center p-8 md:p-16">
          <div className="relative text-left w-full">
            <Animate variant="pop" delay={200}>
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#27013D] leading-tight">
                  Au-delà du conseil,<br />
                  Bird vous <strong className="font-black">accompagne</strong><br />
                  pour <strong className="font-black">relever vos défis</strong><br />
                  stratégiques et financiers&nbsp;avec&nbsp;<strong className="font-black">sérénité</strong>
                </h2>
            </Animate>
          </div>
        </div>
        <div className="bg-white flex items-center gradient-border-l">
            <div className="p-8 md:p-16 w-full">
              <div className="space-y-10">
                {propositionPoints.map((point, index) => (
                  <div key={index}>
                    <Animate variant="pop" delay={index * 200}>
                      <h3 className="text-2xl font-bold text-[#27013D] mb-3">{point.title}</h3>
                    </Animate>
                    <Animate variant="pop" delay={index * 200 + 100}>
                      <p className="text-gray-900 leading-relaxed text-base">
                        {point.description()}
                      </p>
                    </Animate>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
