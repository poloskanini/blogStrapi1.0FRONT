import Layout from "@/components/Layout"
import Head from 'next/head'
import Container from '@/components/Container'
import Link from "next/link"
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { fetcher } from "@/lib/api"
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

export default function Post({ post }) {

  const router = useRouter()

  const pages = [
    { name: 'Actualités', href: '/actualites', current: false },
    { name: `${post.attributes.title}`, href: router.asPath, current: false },
  ]

  return (
    <>
      <Head>
      <title>Menezes Avocat - Actualités</title>
      </Head>

      <Layout/>

      <Container>
        {/* BreadCrumb V2 */}
        <nav className="flex mb-12 mt-5" aria-label="Breadcrumb">
          <ol role="list" className="flex space-x-4 ">
            <li flex>
              <div>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            <li className="flex">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                href={"/actualites"}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Actualités
              </Link>
            </li>
            <li className="flex">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                  href={router.asPath}
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 disabled"
                >
                  {post.attributes.title}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Article Slug */}
        
        <section className="mx-auto gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 mb-32">
          <div className="lg:w-full lg:pb-8">

            {/* TITLE */}
            <h1 className={`${playfair.variable} font-playfair text-4xl font-medium text-neutral-950`}>{post.attributes.title}
            </h1>
            {/* COVER IMAGE */}
            <Image src={`${post.attributes.image.data.attributes.url}`}
              className="my-7 h-96 object-cover object-center w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image"
              width={500}
              height={500}
            />
            {/* DATE et AUTHOR */}
            <div className="mt-3 flex items-center gap-x-4 text-xs">
              <div class="mb-6 flex items-center">
                <Image
                  src={"https://res.cloudinary.com/dbff7xgqx/image/upload/v1695113044/photo-profil_c64ivj.jpg"}
                  width={500}
                  height={500}
                  alt='sandrine-profile'
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
                <div className="pl-2 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">
                    Publié le {post.attributes.date} par {post.attributes.author}
                  </time>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <p className={`${cormorant.variable} font-cormorant text-2xl mt-8 text-neutral-500`}>
              {post.attributes.description}
            </p>
            {/* FULL CONTENT */}
            <div className={`${cormorant.variable} font-cormorant blog-content mt-8 text-lg text-neutral-500`} dangerouslySetInnerHTML={{ __html: post.attributes.content }}></div>
          </div>
           
        </section>

      </Container>
    </>
    
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const postResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts/${slug}?populate=*`)

  // console.log(postResponse);
  
  return {
    props: {
      post: postResponse.data
    }
  }
}