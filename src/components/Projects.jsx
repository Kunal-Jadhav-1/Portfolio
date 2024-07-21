import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="">
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="my-16 flex flex-wrap lg:justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
                className="w-full lg:w-1/4 flex justify-center lg:justify-start"
              >
                <a href= {project.link} target="blank">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 rounded w-2/3 lg:w-3/5"
                ></img>
                </a>
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.10 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <a href= {project.link} target="blank"><h6 className="my-2 font-semibold">{project.title}</h6></a>
                <p className="my-2 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap justify-normal">
                  {project.technologies.map((technology, index) => {
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
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
