import Head from 'next/head'
import Container from './Container'
import Nav from './Nav'
import Header from './Header'
import { UserProvider } from '@/lib/authContext'

export default function Layout({ user, loading = false, children }) {
  return (
      <>
        <Header />
      </>
  )
}