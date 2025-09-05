"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    heading: "Conseil & Prévention",
    imgUrl: "/assets/images/Photos%20cabinet/DSCF8405.jpg",
    showScrollDown: true,
    content: [
      "Audit et optimisation des cotisations sociales",
      "Analyse des risques en matière de conformité sociale",
      "Préparation et accompagnement lors des contrôles URSSAF, CPAM, DRIEETS et autres organismes",
      "Mise en place de procédures internes pour limiter les risques de redressement",
      "Formation et sensibilisation des équipes aux bonnes pratiques sociales",
    ],
  },
  {
    heading: "Contentieux",
    imgUrl: "/assets/images/Photos%20cabinet/DSCF8442.jpg",
    content: [
      "Contestation des redressements URSSAF et litiges relatifs aux cotisations sociales",
      "Défense lors des procédures de contrôle, de recouvrement et de pénalisation",
      "Assistance en matière de contentieux pénal liés aux infractions sociales (travail dissimulé, fraude aux cotisations, etc.)",
      "Contentieux des accidents du travail et des maladies professionnelles ",
      "Contentieux de la faute inexcusable",
      "Représentation devant les juridictions administratives, prud’homales et pénales",
      "Gestion des procédures de régularisation et négociation des plans d’apurement avec les organismes de sécurité sociale",
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
            Droit de la Sécurité Sociale
          </h1>
        </FadeIn>
      </div>

      {/* Bloc de texte d’introduction */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <FadeIn delay={0.2}>
          <p className="text-xl text-neutral-600 leading-relaxed text-justify px-6 font-light sm:text-2xl sm:leading-9">
            Le cabinet accompagne les entreprises dans la gestion de leurs obligations sociales, la prévention des risques et la défense de leurs intérêts face aux organismes de sécurité sociale.
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
      initial={isFirst ? { opacity: 0 } : {}}
      animate={isFirst ? { opacity: 1 } : {}}
      transition={isFirst ? { duration: 1.2, ease: "easeOut" } : {}}
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
