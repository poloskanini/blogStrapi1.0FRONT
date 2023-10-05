import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from '../components/ImageByIndex'
import { flushSync } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'

const TWEEN_FACTOR = 10

 
const expertises = [
  { id: 1, title: 'Droit du Travail', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quis tempore excepturi?', image: '/assets/images/IRP-600x850.jpeg', url: '/droit-du-travail'},
  { id: 2, title: 'Droit de la Sécurité Sociale', description: 'Aut sequi temporibus, quo nemo quis nisi odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/carousel2.jpeg', url: '/droit-de-la-securite-sociale'},
  { id: 3, title: 'Formations', description: 'adipisicing elit. Placeat quis tempore excepturi?', image: '/assets/images/carousel3.jpeg', url: '/#'},
  { id: 4, title: 'Conseils', description: 'Odio accusantium reiciendis sit rerum cumque modi nam.', image: '/assets/images/carousel4.jpeg', url: '/#'},
]

export default function Carousel(props) {

  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState([])


  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    
    <div className="embla cursor-grab">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {expertises.map((exp) => (
            <div className="embla__slide" key={exp.id}>
              <div className="embla__parallax">
                <div
                  className="embla__parallax__layer"
                 
                >
                  <Image
                    className="embla__slide__img embla__parallax__img relative brightness-40"
                    src={exp.image}
                    alt={`Image ${exp.title}`}
                    width={500}
                    height={500}
                  />
                  <div className="embla__slide__content text-white text-lg flex justify-center items-center m-5 md:px-10 relative">
                    <div className="expertise-number text-custom-purple-dark text-lg font-bold text-left">
                      <span>0{exp.id}</span>
                    </div>
                    <div className="expertise-content mt-5 justify-around">
                      <div className="expertises-text">
                        <h2 className='expertise-title text-xl md:text-3xl 2xl:text-4xl mb-10'>{exp.title}</h2>
                        <p className='expertise-description text-sm md:text-base'>{exp.description}</p>
                      </div>
                      <div className="expertise-link text-lg absolute bottom-0">
                        <Link
                          className='hover:text-custom-purple'
                          href={`${exp.url}`}
                        >
                        En savoir plus &nbsp; <span aria-hidden="true" className='text-custom-purple-dark'>&rarr;</span>
                        
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
    </div>
  )
}