import Layout from "@/components/Layout"
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Footer from '@/components/Footer'


gsap.registerPlugin(ScrollTrigger);


export default function Droitdutravail() {

  const singleTitle = "Droit du Travail"
  const titlePage = "Menezes Avocat - Droit du Travail"

  useEffect(() => {
    function addImageScaleAnimation() {
  gsap.utils.toArray("section").forEach((section, index) => {
    const image = document.querySelector(`#preview-${index + 1} img`);

    const startCondition = index === 0 ? "top top" : "bottom bottom";

    gsap.to(image, {
      scrollTrigger: {
        trigger: section,
        start: startCondition,
        end: () => {
          const viewportHeight = window.innerHeight;
          const sectionBottom = section.offsetTop + section.offsetHeight;
          const additionalDistance = viewportHeight * 0.5;
          const endValue = sectionBottom - viewportHeight + additionalDistance;
          return `+=${endValue}`;
        },
        scrub: 1,
      },
      scale: 3,
      ease: "none",
    });
  });
}

addImageScaleAnimation();

function animateClipPath(
  sectionId,
  previewId,
  startClipPath,
  endClipPath,
  start = "top center",
  end = "bottom top"
) {
  let section = document.querySelector(sectionId);
  let preview = document.querySelector(previewId);

  ScrollTrigger.create({
    trigger: section,
    start: start,
    end: end,
    onEnter: () => {
      gsap.to(preview, {
        scrollTrigger: {
          trigger: section,
          start: start,
          end: end,
          scrub: 0.125,
        },
        clipPath: endClipPath,
        ease: "none",
      });
    },
  });
}

animateClipPath(
  "#section-1",
  "#preview-1",
  "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
);

const totalSections = 7;

for (let i = 2; i <= totalSections; i++) {
  let currentSection = `#section-${i}`;
  let prevPreview = `#preview-${i - 1}`;
  let currentPreview = `#preview-${i}`;

  animateClipPath(
    currentSection,
    prevPreview,
    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    "top bottom",
    "center center"
  );

  if (i < totalSections) {
    animateClipPath(
      currentSection,
      currentPreview,
      "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "center center",
      "bottom top"
    );
  }
}

  })



  return (
    <>

      <Head>
        <title>{titlePage}</title>
        <meta name="title" content={titlePage} />
        <meta property="og:title" content={titlePage} />
      </Head>

      <Header />

      {/* <div className="h-full flex flex-col justify-center items-center mt-36">
        <h1 className="text-xl font-bold">DROIT DU TRAVAIL</h1>
        <br />
        <h2>Nico en attente de wording et images</h2>

        <iframe src="https://giphy.com/embed/kcfiK948yUHSqoNzwi" width="100%" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Friends-episode-2-season-9-friendstv-kcfiK948yUHSqoNzwi"></a></p>
      </div> */}

      <div className="droit-du-travail-container">

        <div className="invisible">
          <p className="invisible-text">menezes</p>
        </div>

        <div className="intro-copy">
          <div className="intro-copy-text text-justify">
            <p>Nos expertises. Votre défense.
            </p>
          </div>

        </div>

        <div className="headers">
          <section id="section-1">
            <h2>Contrats</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente magni molestiae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente magni molestiae.</p> */}
            
          </section>
          <section id="section-2">
            <h2>Travail</h2>
          </section>
          <section id="section-3">
            <h2>Licenciements</h2>
          </section>
          <section id="section-4">
            <h2>Rémunération</h2>
          </section>
          <section id="section-5">
            <h2>C.S.E</h2>
          </section>
          <section id="section-6">
            <h2>Négociations</h2>
          </section>
          <section id="section-7">
            <h2>Sécurité sociale</h2>
          </section>
          
          <div className="spacer"></div>

          <div className="section-previews">
            <div className="img" id="preview-1">
              <Image
                src="/assets/images/Photos cabinet/DSCF8412.jpg"
                alt="preview-img-1"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="img" id="preview-2">
              <Image
                src="/assets/images/Photos cabinet/DSCF8659.jpg"
                alt="preview-img-2"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="img" id="preview-3">
              <Image
                src="/assets/images/Photos cabinet/DSCF8549.jpg"
                alt="preview-img-3"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="img" id="preview-4">
              <Image
                src="/assets/images/Photos cabinet/DSCF8599.jpg "
                alt="preview-img-4"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="img" id="preview-5">
              <Image
                src="/assets/images/Photos cabinet/DSCF8633.jpg"
                alt="preview-img-5"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className="img" id="preview-6">
              <Image
                src="/assets/images/Photos cabinet/DSCF8447.jpg"
                alt="preview-img-6"
                className="object-cover image-1 h-72 image w-full"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

        </div>

        {/* Scroll Down */}
        <div id="scroll-wrapper" className={"text-sm absolute right-0 bottom-1 mr-10 scroll-wrapper-bis"}>
          <div id="scroll-wrapper-inner">
            <div id="scroll-down"></div>
          </div>
        </div>

      </div>

      <Footer></Footer>
      
  </>
  )
}