import React from 'react';
import Animate from './Animate';
import HeroAnimation from './HeroAnimation';

const TermsOfServicePage: React.FC = () => {
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
                Conditions Générales <span>de Vente</span>
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
                    <h2 className="text-3xl font-bold text-[#27013D]">Article 1 - Objet et Champ d'application</h2>
                    <p>Les présentes Conditions Générales de Vente ("CGV") définissent les conditions dans lesquelles la société BIRD&CO fournit ses prestations de conseil à ses clients professionnels ("le Client"). Elles s'appliquent à toutes les prestations de services conclues par BIRD&CO.</p>
                </Animate>

                <Animate variant="pop" delay={100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 2 - Devis et Commandes</h2>
                    <p>Toute intervention de BIRD&CO fait l'objet d'un devis préalable, adressé par BIRD&CO au Client. Ce devis précise la nature, le contenu, la durée et le coût des prestations. La commande est réputée ferme et définitive à compter de la réception par BIRD&CO du devis dûment daté et signé par le Client.</p>
                </Animate>

                <Animate variant="pop" delay={200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 3 - Durée des Prestations</h2>
                    <p>La durée des prestations est définie dans le devis. Sauf accord contraire, les prestations sont conclues pour la durée spécifiée et ne sont pas tacitement renouvelables.</p>
                </Animate>

                <Animate variant="pop" delay={300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 4 - Tarifs et Modalités de paiement</h2>
                    <p>Les prix des prestations sont ceux détaillés dans le devis accepté par le Client. Ils sont exprimés en euros et hors taxes. Sauf convention contraire, les factures sont payables à 30 jours fin de mois à compter de leur date d'émission. Tout retard de paiement entraînera de plein droit l'application de pénalités de retard égales à trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros.</p>
                </Animate>

                <Animate variant="pop" delay={400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 5 - Obligations des parties</h2>
                    <p>BIRD&CO s'engage à exécuter les prestations avec tout le soin et la diligence requis, conformément aux usages de la profession. Le Client s'engage à fournir à BIRD&CO toutes les informations et documents nécessaires à la bonne exécution des prestations et à collaborer activement à la réussite du projet.</p>
                </Animate>

                <Animate variant="pop" delay={500}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 6 - Propriété Intellectuelle</h2>
                    <p>BIRD&CO reste propriétaire de ses outils, méthodes et savoir-faire développés antérieurement ou à l'occasion de l'exécution des prestations. Sous réserve du paiement intégral du prix, BIRD&CO cède au Client les droits de propriété intellectuelle sur les livrables spécifiquement créés pour lui. Le Client s'interdit de distribuer ou commercialiser les livrables sans l'accord préalable écrit de BIRD&CO.</p>
                </Animate>

                <Animate variant="pop" delay={600}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 7 - Confidentialité</h2>
                    <p>Chaque partie s'engage à ne pas divulguer les informations confidentielles reçues de l'autre partie. Les informations confidentielles s'entendent de toutes les informations, de quelque nature qu'elles soient, sur quelque support que ce soit, relatives à la structure, l'organisation, les affaires, les politiques internes, les projets et le personnel de chaque partie.</p>
                </Animate>

                <Animate variant="pop" delay={700}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 8 - Responsabilité</h2>
                    <p>La responsabilité de BIRD&CO ne peut être engagée qu'en cas de faute prouvée qui lui serait imputable. BIRD&CO est soumis à une obligation de moyens. En aucun cas BIRD&CO ne pourra être tenu responsable des dommages indirects (tels que perte de marché, préjudice commercial, etc.) subis par le Client.</p>
                </Animate>

                <Animate variant="pop" delay={800}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 9 - Non-sollicitation de personnel</h2>
                    <p>Le Client s’engage à ne pas débaucher, embaucher ou faire travailler, directement ou indirectement, tout collaborateur de BIRD&CO ayant participé à la réalisation des prestations, pendant toute la durée du contrat et pendant une période de douze (12) mois après sa cessation. En cas de violation, le Client sera redevable à BIRD&CO d'une indemnité forfaitaire égale à douze (12) mois du dernier salaire brut du collaborateur concerné.</p>
                </Animate>

                <Animate variant="pop" delay={900}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 10 - Indépendance des parties</h2>
                    <p>Les parties déclarent expressément être et demeurer des partenaires commerciaux indépendants. Le présent contrat ne saurait en aucun cas être considéré comme établissant une relation de subordination, une société de fait ou une coentreprise entre les parties. BIRD&CO exécute ses prestations en toute indépendance et organise son travail sans aucun lien de subordination avec le Client.</p>
                </Animate>

                <Animate variant="pop" delay={1000}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 11 - Résiliation</h2>
                    <p>En cas de manquement par l'une des parties à ses obligations, non réparé dans un délai de trente (30) jours à compter de la réception d'une mise en demeure, l'autre partie pourra résilier la prestation de plein droit, sans préjudice de tous dommages et intérêts. En cas de résiliation anticipée à l'initiative du Client non justifiée par une faute de BIRD&CO, les sommes déjà versées resteront acquises à BIRD&CO.</p>
                </Animate>

                <Animate variant="pop" delay={1100}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 12 - Force Majeure</h2>
                    <p>La responsabilité de BIRD&CO ne pourra pas être mise en œuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations découle d'un cas de force majeure, tel que défini par l'article 1218 du Code civil.</p>
                </Animate>

                <Animate variant="pop" delay={1200}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 13 - Références Commerciales</h2>
                    <p>Sauf opposition écrite du Client, BIRD&CO est autorisé à faire figurer le nom du Client et son logo sur ses documents commerciaux et sur son site internet à titre de référence.</p>
                </Animate>

                <Animate variant="pop" delay={1300}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 14 - Intégralité et Divisibilité</h2>
                    <p>Les présentes CGV et le devis accepté par le Client constituent l'intégralité de l'accord entre les parties. Si une ou plusieurs stipulations des présentes sont tenues pour non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.</p>
                </Animate>

                <Animate variant="pop" delay={1400}>
                    <h2 className="text-3xl font-bold text-[#27013D] pt-4">Article 15 - Droit applicable et Juridiction</h2>
                    <p>Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation et/ou à leur exécution relève de la compétence exclusive des tribunaux de Paris.</p>
                </Animate>
            </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;