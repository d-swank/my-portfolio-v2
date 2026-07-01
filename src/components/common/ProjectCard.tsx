"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  Technologies: string | string[];
  link: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  Technologies,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg bg-white/80 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 transform hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 hover:border-indigo-600 dark:hover:border-indigo-500 hover:-translate-y-1 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <b>Technologies:</b> {Technologies}
      </p>
      <motion.span
        className="mt-auto self-center text-indigo-600 dark:text-indigo-500 font-medium transform hover:text-indigo-700 dark:hover:text-indigo-600 hover:scale-105 inline-block relative hover:animate-pulse group"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.3 + 0.2,
          ease: "easeOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
      >
        View Project →
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all ease-out" />
      </motion.span>
    </motion.a>
  );
}
