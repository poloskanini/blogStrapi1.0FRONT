import Image from 'next/image'
import Link from 'next/link'

const currentYear = new Date().getFullYear();


const navigation = {
  un: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  deux: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  trois: [
    { name: 'Accueil', href: '/' },
    { name: 'Le Cabinet', href: '/le-cabinet' },
    { name: 'Droit du Travail', href: '/droit-du-travail' },
    { name: 'Droit de la Sécurité Sociale', href: '/droit-de-la-securite-sociale' },
    { name: 'Formations', href: '#' },
  ],
  quatre: [
    { name: 'Conseils', href: '#' },
    { name: 'Autres expertises', href: '#' },
    { name: 'Honoraires', href: '/honoraires' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'F.A.Q', href: 'faqs' },
  ],
  social: [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/sandrine-menezes-16b1554a/',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="image-wrapper text-center flex flex-col justify-center items-center mb-5">
            <Link
              href='/'>
              <Image
                className="h-14"
                src="https://res.cloudinary.com/dbff7xgqx/image/upload/v1695369122/logomenezes-white_wpwzky.svg"
                alt="Company name"
                width={500}
                height={500}
              />
              <div>
                <span className="px-2 text-xl header-brand font-normal text-white">MENEZES</span>
                <span className="header-subBrand font-bold text-custom-purple text-xl">AVOCAT</span>
              </div>
            </Link>
          </div>
          <div className="image-wrapper text-center flex flex-col justify-center items-center mb-5">
            <div className='text-center flex flex-column justify-center items-center'>
                <Link
                  href="./contact"
                  className="text-sm font-normal leading-6 text-gray-300  bg-custom-purple hover:bg-custom-purple-dark rounded-full p-3 duration-100 transition">
                  Contactez nous <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </div>

        <div className="image-wrapper text-center flex flex-col justify-center items-center mb-5">
          <div className='flex justify-center text-center'>
              {/* <h3 className="text-sm font-semibold leading-6 text-white">Adresse</h3> */}
            <Link
              href={"https://maps.app.goo.gl/L3sJhjpQ4cT7oy5V7"}
              className='text-sm font-normal leading-6 text-gray-300 hover:text-white m-6'
            >
            <span>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <p>62 rue Condorcet</p>
            <p>75009 PARIS</p>
            </Link>
                    
          </div>
                
          <div className='flex text-center flex-col justify-between'>
            <Link
              href={"tel:+33184171590"}
              className='text-sm font-normal leading-6 text-gray-300 hover:text-white m-6'
            >
            <span>
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
            </span>
            <p>01 84 17 15 90</p>
            </Link>
          </div>

          <div className='flex text-center flex-col justify-between'>
            <Link
              href={"mailto:contact@menezes-avocat.com"}
              className='text-sm font-normal leading-6 text-gray-300 hover:text-white m-6'
            >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 225 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
              <p>contact@menezes-avocat.com</p>
              </Link>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8 sm:hidden portrait:hidden items-center justify-center">
              <div className='flex justify-center items-center'>
                <ul role="list" className="space-y-4">
                  {navigation.trois.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <ul role="list" className="space-y-4">
                  {navigation.quatre.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className='text-center'>
            <Link
              href="https://www.nicolasbarthes.com"
              className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                Site réalisé par N|B
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 text-center">
              &copy; {currentYear} Sandrine MENEZES
            </p>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 text-center">
              Tous droits réservés.
            </p>
          </div>
          <div className="space-x-6 hidden lg:flex justify-center">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
