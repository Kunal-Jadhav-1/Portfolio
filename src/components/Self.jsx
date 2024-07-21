import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KJprofile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Self = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-evenly">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl bg- font-thin tracking-tight lg:mt-10 md:text-5xl lg:text-6xl "
            >
              Kunal Jadhav
            </motion.h1>
            <motion.span
              variants={container(0.35)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-rose-300 via-slate-500 to-sky-300 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Web Developer
            </motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-2/3 my-3 lg:my-0 lg:w-1/3 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={profilePic}
              alt="Kunal Jadhav"
              className=""
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;
