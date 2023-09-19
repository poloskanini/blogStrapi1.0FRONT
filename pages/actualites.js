import Layout from "@/components/Layout"
import Head from 'next/head'
import BreadCrumb from "@/components/BreadCrumb"
import Container from "@/components/Container"
import { fetcher } from "@/lib/api"
import { useState } from 'react'
import useSWR from 'swr'
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link"
import Image from 'next/image'



export default function Posts({ posts }) {


  const { data }= useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?populate=*`, fetcher, {fallbackData: posts})

  // const { data }= useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts/${slug}?populate=*`, fetcher, {fallbackData: posts})

  // console.log(data.data);

  return (
    <>
       <Head>
        <title>Menezes Avocat - Actualités</title>
      </Head>
      
      <Layout/>

      <Container>
      
      <BreadCrumb />

      <div className="bg-white sm:pb-32">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Actualités Juridiques</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Apprenez à développer votre business à l&apos;aide de l&apos;avis de nos experts.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.data.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={`${post.attributes.image.data.attributes.url}`}
                  width={500}
                  height={500}
                  alt='post-img'
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.attributes.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link
                      href={`actualites/` + post.attributes.slug}
                    >
                      <span className="absolute inset-0" />
                      {post.attributes.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.attributes.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={"https://res.cloudinary.com/dbff7xgqx/image/upload/v1695113044/photo-profil_c64ivj.jpg"}
                    width={500}
                    height={500}
                    alt='sandrine-profile'
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" /> */}
                  
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.attributes.author}
                    </p>
                    {/* <p className="text-gray-600">{post.author.role}</p> */}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>

      </Container>

      
    
      
     



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