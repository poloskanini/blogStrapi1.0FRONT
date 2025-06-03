import Link from 'next/link'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { useState, useRef } from 'react'
import { useForm, Controller } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactUs() {
  const form = useRef()

  const { register, control, formState: { errors }, handleSubmit, setValue, reset, clearErrors } = useForm({
  mode: "onBlur",
  defaultValues: {
    agreed: false
  }
})

const sendEmail = () => {
  emailjs.sendForm('service_e75n6oz', 'template_og74e9o', form.current, 'ZEWxc-sRPqnRKbpPg')
    .then(() => {
      toast.success("Votre message a bien été envoyé", { position: "bottom-center", autoClose: 5000 })

      // Remets les valeurs initiales (ce que fait reset)
      reset({ agreed: false })

      // 👇 MAIS AUSSI réinitialise les erreurs (sinon RHF refait un tour de validation)
      clearErrors()
    }, () => {
      toast.error("Une erreur s'est produite, veuillez réessayer.", { position: "bottom-center", autoClose: 5000 })
    })
}

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-lg shadow-sm">
        {/* Formulaire */}
        <form ref={form} onSubmit={handleSubmit(sendEmail)} method="POST" className="px-6 lg:px-8 lg:py-42 lg:static">
          <div className="mx-auto max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 py-8">Nous écrire :</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* Prénom */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom <span className='text-red-600'>*</span>
                </label>
                <div className="mt-2.5">
                  <input {...register("firstName", { required: "Le prénom est requis.", minLength: { value: 3, message: "Le prénom doit contenir au minimum 3 caractères." }, maxLength: { value: 30, message: "Le prénom doit contenir au maximum 30 caractères." }})} type="text" id="firstName" autoComplete="given-name" className="block w-full rounded-md px-3.5 py-2 border text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                  <p className="text-red-600 text-sm">{errors.firstName?.message}</p>
                </div>
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom <span className='text-red-600'>*</span>
                </label>
                <div className="mt-2.5">
                  <input {...register("lastName", { required: "Le nom est requis.", minLength: { value: 3, message: "Le nom doit contenir au minimum 3 caractères." }, maxLength: { value: 30, message: "Le nom doit contenir au maximum 30 caractères." }})} type="text" id="lastName" autoComplete="family-name" className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                  <p className="text-red-600 text-sm">{errors.lastName?.message}</p>
                </div>
              </div>

              {/* Entreprise */}
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Entreprise</label>
                <div className="mt-2.5">
                  <input {...register("company", { minLength: { value: 2, message: "L'entreprise doit contenir au minimum 2 caractères." }, maxLength: { value: 30, message: "L'entreprise doit contenir au maximum 30 caractères." }})} type="text" id="company" autoComplete="organization" className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                  <p className="text-red-600 text-sm">{errors.company?.message}</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email <span className='text-red-600'>*</span></label>
                <div className="mt-2.5">
                  <input {...register("email", { required: "L'email est requis", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "L'email doit être valide." }})} type="email" id="email" autoComplete="email" className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                  <p className="text-red-600 text-sm">{errors.email?.message}</p>
                </div>
              </div>

              {/* Telephone */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Téléphone</label>
                <div className="mt-2.5">
                  <input {...register("phoneNumber", { pattern: { value: /^(?:(?:(?:\+|00)33\s?(?:\(0\)\s?)?)|0)[1-9](?:[\s.-]?\d{2}){4}$/, message: "Le téléphone doit être valide." }})} type="tel" id="phoneNumber" autoComplete="tel" className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                  <p className="text-red-600 text-sm">{errors.phoneNumber?.message}</p>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message <span className='text-red-600'>*</span></label>
                <div className="mt-2.5">
                  <textarea {...register("message", { required: "Le message est requis.", minLength: { value: 3, message: "Le message doit contenir au minimum 3 caractères." }, maxLength: { value: 500, message: "Le message ne peut contenir plus de 500 caractères." }})} id="message" rows={4} className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm" defaultValue={''} />
                  <p className="text-red-600 text-sm">{errors.message?.message}</p>
                </div>
              </div>

              {/* Agreed Switch */}
              <div className="sm:col-span-2">
                <Controller
                  name="agreed"
                  control={control}
                  rules={{ required: "Veuillez cocher la case." }}
                  render={({ field: { value, onChange } }) => (
                    <div className="flex items-center gap-x-4">
                      <Switch
                        checked={value}
                        onChange={(checked) => {
                          onChange(checked)
                          setValue("agreed", checked)
                        }}
                        className={classNames(
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out",
                          value ? "bg-custom-purple" : "bg-gray-200"
                        )}
                      >
                        <span aria-hidden="true" className={classNames("inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", value ? "translate-x-5" : "translate-x-0")} />
                      </Switch>
                      <span className="text-sm leading-6 text-gray-600">En soumettant ce formulaire, vous acceptez notre
                        <Link href="/politique-de-confidentialite" className="font-semibold text-custom-purple" target="_blank"> politique de confidentialité. <span className='text-red-600'>*</span></Link>
                      </span>
                    </div>
                  )}
                />
                <p className="text-red-600 text-sm">{errors.agreed?.message}</p>
              </div>
            </div>

            {/* Envoyer */}
            <div className="mt-8 flex justify-end">
              <button type="submit" className="block w-full rounded-md bg-custom-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-custom-purple-dark transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Envoyer
              </button>
            </div>

            <ToastContainer />

            {/* Adresses/Tel/Google Maps */}
            <div className="mt-10 p-6 bg-white/80 rounded shadow-sm flex flex-col h-full flex-grow">
              <dl className="space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                    <dd>
                      <Link
                        href="https://maps.app.goo.gl/tBtLkVjsP1u8KAG36"
                        className='hover:text-custom-purple'
                        >
                        62 rue Condorcet<br />75009 PARIS
                      </Link>
                    </dd>
                </div>
                <div className="flex gap-x-4">
                  <PhoneIcon className="h-7 w-6 text-gray-400" />
                    <dd>
                      <Link
                        href="tel:+33184171590"
                        className='hover:text-custom-purple'>
                        01 84 17 15 90
                      </Link>
                    </dd>
                </div>
                <div className="flex gap-x-4">
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                    <dd>
                      <Link
                        href="mailto:contact@menezes-avocat.com"
                        className='hover:text-custom-purple'
                        >
                        contact@menezes-avocat.com
                      </Link>
                    </dd>
                </div>
              </dl>
              <div className="mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5247.6619693508965!2d2.339304477143483!3d48.88049847133517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4141541b61%3A0xe6488e15aa2a21ca!2s62%20Rue%20Condorcet%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1748930918528!5m2!1sfr!2sfr" width="100%" height="200" loading="lazy" className="rounded"></iframe>
              </div>
            </div>

          </div>
        </form>

        {/* Image à droite */}
        <div className="hidden lg:block relative">
          <Image src="/assets/images/Photos cabinet/DSCF8436.jpg" alt="Contact background" className="w-full h-full object-cover object-left rounded-tr-lg shadow-sm" width={500} height={500} />
        </div>
      </div>
    </div>
  )
}
