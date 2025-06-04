import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import ScrollArrow from "./ScrollArrow";
import Image from "next/image";
import Link from "next/link";

const ImageGridHero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };  

  return (
    <>
      <Nav scrollYProgress={scrollYProgress} />
      <section ref={targetRef} className="bg-white h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />

          <Circles />
        </div>

        {/* Flèche animée */}
        <ScrollArrow />
      </section>
      
      <section className="bg-white my-16 forfait">
        <motion.div
          className="flex flex-col-reverse lg:flex-row gap-16 items-center px-4 mx-auto max-w-screen-xl lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
        >
          {/* Images */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <Image
              width={500}
              height={500}
              className="w-full rounded-lg h-full aspect-auto object-cover"
              src="/assets/images/Photos%20cabinet/DSCF8462.jpg"
              alt="office content 1"
            />
            <Image
              width={500}
              height={500}
              className="w-full rounded-lg mt-6"
              src="/assets/images/Photos%20cabinet/DSCF8589.jpg"
              alt="office content 1"
            />
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-center font-light text-gray-500 sm:text-lg dark:text-gray-400 w-full">
            <h1 className="text-neutral-950 text-5xl md:text-7xl font-bold max-w-xl text-end">
              Forfait
            </h1>
            <p className="my-4 leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-justify">
              Lorsque l’intervention peut être délimitée dans le temps et dans son périmètre (rédaction d’un contrat, assistance à une rupture conventionnelle, procédure prud’homale, contrôle URSSAF, etc.),
              <strong className="text-custom-purple font-black"> un forfait global peut être proposé.</strong> Il comprend l’ensemble des diligences prévues, sans surprise.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-white dark:bg-gray-900 mb-16 tauxHoraire border border-red-500">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-8">
          <div
            className="flex flex-col justify-center font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="text-white text-5xl md:text-7xl font-bold max-w-xl border border-red-500">
              Taux Horaire
            </h1>
            <p className="my-4 leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-justify">Chaque situation est unique : les modalités d’intervention et le coût de la mission sont abordés dès le premier rendez-vous, afin de définir ensemble la solution la plus <strong className="font-black">adaptée à vos besoins.</strong>
            </p>
          </div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4">
              <Image width={500} height={500} className="mt-4 w-full lg:mt-10 rounded-lg" src="/assets/images/Photos%20cabinet/DSCF8632.jpg" alt="office content 1" />
              <Image width={500} height={500} className="w-full rounded-lg h-full aspect-auto object-cover" src="/assets/images/Photos%20cabinet/DSCF8437.jpg" alt="office content 1" />
          </motion.div>
        </div>
      </section>

        <section className="bg-white mb-28 abonnement">
          <motion.div
            className="flex flex-col-reverse lg:flex-row gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
          >
            {/* Images */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <Image
                width={500}
                height={500}
                className="w-full rounded-lg"
                src="/assets/images/Photos%20cabinet/DSCF8617.jpg"
                alt="office content 1"
              />
              <Image
                width={500}
                height={500}
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/assets/images/Photos%20cabinet/DSCF8633.jpg"
                alt="office content 1"
              />
            </div>

            {/* Texte */}
            <div className="flex flex-col justify-center font-light text-gray-500 sm:text-lg dark:text-gray-400 w-full">
              <h1 className="text-neutral-950 text-5xl md:text-7xl font-bold max-w-xl text-end">
                Abonnement
              </h1>
              <p className="my-4 leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-justify">
                Le cabinet propose des formules d’abonnement <strong className="text-custom-purple font-black">mensuel ou annuel</strong> pour les clients qui souhaitent un accompagnement régulier (questions juridiques, relecture de documents, stratégie RH, veille…). L’abonnement est <strong className="text-custom-purple font-black">personnalisé</strong> selon la taille de la structure, les besoins identifiés et le volume d’échanges attendu.
              </p>
              <p className="my-4 leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-justify">
                Une convention d’honoraires est systématiquement établie avant toute mission, conformément aux règles de la profession d’avocat.
              </p>
              <p className="lg:text-xl/9 text-justify">
                <span className="font-normal">
                  Pour toute demande d’information ou de devis, vous pouvez contacter le cabinet via le{" "}
                </span>
                <Link
                  href="/contact"
                  className="navlink leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-custom-purple"
                >
                  Formulaire de Contact
                </Link>{" "}
                ou par{" "}
                <Link
                  href="tel:+33184171590"
                  className="navlink leading-7 text-lg md:text-xl lg:text-xl/9 font-normal text-custom-purple"
                >
                  téléphone.
                </Link>
              </p>
            </div>
          </motion.div>
        </section>

    </>
  );
};

const Nav = ({ scrollYProgress }) => {
  const background = useTransform(scrollYProgress, (i) =>
    i === 1 ? "" : "transparent"
  );

  return (
    <motion.nav
      style={{ background }}
      className="px-4 py-2 flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-colors"
    >
 
    </motion.nav>
  );
};

const Copy = ({ scrollYProgress }) => {
  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  // Définition du variant pour le fade-in des textes
  const fadeInVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <motion.h1
        className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        Honoraires
      </motion.h1>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-2xl text-gray-500 sm:text-lg dark:text-gray-400 mb-4">

            <motion.p
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              className="mt-8 mb-4 leading-7 text-lg md:text-xl lg:text-xl/9 font-normal leading-1 tracking-tight text-justify"
            >
              Le cabinet attache une importance particulière à la{" "}
              <strong className="font-black text-custom-purple">transparence</strong> et à la{" "}
              <strong className="font-black text-custom-purple">prévisibilité des honoraires.</strong>
            </motion.p>

            <motion.p
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} // léger décalage pour le 2ème texte
              className="my-4 leading-7 text-lg md:text-xl lg:text-xl font-normal leading-1 tracking-tight text-justify"
            >
              Chaque situation est unique : les modalités d’intervention et le coût de la mission sont abordés dès le premier rendez-vous, afin de définir ensemble la solution la plus{" "}
              <strong className="font-black">adaptée à vos besoins.</strong>
            </motion.p>

          </div>
        </div>
      </section>
    </motion.div>
  );
};
const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8476.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8479.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8516.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8548.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8496.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10"
        style={{
          backgroundImage:
            "url(/assets/images/Photos%20cabinet/DSCF8524.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

export default ImageGridHero;