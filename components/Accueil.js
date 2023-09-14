import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'


const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair'
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export default function Accueil() {
  return (

    <>

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
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 portrait:pt-28 lg:px-8 2xl:pt-14">
              <div className="mx-auto max-w-2xl gap-x-48 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-lg p-5">
                  <div className="max-w-sm pb-6">

                    <Reveal>
                      <h1 className={`${playfair.variable} font-playfair home-title`}>
                      <span className='text-5xl tracking-tight text-white lg:text-6xl 2xl:text-8xl' >MENEZES </span> <span className='text-5xl lg:text-6xl 2xl:text-8xl tracking-tight font-bold text-custom-purple' >AVOCAT</span>
                      </h1>
                    </Reveal>

                  </div>
                  <div className="max-w-sm pb-3">
                    <h2 className={`${playfair.variable} font-playfair font-normal text-3xl tracking-tight text-white lg:text-5xl pb-4`}>
                      Avocats spécialisés <br /> en Droit du Travail
                    </h2>
                    <p className="relative mt-10 text-base leading-5 text-white sm:max-w-md lg:max-w-none font-light text-justify">
                      Depuis janvier 2012, notre cabinet est à votre disposition afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées à l&apos;emploi et à la sécurité sociale. 
                    </p>
                  </div>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="/contact"
                      className="rounded-md bg-custom-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition focus-visible:outline-indigo-600"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>

                {/* Hero Images */}
                <div className="mt-14 flex justify-end gap-6 sm:justify-start sm:pl-20 lg:mt-16 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image 
                        src={'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg wide:landscape:hidden"
                        width={500}
                        height={500}
                        alt='menezes-avocat-Femme travaillant sur son ordinateur et souriante '
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image 
                        src={'https://res.cloudinary.com/dbff7xgqx/image/upload/v1694424800/pexels-pavel-danilyuk-8111860_ckqsjd.jpg'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg wide:landscape:hidden"
                        width={500}
                        height={500}
                        alt='menezes-avocat-avocate sur son bureau au telephone'
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image 
                        src={'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg wide:landscape:hidden "
                        width={500}
                        height={500}
                        alt='menezes-avocat-equipe travaillant dans un open space'
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-14 sm:pt-0">
                    <div className="relative">
                      <Image 
                        src={'https://res.cloudinary.com/dbff7xgqx/image/upload/v1694427794/pexels-cottonbro-studio-3205568_rllyt8.jpg'}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg wide:landscape:hidden"
                        width={500}
                        height={500}
                        alt='menezes-avocat-equipe de juristes debout autour de la table'
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image 

                          src={'https://res.cloudinary.com/dbff7xgqx/image/upload/v1694429862/linkedin-sales-solutions-wS73LE0GnKs-unsplash_zhief7.jpg'}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg wide:landscape:hidden"
                          width={500}
                          height={500}
                          alt='menezes-avocat-femme travaille dans son bureau sur son ordinateur'
                        />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
    
    {/* Scroll Down */}
    <div id="scroll-wrapper" className={"text-sm absolute right-0 -bottom-10"}>

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