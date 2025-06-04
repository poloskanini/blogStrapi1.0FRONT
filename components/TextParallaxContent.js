"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    heading: "Conseil",
    imgUrl: "/assets/images/Photos%20cabinet/DSCF8412.jpg",
    showScrollDown: true,
    content: [
      "Rédaction et analyse des contrats de travail",
      "Accompagnement lors des embauches, mobilités, ruptures",
      "Sécurisation des procédures disciplinaires et des ruptures conventionnelles",
      "Gestion du temps de travail, de la rémunération, et des obligations légales",
      "Prévention des risques psychosociaux et accompagnement des réorganisations",
      "Négociation individuelle et collective",
    ],
  },
  {
    heading: "Relations Collectives",
    imgUrl: "/assets/images/Photos%20cabinet/DSCF8513.jpg",
    content: [
      "Mise en place et fonctionnement des instances représentatives (CSE)",
      "Négociation d’accords collectifs (temps de travail, télétravail, égalité professionnelle…)",
      "Gestion des conflits collectifs et accompagnement du dialogue social",
      "Élections professionnelles, droit syndical, droit de grève",
      "Conseil en cas de réorganisation, fusion ou plan de sauvegarde de l’emploi (PSE)",
    ],
  },
  {
    heading: "Contentieux",
    imgUrl: "/assets/images/Photos%20cabinet/DSCF8404.jpg",
    content: [
      "Contestation ou défense de licenciement",
      "Litiges relatifs aux salaires, primes, heures supplémentaires",
      "Contentieux liés au harcèlement, à la discrimination ou à l’inaptitude",
      "Contentieux des ruptures conflictuelles : prise d’acte, résiliation judiciaire, nullité",
      "Représentation devant les conseils de prud’hommes et les cours d’appel",
    ],
  },
];

const TextParallaxComponent = () => {
  return (
    <div className="bg-white">
      {/* Titre principal */}
      <div className="text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold tracking-wide text-neutral-800 sm:text-5xl">
            Droit du Travail
          </h1>
        </FadeIn>
      </div>

      {/* Bloc de texte d’introduction */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <FadeIn delay={0.2}>
          <p className="text-xl text-neutral-600 leading-relaxed text-justify px-6 font-light sm:text-2xl sm:leading-9">
            Le cabinet intervient à chaque étape de la relation de travail, en{" "}
            <strong className="text-black">conseil</strong> comme en{" "}
            <strong className="text-black">contentieux</strong>, afin de
            sécuriser les pratiques, prévenir les litiges et défendre
            efficacement les intérêts de ses clients.
          </p>
        </FadeIn>
      </div>

      {/* Sections dynamiques */}
      {sections.map((section, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={section.imgUrl}
          heading={section.heading}
          showScrollDown={section.showScrollDown}
          isFirst={section.heading === "Conseil"}
        >
          <SectionContent content={section.content} />
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, heading, children, showScrollDown, isFirst }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative">
        <StickyImage imgUrl={imgUrl} isFirst={isFirst} />
        <OverlayCopy heading={heading} showScrollDown={showScrollDown} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, isFirst }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: IMG_PADDING,
        scale,
      }}
    
      className="sticky z-0 overflow-hidden rounded-3xl h-[40vh] sm:h-[80vh]"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/30" />
    </motion.div>
  );
};

const OverlayCopy = ({ heading, showScrollDown }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

  return (
    <div
      ref={targetRef}
      className="absolute left-0 top-0 flex h-[40vh] sm:h-full w-full flex-col items-center justify-center text-white"
    >
      <motion.h2
        style={{ y }}
        className="text-white text-[10vw] sm:text-[8vw] font-normal tracking-[-0.025em] uppercase text-center font-['PP_Neue_Montreal'] relative z-10 leading-none"
      >
        {heading}
      </motion.h2>

    </div>
  );
};

const SectionContent = ({ content }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-custom-purple">Notre accompagnement</h2>
    <div className="col-span-1 md:col-span-8">
      <ul className="list-disc list-inside space-y-2 text-lg text-neutral-500 md:text-xl leading-relaxed">
        {content.map((item, index) => (
          <FadeInItem key={index}>{item}</FadeInItem>
        ))}
      </ul>
    </div>
  </div>
);

const FadeInItem = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
          : {}
      }
    >
      {children}
    </motion.li>
  );
};

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { duration: 0.2, delay } }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

export default TextParallaxComponent;
