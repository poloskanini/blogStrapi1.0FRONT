import { useRouter } from 'next/router'
import { useState } from 'react'
import { fetcher } from "@/lib/api"
import Layout from "@/components/Layout"
import { useFetchUser } from "@/lib/authContext"
import Head from 'next/head'
// import { UserProvider } from '@/lib/authContext'
import Link from "next/link"
import { getTokenFromLocalCookie } from "@/lib/auth"
import Container from '@/components/Container'
import Image from 'next/image'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



export default function Film({ film }) {


  // const { user, loading } = useFetchUser()
  const router = useRouter()
  const [review, setReview] = useState({
    value: ''
  })

  const handleChange = (e) => {
    setReview({ value: e.target.value})
  }

  const handleSubmit = async(e) => {
      e.preventDefault()
      const jwt = getTokenFromLocalCookie()
      try {
        const responseData = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
          },
          body: JSON.stringify({
            data: {
              review: review.value,
              reviewer: '',
              Film: film.id
            }
          })
        });
        router.reload();
      } catch(error) {
        console.error('error with request', error)
      }
    };

  const pages = [
    { name: 'Liste des films', href: '/films', current: false },
    { name: `${film.attributes.title}`, href: router.asPath, current: false },
  ]

  return (
    <>
      <Head>
        <title>Liste des films</title>
      </Head>

      <Layout/>

        {/* BREADCRUMB */}
        {/* <nav className="flex mb-12 mt-5 justify-center" aria-label="Breadcrumb">
          <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
            <li className="flex">
              <div className="flex items-center">
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name} className="flex">
                <div className="flex items-center">
                  <svg
                    className="h-full w-6 flex-shrink-0 text-gray-200"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <Link
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                    disabled={page.current === pages[1].href}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav> */}
        
      
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
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                    disabled={page.current === router.asPath}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        
        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            {film.attributes.title}
          </span>
        </h1>
        
        {/* DIRECTED BY */}
        <p>
          Directed by{' '}
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            {film.attributes.director}
          </span>
        </p>

        {/* RESUME */}
        <h2 className="text-lg font-extrabold leading-tighter mb-1 mt-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Résumé :
          </span>
        </h2>
        
        {/* CONTENT */}
          <div className="tracking-wide text-base" dangerouslySetInnerHTML={{ __html: film.attributes.content }}></div>

          {/* IMAGE */}

          {film.attributes.image.data ?
            <Image src={`${film.attributes.image.data.attributes.url}`}
            width={0}
            height={0}
            sizes="100vw"
            alt='film-img'
            style={{ width: '100%', height: 'auto' }} // optional
            />
            : ""
          }

          {/* {film.attributes.image.data ?
            (<img src={`${film.attributes.image.data.attributes.url}`} alt="film-poster" />)
            : ""
          } */}

      </Container>

    </>
  )
}

export async function getServerSideProps({ req, params }) {
  const { slug } = params;
  const jwt = typeof window !== 'undefined' ? getTokenFromLocalCookie : getTokenFromLocalCookie(req)
  const filmResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films/${slug}?populate=*`, jwt ? {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  } : ''
  )
  
  // console.log(filmResponse.data.attributes.image.data.attributes.url);
  return {
    props: {
      film: filmResponse.data
    }
  }
}