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
          className="headingText sm:w-[50rem] "
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
            <span className="relative text-secondaryColor ">
              {hero.lineText}{" "}
            </span>
          </span>
        </motion.h1>

        {/* sub text */}
        <motion.p
          class="leading-relaxed mt-8 secondary-color sm:w-[40rem]"
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
