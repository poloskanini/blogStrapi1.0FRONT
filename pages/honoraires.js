import Layout from "@/components/Layout"
import Header from '../components/Header'
import Container from "@/components/Container"
import BreadCrumb from "@/components/BreadCrumb"
import Head from "next/head"
import Image from 'next/image'
import Reveal from '../components/animations/Reveal'
import ImageGridHero from "@/components/ImageGridHero"
import Footer from "@/components/Footer"

export default function honoraires() {

  const singleTitle = "Honoraires"
  const titlePage = "Menezes Avocat - Honoraires"
  const hrefPage = "/honoraires"

  return (
    <>

    <Head>
      <title>Menezes Avocat - Honoraires</title>
      <meta name="title" content="Menezes Avocat - Honoraires" />
      <meta
        name="description"
        content="Découvrez la transparence des honoraires du cabinet MENEZES AVOCAT : forfaits, taux horaires et modalités adaptées à vos besoins en droit du travail et de la sécurité sociale."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Menezes Avocat - Honoraires" />
      <meta
        property="og:description"
        content="Découvrez la transparence des honoraires du cabinet MENEZES AVOCAT : forfaits, taux horaires et modalités adaptées à vos besoins en droit du travail et de la sécurité sociale."
      />

      {/* Twitter */}
      <meta name="twitter:title" content="Menezes Avocat - Honoraires" />
      <meta
        name="twitter:description"
        content="Découvrez la transparence des honoraires du cabinet MENEZES AVOCAT : forfaits, taux horaires et modalités adaptées à vos besoins en droit du travail et de la sécurité sociale."
      />
    </Head>

    <Header />

    <Container>
      <BreadCrumb href={hrefPage} title={singleTitle}/>
    </Container>
    
    <ImageGridHero />

    <Footer />

  </>
  )
}