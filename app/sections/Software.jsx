"use client";

import Image from "next/image";
import { content } from "../data/content";
import { useContext } from "react";
import { StoreContext } from "../context/Store";
import { motion } from "framer-motion";
import { animationOne, animationThree, animationTwo } from "../animation";

const Software = () => {
  const { software } = content;
  const { isMobile } = useContext(StoreContext);
  return (
    <section className="bg-gradient-to-br from-blue-950 to-black relative h-screen flex sm:flex-row flex-col justify-center items-end px-5 sm:px-[4rem] pt-6 sm:pt-0">
      {/* title */}
      <motion.h1
        variants={animationOne}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sm:absolute sm:top-[3rem] sm:left-[4.2rem] capitalize text-blue-500 text-[1.5rem] mb-6 sm:mb-0"
      >
        {software.title}
      </motion.h1>

      {/* title box */}
      <motion.h1
        variants={animationTwo}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="sm:w-[25rem] w-full bg-gradient-to-r from-blue-900 to-black rounded-[10px] border border-stone-400 border-opacity-30 sm:absolute sm:top-[9rem] sm:right-[4.2rem] py-6 px-6 "
      >
        {software.subtitle}
      </motion.h1>

      {/* product mockup image */}
      <motion.div
        variants={animationThree}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[30rem] sm:w-[60rem] w-full mx-auto rounded-[5px] relative overflow-hidden"
      >
        <Image
          class="object-contain w-full h-full"
          src={isMobile ? software.mobileMockup : software.desktopMockup}
          height="480"
          width="960"
          alt=""
          priority
        />
      </motion.div>

      {/* floating icons */}
      <div className="absolute sm:top-[8rem] sm:left-[27rem] top-[19rem] left-[2rem] bg-[#357DB0] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </div>
      <div className="absolute sm:top-[11rem] sm:left-[50rem]  left-[5rem] bg-black p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </div>
      <div className="absolute sm:top-[20rem] sm:left-[48rem] top-[30rem] left-[20rem] bg-[#DFA47F] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </div>
      <div className="absolute sm:top-[6rem] sm:left-[77rem] top-[20rem] left-[19rem] bg-[#850505] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default Software;
