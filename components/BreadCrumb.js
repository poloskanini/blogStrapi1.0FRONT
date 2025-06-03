import Link from "next/link"
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function BreadCrumb({ title, href, withExpertises = false }) {
  const pages = []

  if (withExpertises) {
    pages.push({ name: "Expertises", href: "/expertises", current: false })
  }

  pages.push({ name: title, href: href, current: true })

  return (
    <nav className="flex mb-12 mt-5" aria-label="Breadcrumb">
      <ol role="list" className="flex">
        <li>
          <Link href="/" className="text-gray-400 hover:text-gray-500 flex items-center">
            <HomeIcon className="h-5 w-5 flex-shrink-0 mr-2" aria-hidden="true" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>
        {pages.map((page, index) => (
          <li key={page.name} className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {page.href && !page.current ? (
              <Link
                href={page.href}
                className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {page.name}
              </Link>
            ) : (
              <span className="ml-2 text-sm font-medium text-gray-500" aria-current="page">
                {page.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
