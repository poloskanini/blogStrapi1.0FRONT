import { useRouter } from 'next/router'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeadRoom from 'react-headroom'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { BriefcaseIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import { Inter } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const expertises = [
  { name: 'Droit du Travail', description: 'Intervention à chaque étape de la relation de travail', href: '/droitdutravail', icon: BriefcaseIcon },
  { name: 'Droit de la Sécurité sociale', description: 'Prévention des risques et défense de vos intérêts', href: '/droit-de-la-securite-sociale', icon: ShieldCheckIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    mobileMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  })

  const router = useRouter();

  return (
    <HeadRoom disableInlineStyles>
      <header className={router.pathname === "/" ? "homeHeader header  z-10 border-b-1 border-gray-300" : "header z-10 border-b-1 border-gray-300"}>
        <nav className={mobileMenuOpen ? "mobileActive mx-auto flex items-center justify-between p-3 lg:p-6 drop-shadow-md" : "mx-auto flex items-center justify-between p-3 lg:p-6 drop-shadow-md"} aria-label="Global">
          <h1 className="flex lg:flex-1">
            <Link href='/' className="px-3 lastName flex">
              <span>
                <Image
                  src={router.pathname === "/" || mobileMenuOpen ? "https://res.cloudinary.com/dbff7xgqx/image/upload/v1695369122/logomenezes-white_wpwzky.svg" : "https://res.cloudinary.com/dbff7xgqx/image/upload/v1695373481/logomenezes-black_jluvbc.svg"}
                  width={50}
                  height={50}
                  alt='logo'
                  className='header-logo'
                  priority
                />
              </span>
              <span className="px-2 text-xl header-brand font-normal">MENEZES</span>
              <span className="header-subBrand font-bold text-custom-purple text-xl">AVOCAT</span>
            </Link>
          </h1>

          <div className={"flex lg:hidden"}>
            <div className='menu-toggle' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="hamBox">
                <span className={mobileMenuOpen ? "lineTop spin" : "lineTop"}></span>
                <span className={mobileMenuOpen ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>
          </div>

          <Popover.Group className="hidden lg:flex lg:gap-x-12 px-5">
            <Link href='/le-cabinet' className={router.pathname == "/le-cabinet" ? "navlink navlink-underline text-custom-purple navlink text-sm leading-6 font-semibold delay-1000" : "navlink text-sm font-semibold leading-6 text-gray-900 hover:text-custom-purple hover:font-bold"}>
              Le Cabinet
            </Link>
            <Popover className="relative" onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
              <Popover.Button className="navlink navlink-underline flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none hover:text-custom-purple">
                Expertises
                <ChevronDownIcon className={mobileMenuOpen ? "hidden" : "h-5 w-5 flex-none"} aria-hidden="true" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                show={isShowing}
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border border-none">
                  <div className="p-4">
                    {expertises.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="navlink-underline group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-custom-purple" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <p className="block font-semibold text-gray-900 hover:text-custom-purple">
                            {item.name}
                            <span className="absolute inset-0" />
                          </p>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link href='/honoraires' className={router.pathname == "/honoraires" ? "text-custom-purple navlink navlink-underline text-sm leading-6 font-semibold" : "navlink text-sm font-semibold leading-6 text-gray-900 hover:text-custom-purple hover:font-bold"}>
              Honoraires
            </Link>
            <Link href='/actualites' className={router.pathname == "/actualites" ? "text-custom-purple navlink navlink-underline text-sm leading-6 font-semibold" : "navlink text-sm font-semibold leading-6 text-gray-900 hover:text-custom-purple hover:font-bold"}>
              Actualités
            </Link>
            <Link href='/faqs' className={router.pathname == "/faqs" ? "text-custom-purple navlink navlink-underline text-sm leading-6 font-semibold" : "navlink text-sm font-semibold leading-6 text-gray-900 hover:text-custom-purple hover:font-bold"}>
              F.A.Q
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex sm:flex-0 xl:flex-1 lg:justify-end px-3">
            <Link href="/contact" className={mobileMenuOpen ? " hidden" : "navlink-contact text-sm font-semibold leading-6 text-gray-900 border border-custom-purple rounded-full p-3 hover:text-black hover:bg-slate-200 hover:font-bold duration-100 transition"}>
              Contact <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <div className={mobileMenuOpen ? "nav-overlay mobileActive" : "nav-overlay invisible "}>
          <ul className={`nav-links h-44 mt-20 flex flex-col items-center`}>
            <li className="nav-item relative p-5">
              <Link href='/le-cabinet' className='text-xl text-white font-normal hover:text-custom-purple'>Le Cabinet</Link>
            </li>
            <li className="nav-item text-white relative p-5 text-xl font-normal cursor-pointer hover:text-custom-purple flex items-center" onClick={() => setSubOpen(!subOpen)}>
              <span>Expertises</span>
              <ChevronDownIcon className={classNames(subOpen ? 'rotate-180 transition-all duration-200' : '', 'h-5 w-5 flex-none transition-all duration-200')} aria-hidden="true" />
            </li>
            <ul
              className={subOpen ? 'expertises-list flex flex-col transition-all duration-500' : 'expertises-list flex flex-col transition-all duration-500 invisible'}
              style={{ height: subOpen ? '100%' : '0%', opacity: subOpen ? "1" : "0" }}
            >
              {expertises.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg p-5 text-white text-base font-normal hover:text-custom-purple"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='flex'>
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    &nbsp; {item.name}
                  </span>
                </Link>
              ))}
            </ul>
            <li className="nav-item text-white relative p-5">
              <Link href='/honoraires' className='text-xl font-normal hover:text-custom-purple'>Honoraires</Link>
            </li>
            <li className="nav-item text-white relative p-5">
              <Link href='/actualites' className='text-xl font-normal hover:text-custom-purple'>Actualités</Link>
            </li>
            <li className="nav-item text-white relative p-5">
              <Link href='/faqs' className='text-xl font-normal hover:text-custom-purple'>F.A.Q</Link>
            </li>
            <li className="nav-item text-white relative mt-8">
              <Link href="/contact" className="text-xl font-semibold border border-custom-purple rounded-full p-3 hover:text-custom-purple">
                Contact <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </HeadRoom>
  )
}