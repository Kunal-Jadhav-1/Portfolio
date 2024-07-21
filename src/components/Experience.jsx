import React from "react";
import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
  //   console.log(EXPERIENCES);
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className="flex-wrap justify-center my-10">
              <div className="w-full lg:w-4/5 lg:flex lg:justify-evenly">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.10 }}
                  className="mb-2 text-sm text-neutral-400"
                >
                  {experience.year}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.10 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-semibold">
                    {experience.role} -{" "}
                    <span className="text-sm text-purple-100">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="mb-4 text-neutral-400">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap justify-normal">
                    {experience.technologies.map((technology, index) => {
                      return (
                        <span
                          key={index}
                          className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-400 "
                        >
                          {technology}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
