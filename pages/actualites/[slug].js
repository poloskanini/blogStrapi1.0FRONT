import Layout from "@/components/Layout"
import Head from 'next/head'
import Container from '@/components/Container'
import Link from "next/link"
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Footer from "@/components/Footer"
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

  const date = post.attributes.date;
  const updatedAtDate = post.attributes.updatedAt;
  // console.log(date)
  // console.log(updatedAtDate)

  function convertToFrenchDate(date) {
    const dateFragments = date.split("-")

    return `${dateFragments[2]}/${dateFragments[1]}/${dateFragments[0]}`
  }

  function convertUpdatedAtDate(updatedAtDate) {
    const dateSubString = updatedAtDate.substring(0, 10) // "2023-09-19"
	  const splitDate = dateSubString.split("-") // ["2023", "09", "19"]
	  const updatedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}` // "19-09-2023"
  	
  	return updatedDate
  }

  function convertToFrenchHour(updatedAtDate) {
    const hourSubString = updatedAtDate.substring(11, 19)
    const splitHour = hourSubString.split(':')
    const finalHour = `${(parseInt(splitHour[0]) + 2)}:${splitHour[1]}:${splitHour[2]}`

    return finalHour
  }

  const frenchDate = convertToFrenchDate(date)
  // console.log(frenchDate);

  const updatedAt = convertUpdatedAtDate(updatedAtDate)
  // console.log(updatedAt);

  const frenchHour = convertToFrenchHour(updatedAtDate)
  // console.log(frenchHour)

  const singleTitle = post.attributes.title
  const titlePage = `Menezes Avocat - ${post.attributes.title}`
  const description = post.attributes.description
  const thumbnailImageUrl = post.attributes.image.data.attributes.url
  const hrefPage = router.asPath

  // Helpers (tu peux les mettre en haut du fichier)
  const SITE_URL = "https://menezes-avocat.com"
  const absUrl = (u) => (u?.startsWith("http") ? u : `${SITE_URL}${u || ""}`)
  const toISODate = (d) => (d ? new Date(d).toISOString() : undefined)

  return (
    <>
      <Head>
        {/* Titre : "Titre d’article – Menezes Avocat"  */}
        <title>{`${post.attributes.title} – Menezes Avocat`}</title>
        <meta name="title" content={`${post.attributes.title} – Menezes Avocat`} />

        {/* Description (fallback si vide côté CMS) */}
        <meta
          name="description"
          content={post.attributes.description || post.attributes.excerpt || post.attributes.title}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.attributes.title} – Menezes Avocat`} />
        <meta
          property="og:description"
          content={post.attributes.description || post.attributes.excerpt || post.attributes.title}
        />
        <meta property="og:image" content={absUrl(post.attributes.image?.data?.attributes?.url)} />
        {/* (og:url est déjà géré dynamiquement dans _app.js via absoluteUrl) */}

        {/* Twitter */}
        <meta name="twitter:title" content={`${post.attributes.title} – Menezes Avocat`} />
        <meta
          name="twitter:description"
          content={post.attributes.description || post.attributes.excerpt || post.attributes.title}
        />
        <meta name="twitter:image" content={absUrl(post.attributes.image?.data?.attributes?.url)} />

        {/* Métadonnées article (aident FB/LinkedIn, et parfois Google) */}
        {post.attributes.date && (
          <meta property="article:published_time" content={toISODate(post.attributes.date)} />
        )}
        {post.attributes.updatedAt && (
          <meta property="article:modified_time" content={toISODate(post.attributes.updatedAt)} />
        )}
      </Head>

      <Layout/>

      <Container>
        {/* BreadCrumb V2 */}
        <nav className="flex mb-12 mt-5" aria-label="Breadcrumb">
          <ol role="list" className="flex">
            <li flex>
              <div>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon className="h-5 w-5 flex-shrink-0 mr-2" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            <li className="flex">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                href={"/actualites"}
                className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Actualités
              </Link>
            </li>
            <li className="flex">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                  href={hrefPage}
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled"
                >
                  {singleTitle}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Article Slug */}
        
        <section className="mx-auto gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8 mb-32">
          <div className="lg:w-full lg:pb-8">

            {/* TITLE */}
            <h1 className={`text-4xl font-medium text-neutral-950`}>{post.attributes.title}
            </h1>
            {/* COVER IMAGE */}
            <Image src={`${post.attributes.image.data.attributes.url}`}
              className="my-7 h-96 object-cover object-center w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image"
              width={500}
              height={500}
            />
            {/* AUTHOR */}
            <div className="mt-3 flex items-center gap-x-4 text-xs">
              <div class="mb-6 flex items-center">
                {/* DATE */}
                <div className="pl-2 flex flex-col items-start gap-x-4 text-xs">
                  <time className="text-gray-500">
                    Publié le {frenchDate}
                  </time>
                  <time className="text-gray-400">
                  {post.attributes.createdAt !== post.attributes.updatedAt ? `Modifié le ${updatedAt} à ${frenchHour}` : ''}
                  </time>
                </div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <p className={`text-lg mt-8 text-justify`}>
              {post.attributes.description}
            </p>
            {/* FULL CONTENT */}
            <div className={`blog-content mt-8 text-lg text-justify`} dangerouslySetInnerHTML={{ __html: post.attributes.content }}></div>
          </div>
           
        </section>

      </Container>

      <Footer />
    </>
    
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const postResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts/${slug}?populate=*`)

  console.log(postResponse.data.attributes.title);
  
  return {
    props: {
      post: postResponse.data,
      // title: postResponse.data.attributes.title,
      // description: postResponse.data.attributes.description,
      // thumbnailImageUrl: postResponse.data.attributes.image.data.attributes.url
    }
  }
}