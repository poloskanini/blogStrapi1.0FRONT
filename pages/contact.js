import Layout from '@/components/Layout'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Head from 'next/head'
import Container from '@/components/Container'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '../components/Header'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const singleTitle = "Contact"
const hrefPage = "/contact"
const titlePage = "Menezes Avocat - Contact"

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <>

      <Head>
        <title>Menezes Avocat - Contact</title>
        <meta name="title" content="Menezes Avocat - Contact" />
        <meta
          name="description"
          content="Contactez le cabinet MENEZES AVOCAT à Paris 9e pour toute demande de rendez-vous, consultation ou conseil en droit du travail et droit de la sécurité sociale."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Menezes Avocat - Contact" />
        <meta
          property="og:description"
          content="Contactez le cabinet MENEZES AVOCAT à Paris 9e pour toute demande de rendez-vous, consultation ou conseil en droit du travail et droit de la sécurité sociale."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Menezes Avocat - Contact" />
        <meta
          name="twitter:description"
          content="Contactez le cabinet MENEZES AVOCAT à Paris 9e pour toute demande de rendez-vous, consultation ou conseil en droit du travail et droit de la sécurité sociale."
        />
      </Head>
      
      <Header />

      <Container>
      <BreadCrumb href={hrefPage} title={singleTitle}/>
      
      <ContactUs />
      </Container>


      <Footer />

    </>
  )
}
