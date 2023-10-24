import Container from '@/components/Container'
import Reveal from '../components/animations/Reveal'
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from "@/components/Footer"

const singleTitle = "Politique de confidentialité"
const titlePage = "Menezes Avocat - Politique de confidentialité"
const hrefPage = "/politique-de-confidentialite"

export default function politiqueDeConfidentialite() {
  
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
            <h1 class="text-2xl font-semibold mb-6">Politique de Confidentialité - MENEZES AVOCAT</h1>
            <p class="text-gray-600 mb-6">La présente clause de confidentialité (la &quot;Clause de Confidentialité&quot;) est établie pour régir la collecte, l&apos;utilisation, la divulgation et la protection des informations personnelles des utilisateurs (les &quot;Utilisateurs&quot; ou &quot;Vous&quot;) du site web MENEZES AVOCAT (le &quot;Site&quot;). MENEZES AVOCAT est un cabinet d&apos;avocats spécialisé en droit du travail qui accorde une grande importance à la protection de vos informations personnelles. Nous nous engageons à respecter votre vie privée et à traiter vos informations personnelles de manière confidentielle.</p>

            <h2 class="text-2xl font-semibold mb-4">1. Collecte d&apos;Informations Personnelles</h2>
            <p class="text-gray-600 mb-6">Lorsque vous visitez notre Site, nous pouvons collecter des informations personnelles vous concernant. Les informations personnelles peuvent inclure, sans s&apos;y limiter, votre nom, votre adresse électronique, votre numéro de téléphone, votre adresse postale, et d&apos;autres informations que vous choisissez de nous fournir.</p>

            <h2 class="text-2xl font-semibold mb-4">2. Utilisation des Informations Personnelles</h2>
            <p class="text-gray-600 mb-6">Nous utilisons les informations personnelles collectées uniquement dans le but de vous fournir des services juridiques, de répondre à vos demandes ou de vous contacter pour des questions liées à notre domaine d&apos;expertise. Nous ne vendrons ni ne louerons vos informations personnelles à des tiers sans votre consentement explicite.</p>

            <h2 class="text-2xl font-semibold mb-4">3. Divulgation des Informations Personnelles</h2>
            <p class="text-gray-600">Nous pouvons divulguer vos informations personnelles dans les situations suivantes :
            </p>
              <ul class="list-disc list-inside pl-4 mb-4">
                <li>Lorsque cela est requis par la loi ou par une ordonnance de tribunal.</li>
                <li>Lorsque cela est nécessaire pour protéger nos droits légaux, notre sécurité ou notre intégrité, ou pour enquêter sur des activités suspectes ou des fraudes.</li>
                <li>Lorsque cela est nécessaire pour la fourniture de services juridiques conformément à notre engagement envers vous, ce qui peut inclure la communication d&apos;informations à des tiers, tels que des tribunaux, des arbitres, des experts, des avocats opposants et d&apos;autres parties impliquées dans des litiges.</li>
              </ul>

            <h2 class="text-2xl font-semibold mb-4">4. Sécurité des Informations Personnelles</h2>
            <p class="text-gray-600 mb-6">Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est totalement sécurisée, et nous ne pouvons garantir la sécurité absolue de vos informations.</p>

            <h2 class="text-2xl font-semibold mb-4">5. Cookies et Technologies Similaires</h2>
            <p class="text-gray-600 mb-6">Nous utilisons des cookies et des technologies similaires pour collecter des informations sur la façon dont vous interagissez avec notre Site. Ces informations peuvent être utilisées pour améliorer votre expérience sur le Site. Vous pouvez gérer vos préférences en matière de cookies en modifiant les paramètres de votre navigateur.</p>

            <h2 class="text-2xl font-semibold mb-4">6. Modifications de la Clause de Confidentialité</h2>
            <p class="text-gray-600 mb-6">Nous nous réservons le droit de modifier cette Clause de Confidentialité à tout moment. Toute modification sera affichée sur le Site avec la date de révision correspondante. Il est de votre responsabilité de consulter régulièrement cette Clause de Confidentialité pour rester informé des éventuelles mises à jour.</p>

            <h2 class="text-2xl font-semibold mb-4">7. Contact</h2>
            <p class="text-gray-600 mb-6">Si vous avez des questions concernant cette Clause de Confidentialité ou si vous souhaitez exercer vos droits en matière de protection des données, veuillez nous contacter à l&apos;adresse suivante :</p>
            <p class="text-gray-600">MENEZES AVOCAT</p>
            <p class="text-gray-600">62 rue Condorcet 75009 PARIS</p>
            <p class="text-gray-600">01 84 17 15 90</p>
            <p class="text-gray-600">contact@menezes-avocat.com</p>

            <p class="text-gray-600 mt-6">En acceptant les termes de cette Clause de Confidentialité et en utilisant notre Site, vous consentez à la collecte et à l&apos;utilisation de vos informations personnelles conformément aux conditions énoncées ci-dessus.</p>

            <p class="text-gray-600 mt-6">Dernière mise à jour : 23 octobre 2023</p>

          </div>
        </Reveal>

      </Container>

      <Footer />

    </div>
  )
}