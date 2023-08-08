"use client";
import Image from "next/image";
import FeaturesCard from "../components/FeaturesCard";
import { content } from "../data/content";
import { motion } from "framer-motion";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

const ProductFeatures = () => {
  const { features } = content;
  return (
    <section className="mx-auto flex sm:px-5 pt-[10rem] pb-[3.5rem] items-center justify-center flex-col  text-center">
      {/* title and subtitle */}
      <div className="sm:w-2/3">
        <motion.h1
          className="headingText"
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.title}
        </motion.h1>
        <motion.p
          className="text-tetiaryColor"
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.subtitle}
        </motion.p>
      </div>

      {/* feature cards */}
      <div className="mt-[4rem]">
        {/* background blur */}
        <div class="text-center lg:w-2/3 w-full relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        {/* features card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={animationThree}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.cards.map(({ title, subtitle }, index) => (
            <FeaturesCard title={title} subtitle={subtitle} key={index} />
          ))}
        </motion.div>

        {/* water image */}
        <motion.div
          variants={animationFour}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[20rem] w-full rounded-[5px] bg-red-500 relative overflow-hidden mt-9"
        >
          <Image
            class="object-cover w-full h-full"
            src="/product_image1.jpg"
            fill
            alt=""
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures;
