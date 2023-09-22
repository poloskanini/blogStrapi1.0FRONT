import Image from 'next/image'
import Link from 'next/link'
import Reveal from './animations/Reveal'
import Header from './Header'
import { Montserrat } from 'next/font/google'
import { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap/dist/gsap'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800','900']
})


export default function Accueil() {


  useEffect(() => {
    
    const text = new SplitType('#text-wrapper');
    let characters = document.querySelectorAll('.char');

    gsap.to('.char', {
      y: 0,
      stagger: 0.03,
      duration: 0.5,
    })
  })


  return (

    <>

    <Header />

    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] brightness-50"
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
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden relative">
            <div className="h-screen">
              <div className="max-w-sm pb-6 absolute bottom-20">

                <Reveal>
                  <div className={`${montserrat.className} homeTitle-container w-screen`}>
                    <h1 className={`text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white font-medium p-7 lg:p-12`} id='text-wrapper'>
                      <p>PRÉVALOIR.</p>
                      <br />
                      <p>DÉFENDRE.</p>
                      <br />
                      <p>RÉUSSIR.</p>
                      <br />
                    </h1>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>

    </div>
    
    {/* Scroll Down */}
    <div id="scroll-wrapper" className={"text-sm absolute right-0 bottom-0"}>

      <div id="scroll-wrapper-inner">
        <div id="scroll-title">
          Scroll
        </div>
        <div id="scroll-down"></div>
        </div>
    </div>

  </>
  )
}