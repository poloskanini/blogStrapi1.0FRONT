import Layout from "@/components/Layout"
import Header from '../components/Header'
// import TextReveal from "@/components/TextReveal"
import Image from 'next/image'


export default function honoraires() {
  return (
    <>
    <Header />
    <div className="h-full flex flex-col justify-center items-center mt-36 relative">
      <h1 className="text-xl font-bold">HONORAIRES</h1>
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

  </>
  )
}