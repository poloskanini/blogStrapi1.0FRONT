import { useEffect } from 'react'
import styles from '../styles/Timeline.module.css'
import Image from 'next/image'


export default function TimeLine() {

  useEffect(() => {
    const timeCards = document.querySelectorAll('.timeCard')
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('isActive')
        }
      })
    })
  
    timeCards.forEach(timeCard => {
      observer.observe(timeCard)
    })
  })
  

  return (

    <div className={styles.container}>
      <main className='justify-center svg-animation'>
        
        <div className="flex justify-center mx-auto mt-10 px-10 text-center">
          {/* <h2 className="mt-2 text-4xl tracking-tight text-gray-900 sm:text-5xl font-bold mb-20">
            Cabinet spécialisé en Droit du Travail
          </h2> */}
        </div>
        
        <div className="image-wrapper md:grid items-center justify-items-center grid-rows-3 grid-cols-2 w-full text-center h-full mb-32">

          {/* OSER */}
          <div>
            <h3 className='timeCard timeCard4 text-custom-purple hidden md:block text-2xl md:text-6xl lg:text-8xl xl:text-9xl opacity-10'>Oser</h3>
          </div>

          <div className="mb-10 lg:mb-0 timeCard timeCard1 scroll w-full" data-rate='-0.1' data-direction='horizontal'>
            <Image
              src="/assets/images/Photos cabinet/DSCF8572.jpg"
              alt="Oser"
              className="object-cover image-1 h-72 image w-full"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-1 tracking-tight text-gray-900 text-justify px-3 lg:px-0 lg:pr-5 mb-8 mt-5 text-wrap"><strong>Oser</strong> défendre sa place ou son entreprise. <strong>Oser</strong> poser des limites. Dans le monde du travail, chaque décision compte. <br/>Nous vous aidons à la prendre.</p>
          </div>
   
          <div className='mb-10 lg:mb-0 timeCard timeCard2 scroll w-full' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="/assets/images/Photos cabinet/DSCF8599.jpg"
              alt="Défendre"
              className="object-cover image-2 h-72 image w-full"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-1 tracking-tight text-gray-900 text-justify px-3 mt-5 mb-8 text-wrap"><strong>Défendre</strong> un contrat, une réputation, un avenir professionnel. Faire valoir vos droits, avec méthode et détermination. <br/> C’est notre métier et notre engagement.</p>
          </div>

          {/* DÉFENDRE */}
          <div>
            <h3 className='timeCard timeCard5 text-custom-purple hidden md:block text-2xl md:text-6xl lg:text-8xl xl:text-9xl opacity-10'>Défendre</h3>
          </div>
          {/* RÉUSSIR */}
          <div>
            <h3 className='timeCard timeCard6 text-custom-purple hidden md:block text-2xl md:text-6xl lg:text-8xl xl:text-9xl opacity-10'>Réussir</h3>
          </div>

           <div className='mb-10 lg:mb-0 timeCard timeCard3 scroll w-full' data-rate='-0.1' data-direction='vertical'>
            <Image
              src="/assets/images/Photos cabinet/DSCF8619.jpg"
              alt="Réussir"
              className="object-cover image-3 h-72 image w-full"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw"
            />
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-1 tracking-tight text-gray-900 text-justify px-3 mt-5 text-wrap"><strong>Réussir</strong>, c’est obtenir une issue juste, efficace, durable. C’est sortir d’un conflit en ayant gardé le cap. <br/> C’est transformer un risque en solution. <br/>Nous y travaillons, avec vous.</p>
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
