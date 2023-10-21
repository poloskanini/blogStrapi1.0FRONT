import Layout from "@/components/Layout"
import Container from '@/components/Container'
import Image from 'next/image'
import Reveal from '../components/animations/Reveal'
import { motion } from "framer-motion"
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from "@/components/Footer"

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqItems = [
  {
    question: "Qu'est-ce que le droit du travail ?",
    answer:
      "Le droit du travail est une branche du droit qui régit les relations entre les employeurs et les employés. Il définit les droits et les obligations de chaque partie, les conditions de travail, la rémunération, et bien plus encore.",
  },
  {
    question: "Quand devrais-je consulter un avocat spécialisé en droit du travail ?",
    answer:
      "Vous devriez consulter un avocat spécialisé en droit du travail lorsque vous avez des problèmes liés à l'emploi tels que le licenciement injuste, les discriminations au travail, les différends liés aux salaires, ou lorsque vous avez des questions sur vos droits et obligations en tant qu'employé.",
  },
  {
    question: "Quels sont mes droits en tant qu'employé en France ?",
    answer:
      "En France, en tant qu'employé, vous avez le droit à un salaire minimum, des congés payés, la protection contre la discrimination et le harcèlement au travail, le droit de vous syndiquer, et bien d'autres droits. Cependant, ces droits peuvent varier en fonction de votre contrat de travail et de votre secteur d'activité.",
  },
  {
    question: "Que dois-je faire si je pense avoir été licencié injustement ?",
    answer:
      "Si vous croyez avoir été licencié injustement, vous devriez d'abord consulter un avocat spécialisé en droit du travail. Ils vous aideront à évaluer la légalité de votre licenciement et vous guideront sur les étapes à suivre, y compris la possibilité d'engager une action en justice si nécessaire.",
  },
  {
    question: "Comment puis-je faire valoir mes droits en cas de harcèlement au travail ?",
    answer:
      "Si vous êtes victime de harcèlement au travail, il est essentiel de documenter les incidents, de signaler le harcèlement à votre employeur ou aux autorités compétentes, et de consulter un avocat spécialisé en droit du travail. Ils peuvent vous aider à prendre des mesures légales pour mettre fin au harcèlement et réclamer des dommages-intérêts si nécessaire.",
  },
  {
    question: "Quelles sont les différences entre un contrat de travail à durée déterminée (CDD) et un contrat de travail à durée indéterminée (CDI) ?",
    answer:
      "Un CDD a une durée fixe prédéterminée, tandis qu'un CDI est un contrat à durée indéterminée sans date de fin. Les droits et obligations des employés varient en fonction du type de contrat, notamment en ce qui concerne la sécurité de l'emploi, les préavis, et les indemnités de licenciement.",
  },
  {
    question: "Combien de jours de congé payé ai-je droit en France ?",
    answer:
      "En France, un employé a droit à un minimum de 5 semaines de congé payé par an, soit 25 jours ouvrables. Cependant, ce nombre peut varier en fonction de votre convention collective et de votre ancienneté.",
  },
  {
    question: "Comment puis-je négocier mon salaire ou mes conditions de travail avec mon employeur ?",
    answer:
      "Vous pouvez négocier votre salaire et vos conditions de travail en discutant avec votre employeur. Il est recommandé de préparer des arguments solides, de faire des recherches sur les salaires de votre secteur et de demander l'avis d'un avocat spécialisé en droit du travail si nécessaire.",
  },
  {
    question: "Quelles sont les étapes pour porter plainte pour discrimination au travail ?",
    answer:
      "Les étapes pour porter plainte pour discrimination au travail varient, mais elles incluent généralement la collecte de preuves, le signalement à votre employeur ou aux autorités compétentes, et la consultation d'un avocat spécialisé en droit du travail pour vous guider à travers le processus légal.",
  },
  {
    question: "Combien cela coûte-t-il de faire appel à un avocat spécialisé en droit du travail ?",
    answer:
      "Les frais d'un avocat spécialisé en droit du travail peuvent varier en fonction de la complexité de votre cas. Certains avocats offrent une première consultation gratuite, tandis que d'autres facturent à l'heure ou proposent des tarifs forfaitaires. Il est préférable de discuter des frais lors de votre première consultation.",
  },

]


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

const singleTitle = "F.A.Q"
const titlePage = "Menezes Avocat - F.A.Q"
const hrefPage = "/faqs"

export default function faqs() {
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
         <div className="bg-white">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold text-neutral-950">F.A.Q</h2>
              <dl className="mt-10 mb-20 space-y-6 divide-y divide-gray-900/10">
                {faqItems.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              ) : (
                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600 italic text-justify">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
        </Reveal>
        
      </Container>
      
      <Footer />

  </>
  )
}