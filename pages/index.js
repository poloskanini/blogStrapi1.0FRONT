import { useState, useEffect } from 'react'
import Feature from '@/components/Feature'
import Head from 'next/head'
import { motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router"
import VideoHero from "@/components/VideoHero"
import Accueil from "@/components/Accueil"
import variables from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'
import TimeLine from "@/components/TimeLine"
import ContentWork from '@/components/ContentWork'
import dynamic from 'next/dynamic'
import Marketing from '@/components/Marketing'
import Carousel from '@/components/Carousel';
import CarouselBis from '@/components/CarouselBis';
import Testimonials from '@/components/Testimonials';
import Testify from '@/components/Testify';
import { Lato } from 'next/font/google'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

// Chargement dynamique (lazy) de la section Video pour optimisation des performances
const DynamicVideoHero = dynamic(() => import('../components/VideoHero'), {
  loading: () => <p>Loading...</p>,
})


// Chargement dynamique (lazy) de la section Accueil pour optimisation des performances
const DynamicAccueil = dynamic(() => import('../components/Accueil'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section TimeLine pour optimisation des performances
const DynamicTimeLine = dynamic(() => import('../components/TimeLine'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section ContentWork pour optimisation des performances
const DynamicContentWork = dynamic(() => import('../components/ContentWork'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section Marketing pour optimisation des performances
const DynamicMarketing = dynamic(() => import('../components/Marketing'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section Carousel pour optimisation des performances
const DynamicCarousel = dynamic(() => import('../components/Carousel'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section CarouselBis pour optimisation des performances
const DynamicCarouselBis = dynamic(() => import('../components/CarouselBis'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section Testify pour optimisation des performances
const DynamicTestify = dynamic(() => import('../components/Testify'), {
  loading: () => <p>Loading...</p>,
})

// Chargement dynamique (lazy) de la section Footer pour optimisation des performances
const DynamicFooter = dynamic(() => import('../components/Footer'), {
  loading: () => <p>Loading...</p>,
})




export default function Home() {

  const router = useRouter()


    // Carousel Behaviour
    const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' }
    const SLIDE_COUNT = 4
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    // useScroll Animation (red bar)
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  return (
    <>
      <Head>
        <title>Menezes Avocat</title>
        <meta name="title" content="Menezes Avocat" />
        <meta property="og:title" content="Menezes Avocat" />
      </Head>

      <motion.div key={router.pathname}>

        <motion.div
              className='slide-out'
              initial={{ scaleY: 1, opacity: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1, opacity: 1}}
              transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        
      </motion.div>
      
      <main className={lato.className}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <DynamicVideoHero />
        <DynamicAccueil />
        <DynamicTimeLine />
        <DynamicContentWork />
        {/* <div className="mb-20"></div> */}
        {/* <DynamicMarketing /> */}
        {/* <DynamicCarousel slides={SLIDES} options={OPTIONS}/> */}
        <div className="mb-20"></div>
        <DynamicMarketing />
        <DynamicCarouselBis slides={SLIDES} options={OPTIONS}/>
        <DynamicTestify />
        <DynamicFooter />
      </main>
      
    </>
  )
}