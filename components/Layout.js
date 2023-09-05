import Head from 'next/head'
import Nav from './Nav'
import { UserProvider } from '@/lib/authContext'

export default function Layout({ user, loading = false, children }) {
  return (
      <>
        <Nav />
          <main className='px-4 mt-10'>
            <div className='flex justify-center items-center mx-auto rounded-lg max-w-4xl'>
              <div className="text-2xl font-medium">{children}</div>
            </div>
          </main>
      </>
         

  )
}