
import React from 'react';
import Animate from './Animate';
import { TrendingUpIcon, PartnershipIcon, BriefcaseIcon } from '../constants';

const benefits = [
  {
    icon: <BriefcaseIcon />,
    title: 'Des Missions à Fort Impact',
    description: "Intervenez sur des projets stratégiques et accompagnez des entreprises ambitieuses dans leurs défis de croissance, de structuration et de transformation.",
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Un Développement Accéléré',
    description: "Bénéficiez d'une courbe d'apprentissage rapide en étant exposé à des situations complexes et variées, sous le mentorat d'associés expérimentés.",
  },
  {
    icon: <PartnershipIcon />,
    title: 'Une Culture d\'Excellence et de Proximité',
    description: "Rejoignez une structure à taille humaine qui valorise l'engagement, l'esprit d'équipe et la relation de confiance avec nos clients.",
  },
];

const openPositions = [
    {
        title: "Consultant Financier Senior",
        location: "Paris, France",
        type: "CDI",
        description: "Vous piloterez des missions de conseil financier (due diligence, modélisation, restructuration) et encadrerez des consultants juniors. Vous serez un interlocuteur clé pour nos clients.",
    },
    {
        title: "Analyste M&A",
        location: "Paris, France",
        type: "CDI",
        description: "Vous interviendrez sur l'ensemble du processus de transaction (analyse, valorisation, préparation de la documentation) pour des PME et ETI en forte croissance.",
    },
];

const CarrieresPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Rejoignez l'aventure <span className="gradient-text">bird&co</span>
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
                    Nous recherchons des talents passionnés par la finance d'entreprise, désireux de s'investir dans le succès de nos clients.
                </p>
            </Animate>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Animate variant="pop">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Pourquoi nous rejoindre ?
              </h2>
            </Animate>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger">
            {benefits.map((benefit, index) => (
              <Animate key={index} variant="pop">
                <div className="bg-gray-50 rounded-xl p-8 h-full text-center border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 hover:-translate-y-1">
                  <div className="mb-5 text-[#27013D] inline-block">{React.cloneElement(benefit.icon, { className: 'w-10 h-10' })}</div>
                  <h3 className="text-2xl font-bold text-[#27013D] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="offres" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <Animate variant="pop">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos offres</h2>
                </Animate>
            </div>
            <div className="max-w-3xl mx-auto space-y-6 stagger">
                {openPositions.map((job, index) => (
                    <Animate key={index} variant="pop">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-lg">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                                <h3 className="text-2xl font-bold text-[#27013D]">{job.title}</h3>
                                <div className="mt-2 sm:mt-0 flex items-center gap-4 text-sm text-gray-500">
                                    <span>{job.location}</span>
                                    <span className="bg-violet-100 text-[#27013D] font-semibold px-2 py-0.5 rounded-full">{job.type}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-5">{job.description}</p>
                            <a href="mailto:contact@birdandco.fr?subject=Candidature - [Titre du poste]" className="font-semibold text-[#6D0037] hover:underline">Postuler</a>
                        </div>
                    </Animate>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Aucune offre ne vous correspond ?
                </h2>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Nous sommes toujours à la recherche de profils exceptionnels. Envoyez-nous votre candidature spontanée.
                </p>
            </Animate>
            <Animate variant="pop" delay={300}>
                <div className="mt-8">
                    <a
                      href="mailto:contact@birdandco.fr?subject=Candidature spontanée"
                      className="inline-block bg-[#27013D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#1c0e2a] transition-transform hover:scale-105 text-lg"
                    >
                      Envoyer ma candidature
                    </a>
                </div>
            </Animate>
        </div>
      </section>
    </div>
  );
};

export default CarrieresPage;
