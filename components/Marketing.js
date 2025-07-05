"use client"

import Image from "next/image"
import { useEffect } from 'react'
import { motion } from "framer-motion"

const stats = [
  { id: 1, name: "d'expérience", value: 20, initial: '0', slug: " ans" },
  { id: 2, name: "d’enjeux économiques défendus", value: 10, initial: '0', slug: " M€" },
  { id: 3, name: "dossiers défendus", value: 1000, initial: '0', slug: "" },
  { id: 4, name: "de cas résolus", value: 100, initial: '0', slug: " %" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Marketing() {

  useEffect(() => {
    let wrapperTop = document.querySelector('.wrapper');

    const launch = () => {
      let valueDisplays = document.querySelectorAll('.num');
      let interval = 2300;

      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);

        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration)
      })
    };

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: .6,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          launch();
          observer.unobserve(entry.target);
        }
      }
    }, options)

    observer.observe(wrapperTop);

  }, []);

  return (
    <div className="marketing relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src="/assets/images/Photos cabinet/DSCF8449.jpg"
        alt="statistics"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        width={500}
        height={500}
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8 wrapper"
      >
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
        >
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl lg:col-span-2 xl:col-auto">
            Nos chiffres : votre confiance.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Notre objectif est de vous accompagner vers des résultats concrets, qui répondent à vos enjeux et à vos attentes, avec la clarté et la rigueur qui nous animent.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <div className="flex justify-center items-baseline">
                <span className="prefix text-3xl md:text-5xl font-semibold tracking-tight text-center">+ de &nbsp;</span>
                <div
                  className="num text-3xl md:text-5xl font-semibold tracking-tight text-center"
                  data-val={stat.value}
                >
                  {stat.initial}
                </div>
                <span className="pl-2 text-3xl md:text-5xl font-semibold tracking-tight text-center">{stat.slug}</span>
              </div>
              <div className="leading-6 text-center">{stat.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
