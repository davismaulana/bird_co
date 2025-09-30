import React from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-[#27013D] to-[#6D0037] text-white flex items-center overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <HeroAnimation color="light" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl text-left">
            <Animate variant="pop">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Mentions Légales & <span>Confidentialité</span>
              </h1>
            </Animate>
            <Animate variant="pop" delay={200}>
              <p className="mt-4 text-base md:text-lg text-gray-200 max-w-5xl">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </Animate>
            <Animate variant="pop" delay={400}>
              <div className="mt-8 flex justify-start">
                <a
                  href="/"
                  className="inline-block text-center bg-white text-[#27013D] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105 text-base"
                >
                  Retour à l'accueil
                </a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
                <Animate variant="pop">
                    <h2 className="text-3xl font-bold text-[#27013D]">1. Éditeur du Site</h2>
                    <p>Le site birdandco.fr est édité par la société BIRD&CO, SASU au capital de 1.000,00 euros, immatriculée au RCS de Paris sous le numéro 984 766 595, dont le siège social est situé au 33 rue La Fayette, 75009 Paris.</p>
                    <p>N° de TVA intracommunautaire : FR50984766595</p>
                    <p>Email : <a href="mailto:contact@birdandco.fr" className="text-[#6D0037] hover:underline font-semibold">contact@birdandco.fr</a></p>
                </Animate>

                <Animate variant="pop" delay={100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">2. Directeur de la publication</h2>
                    <p>Le directeur de la publication est Monsieur Seydina SAMB, en sa qualité de Président de la société BIRD&CO.</p>
                </Animate>

                <Animate variant="pop" delay={200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">3. Hébergeur du Site</h2>
                    <p>Le site est hébergé par Webflow, Inc., dont le siège social est situé 398 11th Street, 2nd Floor, San Francisco, CA 94103, États-Unis.</p>
                </Animate>

                <Animate variant="pop" delay={300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">4. Propriété intellectuelle</h2>
                    <p>L'ensemble du site, y compris sa structure, son arborescence, ses textes, ses images, ses graphismes et tout autre élément le composant, constitue une œuvre protégée par le droit d'auteur et la propriété intellectuelle. Toute représentation, reproduction, modification, ou exploitation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit et sur quelque support que ce soit, sans l'autorisation préalable et écrite de BIRD&CO, est strictly interdite.</p>
                </Animate>

                 <Animate variant="pop" delay={400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">5. Données personnelles (RGPD)</h2>
                    <p>BIRD&CO s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site birdandco.fr, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.</p>
                    <p>Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par BIRD&CO pour la gestion de notre clientèle. Elles sont conservées pendant 3 ans et sont destinées au service commercial.</p>
                    <p>Conformément à la loi, vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : <a href="mailto:contact@birdandco.fr" className="text-[#6D0037] hover:underline font-semibold">contact@birdandco.fr</a>.</p>
                </Animate>
                
                <Animate variant="pop" delay={500}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">6. Cookies</h2>
                    <p>Le site birdandco.fr peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.</p>
                </Animate>

                <Animate variant="pop" delay={600}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">7. Droit applicable</h2>
                    <p>Le présent site et ses mentions légales sont soumis au droit français.</p>
                </Animate>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;