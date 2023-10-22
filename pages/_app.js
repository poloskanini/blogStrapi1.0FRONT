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
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500) //2500 OK
  }, [])
  
  return (
    <>

      <Head>
        {/* <title>Menezes Avocat</title> */}
        {/* <meta name="title" content="Menezes Avocat" /> */}
        <meta name="description" content="Le cabinet MENEZES AVOCAT vous conseille et vous défend dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta name="keywords" content="indemnités licenciement abusif, rupture conventionnelle, avocat en droit du travail, avocat harcèlement au travail, discrimination, avocat droit de la sécurité sociale" />
        
        {/* Google Robots */}
        {/* <meta name="robots" content="index, follow" /> */}
        
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
    <AnimatePresence mode='wait'>
      <div className="loader-container">
        <LoaderLogo />
      </div>
    </AnimatePresence>
    ) : (
      <div className={lato.className}>

        <AnimatePresence mode='wait'>
          {/* <motion.div key={router.pathname}>

            <Component {...pageProps} />
            
            <motion.div
              className='slide-in'
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0, opacity: 0}}
              transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
              className='slide-out'
              initial={{ scaleY: 1, opacity: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1, opacity: 1}}
              transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
          </motion.div> */}

          {/* Transition sur toutes les pages ? Décommenter au dessus, et supprimer ci- dessous + dans index.js */}
          <Component {...pageProps} />

        </AnimatePresence>

      </div>
    )}
    </>
  )
}
