import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from '../components/ImageByIndex'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'

 
const expertises = [
  { id: 1, title: 'Droit du Travail', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis tempore excepturi?', image: '/assets/images/pexels-the-coach-space-2977547 (2).jpg', url: '/droit-du-travail'},
  { id: 2, title: 'Droit de la Sécurité Sociale', description: 'Aut sequi temporibus, quo nemo quis nisi odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-pixabay-161892.jpg', url: '/droit-de-la-securite-sociale'},
  { id: 3, title: 'Formations', description: 'adipisicing elit. Placeat quis tempore excepturi?', image: '/assets/images/pexels-luis-quintero-2774556.jpg', url: '/#'},
  { id: 4, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-vlada-karpovich-6114954.jpg', url: '/#'},
  { id: 5, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-vlada-karpovich-6114954.jpg', url: '/#'},
  { id: 6, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-vlada-karpovich-6114954.jpg', url: '/#'},
  { id: 7, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-vlada-karpovich-6114954.jpg', url: '/#'},
  { id: 8, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/pexels-vlada-karpovich-6114954.jpg', url: '/#'},
]

export default function Carousel(props) {

  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState([])
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])


  return (
    
    <div className="embla cursor-grab relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {expertises.map((exp) => (
            <div className="embla__slide" key={exp.id}>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer"
                >
                  <Image
                    className="embla__slide__img embla__parallax__img relative brightness-70 blur-sm"
                    src={exp.image}
                    alt={`Image ${exp.title}`}
                    width={500}
                    height={500}
                  />
                  <div className="embla__slide__content text-white text-lg flex justify-center items-center m-5 md:px-10 relative">
                    <div className="expertise-number text-red-600 text-lg font-bold text-left">
                      <span>0{exp.id}</span>
                    </div>
                    <div className="expertise-content mt-5 justify-around">
                      <div className="expertises-text">
                        <h2 className='expertise-title text-xl md:text-3xl 2xl:text-4xl mb-10'>{exp.title}</h2>
                        <p className='expertise-description text-sm md:text-base'>{exp.description}</p>
                      </div>
                      <div className="expertise-link text-lg absolute bottom-16">
                        <Link
                          className='hover:text-red-600'
                          href={`${exp.url}`}
                        >
                          En savoir plus &nbsp; <span aria-hidden="true" className='text-red-600'>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>
    </div>
  )
}