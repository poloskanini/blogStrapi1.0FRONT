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
      <title>{titlePage}</title>
      <meta name="title" content={titlePage} />
      <meta property="og:title" content={titlePage} />
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