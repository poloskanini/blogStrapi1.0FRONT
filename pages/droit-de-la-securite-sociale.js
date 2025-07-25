import Layout from "@/components/Layout"
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Container from "@/components/Container"
import BreadCrumb from "@/components/BreadCrumb"
import TextParallaxComponent from "@/components/TextParallaxContentBis"
import Footer from '@/components/Footer'


gsap.registerPlugin(ScrollTrigger);


export default function DroitdeLaSecuriteSociale() {

  const singleTitle = "Droit de la Sécurité Sociale"
  const titlePage = "Menezes Avocat - Droit de la Sécurité Sociale"
  const hrefPage = "/droit-de-la-securite-sociale"

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

      <Container>
        <BreadCrumb title="Droit de la Sécurité Sociale" href="/droit-de-la-securite-sociale" withExpertises />
      </Container>

        <div className="wrapper lg:mx-20">

        <TextParallaxComponent />
        </div>

      <Footer></Footer>
  </>
  )
}