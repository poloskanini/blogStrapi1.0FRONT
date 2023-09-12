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

      {/* <Container>
        <h1 className="text-5xl md:text-6xl leading-tighter mb-4 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga explicabo ipsa provident totam sint?
          </span>
        </h1>
      </Container> */}
      <main className="h-full">
        <VideoHero />
        <Accueil />
        <Section />
      </main>
      
      
    </>
  )
}