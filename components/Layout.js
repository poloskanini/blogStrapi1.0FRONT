import Head from 'next/head'
import Container from './Container'
import Nav from './Nav'
import { UserProvider } from '@/lib/authContext'

export default function Layout({ user, loading = false, children }) {
  return (
      <>
      <Nav />
      </>
         

  )
}