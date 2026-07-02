"use client";

import { useTypingContext } from "@/components/common/TypingContext";
import { useTypewriter } from "@/hooks/useTypewriter";
import { motion } from "framer-motion";
import { useEffect } from "react";

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
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white text-4xl scroll-mt-20"
    >
      <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4">
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

      <motion.p
        className={`text-xl md:text-2xl font-sans max-w-3xl mb-6 px-5 md:px-5 leading-relaxed ${
          typingDone
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.6, delay: 4 }}
        viewport={{ once: true }}
      >
        I’m an Austin-based Software QA Engineer focused on building confidence 
        in software through thoughtful testing, automation, and clean user experiences.
      </motion.p>
    </section>
  );
}
