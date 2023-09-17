import Layout from '@/components/Layout'
import Container from '@/components/Container'
import Image from 'next/image'
import Reveal from '../components/animations/Reveal'
import { motion } from "framer-motion"
import Header from '../components/Header'



import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'

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

const variants = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    }
  }
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

export default function quisommesnous() {
  return (
    <>

      <Header />


      <Reveal>

        <Container>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 text-justify">
              <h1 className={`${playfair.variable} font-playfair text-4xl font-medium text-neutral-950`}>Qui sommes-nous</h1>
              <p className={`${cormorant.variable} font-cormorant text-2xl mt-8 max-w-3xl text-neutral-500`}>
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem
                minus ut molestiae velit error quod. Excepturi quidem expedita molestias.
              </p>
              <p className="mt-6 text-base leading-7 text-neutral-500">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
              >
                <motion.div variants={images} className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    width={500}
                    height={500}
                  />
                </motion.div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <motion.div variants={images} className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                  <motion.div variants={images} className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                  <motion.div variants={images} className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image
                      src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                </div>
              </motion.div>
          </div>
        </Container>

      </Reveal>
    </>
  )
}