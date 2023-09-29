import Image from 'next/image'


export default function Homestart() {
  return (
    <div>
         {/** IMAGE WRAPPER */}
         <div className="image-wrapper grid sm:grid-cols- md:grid-cols-2 absolute mt-52 text-center">
          <div className="relative flex justify-center items-center">
            <h2 className="text-2xl lg:text-3xl tracking-tight text-gray-900 sm:text-4xl font-bold m-5">
              Entreprendre avec assurance
            </h2>
            <p className='underskin-item text-gray-100 absolute'>
              Oser
            </p>
            
            {/* <p className='mt-2 text-lg tracking-tigh sm:text-lg text-custom-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
          </div>


          <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='horizontal'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852635/smalloffice_labota.webp"
              alt=""
              className="object-cover image-1 h-52 image w-full"
              width={500}
              height={500}
            />
            {/* <time className="mt-4 flex flex-col items-center text-xl font-semibold leading-6 text-custom-purple">
              Lorem Ipsum
            </time> */}
            {/* <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-justify">Création du Cabinet</p> */}
          </div>

          <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify h-100 px-20 mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum cupiditate similique distinctio porro, culpa excepturi, cum modi assumenda quam, pariatur corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit velit corporis atque fugit cum iste optio debitis ducimus laudantium accusantium deleniti error ut, eos quisquam dicta possimus. Reprehenderit laboriosam doloremque numquam.</p>

          <div className="relative flex justify-center items-center">
            <h2 className="mt-2 text-2xl lg:text-3xl tracking-tight text-gray-900 sm:text-4xl font-bold m-5">
                Résister à une critique
            </h2>
            <p className='underskin-item portrait:text-5rem text-gray-100 absolute'>
              Défendre
            </p>
          </div>

          <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852637/mediumoffice_aotj1n.webp"
              alt=""
              className="object-cover image-4 h-52 image w-full"
              width={500}
              height={500}
            />
          </div>

          <div className="mb-20">
            <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify h-100 px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum cupiditate similique distinctio porro, culpa excepturi, cum modi assumenda quam, pariatur corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque impedit nihil praesentium repellat ullam cupiditate ratione, provident quo inventore nobis! Exercitationem facilis excepturi dolore assumenda tenetur? Distinctio nostrum aspernatur recusandae. Excepturi?</p>
            {/* <p className='mt-2 text-lg tracking-tigh sm:text-lg text-custom-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
          </div>

          <div>
            <p className='underskin-item portrait:text-5rem text-gray-100 absolute'>
              Réussir
            </p>
          </div>

          <div></div>

         
          <h2 className="mt-2 text-2xl lg:text-3xl tracking-tight text-gray-900 sm:text-4xl font-bold flex justify-center items-center m-5">
            Parvenir au résultat recherché
          </h2>

          <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852640/largeoffice_ltxd8n.webp"
              alt=""
              className="object-cover image-5 h-52 image w-full"
              width={500}
              height={500}
            />
     
          </div>

          <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify h-100 px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rerum cupiditate similique distinctio porro, culpa excepturi, cum modi assumenda quam, pariatur corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit velit corporis atque fugit cum iste optio debitis ducimus laudantium accusantium deleniti error ut, eos quisquam dicta possimus. Reprehenderit laboriosam doloremque numquam.</p>
           
        </div>
  
    </div>
  )
}