"use client";

import { useTypingContext } from "@/components/common/TypingContext";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { useEffect } from "react";

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const revealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const fullText = "Hello, I'm Dakota Swank";
  const prefixLength = "Hello, I'm ".length;
  const { text: visibleText, done: typingDone } = useTypewriter(fullText);
  const { setTypingDone } = useTypingContext();

  useEffect(() => {
    setTypingDone(typingDone);
  }, [setTypingDone, typingDone]);

  useEffect(() => {
    document.body.style.overflow = typingDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [typingDone]);

  const prefix = visibleText.slice(0, prefixLength);
  const name = visibleText.slice(prefixLength);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white text-4xl scroll-mt-20"
    >
      <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
        <span className="inline-block">
          {prefix}
          <span className="text-indigo-600 dark:text-indigo-500 font-semibold font-sans">
            {name}
          </span>
          <span
            className={`cursor-blink ${typingDone ? "cursor-blink-active" : ""}`}
          />
        </span>
      </h1>

      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        animate={typingDone ? "visible" : "hidden"}
        variants={revealContainer}
      >
        <motion.div
          className="flex flex-wrap justify-center gap-3 font-mono text-sm md:text-base"
          variants={revealItem}
        >
          <span className="rounded-full border border-indigo-600/25 bg-white/60 px-4 py-2 text-indigo-700 shadow-sm backdrop-blur-sm dark:border-indigo-400/30 dark:bg-gray-900/20 dark:text-indigo-300">
            Software QA Engineer
          </span>
          <span className="rounded-full border border-gray-300 bg-white/60 px-4 py-2 text-gray-700 shadow-sm backdrop-blur-sm dark:border-gray-600 dark:bg-gray-900/20 dark:text-gray-300">
            Austin, TX
          </span>
        </motion.div>

        <motion.p
          className="max-w-3xl px-1 font-sans text-xl leading-relaxed text-gray-700 dark:text-gray-300 md:text-2xl"
          variants={revealItem}
        >
          I build confidence in software through thoughtful testing, automation, and
          clean user experiences.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 font-sans text-base sm:flex-row"
          variants={revealItem}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View Projects
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-5 py-3 text-indigo-600 shadow-lg transition-transform hover:scale-105 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-500 dark:hover:text-white"
          >
            Contact Me
            <Send size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
