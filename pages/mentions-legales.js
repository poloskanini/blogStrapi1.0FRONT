import Container from '@/components/Container'
import Reveal from '../components/animations/Reveal'
import { motion } from "framer-motion"
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from "@/components/Footer"

const singleTitle = "Mentions légales"
const titlePage = "Menezes Avocat - Mentions légales"
const hrefPage = "/mentions-legales"

export default function mentionslegales() {
  return (
    <div>
      <Head>
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
      </Head>

      <Header />

      <Container>
        <BreadCrumb href={hrefPage} title={singleTitle}/>

        <Reveal>
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 mb-32">
            <h1 class="text-2xl font-semibold mb-6">Informations légales</h1>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Propriétaire du site Internet :</h2>
                <p>Menezes Avocats</p>
                <p>Adresse : 62 rue Condorcet 75009 PARIS</p>
                <p>Tél : 01 84 17 15 90</p>
                <p>Fax : 01 45 63 99 62</p>
                <p>Email : <a href="mailto:contact@menezes-avocat.com">contact@menezes-avocat.com</a></p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Créateur du site Internet :</h2>
                <p>N|B - Nicolas Barthès</p>
                <p><a href="http://www.nicolasbarthes.com" class="text-blue-500">www.nicolasbarthes.com</a></p>
                <p>Directeur de publication : Menezes-Avocat.com</p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Clause d’exonération de responsabilité</h2>
                <p>Ce site web contient de l&apos;information sur les services juridiques offerts par Menezes Avocat en France. Les informations contenues sur ce site web ne constituent en aucun cas des conseils ou des avis juridiques. Si vous souhaitez obtenir un avis juridique, nous vous prions de toujours consulter l&apos;un de nos avocats. Menezes Avocat décline toute responsabilité en cas d&apos;erreur ou d&apos;omission dans l&apos;information fournie sur ce site web. Les décisions prises sur base d&apos;informations fournies sur ce site web relèvent de la responsabilité exclusive du visiteur.</p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Droits d&apos;auteur</h2>
                <p>L’ensemble de ce site relève de la législation française sur le droit d’auteur et la propriété intellectuelle. En application de la loi du 11 mars 1957 (art. 41) et du code de la propriété intellectuelle du 1er juillet 1992, toute représentation, reproduction, modification, utilisation commerciale, partielle ou totale ainsi que tout transfert vers un autre site sont interdits, sauf autorisation de la société Menezes Avocat. Les logos, visuels et pdf sur ce site sont la propriété de la société Menezes Avocat. Toute reproduction intégrale ou partielle de ce site ou de l’un des éléments qui le composent est interdite. La société Menezes Avocat se réserve le droit de demander des dommages et intérêts en cas de contrefaçon et plus généralement d’atteinte à ses droits de propriété intellectuelle.</p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Gestion des liens</h2>
                <p>Le site contient des liens vers d’autres sites Web ou d’autres sources Internet. Dans la mesure où la société Menezes Avocat ne peut contrôler ces sites et ces sources externes, la société ne peut être tenue pour responsable de la mise à disposition de ces sites et sources externes, et ne peut supporter aucune responsabilité quant au contenu, publicités, produits, services ou tout autre matériel disponible sur ou à partir de ces sites ou sources externes.</p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Médiateur de la consommation</h2>
                <p>Conformément aux dispositions des articles L.612-1 et suivants du Code de la consommation, vous avez la possibilité, en cas de litige avec un avocat, de recourir gratuitement au Médiateur de la consommation qui sera le médiateur national près du Conseil National des Barreaux (CNB) et dont les coordonnées sont les suivantes : CNB, Médiateur à la consommation, 22 rue de Londres – 75009 PARIS.</p>
            </div>

            <div class="mb-4">
                <h2 class="text-lg font-semibold">Cookies</h2>
                <p>L’utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation. Un cookie est un élément qui ne permet pas d&apos;identifier l’utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. Le paramétrage de votre logiciel de navigation permet d’informer de la présence de cookies et éventuellement de la refuser selon la procédure décrite à l&apos;adresse suivante : <a href="http://www.cnil.fr" class="text-blue-500">www.cnil.fr</a></p>
                <p>Ce site utilise Google Analytics, un service d’analyse de site Internet fourni par Google Inc. (« Google »). Google Analytics utilise des cookies, qui sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs. Les données générées par les cookies concernant votre utilisation du site (y compris votre adresse IP) seront transmises et stockées par Google sur des serveurs situés aux Etats-Unis. Google utilisera cette information dans le but d’évaluer votre utilisation du site, de compiler des rapports sur l’activité du site à destination de son éditeur et de fournir d’autres services relatifs à l’activité du site et à l’utilisation d’Internet. Google est susceptible de communiquer ces données à des tiers en cas d&apos;obligation légale ou lorsque ces tiers traitent ces données pour le compte de Google, y compris notamment l’éditeur de ce site. Google ne recoupera pas votre adresse IP avec toute autre donnée détenue par Google. Vous pouvez désactiver l’utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur. Cependant, une telle désactivation pourrait empêcher l’utilisation de certaines fonctionnalités de ce site. En utilisant ce site Internet, vous consentez expressément au traitement de vos données nominatives par Google dans les conditions et pour les finalités décrites ci-dessus.</p>
                <p>Vous trouverez sur <a href="http://www.aboutcookies.org/" class="text-blue-500">www.aboutcookies.org</a> comment refuser ou supprimer les cookies pour les navigateurs les plus utilisés.</p>
            </div>

            <p class="text-sm">L’internaute reconnaît que l’utilisation du site internet de la société Menezes Avocat est régie par le droit français (réglementée par la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique).</p>
          </div>
        </Reveal>
        
      </Container>
      
      <Footer />

    </div>
  )
}