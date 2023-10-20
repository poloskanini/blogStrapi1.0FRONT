import Layout from "@/components/Layout"
import Header from '../components/Header'
import Head from 'next/head'

export default function droitdutravail() {

  const titlePage = "Droit du Travail"
  return (
    <>

      <Head>
        <title>Menezes Avocat - Droit du Travail</title>
      </Head>

      <Header />

      <div className="h-full flex flex-col justify-center items-center mt-36">
        <h1 className="text-xl font-bold">DROIT DU TRAVAIL</h1>
        <br />
        <h2>Nico en attente de wording et images</h2>

        <iframe src="https://giphy.com/embed/kcfiK948yUHSqoNzwi" width="100%" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-episode-2-season-9-friendstv-kcfiK948yUHSqoNzwi"></a></p>
      </div>
  </>
  )
}