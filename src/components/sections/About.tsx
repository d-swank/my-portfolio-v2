"use client";

import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center mb-6 text-indigo-600 dark:text-indigo-500"
      >
        <FaUserAstronaut className="text-6xl hover:text-indigo-700 dark:hover:text-indigo-600" />
      </motion.div>

      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <motion.div
          className="group bg-white/80 dark:bg-gray-800/70 rounded-lg border font-sans border-gray-300 dark:border-gray-600 shadow-lg p-8 text-gray-800 dark:text-gray-100 hover:brightness-105 hover:border-indigo-600 dark:hover:border-indigo-500 transform backdrop-blur-sm max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.p
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I’m{" "}
            <span className="text-indigo-600 dark:text-indigo-500 font-sans font-semibold">
              Dakota Swank
            </span>
            , a software QA engineer who likes working close to the details
            that make an application feel reliable. I care about clear test
            coverage, readable defects, and helping teams ship changes with
            more confidence.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I also enjoy building web applications with Next.js, React, and
            Tailwind CSS. This portfolio is part of that practice: a place to
            sharpen my frontend skills while keeping performance,
            accessibility, and usability in view.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            My path into technology has moved through software testing, web
            development, and hands-on problem solving. I like learning by
            building, breaking things carefully, and improving the process the
            next time around.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Outside of work, I enjoy getting outdoors, following what the tech
            community is building, and taking on projects that give me a reason
            to learn something new.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
