import Layout from "@/components/Layout"
import Container from "@/components/Container"
import { useFetchUser } from "@/lib/authContext"
import Head from 'next/head'
import VideoHero from "@/components/VideoHero"
import Accueil from "@/components/Accueil"
import Section from "@/components/Section"

// import { UserProvider } from '@/lib/authContext'

export default function Home() {

  // const { user, loading } = useFetchUser()

  return (
    <>
      <Head>
        <title>Menezes Avocat</title>
        <meta name="title" content="Menezes Avocat" />
        <meta name="description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Menezes Avocat" />
        <meta property="og:description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="og:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1694591001/image-description-menezes_zvl0ti.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Menezes Avocat" />
        <meta property="twitter:description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1694591001/image-description-menezes_zvl0ti.png" />
      </Head>
      

      <main className="h-full">
        <VideoHero />
        <Accueil />
        <div className="h-screen"></div>
        {/* <Section /> */}
      </main>
      

      
    </>
  )
}