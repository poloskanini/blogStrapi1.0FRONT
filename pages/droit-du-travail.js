import Layout from "@/components/Layout"
import Header from '../components/Header'
import Head from 'next/head'

export default function droitdutravail() {

  const singleTitle = "Droit du Travail"
  const titlePage = "Menezes Avocat - Droit du Travail"

  return (
    <>

      <Head>
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
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