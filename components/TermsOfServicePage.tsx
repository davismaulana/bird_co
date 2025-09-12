import React from 'react';
import Animate from './Animate';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animate variant="pop">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Conditions Générales <span className="gradient-text">de Vente</span>
                </h1>
            </Animate>
            <Animate variant="pop" delay={150}>
                <p className="mt-4 text-lg text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </Animate>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-gray-800 space-y-8 text-lg leading-relaxed">
                <Animate variant="pop">
                    <p>Les présentes Conditions Générales de Vente ("CGV") s'appliquent à toutes les prestations de services conclues par la société BIRD&CO auprès de ses clients professionnels ("le Client").</p>
                </Animate>

                <Animate variant="pop" delay={100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 1 - Devis et Commandes</h2>
                    <p>Toute intervention de BIRD&CO fait l'objet d'un devis préalable, adressé par BIRD&CO au Client. Ce devis précise la nature, le contenu, la durée et le coût des prestations. La commande est réputée ferme et définitive à compter de la réception par BIRD&CO du devis dûment daté et signé par le Client.</p>
                </Animate>

                <Animate variant="pop" delay={200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 2 - Tarifs et Modalités de paiement</h2>
                    <p>Les prix des prestations sont ceux détaillés dans le devis accepté par le Client. Ils sont exprimés en euros et hors taxes. Sauf convention contraire, les factures sont payables à 30 jours fin de mois à compter de leur date d'émission.</p>
                </Animate>

                <Animate variant="pop" delay={300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 3 - Obligations des parties</h2>
                    <p>BIRD&CO s'engage à exécuter les prestations avec tout le soin et la diligence requis, conformément aux usages de la profession. Le Client s'engage à fournir à BIRD&CO toutes les informations et documents nécessaires à la bonne exécution des prestations.</p>
                </Animate>

                <Animate variant="pop" delay={400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 4 - Confidentialité</h2>
                    <p>Chaque partie s'engage à ne pas divulguer les informations confidentielles reçues de l'autre partie. Les informations confidentielles s'entendent de toutes les informations, de quelque nature qu'elles soient, sur quelque support que ce soit, relatives à la structure, l'organisation, les affaires, les politiques internes, les projets et le personnel de chaque partie.</p>
                </Animate>

                <Animate variant="pop" delay={500}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 5 - Responsabilité</h2>
                    <p>La responsabilité de BIRD&CO ne peut être engagée qu'en cas de faute prouvée qui lui serait imputable. BIRD&CO est soumis à une obligation de moyens. En aucun cas BIRD&CO ne pourra être tenu responsable des dommages indirects subis par le Client.</p>
                </Animate>

                <Animate variant="pop" delay={600}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 6 - Droit applicable et Juridiction</h2>
                    <p>Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation et/ou à leur exécution relève de la compétence exclusive des tribunaux de Paris.</p>
                </Animate>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;