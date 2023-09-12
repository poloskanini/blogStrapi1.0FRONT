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
      </Head>
      
      <Layout />

      <main className="h-full">
        <VideoHero />
        <Accueil />
        <Section />
      </main>
      
      
    </>
  )
}