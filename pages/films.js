import Layout from "@/components/Layout"
import BreadCrumb from "@/components/BreadCrumb"
import Container from "@/components/Container"
import { fetcher } from "@/lib/api"
import { useFetchUser } from "@/lib/authContext"
import Films from "@/components/Films"
import useSWR from 'swr'
import { useState } from 'react'
import Head from 'next/head'
// import { UserProvider } from "@/lib/authContext"
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link"


export default function FilmsList({ films }) {

  let filmsQuantity = 6;

  const { user, loading } = useFetchUser()

  const [pageIndex, setPageIndex] = useState(1);

  const { data }= useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films?pagination[page]=${pageIndex}&pagination[pageSize]=${filmsQuantity}`, fetcher, {fallbackData: films})

  const pages = [
    { name: 'Liste des films', href: '/films', current: false },
  ]
  
  return (
    <>

      <Head>
        <title>Liste des films</title>
      </Head>
      
      <Layout/>

      <BreadCrumb />

      <Container>
        <h1 className="text-5xl md:text-6xl leading-tighter mb-4">
          <span className={"bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2"}>
            Liste des films <span className="text-lg">({films.data.length})</span>
          </span>
        </h1>
        <Films films={data} />

      </Container>
      
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
      
      
    </>
  )
}

export async function getStaticProps() {
  const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`, { next: { revalidate: 1 } })
  // console.log(filmsResponse);
  
  // Tri des films pour qu'ils soient classés par ID décroissant
  // filmsResponse.data.sort((x, y) => y.id - x.id)

  return {
    props: {
      films: filmsResponse
    }
  }
}