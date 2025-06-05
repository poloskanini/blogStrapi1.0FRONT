import { useState, useEffect } from 'react'
import Head from 'next/head'
import '@/styles/globals.css'
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Lato } from 'next/font/google'
import Layout from '@/components/Layout'
import LoaderLogo from '@/components/LoaderLogo'

import localFont from 'next/font/local'

const argesta = localFont({ src: '../fonts/Argesta_Display_Regular/Argesta Display Regular Desktop/ArgestaDisplay-Regular.otf'})
const rosseta = localFont({ src: '../fonts/rosseta/Rosseta.otf'})

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const loadingTime = 2500;

  const [loading, setLoading] = useState(false);
  const [hasChecked, setHasChecked] = useState(false); // Ajouté

  const is404 = Component.name === "Custom404";

  useEffect(() => {
    if (typeof window === "undefined") return;
  
    const expiration = localStorage.getItem('hasVisited');
    const now = Date.now();
    const shouldShowLoader = !expiration || now > parseInt(expiration);
  
    if (!is404 && shouldShowLoader) {
      // 1. On déclenche le loader
      setLoading(true);
      // 2. On enregistre un nouveau timestamp (dans 1 min)
      localStorage.setItem('hasVisited', (now + 60 * 1000).toString());
      // 3. On le cache après le délai
      setTimeout(() => {
        setLoading(false);
        setHasChecked(true);
      }, loadingTime);
    } else {
      // Pas de loader → directement prêt
      setHasChecked(true);
    }
  }, [is404]);
  
  if (!hasChecked) return null; // on attend d'avoir vérifié
  
  return (
    <>

      <Head>
        <title>Menezes Avocat</title>
        <meta name="title" content="Menezes Avocat" />
        <meta name="description" content="Le cabinet MENEZES AVOCAT vous conseille et vous défend dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta name="keywords" content="indemnités licenciement abusif, rupture conventionnelle, avocat en droit du travail, avocat harcèlement au travail, discrimination, avocat droit de la sécurité sociale" />
        
        {/* Google Robots */}
        <meta name="robots" content="index, follow" />
        
        <meta name="language" content="French" />
        {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}

        <meta property="og:url" content="https://www.menezes-avocat.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Le cabinet MENEZES AVOCAT vous conseille et vous défend dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="og:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1697803153/ImageOGMenezes_olzojs.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="menezes-avocat.com" />
        <meta property="twitter:url" content="https://www.menezes-avocat.com/" />
        <meta property="twitter:title" content="Menezes Avocat" />
        <meta property="twitter:description" content="Le cabinet MENEZES AVOCAT vous conseille et vous défend dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1697803153/ImageOGMenezes_olzojs.png" />

        {/* FB & Whatsapp */}

        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Menezes Avocat" />
        <meta property="og:image:type" content="image/webp" />

        {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="/assets/favicon.ico/ms-icon-310x310.png"/>

      </Head>

      {loading ? (
      <div className="loader-container">
        <LoaderLogo />
      </div>
    ) : (
      <div className={lato.className}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    )}
  </>
      )
}
