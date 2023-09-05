import { useRouter } from 'next/router'
import { useState } from 'react'
import { fetcher } from "@/lib/api"
import Layout from "@/components/Layout"
import { useFetchUser } from "@/lib/authContext"
import { UserProvider } from '@/lib/authContext'
import Link from "next/link"
import { HomeIcon } from '@heroicons/react/20/solid'
import { getTokenFromLocalCookie } from "@/lib/auth"
import Image from 'next/image'


export default function Film({ film }) {


  const { user, loading } = useFetchUser()
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
    { name: `${film.attributes.title}`, href: '/films', current: false },
  ]

  return (

    <UserProvider value={{ user, loading }}>

      <Layout>

        {/* BREADCRUMB */}
        <nav className="flex mb-12" aria-label="Breadcrumb">
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
                  disabled={page.current === pages.href}
                >
                  {page.name}
                </Link>
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

          {/* //TODO: to FIX ! It works, but should be as an Image next*/}
            {/* <Image src={`${process.env.NEXT_PUBLIC_STRAPI_BASE}${film.attributes.image.data.attributes.url}`}
            width={100}
            height={100}
            alt='mobetter'
            /> */}

          {film.attributes.image.data ?
            (<img src={`${film.attributes.image.data.attributes.url}`} alt="film-poster" />)
            : ""
          }

      </Layout>

    </UserProvider>
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
  
  console.log(filmResponse);
  return {
    props: {
      film: filmResponse.data
    }
  }
}