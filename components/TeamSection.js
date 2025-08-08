import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Marc-Antoine NYS",
    role: "Avocat au barreau de Paris",
    imageUrl: "/assets/images/PhotosAssocies/marc-antoine-nys-portfolio.jpg",
    specialty: (
      <div className="space-y-2 text-sm md:text-lg font-light text-justify">
        <p>
          Avocat au barreau de Paris depuis mars 2011, diplômé du Master 2 professionnel de juriste d’affaires à l’Université Paris V – René Descartes.
        </p>
        <br />
        <p>
          Intervient principalement en droit commercial, droit de la construction et contentieux des affaires.
        </p>
      </div>
    ),
    linkedinUrl: "/",
  },
  {
    name: "Florent CORNUT-GENTILLE",
    role: "Avocat au barreau de Paris",
    imageUrl: "/assets/images/PhotosAssocies/florent-cornut-gentille-portfolio.jpg",
    specialty: (
      <div className="space-y-2 text-sm md:text-lg font-light text-justify">
        <p>
          Florent CORNUT-GENTILLE est avocat au barreau de Paris depuis octobre 2010. Diplômé du Master 2 professionnel de Droit des affaires et fiscalité de l’Université Paris II Panthéon-Assas, il est parallèlement titulaire d’une licence d’Histoire.
        </p>
        <br />
        <p>
          Florent CORNUT-GENTILLE conseille ainsi principalement les entreprises en droit des sociétés, droit des contrats ainsi qu’en droit commercial.
        </p>
      </div>
    ),
    linkedinUrl: "/",
  },
  {
    name: "Émilie SERGEANT",
    role: "Avocate au barreau de Paris",
    imageUrl: "/assets/images/PhotosAssocies/segolene-hauth-portfolo.jpg",
    specialty: (
      <>
        <p className="text-sm md:text-lg font-light mb-1 text-center">
          Droit du travail & sécurité sociale
        </p>
        <span>-</span>
        <p className="text-sm md:text-lg font-light mb-1 text-center">
          Accompagnement stratégique des entreprises
        </p>
      </>
    ),
    linkedinUrl: "/",
  },
];

export default function TeamSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.15, // décalage progressif
      },
    }),
  };

  return (
    <section className="mt-2 mb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre équipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous sommes un groupe d&apos;avocats et de juristes passionnés par
            ce que nous faisons, et entièrement dévoués à fournir les meilleurs
            résultats pour nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
              className="relative group flex flex-col items-center text-center rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white h-[70vh] w-full max-w-md mx-auto"
            >
              <div className="relative w-full h-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  fill
                />
                <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-4">
                  {member.specialty}
                </div>
              </div>

              <div className="absolute bottom-0 p-4 bg-white w-full">
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {member.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {member.role}
                </p>
                <a
                  href={member.linkedinUrl}
                  className="text-gray-400 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
