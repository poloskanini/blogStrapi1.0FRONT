import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Lato } from 'next/font/google'
import Layout from '@/components/Layout'

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
    }, 1000)
  }, [])
  
  return (
    <>
    {loading ? (
    <AnimatePresence mode='wait'>
      <div className="loader-container"></div>
    </AnimatePresence>
    ) : (
      <div className={lato.className}>

        <AnimatePresence mode='wait'>
          <motion.div key={router.pathname}>

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
          </motion.div>
        </AnimatePresence>

      </div>
    )}
    </>
  )
}
