import React from "react";
import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-24 my-12 lg:my-16 text-center text-4xl">About Me</h2>
      <div className=" flex flex-wrap justify-around font-light">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.10 }}
          className="w-2/3 lg:w-1/4 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={about} alt="about me" className="rounded-2xl"></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.10 }}
          className="w-4/5 lg:w-1/2 my-10"
        >
          <div className="flex justify-center lg:justify-start">
            <p my-2 max-w-xl py-6>
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
