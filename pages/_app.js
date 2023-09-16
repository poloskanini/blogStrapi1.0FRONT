import '@/styles/globals.css'
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import Layout from '@/components/Layout'

import localFont from 'next/font/local'

const argesta = localFont({ src: '../fonts/Argesta_Display_Regular/Argesta Display Regular Desktop/ArgestaDisplay-Regular.otf'})
const rosseta = localFont({ src: '../fonts/rosseta/Rosseta.otf'})

 
// If loading a variable font, you don't need to specify the font weight
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant'
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair'
})


export default function App({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <>


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


    </>
  )
}
