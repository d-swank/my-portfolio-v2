"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { DSLogo } from "@/components/common/DSLogo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTypingContext } from "@/components/common/TypingContext";

export default function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { typingDone } = useTypingContext();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-gradient-to-r from-white via-slate-200 to-slate-300 text-gray-900 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 dark:text-white sticky top-0 z-100">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={typingDone ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href="#hero"
                className="flex items-center text-indigo-600 dark:text-white dark:hover:text-indigo-500 transform hover:scale-110 transition-transform cursor-pointer"
              >
                <DSLogo className="transform" />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 text-lg font-mono">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -50 }}
                  animate={typingDone ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.1 + i * 0.3,
                    duration: 1.6,
                    ease: "easeInOut",
                  }}
                  className="relative flex hover:text-indigo-600 dark:hover:text-indigo-500 after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:h-[2px] after:w-0 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.button
                onClick={() => setIsResumeOpen(true)}
                initial={{ opacity: 0 }}
                animate={typingDone ? { opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + navLinks.length * 0.3 + 0.5, // appears after last link
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="relative flex font-mono text-lg pb-1 border-b-2 border-l-2 border-r-2 px-2 border-indigo-600 hover:border-indigo-600 hover:text-indigo-600 dark:border-indigo-500 dark:hover:border-indigo-500 text-indigo-500 transition-transform duration-300 shadow-lg hover:shadow-indigo-600 hover:animate-pulse cursor-pointer"
              >
                Resume
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={typingDone ? { opacity: 1 } : {}}
                transition={{
                  delay: 0.1 + navLinks.length * 0.3 + 0.5, // appears after Resume link
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden ml-auto flex items-center justify-center z-50">
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                initial={{ opacity: 0, y: -50 }}
                animate={typingDone ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col justify-center items-center gap-2  cursor-pointer"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 10 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="block w-8 h-0.5 bg-indigo-600 dark:bg-white rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden fixed inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md flex flex-col items-center justify-center gap-6 z-50 text-black dark:text-white"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-500"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsResumeOpen(true);
                setMenuOpen(false);
              }}
              className="font-mono text-xl pb-1 border-b-2 border-l-2 border-r-2 px-2 border-indigo-600 hover:border-indigo-600 hover:text-indigo-600 dark:border-indigo-500 dark:hover:border-indigo-500 text-indigo-500 transition-transform duration-200 shadow-lg hover:shadow-indigo-600 hover:animate-pulse cursor-pointer"
            >
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <Modal
        isOpen={isResumeOpen}
        closeModalAction={() => setIsResumeOpen(false)}
      />

      {/* Mobile Theme Toggle */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <ThemeToggle />
      </div>
    </>
  );
}
