import React from 'react';
import Animate from './Animate';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Politique de <span className="gradient-text">Confidentialité</span>
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </Animate>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
                <Animate variant="pop">
                    <p>BIRD&CO ("nous", "notre") s'engage à protéger la confidentialité des informations personnelles que vous nous confiez. Cette politique de confidentialité décrit comment nous collectons, utilisons, et protégeons vos données lorsque vous visitez et interagissez avec notre site web.</p>
                </Animate>

                <Animate variant="pop" delay={100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">1. Collecte des informations</h2>
                    <p>Nous collectons des informations lorsque vous utilisez notre formulaire de contact ou naviguez sur notre site. Les informations collectées peuvent inclure votre nom, votre adresse e-mail, le nom de votre entreprise, ainsi que des données de navigation (telles que l'adresse IP, le type de navigateur) via les cookies.</p>
                </Animate>

                <Animate variant="pop" delay={200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">2. Utilisation des informations</h2>
                    <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                        <li>Améliorer la performance et le contenu de notre site web.</li>
                        <li>Vous contacter par e-mail pour répondre à vos demandes d'information ou planifier un rendez-vous.</li>
                        <li>Assurer la sécurité de notre site web.</li>
                    </ul>
                </Animate>

                <Animate variant="pop" delay={300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">3. Confidentialité et Divulgation à des tiers</h2>
                    <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande ou dans le cadre d'obligations légales.</p>
                    <p>Nous pouvons partager des informations avec des partenaires de confiance (fournisseurs de services techniques, etc.) qui nous aident à exploiter notre site Web ou à mener nos affaires, à condition que ces parties conviennent de garder ces informations confidentielles.</p>
                </Animate>

                <Animate variant="pop" delay={400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">4. Protection des informations</h2>
                    <p>Nous mettons en œuvre une variété de mesures de sécurité techniques et organisationnelles pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage SSL pour protéger les informations sensibles transmises en ligne.</p>
                </Animate>

                 <Animate variant="pop" delay={500}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">5. Vos droits</h2>
                    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à <a href="mailto:contact@birdandco.fr" className="text-[#6D0037] hover:underline font-semibold">contact@birdandco.fr</a>.</p>
                </Animate>
                
                <Animate variant="pop" delay={600}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">6. Consentement</h2>
                    <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
                </Animate>
            </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
