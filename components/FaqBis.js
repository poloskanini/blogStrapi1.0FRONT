import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qu'est-ce que le droit du travail ?",
    answer:
      "Le droit du travail est une branche du droit qui régit les relations entre les employeurs et les employés...",
  },
  {
    question: "Quand devrais-je consulter un avocat spécialisé en droit du travail ?",
    answer:
      "Vous devriez consulter un avocat spécialisé en droit du travail lorsque vous avez des problèmes liés à l'emploi...",
  },
  {
    question: "Quels sont mes droits en tant qu'employé en France ?",
    answer:
      "En France, en tant qu'employé, vous avez le droit à un salaire minimum, des congés payés...",
  },
  // Ajoute les autres FAQ ici...
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
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
          <h2 className="text-4xl font-bold text-neutral-950">F.A.Q</h2>
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
