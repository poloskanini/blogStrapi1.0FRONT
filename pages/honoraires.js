import Layout from "@/components/Layout"
import Header from '../components/Header'
import Container from "@/components/Container"
import BreadCrumb from "@/components/BreadCrumb"
import Head from "next/head"
import Image from 'next/image'


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

      <div className="h-full flex flex-col justify-center items-center relative">
        <h1 className="text-xl font-bold">HONORAIRES</h1>
        <h2>Page en construction</h2>
        <br />

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

    </Container>


  </>
  )
}