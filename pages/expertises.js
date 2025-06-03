"use client"
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Header from '../components/Header'
import Container from '@/components/Container'
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Footer from '@/components/Footer'

export default function Expertises({
  title = "Expertises",
  href = "/expertises"
}) {

  const titlePage = "Menezes Avocat - Expertises"

  const pages = [
    { name: title, href: href, current: false },
  ]

  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
      </Head>

      <Header />

      {/* SECTION PRINCIPALE */}
      <section className="relative w-full overflow-hidden h-[calc(100vh-100px)]">

        <Container>
          {/* Breadcrumb intégré, visible sur les images */}
          <div className="relative z-30">
            <nav className="flex mb-12 mt-5" aria-label="Breadcrumb">
              <ol role="list" className="flex">
                <li>
                  <Link
                    href="/"
                    className="flex items-center text-white hover:text-white relative before:absolute before:inset-[-0.5rem] before:content-['']"
                  >
                    <HomeIcon className="h-5 w-5 flex-shrink-0 mr-2" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </Link>
                </li>
                {pages.map((page) => (
                  <li key={page.name} className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                    <Link
                      href={page.href}
                      className="ml-2 text-sm font-medium text-white hover:text-white relative before:absolute before:inset-[-0.5rem] before:content-['']"
                      aria-current={page.current ? 'page' : undefined}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </Container>

        {/* Triangle haut gauche */}
        <Link href="/droitdutravail" className="absolute inset-0 z-10 group pointer-events-none">
          <div className="clip-triangle-top-left w-full h-full relative overflow-hidden">
            <Image
              src="/assets/images/Photos cabinet/DSCF8564.jpg"
              alt="Droit du Travail"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay inversé */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition duration-500"></div>

            {/* Lien cliquable uniquement sur le titre */}
            <div className="absolute inset-0 flex items-center justify-start p-24 pointer-events-auto">
              <h2 className="top-1/5 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-[9vw] lg:text-[6vw] font-normal tracking-[-0.025em] uppercase text-center font-['PP_Neue_Montreal'] relative z-10 leading-none pr-20 md:p-0">
                Droit du <br /> Travail
              </h2>
            </div>
          </div>
        </Link>

        {/* Triangle bas droit */}
        <Link href="/droit-de-la-securite-sociale" className="absolute inset-0 z-20 group pointer-events-none">
          <div className="clip-triangle-bottom-right w-full h-full relative overflow-hidden">
            <Image
              src="/assets/images/Photos cabinet/DSCF8463.jpg"
              alt="Droit de la Sécurité Sociale"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay inversé */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition duration-500"></div>
            
            {/* Lien cliquable uniquement sur le titre */}
            <div className="absolute inset-0 flex items-center justify-center pt-48 lg-[pt-72] pointer-events-auto">
              <h2 className="bottom-1/5 right-1/4 transform translate-x-1/2 translate-y-1/2 text-white text-[9vw] lg:text-[6vw] font-normal tracking-[-0.025em] uppercase text-center font-['PP_Neue_Montreal'] relative z-10 leading-none pl-0 md:pl-48 pt-20 pr-24 sm:pt-0">
                Droit de la <br /> Sécurité Sociale
              </h2>
            </div>
          </div>
        </Link>

        {/* Styles */}
        <style jsx>{`
          .clip-triangle-top-left {
            clip-path: polygon(0 0, 100% 0, 0 100%);
          }
          .clip-triangle-bottom-right {
            clip-path: polygon(100% 0, 100% 100%, 0 100%);
          }
        `}</style>
      </section>

      <Footer />
    </>
  )
}
