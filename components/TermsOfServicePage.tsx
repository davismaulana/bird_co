import React from 'react';
import Animate from './Animate';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Conditions Générales <span className="gradient-text">d'Utilisation</span>
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
                    <p>Les présentes Conditions Générales d'Utilisation ("CGU") régissent l'accès et l'utilisation du site web de BIRD&CO (le "Site"). En accédant à ce Site, vous acceptez sans réserve les présentes conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre Site.</p>
                </Animate>

                <Animate variant="pop" delay={100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">1. Objet du Site</h2>
                    <p>Le Site a pour objet de présenter les services de conseil financier et stratégique proposés par BIRD&CO. Les informations fournies sur ce Site sont à titre informatif uniquement et ne constituent en aucun cas un conseil en investissement, un conseil juridique, une sollicitation ou une offre de services.</p>
                </Animate>

                <Animate variant="pop" delay={200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">2. Propriété intellectuelle</h2>
                    <p>L'ensemble des contenus de ce Site (textes, images, logos, graphiques, animations) est la propriété exclusive de BIRD&CO ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution ou utilisation, même partielle, est strictement interdite sans notre autorisation écrite préalable.</p>
                </Animate>

                <Animate variant="pop" delay={300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">3. Limitation de responsabilité</h2>
                    <p>BIRD&CO s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce Site, mais ne peut garantir leur exhaustivité. En conséquence, BIRD&CO décline toute responsabilité pour toute imprécision, inexactitude ou omission. Les informations du Site ne sont pas contractuelles.</p>
                    <p>BIRD&CO ne pourra être tenu responsable des dommages directs ou indirects (pertes de données, préjudices financiers, etc.) résultant de l'accès ou de l'utilisation de ce Site ou de tous les sites qui lui sont liés.</p>
                </Animate>

                <Animate variant="pop" delay={400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">4. Liens hypertextes</h2>
                    <p>Le Site peut contenir des liens hypertextes vers d'autres sites. BIRD&CO n'exerce aucun contrôle sur le contenu de ces sites tiers et n'assume aucune responsabilité quant à leur contenu ou à l'usage qui pourrait en être fait.</p>
                </Animate>
                
                <Animate variant="pop" delay={500}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">5. Droit applicable et Juridiction</h2>
                    <p>Les présentes CGU sont soumises au droit français. En cas de litige relatif à leur interprétation ou leur exécution, les tribunaux de Paris seront seuls compétents.</p>
                </Animate>

                <Animate variant="pop" delay={600}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">6. Modification des CGU</h2>
                    <p>BIRD&CO se réserve le droit de modifier les termes des présentes CGU à tout moment et sans préavis. Nous vous invitons à les consulter régulièrement pour prendre connaissance des éventuelles modifications.</p>
                </Animate>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
