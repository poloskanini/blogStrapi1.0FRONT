import Layout from "@/components/Layout"
import Container from "@/components/Container"
import { useFetchUser } from "@/lib/authContext"
import Head from 'next/head'
// import { UserProvider } from '@/lib/authContext'

export default function Home() {

  // const { user, loading } = useFetchUser()

  return (
    <>
      <Head>
          <title>Film DataBase</title>
      </Head>
      
      <Layout />

      <Container>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Films Database
          </span>
        </h1>
      </Container>
      
    </>
  )
}