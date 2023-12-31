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
      {/* BREADCRUMB */}
      {/* <nav className="flex mt-5 mb-12 justify-center" aria-label="Breadcrumb">
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
        </nav> */}
        {/* BreadCrumb V2 */}
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