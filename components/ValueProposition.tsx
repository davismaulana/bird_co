
import React from 'react';
import Animate from './Animate';

const propositionPoints = [
  {
    title: "Un support de haut niveau",
    description: () => (
      <>
        Un réseau constitué de <strong>spécialistes en finance d’entreprise</strong> qui combinent rigueur technique et capacité habile à prendre le recul nécessaire pour aider le dirigeant à la prise de décision. Un rôle clé pour <strong>soutenir votre stratégie financière</strong> et <strong>exécuter des projets stratégiques</strong>.
      </>
    ),
  },
  {
    title: "Votre partenaire de confiance",
    description: () => (
      <>
        Un partenaire <strong>proche du dirigeant</strong> impliqué dans les réflexions critiques. Un véritable "alter ego" pour le dirigeant capable de créer une relation de confiance permettant d’<strong>anticiper les besoins, soutenir la prise de décision, et gérer les sujets sensibles</strong>.
      </>
    ),
  },
  {
    title: "Catalyseur de progrès",
    description: () => (
      <>
       Un acteur clé capable de <strong>traduire la stratégie en actions concrètes, fixer des objectifs, suivre les résultats</strong>, et ajuster en conséquence pour avoir un impact direct sur la performance globale. Le bras-droit sait rythmer les missions confiées en se montrant <strong>pragmatique, dynamique et résilient</strong>.
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
    <section id="notre-proposition" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center p-8 md:p-16">
          <Animate variant="pop" className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://picsum.photos/800/1000?grayscale&random=30')` }}
            ></div>
            <div className="absolute inset-0 bg-[#E9E4F0]/80"></div>
          </Animate>
          <div className="relative text-left w-full">
            <Animate variant="pop" delay={200}>
                <h2 className="text-4xl lg:text-5xl text-[#27013D] leading-tight">
                À travers <strong className="font-black">Bird</strong>, nous mettons à votre disposition <strong className="font-black">un allié opérationnel essentiel</strong> à vos <strong className="font-black">défis quotidiens</strong>
                </h2>
            </Animate>
          </div>
        </div>
        <div className="bg-[#F4F2F8] p-8 md:p-16 flex items-center">
            <div className="gradient-border-l pl-8 w-full">
              <div className="space-y-10">
                {propositionPoints.map((point, index) => (
                  <div key={index}>
                    <Animate variant="pop" delay={index * 200}>
                      <h3 className="text-2xl font-bold text-black mb-3">{point.title}</h3>
                    </Animate>
                    <Animate variant="pop" delay={index * 200 + 100}>
                      <p className="text-gray-800 leading-relaxed">
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