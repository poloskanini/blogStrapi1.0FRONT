import Image from 'next/image'
import Link from 'next/link'
import Reveal from './animations/Reveal'
import Header from './Header'
import { Montserrat, Lato } from 'next/font/google'
import { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap/dist/gsap'
import { motion } from 'framer-motion' // Ajout pour l'animation framer motion

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800','900']
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})



export default function Accueil() {


  useEffect(() => {
    
    // Split Text Wrapper
    const text = new SplitType('#text-wrapper');
    let characters = document.querySelectorAll('.char');

    gsap.to('.char', {
      y: 0,
      stagger: 0.03,
      duration: 0.5,
      delay: 0.3
    })
  })

  return (
    <>

    <Header />

    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-screen w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] brightness-50"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
          </div>

          {/* Les 3 titres Oser/Défendre/Réussir */}
          <div className="overflow-hidden relative">
            <div className="h-screen">
              <div className="max-w-sm pb-6 absolute bottom-60">

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  className={`${montserrat.className} homeTitle-container w-screen`}
                >
                  <div className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-medium px-7" id='text-wrapper'>
                      <p>Oser</p>
                    </div>
                    <div className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-medium px-7" id='text-wrapper'>
                      <p>Défendre</p>
                    </div>
                    <div className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white font-medium px-7" id='text-wrapper'>
                      <p>Réussir</p>
                    </div>
                </motion.h1>

              </div>

              {/* Animation framer motion sur le h2 */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
              className="font-light text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-white px-7 absolute bottom-32 uppercase"
            >
              <hr />
              Cabinet spécialisé en Droit du Travail
            </motion.h2>

            </div>
          </div>

    </div>
    
    {/* Scroll Down */}
    <div id="scroll-wrapper" className={"text-sm absolute right-0 bottom-1 mr-10"}>

      <div id="scroll-wrapper-inner">
        <div id="scroll-down"></div>
        </div>
    </div>


  </>
  )
}