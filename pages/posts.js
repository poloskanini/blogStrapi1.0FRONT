import Layout from "@/components/Layout"
import Head from 'next/head'
import BreadCrumb from "@/components/BreadCrumb"
import Container from "@/components/Container"
import { fetcher } from "@/lib/api"
import useSWR from 'swr'
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link"


export default function posts() {
  return (
    <>
       <Head>
        <title>Liste des films</title>
      </Head>
      
      <Layout/>
    
    </>
  )
}