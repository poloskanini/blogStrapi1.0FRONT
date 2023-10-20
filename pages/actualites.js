import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumb from "@/components/BreadCrumb"
import Container from "@/components/Container"
import { fetcher } from "@/lib/api"
import Reveal from '../components/animations/Reveal'
import useSWR from 'swr'
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link"
import Image from 'next/image'
import Footer from '@/components/Footer'

import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'

export default function Posts({ posts }) {

  const { data }= useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`, fetcher, {fallbackData: posts})
  
  data.data.sort((x, y) => y.id - x.id);

  // Convert to French Date
  function convertToFrenchDate(date) {
    const splitDate = date.split("-")
    const frenchDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
    
    return frenchDate
  }

  const titlePage = "Menezes Avocat - Actualités"
  const hrefPage = "/actualites"

  return (
    <>
      <Head>
        <title>Menezes Avocat - Actualités</title>
      </Head>
      
      <Header />

      <Container>
      
      <BreadCrumb href={hrefPage} title={titlePage}/>

      <Reveal>
        <div className="bg-white sm:pb-32">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className={`text-4xl font-bold text-neutral-950`}>Actualités Juridiques</h1>
              
              <p className={`text-xl mt-2  text-neutral-600`}>
                Apprenez à développer votre business à l&apos;aide de l&apos;avis de nos experts.
              </p>
            </div>
            
            {/* Cards Container */}
            {data.data.length > 0 ?

              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* Card */}
                {data.data.map((post) => (
                  <Link
                    href={`actualites/` + post.attributes.slug}
                    key={post.id}
                    className='hover:shadow-2xl duration-200'
                  >          
                    <article className="flex flex-col items-start justify-between rounded-2xl">
                      <div className="relative w-full">
                        <Image
                          src={`${post.attributes.image.data.attributes.url}`}
                          width={500}
                          height={500}
                          alt='post-img'
                          className="aspect-[16/9] w-full rounded-t-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      {/* Card Content */}
                      <div className="max-w-xl p-4">
                        <div className="mt-3 flex items-center gap-x-4 text-xs">
                          {/* Date */}
                          <time dateTime={post.datetime} className="text-gray-500">
                            {convertToFrenchDate(post.attributes.date)}
                          </time>
                        </div>
                        <div className="group relative">
                          {/* Title */}
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-justify">
                            {post.attributes.title}
                          </h3>
                          {/* Description */}
                          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-justify">{post.attributes.description}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                          {/* Author Pic */}
                          <Image
                            src={"https://res.cloudinary.com/dbff7xgqx/image/upload/v1695113044/photo-profil_c64ivj.jpg"}
                            width={500}
                            height={500}
                            alt='sandrine-profile'
                            className="h-10 w-10 rounded-full bg-gray-100"
                          />
                          {/* Author Name */}
                          <div className="text-sm leading-6 mb-3">
                            <p className="font-semibold text-gray-900">
                                <span className="absolute inset-0" />
                                {post.attributes.author}
                            </p>
                            <p className="text-gray-600 text-xs">Avocate spécialiste en Droit du Travail</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              
              :
              
              <p className='mx-auto m-20 max-w-2xl gap-y-20 text-center'>Aucun article n&apos;est disponible.</p>}
            
          </div>
        </div>
      </Reveal>

      </Container>

      <Footer />

    </>
  )
}

export async function getStaticProps() {
  const postsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`, { next: { revalidate: 1 } })
  // console.log(postsResponse);
  
  // Tri des films pour qu'ils soient classés par ID décroissant
  // postsResponse.data.sort((x, y) => y.id - x.id)

  return {
    props: {
      posts: postsResponse
    }
  }
}