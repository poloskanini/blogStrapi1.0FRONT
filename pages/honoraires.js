import Layout from "@/components/Layout"
import Header from '../components/Header'
import Container from "@/components/Container"
import BreadCrumb from "@/components/BreadCrumb"
import Head from "next/head"
import Image from 'next/image'
import Reveal from '../components/animations/Reveal'


export default function honoraires() {

  const titlePage = "Honoraires"
  const hrefPage = "/honoraires"

  return (
    <>

    <Head>
      <title>Menezes Avocat - Honoraires</title>
    </Head>

    <Header />



    <Container>
      <BreadCrumb href={hrefPage} title={titlePage}/>

      <Reveal>
      <div className="h-full flex flex-col justify-center items-center relative">
        <h1 className="text-xl font-bold">HONORAIRES</h1>
        <br />
        <h2>Nico en attente de wording et images</h2>
        <br />
        
        <iframe src="https://giphy.com/embed/kcfiK948yUHSqoNzwi" width="100%" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-episode-2-season-9-friendstv-kcfiK948yUHSqoNzwi"></a></p>

        

        {/* <div className="wrapper-reveal flex justify-end ">
          <TextReveal className="relative" />
            <Image
              src={'https://res.cloudinary.com/dbff7xgqx/image/upload/v1694800800/medium_nicolasbarthes_developer_coding_a_program_in_a_world_of_dreams_391c68e4_bb80_46d4_bbb1_b391f25e01a4_7032676923.jpg'}
              width={600}
              height={600}
              alt="honoraires-image"
              className="absolute"
            ></Image>

        </div> */}

      </div>
      </Reveal>
    </Container>



  </>
  )
}