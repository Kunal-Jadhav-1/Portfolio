import React from "react";
import { motion } from "framer-motion";
import {
  RiReactjsFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiDjango,
  SiMongodb,
  SiGit,
  SiTypescript,
  SiSqlite,
  SiMysql,
  SiPython,
  SiGnubash,
  SiGooglecloudcomposer,
  SiGooglebigquery,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const iconVariants1 = (d) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration: d, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const iconVariants2 = (d) => ({
  initial: { y: 10 },
  animate: {
    y: [-10, 10],
    transition: { duration: d, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 font-sans">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="relative overflow-hidden">
        <div
          className="
            flex gap-4 items-center
            flex-wrap justify-center
            lg:flex-nowrap lg:justify-start
            lg:overflow-x-auto
            no-scrollbar
            px-6 py-10
          "
        >

          {/* Python */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiPython className="text-7xl text-[#3776AB]" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Python
            </div>
          </motion.div>

          {/* Bash */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiGnubash className="text-7xl text-white" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Shell
            </div>
          </motion.div>

          {/* BigQuery */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiGooglebigquery className="text-7xl text-blue-400" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Google BigQuery
            </div>
          </motion.div>

          {/* Cloud Composer */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiGooglecloudcomposer className="text-7xl text-blue-400" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Cloud Composer
            </div>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <RiJavascriptFill className="text-7xl text-yellow-400" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              JavaScript
            </div>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiTypescript className="text-7xl text-sky-500" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              TypeScript
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <RiReactjsFill className="text-7xl text-cyan-400" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              React.js
            </div>
          </motion.div>

          {/* Next.js */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <RiNextjsFill className="text-7xl text-white" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Next.js
            </div>
          </motion.div>

          {/* Django */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiDjango className="text-7xl text-green-800" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Django
            </div>
          </motion.div>

          {/* Node */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <FaNodeJs className="text-7xl text-lime-500" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Node.js
            </div>
          </motion.div>

          {/* MongoDB */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiMongodb className="text-7xl text-green-700" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              MongoDB
            </div>
          </motion.div>

          {/* SQLite */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiSqlite className="text-7xl text-sky-400" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              SQLite
            </div>
          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={iconVariants1(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiMysql className="text-7xl text-blue-500" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              MySQL
            </div>
          </motion.div>

          {/* Git */}
          <motion.div
            variants={iconVariants2(1)}
            initial="initial"
            animate="animate"
            className="relative group rounded-2xl border-4 border-neutral-800 p-4 shrink-0"
          >
            <SiGit className="text-7xl text-orange-700" />
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2
              rounded-md bg-neutral-900 px-3 py-1 text-sm text-white
              opacity-0 group-hover:opacity-100 transition">
              Git
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Technologies;
