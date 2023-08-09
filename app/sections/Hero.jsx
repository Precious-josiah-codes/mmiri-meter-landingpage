"use client";
import Image from "next/image";
import { content } from "../data/content";
import { motion } from "framer-motion";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

const Hero = () => {
  const { hero } = content;

  return (
    <section class="flex flex-col items-center justify-center sm:min-h-screen h-[85vh]">
      {/* start hero text */}
      <div class="container mx-auto flex sm:px-5 pt-[10rem] pb-[3.5rem] items-center justify-center flex-col sm:w-2/3 text-center">
        {/* <div class="text-center lg:w-2/3 w-full relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}

        <div className="absolute inset-0 top-[15rem] mx-auto sm:w-[25rem] ] w-[20rem] ">
          <div className="sm:h-[20rem] sm:w-[25rem] h-[19rem] w-[20rem] rounded-[5px]  relative overflow-hidden">
            <Image
              class="object-cover w-full h-full"
              src="/Ellipse.png"
              fill
              alt=""
              priority
            />
          </div>
        </div>

        {/* sub title text */}
        <motion.h5
          variants={animationOne}
          initial="hidden"
          animate="visible"
          className={` sm:space-x-3 secondary-color mb-[3rem] text-[0.60rem] sm:text-sm uppercase bg-opacity-0 rounded-[5px] border borderStyle w-fit mx-auto px-6 py-3 text-tetiaryColor`}
        >
          {hero.subTextOne}
        </motion.h5>

        {/* main text */}
        <motion.h1
          class="headingText "
          variants={animationTwo}
          initial="hidden"
          animate="visible"
        >
          {hero.mainText}
          <span className="inline-flex relative">
            <Image
              src="/line.png"
              alt="Line"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-secondaryColor"
              width={40}
              height={40}
              priority
            />
            <span className="relative text-secondaryColor">
              {hero.lineText}{" "}
            </span>
          </span>
        </motion.h1>

        {/* sub text */}
        <motion.p
          class="leading-relaxed mb-8 secondary-color "
          variants={animationThree}
          initial="hidden"
          animate="visible"
        >
          {hero.subTextTwo}
        </motion.p>
      </div>
      {/* end hero text */}
    </section>
  );
};

export default Hero;
