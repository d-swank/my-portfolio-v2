"use client";

import { motion } from "framer-motion";
import ProjectCard from "../common/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website v2",
      description:
        "A sleek, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. The site showcases professional experience and projects with smooth Framer Motion animations, clean design, and optimized performance. Deployed with Vercel for fast, reliable hosting.",
      Technologies: [
        "Next.js, ",
        "TypeScript, ",
        "Tailwind CSS, ",
        "Framer Motion, ",
        "Vercel",
      ],
      link: "https://github.com/d-swank/my-portfolio-v2",
    },
    {
      title: "Portfolio Website v1",
      description:
        "First portfolio website — built while learning the fundamentals of HTML5, CSS3, and JavaScript — this site features a sleek, responsive design with smooth CSS transitions, clean layouts, and performance optimizations to showcase early projects. Deployed on GitHub Pages for fast, reliable hosting.",
      Technologies: ["HTML5, ", "CSS3, ", "Javascript, ", "Github Pages"],
      link: "https://github.com/d-swank/my-portfolio-v1",
    },
    {
      title: "FitHub",
      description:
        "A fitness application that allows users to browse exercises, create customized workout plans, track their progress, and communicate with other users. The application utilizes a client-server architecture, with a User Module that provides a user-friendly interface for accessing the FitHub server's data tables.",
      Technologies: [
        "Angular, ",
        "HTML, ",
        "CSS, ",
        "TypeScript, ",
        "Firebase",
      ],
      link: "https://github.com/JCoombs224/FitHub",
    },
    {
      title: "Outbreak VR",
      description:
        "A virtual reality horror game set in space. The player takes on the role of a character navigating through a dangerous space environment, encountering various obstacles and enemies that can cause damage.",
      Technologies: ["Unity, ", "C#"],
      link: "https://www.youtube.com/watch?v=I9y_7VJ5-Z8",
    },
    {
      title: "Musical Light Display",
      description:
        "An embedded system utilizing a Nucleo board that uses push buttons to select a Christmas song. When a song plays, three LEDs flash to the notes of the song, the song's name is displayed on an LCD screen, and a potentiometer is used for volume control.",
      Technologies: ["C, ", "Embedded Systems, ", "Nucleo Board"],
      link: "https://github.com/d-swank/Musical-Light-Display-Mbed-Studio",
    },
    {
      title: "Japenese Translator",
      description:
        "Developed a translator that utilizes a deterministic finite automaton (DFA) to adhere to a specific set of rules. Using provided files containing various sentences, the program checks for syntactic and semantic accuracy. If the sentences pass this check, the program accurately parses and translates the story from Japanese to English.",
      Technologies: ["C++"],
      link: "https://github.com/d-swank/Translator",
    },
    {
      title: "Lexical Analyzer GUI",
      description:
        "Created a GUI application using Tkinter that implements a lexical analyzer. It takes the input of source code, reads it line by line, obtains the lexical analysis result, and then parses it into a parse tree.",
      Technologies: ["Python, ", "Tkinter"],
      link: "https://github.com/d-swank/Lexical-Analyzer-GUI",
    },
    {
      title: "Data Structures and Algorithms",
      description:
        "Assignments and projects from the CS 311 Data Structures & Algorithms class at CSUSM, focusing on implementing various data structures and algorithms.",
      Technologies: ["C++"],
      link: "https://github.com/d-swank/CPP-Data-Structures-and-Algorithms",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-24 md:pt-34 pb-24 md:pb-34 bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-4 shadow-md"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold font-mono mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="mx-auto mb-8 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-sans">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              Technologies={project.Technologies || "N/A"}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
