import Link from "next/link"
import { useRouter } from 'next/router'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


export default function BreadCrumb(props) {

  const router = useRouter();

  const pages = [
    { name: props.title, href: props.href, current: false },
  ]

  return (
    <>
     
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
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <Link
                    href={props.href}
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
    </>
  )
}