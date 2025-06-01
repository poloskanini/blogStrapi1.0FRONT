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
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
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
