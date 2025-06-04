import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qu'est-ce que le droit du travail ?",
    answer:
      "Le droit du travail est une branche du droit qui régit les relations entre les employeurs et les employés. Il définit les droits et les obligations de chaque partie, les conditions de travail, la rémunération, et bien plus encore.",
  },
  {
    question: "Quand devrais-je consulter un avocat spécialisé en droit du travail ?",
    answer:
      "Vous devriez consulter un avocat spécialisé en droit du travail lorsque vous avez des problèmes liés à l'emploi tels que le licenciement injuste, les discriminations au travail, les différends liés aux salaires, ou lorsque vous avez des questions sur vos droits et obligations en tant qu'employé.",
  },
  {
    question: "Quels sont mes droits en tant qu'employé en France ?",
    answer:
      "En France, en tant qu'employé, vous avez le droit à un salaire minimum, des congés payés, la protection contre la discrimination et le harcèlement au travail, le droit de vous syndiquer, et bien d'autres droits. Cependant, ces droits peuvent varier en fonction de votre contrat de travail et de votre secteur d'activité.",
  },
  {
    question: "Que dois-je faire si je pense avoir été licencié injustement ?",
    answer:
      "Si vous croyez avoir été licencié injustement, vous devriez d'abord consulter un avocat spécialisé en droit du travail. Ils vous aideront à évaluer la légalité de votre licenciement et vous guideront sur les étapes à suivre, y compris la possibilité d'engager une action en justice si nécessaire.",
  },
  {
    question: "Comment puis-je faire valoir mes droits en cas de harcèlement au travail ?",
    answer:
      "Si vous êtes victime de harcèlement au travail, il est essentiel de documenter les incidents, de signaler le harcèlement à votre employeur ou aux autorités compétentes, et de consulter un avocat spécialisé en droit du travail. Ils peuvent vous aider à prendre des mesures légales pour mettre fin au harcèlement et réclamer des dommages-intérêts si nécessaire.",
  },
  {
    question: "Quelles sont les différences entre un contrat de travail à durée déterminée (CDD) et un contrat de travail à durée indéterminée (CDI) ?",
    answer:
      "Un CDD a une durée fixe prédéterminée, tandis qu'un CDI est un contrat à durée indéterminée sans date de fin. Les droits et obligations des employés varient en fonction du type de contrat, notamment en ce qui concerne la sécurité de l'emploi, les préavis, et les indemnités de licenciement.",
  },
  {
    question: "Combien de jours de congé payé ai-je droit en France ?",
    answer:
      "En France, un employé a droit à un minimum de 5 semaines de congé payé par an, soit 25 jours ouvrables. Cependant, ce nombre peut varier en fonction de votre convention collective et de votre ancienneté.",
  },
  {
    question: "Comment puis-je négocier mon salaire ou mes conditions de travail avec mon employeur ?",
    answer:
      "Vous pouvez négocier votre salaire et vos conditions de travail en discutant avec votre employeur. Il est recommandé de préparer des arguments solides, de faire des recherches sur les salaires de votre secteur et de demander l'avis d'un avocat spécialisé en droit du travail si nécessaire.",
  },
  {
    question: "Quelles sont les étapes pour porter plainte pour discrimination au travail ?",
    answer:
      "Les étapes pour porter plainte pour discrimination au travail varient, mais elles incluent généralement la collecte de preuves, le signalement à votre employeur ou aux autorités compétentes, et la consultation d'un avocat spécialisé en droit du travail pour vous guider à travers le processus légal.",
  },
  {
    question: "Combien cela coûte-t-il de faire appel à un avocat spécialisé en droit du travail ?",
    answer:
      "Les frais d'un avocat spécialisé en droit du travail peuvent varier en fonction de la complexité de votre cas. Certains avocats offrent une première consultation gratuite, tandis que d'autres facturent à l'heure ou proposent des tarifs forfaitaires. Il est préférable de discuter des frais lors de votre première consultation.",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function FaqBis() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl lg:px-8 mb-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-neutral-950">F.A.Q</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariant}
              onClick={() => toggle(index)}
              className={`accordion py-8 px-6 border-b border-gray-200 rounded-2xl transition-all duration-500 cursor-pointer ${
                activeIndex === index ? "bg-indigo-50" : "hover:bg-indigo-50"
              }`}
            >
              <div className="flex items-center justify-between text-left text-gray-900 group">
                <h5 className="text-lg font-semibold leading-7 group-hover:text-indigo-600">
                  {faq.question}
                </h5>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-500 ${
                    activeIndex === index
                      ? "rotate-180 text-indigo-600"
                      : "group-hover:text-indigo-600"
                  }`}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {activeIndex === index && (
                <div className="mt-4 text-base text-gray-900 leading-6">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
