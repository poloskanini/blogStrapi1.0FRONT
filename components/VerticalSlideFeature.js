import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function VerticalSlideFeatures() {
  const [selected, setSelected] = useState(0);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
      className="mx-auto flex max-w-full h-full flex-col-reverse items-center gap-6 bg-white pb-12 md:flex-row md:gap-12"
    >
      {/* Conteneur fixe */}
      <div className="relative h-[500px] w-full rounded-xl bg-slate-800 shadow-xl text-white overflow-auto flex flex-col items-center p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full"
          >
            {FEATURES[selected].Content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Onglets */}
      <div className="w-full shrink-0 md:w-fit">
        {FEATURES.map((tab, index) => (
          <div key={index} className="group relative w-full md:w-fit">
            <button
              onClick={() => setSelected(index)}
              className="relative z-0 flex w-full p-4 border-0 md:flex-col md:border-l-8 md:p-6"
            >
              <span
                className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
                  selected === index
                    ? "text-custom-purple"
                    : "text-slate-400 group-hover:text-slate-500"
                }`}
              >
                {tab.title}
              </span>
            </button>
            {selected === index && (
              <motion.span
                layoutId="vertical-slide-feature-slider"
                className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-custom-purple md:w-2"
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

const FEATURES = [
  {
    title: "2009",
    Content: (
      <div className="lg:p-8 text-center">
        <div className="yearBox">
          <h3 className="relative text-white text-6xl lg:text-9xl uppercase tracking-widest leading-none font-extrabold opacity-10 text-center">
            2009
          </h3>
          <h4 className="-mt-12 text-2xl lg:text-4xl uppercase tracking-widest leading-none font-thin">
            Master 2 Droit Social
          </h4>
        </div>
        <div className="contentBox text-left">
          <ul className="mt-20 list-disc list-inside text-lg md:text-2xl lg:text-2xl font-light leading-1 tracking-tight space-y-2">
            <li>Université Paris II Panthéon-Assas.</li>
            <li>Spécialisation en droit du travail et droit de la sécurité sociale.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2012",
    Content: (
      <div className="lg:p-8 text-center">
        <div className="yearBox">
          <h3 className="relative text-white text-6xl lg:text-9xl uppercase tracking-widest leading-none font-extrabold opacity-10 text-center">
            2012
          </h3>
          <h4 className="-mt-12 text-2xl lg:text-4xl uppercase tracking-widest leading-none font-thin">
            Prestation de serment
          </h4>
        </div>
        <div className="contentBox text-left">
          <ul className="mt-20 list-disc list-inside text-lg md:text-2xl lg:text-2xl font-light leading-1 tracking-tight space-y-2">
            <li>Entrée dans la profession d’avocat après obtention du CAPA.</li>
            <li>Premières collaborations en cabinets spécialisés en droit social.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2012-2017",
    Content: (
      <div className="lg:p-8 text-center">
        <div className="yearBox">
          <h3 className="relative text-white text-6xl lg:text-9xl uppercase tracking-widest leading-none font-extrabold opacity-10 text-center">
            2012-2017
          </h3>
          <h4 className="-mt-12 text-2xl lg:text-4xl uppercase tracking-widest leading-none font-thin">
            Expérience en cabinets parisiens
          </h4>
        </div>
        <div className="contentBox text-left">
          <ul className="mt-20 list-disc list-inside text-lg md:text-2xl lg:text-2xl font-light leading-1 tracking-tight space-y-2">
            <li>
              Accompagnement de clients dans des contextes RH complexes : <br />Restructurations,
              contentieux prud’homaux, négociations collectives, contrôles URSSAF...
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2017",
    Content: (
      <div className="lg:p-8 text-center">
        <div className="yearBox">
          <h3 className="relative text-white text-6xl lg:text-9xl uppercase tracking-widest leading-none font-extrabold opacity-10 text-center">
            2017
          </h3>
          <h4 className="-mt-12 text-2xl lg:text-4xl uppercase tracking-widest leading-none font-thin">
            Création du cabinet
          </h4>
        </div>
        <div className="contentBox text-left">
          <ul className="mt-20 list-disc list-inside text-lg md:text-2xl lg:text-2xl font-light leading-1 tracking-tight space-y-2">
            <li>Un cabinet indépendant dédié au droit du travail et au droit de la sécurité sociale.</li>
            <li>Conseil, contentieux, formation, accompagnement stratégique.</li>
          </ul>
        </div>
      </div>
    ),
  },
];
