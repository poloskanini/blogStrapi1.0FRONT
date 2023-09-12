import { Fragment, useState } from 'react'
import Link from 'next/link'
import HeadRoom from 'react-headroom'
import Image from 'next/image'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
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
  { name: 'Droit du Travail', description: 'Une meilleure défense de vos droits', href: '/droit-du-travail', icon: ChartPieIcon },
  { name: 'Droit de la sécurité sociale', description: 'Speak directly to your customers', href: '/droit-de-la-securite-sociale', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeadRoom>
      <header className="bg-slate-100 drop-shadow z-10 ">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link
              href='/'
              className="-m-1.5 p-1.5 text-xl">
                <span className='font-normal text-black' >MENEZES </span>
                <span className='font-bold text-custom-purple' >AVOCAT</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            {/* <Link
              href='/'
              className='text-xs font-semibold leading-6 text-gray-900'>
              Accueil
            </Link> */}
            <Link
              href='/qui-sommes-nous'
              className='text-sm font-normal leading-6 text-gray-900 hover:text-custom-purple'>
              Qui sommes-nous
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900 border-none hover:text-custom-purple">
                Expertises
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border border-none">
                  <div className="p-4">
                    {expertises.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-custom-purple" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <p className="block font-normal text-gray-900 hover:text-custom-purple">
                            {item.name}
                            <span className="absolute inset-0" />
                          </p>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-normal leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </Link>
                    ))}
                  </div> */}
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              href='/honoraires'
              className='text-sm font-normal leading-6 text-gray-900 hover:text-custom-purple'>
              Honoraires
            </Link>
            <Link
              href='/actualites'
              className='text-sm font-normal leading-6 text-gray-900 hover:text-custom-purple'>
              Actualités
            </Link>
            <Link
              href='/faq'
              className='text-sm font-normal leading-6 text-gray-900 hover:text-custom-purple'>
              F.A.Q
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="./contact" className="text-sm font-semibold leading-6 text-gray-900 border border-custom-purple rounded-full p-3 hover:text-custom-purple">
              Contact <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">MENEZES AVOCAT</span>
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Menezes Avocat"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                /> */}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Accueil
                  </Link> */}
                  <Link
                    href="/qui-sommes-nous"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Qui sommes-nous
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100">
                          Expertises
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...expertises, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-100"
                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                              <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    href="/honoraires"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Honoraires
                  </Link>
                  <Link
                    href="/actualites"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Actualités
                  </Link>
                  <Link
                    href="faq"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal leading-7 text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    F.A.Q
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="text-base font-normal leading-6 text-gray-900 border border-custom-purple rounded-full p-3"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Contact <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </HeadRoom>
  )
}
