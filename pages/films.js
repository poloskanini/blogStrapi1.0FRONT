import Layout from "@/components/Layout"
import { fetcher } from "@/lib/api"
import { useFetchUser } from "@/lib/authContext"
import Films from "@/components/Films"
import useSWR from 'swr'
import { useState } from 'react'
import Head from 'next/head'
import { UserProvider } from "@/lib/authContext"
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link"


export default function films({ films }) {

  let filmsQuantity = 6;

  const { user, loading } = useFetchUser()

  const [pageIndex, setPageIndex] = useState(1);

  const { data }= useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films?pagination[page]=${pageIndex}&pagination[pageSize]=${filmsQuantity}`, fetcher, {fallbackData: films})

  const pages = [
    { name: 'Liste des films', href: '/films', current: false },
  ]
  
  return (
    <>
    <UserProvider value={{ user, loading }}>

      <Head>
        <title>Film DataBase - Films</title>
      </Head>
      
      <Layout>
      <nav className="flex mb-12 breadCrumb" aria-label="Breadcrumb">
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


        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            Liste des films <span className="text-lg">({films.data.length})</span>
          </span>
        </h1>
        <Films films={data} />
      </Layout>
      
      {/* PAGINATION */}
      <div className="pagination-bar mt-12 text-center w-full">
        <div className="flex justify-center items-center">
          <button
            className={`md:p-2 rounded py-2 text-white p-2 m-2 ${pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'}`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
            >
            Previous
          </button>
          <button
            className={`md:p-2 rounded py-2 text-white p-2 m-2
            ${pageIndex === (data && data.meta.pagination.pageCount) ? 'bg-gray-300' : 'bg-blue-400'}`}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
            >
            Next
          </button>
        </div>
        
        <p>{`${pageIndex} of ${data && data.meta.pagination.pageCount}`}</p>

      </div>
      
      </UserProvider>
      
    </>
  )
}

export async function getStaticProps() {
  const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`, { next: { revalidate: 1 } })

  return {
    props: {
      films: filmsResponse
    }
  }
}
