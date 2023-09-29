import { useEffect } from 'react'
import styles from '../styles/Timeline.module.css'
import Image from 'next/image'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]
const timeline = [
  {
    name: 'Création du cabinet',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Janvier 2017',
    dateTime: '2017-01',
  },
  {
    name: 'Partenariat',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Extension',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Fev 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Émancipation',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2023-03',
  },
]

export default function TimeLine() {

  return (

    <div className={styles.container}>
      <main className='justify-center svg-animation'>
        
        <div className="flex justify-center mx-auto max-w-2xl mt-20 px-10 text-center">
          <h2 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl font-bold mb-20">
            Cabinet spécialisé en Droit du Travail
          </h2>
        </div>
        
        <div className="image-wrapper md:grid items-center justify-items-center grid-rows-3 grid-cols-2 w-full text-center h-full mb-32">

          {/* OSER */}
          <div>
            <h3 className='text-custom-purple hidden md:block  text-2xl md:text-6xl lg:text-9xl opacity-10'>Oser</h3>
          </div>

          <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='horizontal'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852635/smalloffice_labota.webp"
              alt=""
              className="object-cover image-1 h-72 image w-full"
              width={500}
              height={500}
            />
            <p className="m-6 flex flex-col items-center text-3xl font-semibold leading-6 text-custom-purple">
              Entreprendre avec assurance
            </p>
            <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify px-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, culpa animi illum rem fugiat recusandae magnam vero iusto qui cupiditate, veniam accusamus ex dolor totam quaerat nostrum nesciunt, ipsum laborum. Inventore, animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur tempora sunt ad! Lorem, ipsum dolor sit amet consectetur adipisicing elit </p>
          </div>
   
          <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852637/mediumoffice_aotj1n.webp"
              alt=""
              className="object-cover image-2 h-72 image w-full"
              width={500}
              height={500}
            />
            <p className="m-6 flex flex-col items-center text-3xl font-semibold leading-6 text-custom-purple">
              Résister à une critique
            </p>
            <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify px-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam tenetur ex non, placeat molestias optio accusantium, cumque, dolore neque consequuntur sed cupiditate quasi.</p>
          </div>

          {/* DÉFENDRE */}
          <div>
            <h3 className='text-custom-purple hidden md:block text-2xl md:text-6xl lg:text-9xl opacity-10'>Défendre</h3>
          </div>
          {/* RÉUSSIR */}
          <div>
            <h3 className='text-custom-purple hidden md:block text-2xl md:text-6xl lg:text-9xl opacity-10'>Réussir</h3>
          </div>

           <div className='mb-10 lg:mb-0 timeCard scroll' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695852640/largeoffice_ltxd8n.webp"
              alt=""
              className="object-cover image-3 h-72 image w-full"
              width={500}
              height={500}
            />
            <p className="m-6 flex flex-col items-center text-3xl font-semibold leading-6 text-custom-purple">
              Parvenir au résultat recherché
            </p>
            <p className="text-lg font-normal leading-8 tracking-tight text-gray-900 text-justify px-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, praesentium? Minus soluta inventore perspiciatis tempora cupiditate harum exercitationem necessitatibus illum numquam consequuntur, accusamus natus doloribus eius vero?</p>
          </div>
           
        </div>
          

        {/* <div className="timeline grid grid-cols-2 grid-rows-4">
          <div className='h-40 mt-40'>1</div>
          <div></div>
          <div></div>
          <div>2</div>
          <div>3</div>
          <div></div>
          <div></div>
          <div>4</div>
        </div> */}

        {/* Timeline section */}
        {/* <div className="mx-auto xl:mt-40 max-w-7xl p-6 lg:px-8 rounded">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-custom-purple"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        
      </main>
    </div>
  )
}
