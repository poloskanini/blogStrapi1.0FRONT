import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Image from 'next/image'
import Reveal from '../components/animations/Reveal'
import { motion } from "framer-motion"
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import VerticalSlideFeatures from '@/components/VerticalSlideFeature'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const variants = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    }
  }
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

const timeline = [
  {
    name: 'Master 2 Droit social – Université Paris II Panthéon-Assas',
    description:
      'Spécialisation en droit du travail et droit de la sécurité sociale.',
    date: '2009',
    dateTime: '2009-01',
  },
  {
    name: 'Prestation de serment',
    description:
      'Entrée dans la profession d’avocat après obtention du CAPA. Premières collaborations en cabinets spécialisés en droit social.',
    date: '2012',
    dateTime: '2012-01',
  },
  {
    name: 'Expérience en cabinets parisiens - Enseignement',
    description:
      'Accompagnement de clients dans des contextes RH complexes : restructurations, contentieux prud’homaux, négociations collectives, contrôles URSSAF...',
    date: '2012–2017',
    dateTime: '2012-2017',
  },
  {
    name: 'Création du cabinet MENEZES AVOCATS',
    description:
      'Un cabinet indépendant dédié au droit du travail et au droit de la sécurité sociale : conseil, contentieux, formation, accompagnement stratégique.',
    date: '2017',
    dateTime: '2017-01',
  },
];

const people = [
  {
    name: 'Sandrine MENEZES',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=800',
  },
  {
    name: 'Nordal le Landais',
    role: 'Témoin de mariage',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Angélique Barthès',
    role: "Designeuse d'expressions uniques",
    imageUrl:
      'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Émilie Potez',
    role: 'Secrétaire',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Draps Souillés',
    role: 'Souilleur de draps',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Antoine Zschunke',
    role: 'Expert en rhums arrangés',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

export default function lecabinet() {

  const singleTitle = "Le Cabinet"
  const titlePage = "Menezes Avocat - Le Cabinet"
  const hrefPage = "/le-cabinet"

  return (
    <>

      <Head>
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
      </Head>

      <Header />

        <Container>
          <BreadCrumb href={hrefPage} title={singleTitle}/>
          <Reveal>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 mb-12">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 text-justify text-neutral-500">
                <h1 className="text-4xl font-bold tracking-wide text-neutral-800 sm:text-5xl">Le Cabinet</h1>
                <p className={`text-lg md:text-xl lg:text-xl font-normal leading-1 tracking-tight text-justify mt-8`}>
                <strong className='font-bold'>Sandrine MENEZES</strong> accompagne les carrières et les entreprises dans les moments où tout peut basculer.
                </p>
                <p className="mt-6 leading-7 text-lg md:text-xl lg:text-xl font-normal leading-1 tracking-tight text-justify">
                <strong className='font-bold'>Rupture de contrat, litige individuel ou collectif, contrôle URSSAF, tensions internes ou simples incertitudes juridiques </strong>: face à ces enjeux, elle intervient avec une méthode fondée sur l’écoute, la stratégie et l’exigence. Parce que derrière chaque situation se cachent des enjeux humains, économiques et souvent émotionnels, Sandrine MENEZES apporte <strong className='font-bold'>un regard expert, un soutien constant et un accompagnement sur mesure.</strong>
                </p>
       
                <p className="mt-6 leading-7 text-lg md:text-xl lg:text-xl font-normal leading-1 tracking-tight text-justify">
                  Depuis plus de 15 ans, elle exerce en <strong className='font-bold'> droit du travail et en droit de la sécurité sociale</strong>, auprès de salariés, dirigeants et entreprises. Elle connaît la complexité des relations professionnelles et la nécessité de réponses claires, solides et adaptées à chaque situation.
                </p>
                <p className="mt-6 leading-7 text-lg md:text-xl lg:text-xl font-normal leading-1 tracking-tight text-justify">
                <strong className='font-bold'>Diplômée de l’Université Paris II Panthéon-Assas, titulaire du Certificat de Spécialisation en droit du travail</strong>, formée au sein de cabinets de référence, elle a fondé son propre cabinet avec une ambition : proposer une pratique indépendante, humaine, sans automatisme.
                </p>

              </div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
                >
                  <motion.div variants={images} className="order-first md:order-none flex w-full justify-center sm:justify-center">
                    <Image
                      src="/assets/images/Photos cabinet/SandrineMenezes_BenoitBeauchaine2024-01.jpg"
                      alt="Sandrine Menezes"
                      className="rounded-2xl bg-gray-50 object-cover w-full h-auto max-h-[100vh] lg:max-h[100vh] sm:w-[32rem] sm:h-auto [@media(min-width:1280px)]:object-top"
                      width={800}
                      height={1000}
                    />
                  </motion.div>
                </motion.div>
            </div>

          </Reveal>

          {/* Text */}
          <div className="overflow-hidden bg-white mb-16">
            <div className="mx-auto max-w-max lg:max-w-7xl">
              {/* Titre animé */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mb-8 md:mb-2"
              >
                <motion.div
                  custom={0}
                  variants={textVariants}
                  className="max-w-prose text-base lg:max-w-none"
                >
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Chaque dossier est traité avec rigueur, vision, et engagement.
                  </p>
                </motion.div>
              </motion.div>

              {/* Paragraphe animé */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <svg
                  className="absolute bottom-20 hidden md:block md:[overflow-anchor:none]"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                  style={{ right: "-132px" }}
                >
                  <defs>
                    <pattern
                      id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={304} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                </svg>

                <div className="relative md:bg-white">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-20 text-justify">
                    <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                      {[
                        "Au-delà des textes et des procédures, elle privilégie une approche fondée sur l’écoute, la réflexion stratégique et la recherche de solutions concrètes.",
                        "Qu’il s’agisse de défendre vos intérêts, de vous accompagner dans des choix décisifs ou de prévenir les risques, elle adopte une démarche sur mesure, pensée pour résoudre le présent et sécuriser l’avenir."
                      ].map((text, i) => (
                        <motion.p
                          key={i}
                          custom={i + 1}
                          variants={textVariants}
                          className="mt-6 leading-7 text-lg md:text-xl lg:text-xl font-normal tracking-tight text-justify"
                        >
                          {text}
                        </motion.p>
                      ))}
                    </div>

                    <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                      {[
                        "Consciente de l’évolution constante du monde du travail, elle s’appuie sur un réseau de partenaires et d’avocats de confiance — experts en droit des affaires, fiscalité, droit pénal du travail, gestion de crise ou ressources humaines — pour offrir une réponse globale, cohérente et opérationnelle.",
                        "Ce qui guide sa pratique : l’indépendance d’esprit, la loyauté dans la relation, et la conviction que le droit du travail est un outil vivant, au service des réalités humaines autant qu’économiques."
                      ].map((text, i) => (
                        <motion.p
                          key={i}
                          custom={i + 3} // continuer la cascade
                          variants={textVariants}
                          className="mt-6 leading-7 text-lg md:text-xl lg:text-xl font-normal tracking-tight text-justify"
                        >
                          {text}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* TimeLine VerticalSlideFeatures */}
          {/* <VerticalSlideFeatures /> */}

          {/* Timeline section */}
          <div className="mx-auto max-w-7xl px-6 mb-24 lg:px-8 mt-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {/* 2009 */}
              <div>
                <time
                  dateTime="2009-01"
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  2009
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Master 2 Droit social
                </p>
                <ul className="mt-2 text-base leading-7 text-gray-600 list-disc list-inside space-y-1">
                  <li>Université Paris II Panthéon-Assas</li>
                  <li>Spécialisation en droit du travail et droit de la sécurité sociale</li>
                </ul>
              </div>

              {/* 2012 */}
              <div>
                <time
                  dateTime="2012-01"
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  2012
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Prestation de serment
                </p>
                <ul className="mt-2 text-base leading-7 text-gray-600 list-disc list-inside space-y-1">
                  <li>Entrée dans la profession d’avocat après obtention du CAPA</li>
                  <li>Premières collaborations en cabinets spécialisés en droit social</li>
                </ul>
              </div>

              {/* 2012–2017 */}
              <div>
                <time
                  dateTime="2012-2017"
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  2012–2017
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Expérience en cabinets parisiens - Enseignement
                </p>
                <ul className="mt-2 text-base leading-7 text-gray-600 list-disc list-inside space-y-1">
                  <li>Accompagnement de clients dans des contextes RH complexes :</li>
                  <li>Restructurations</li>
                  <li>Contentieux prud’homaux</li>
                  <li>Négociations collectives</li>
                  <li>Contrôles URSSAF</li>
                  <li>Chargée d’enseignement en droit de la sécurité sociale à l’Université Paris-Saclay</li>
                </ul>
              </div>

              {/* 2017 */}
              <div>
                <time
                  dateTime="2017-01"
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  2017
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Création du cabinet MENEZES AVOCATS
                </p>
                <ul className="mt-2 text-base leading-7 text-gray-600 list-disc list-inside space-y-1">
                  <li>Cabinet indépendant dédié au droit du travail et à la sécurité sociale</li>
                  <li>Conseil</li>
                  <li>Contentieux</li>
                  <li>Formation</li>
                  <li>Accompagnement stratégique</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Team Section */}

          <TeamSection />

          {/* L'équipe */}
          {/* <div className="bg-white pb-32">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre équipe</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Nous sommes un groupe d&apos;avocats et de juristes passionnés par ce que nous faisons, et entièrement dévoués à fournir les meilleurs résultats pour nos clients.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <Image
                      className="aspect-[3/2] w-full rounded-2xl object-cover"
                      src={person.imageUrl}
                      alt="team-partner"
                      width={500}
                      height={500}
                    />
                    <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{person.role}</p>
                    <ul role="list" className="mt-6 flex gap-x-6">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500 cursor-pointer">
                          <span className="sr-only">Twitter</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500 cursor-pointer">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          
        </Container>

        <Footer />

    </>
  )
}