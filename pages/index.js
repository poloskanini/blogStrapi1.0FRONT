import { useState, useEffect } from 'react'
import Feature from '@/components/Feature'
import Head from 'next/head'
import { motion, useScroll, useSpring } from "framer-motion";
import VideoHero from "@/components/VideoHero"
import Accueil from "@/components/Accueil"
import variables from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'
import TimeLine from "@/components/TimeLine"
import ContentWork from '@/components/ContentWork'
import Marketing from '@/components/Marketing'
import Testimonials from '@/components/Testimonials';
import Testify from '@/components/Testify';
import { Lato } from 'next/font/google'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})


export default function Home() {

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
        <meta name="description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Menezes Avocat" />
        <meta property="og:description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="og:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1694591001/image-description-menezes_zvl0ti.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Menezes Avocat" />
        <meta property="twitter:description" content="Le cabinet MENEZES AVOCAT est à votre disposition sur Paris afin de vous conseiller et vous défendre dans toutes vos affaires juridiques liées au droit du travail et de la sécurité sociale." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dbff7xgqx/image/upload/v1694591001/image-description-menezes_zvl0ti.png" />
      </Head>
      
      <main className={lato.className}>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <VideoHero />
        <Accueil />
        <TimeLine />
        <ContentWork />
        {/* <Feature /> */}
        <div className="mb-20"></div>
        <Marketing />
        <Testimonials />
        <Testify />
        <Footer />
      </main>
      
    </>
  )
}