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

      {/* <div className="h-full flex flex-col justify-center items-center mt-36">
        <h1 className="text-xl font-bold">DROIT DU TRAVAIL</h1>
        <br />
        <h2>Nico en attente de wording et images</h2>

        <iframe src="https://giphy.com/embed/kcfiK948yUHSqoNzwi" width="100%" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-episode-2-season-9-friendstv-kcfiK948yUHSqoNzwi"></a></p>
      </div> */}

      <div className="droit-du-travail-container">

        <div className="intro-copy">
          <div className="intro-copy-text">
            <p>This message stays right here</p>
            <p>no matter where you go</p>
            <p>it won't move an inch</p>
            <p>even if you scroll up or down.</p>
          </div>

          <div className="intro-copy-text">
            <p>This message stays right here</p>
            <p>no matter where you go</p>
            <p>it won't move an inch</p>
            <p>even if you scroll up or down.</p>
          </div>

        </div>

        <div className="headers">
          <section id="section-1">
            <h2>Vacuum</h2>
          </section>
          <section id="section-2">
            <h2>Vacuum</h2>
          </section>
          <section id="section-3">
            <h2>Vacuum</h2>
          </section>
          <section id="section-4">
            <h2>Vacuum</h2>
          </section>
          <section id="section-5">
            <h2>Vacuum</h2>
          </section>
          <section id="section-6">
            <h2>Vacuum</h2>
          </section>
          <section id="section-7">
            <h2>Vacuum</h2>
          </section>
          
          <div className="spacer"></div>

          <div className="section-previews">
            <div className="img" id="preview-1">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-1" />
            </div>
            <div className="img" id="preview-2">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-2" />
            </div>
            <div className="img" id="preview-3">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-3" />
            </div>
            <div className="img" id="preview-4">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-4" />
            </div>
            <div className="img" id="preview-5">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-5" />
            </div>
            <div className="img" id="preview-6">
              <img src="/assets/images/largeoffice_ltxd8n.webp" alt="img-preview-6" />
            </div>
          </div>

        </div>
      </div>
  </>
  )
}