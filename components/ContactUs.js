import Link from 'next/link'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { useState, useRef } from 'react'
import { useForm } from "react-hook-form"
import RevealSlow from '../components/animations/RevealSlow'

import emailjs from '@emailjs/browser'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactUs() {

  // const [agreed, setAgreed] = useState(false)

  const form = useRef();

  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: "all"
  })

  const sendEmail = (e) => {

    // ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_e75n6oz', 'template_og74e9o', form.current, 'ZEWxc-sRPqnRKbpPg')
      .then((result) => {
          console.log(result.text);
          console.log('Message envoyé !');
          // TODO: Remplacer par un TOAST SUCCESS
          alert('Message envoyé !');
          form.current.reset()
      }, (error) => {
        // TODO: Remplacer par un TOAST ERROR
          console.log(error.text);
      });
      
  };


  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Formulaire (LEFT COLUMN) */}
        <form ref={form} onSubmit={handleSubmit(sendEmail)} method="POST" className="px-6 p-20 sm:pb-32 lg:px-8 lg:py-42 sm:pt-32 lg:static">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 pb-8">Nous écrire :</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* FirstName */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom <span className='text-red-600'>*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("firstName", {
                      required: "Le prénom est requis.",
                      minLength: {
                        value: 3,
                        message: "Le prénom doit contenir au minimum 3 caractères."
                      },
                      maxLength: {
                        value: 30,
                        message: "Le prénom doit contenir au maximum 30 caractères."
                      },
                    })}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="block w-full rounded-md px-3.5 py-2 border text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-600 text-sm">
                    {errors.firstName?.message}
                  </p>
                </div>
              </div>
              {/* LastName */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom <span className='text-red-600'>*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("lastName", {
                      required: "Le nom est requis.",
                      minLength: {
                        value: 3,
                        message: "Le nom doit contenir au minimum 3 caractères."
                      },
                      maxLength: {
                        value: 30,
                        message: "Le nom doit contenir au maximum 30 caractères."
                      },
                    })}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-600 text-sm">
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
              {/* Company */}
              <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    Entreprise
                  </label>
                  <div className="mt-2.5">
                    <input
                      {...register("company", {
                        minLength: {
                          value: 2,
                          message: "L'entreprise doit contenir au minimum 2 caractères."
                        },
                        maxLength: {
                          value: 30,
                          message: "L'entreprise doit contenir au maximum 30 caractères."
                        },
                      })}
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <p className="text-red-600 text-sm">
                    {errors.company?.message}
                  </p>
                  </div>
                </div>
              <div>
                {/* Email */}
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email <span className='text-red-600'>*</span>
                </label>
              <div className="mt-2.5">
                  <input
                    {...register("email", {
                      required: "L'email est requis",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "L'email doit être valide."
                      }
                    })}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-600 text-sm">
                    {errors.email?.message}
                  </p>
              </div>
              </div>
              {/* Telephone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                  Téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("phoneNumber", {
                      pattern: {
                        value: /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/,
                        message: "Le téléphone doit être valide."
                      }
                    })}
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="tel"
                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="text-red-600 text-sm">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>
              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message <span className='text-red-600'>*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message", {
                      required: "Le message est requis.",
                      minLength: {
                        value: 3,
                        message: "Le message doit contenir au minimum 3 caractères."
                      },
                      maxLength: {
                        value: 500,
                        message: "Le message ne peut contenir plus de 500 caractères."
                      },
                    })}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                  <p className="text-red-600 text-sm">
                    {errors.message?.message}
                  </p>
                </div>
              </div>
              {/* Agreed */}
              <div className="sm:col-span-2">
                <label htmlFor="agreed" className="relative items-center cursor-pointer">
                  <input
                    {...register("agreed", {
                      required: "Veuillez cocher la case.",
                    })}
                    type="checkbox"
                    className="sr-only peer"
                    name="agreed"
                    id="agreed"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-purple"></div>
                  <p className="text-red-600 text-sm">
                  {errors.agreed?.message}
                </p>
                  <span className="text-sm leading-6 text-gray-600">En soumettant ce formulaire, vous acceptez notre <a href="#" className="font-semibold text-custom-purple">
                      politique de confidentialité. <span className='text-red-600'>*</span>
                      </a></span>
                </label>
              </div>
              
              {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2" required>
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className={classNames(
                        agreed ? 'bg-custom-purple' : 'bg-gray-200',
                        'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      )}
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          agreed ? 'translate-x-3.5' : 'translate-x-0',
                          'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                  </div>
                  <Switch.Label className="text-sm leading-6 text-gray-600">
                  En cochant ceci, vous acceptez notre {' '}
                    <a href="#" className="font-semibold text-custom-purple">
                    politique de confidentialité.
                    </a>
                  </Switch.Label>
              </Switch.Group> */}

            {/*Submit  */}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="block w-full rounded-md bg-custom-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-custom-purple-dark transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>

         {/* Informations (RIGHT COLUMN) */}
         <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-42">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nous contacter :</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous sommes à votre disposition et à votre écoute.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className='hover:text-custom-purple' href={"https://maps.app.goo.gl/L3sJhjpQ4cT7oy5V7"}>
                    62 rue Condorcet
                    <br />
                    75009 PARIS
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-custom-purple" href="tel:+33184171590">
                    01 84 17 15 90
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-custom-purple" href="mailto:hello@example.com">
                    hello@example.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>

          <RevealSlow>
            {/* GOOGLE MAPS */}
            <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.8309831717133!2d2.3418794!3d48.880498499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4141541b61%3A0xe6488e15aa2a21ca!2s62%20Rue%20Condorcet%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1696105484783!5m2!1sfr!2sfr" width="100%" height="300" loading="lazy"></iframe>
          </RevealSlow>

        </div>
      </div>
    </div>
  )
}
