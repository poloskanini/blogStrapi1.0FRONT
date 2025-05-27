import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]

export default function ContentWork() {

  useEffect(() => {
    const intersected = document.querySelectorAll('.intersected')
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('isActive')
        }
      })
    })
  
    intersected.forEach(intersectedItem => {
      observer.observe(intersectedItem)
    })
  })

  return (
    <div className="bg-white">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6  sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 intersected">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto">
                Nous protégeons vos droits, vous restez concentrés sur vos objectifs.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 text-justify">
                <p className="text-lg leading-8 text-gray-600">
                Depuis plus de 15 ans, <strong>notre cabinet défend, conseille, négocie</strong>. Nous mettons notre énergie et notre rigueur au service de celles et ceux qui doivent faire face à un enjeu professionnel majeur : rupture, litige, contrôle URSSAF, conflit collectif, ou simplement besoin de clarté dans un environnement juridique mouvant.
                </p>
                <br />
                <p className="text-lg leading-8 text-gray-600">
                <strong>Fondé par Sandrine MENEZES</strong>, le cabinet exerce une défense libre, humaine et engagée. Ni formatage, ni automatisme : chaque dossier est traité avec méthode, vision, et stratégie.
                </p>
                <br />
                <p className="text-lg leading-8 text-gray-600">
                Nous intervenons​ en <strong> droit du travail</strong> comme en <strong>droit de la sécurité sociale</strong>, pour des entreprises, des dirigeants, ou des salariés, dans un esprit de rigueur, de loyauté et d’écoute. Nous aimons les dossiers complexes, les confrontations d’idées, mais aussi les <strong> solutions pragmatiques et durables</strong>.
                </p>
                <br/>
                <p className="text-lg leading-8 font-bold text-custom-purple">Nous avons la conviction que le droit social est avant tout un droit vivant, profondément humain.</p>
              </div>
              <Image
                src="/assets/images/Photos cabinet/DSCF8536.jpg"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

      </main>

    </div>
  )
}
