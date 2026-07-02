"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Fragment, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaAngular,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaUnity,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
  Angular: FaAngular,
  C: SiC,
  "C#": SiSharp,
  "C++": SiCplusplus,
  CSS: FaCss3Alt,
  CSS3: FaCss3Alt,
  Firebase: SiFirebase,
  "Framer Motion": SiFramer,
  "GitHub Pages": FaGithub,
  HTML: FaHtml5,
  HTML5: FaHtml5,
  JavaScript: SiJavascript,
  "Next.js": SiNextdotjs,
  Python: FaPython,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  Unity: FaUnity,
  Vercel: SiVercel,
};

const DESCRIPTION_PREVIEW_LIMIT = 185;

function getDescriptionPreview(description: string) {
  if (description.length <= DESCRIPTION_PREVIEW_LIMIT) {
    return {
      preview: description,
      hasMore: false,
    };
  }

  const trimmedDescription = description.slice(0, DESCRIPTION_PREVIEW_LIMIT);
  const lastSpaceIndex = trimmedDescription.lastIndexOf(" ");
  const preview =
    lastSpaceIndex > 0
      ? trimmedDescription.slice(0, lastSpaceIndex)
      : trimmedDescription;

  return {
    preview: `${preview.trimEnd()}...`,
    hasMore: true,
  };
}

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  index,
}: ProjectCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const { preview, hasMore } = getDescriptionPreview(description);

  const technologyBadges = (
    <div className="flex flex-wrap justify-center gap-2">
      {technologies.map((technology) => {
        const Icon = technologyIcons[technology];

        return (
          <span
            key={technology}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-600/20 bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/15 dark:text-indigo-300"
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
            {technology}
          </span>
        );
      })}
    </div>
  );

  return (
    <>
      <motion.article
        className="group flex h-full flex-col border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg bg-white/80 dark:bg-gray-800/70 text-gray-800 dark:text-gray-100 transform hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 hover:border-indigo-600 dark:hover:border-indigo-500 hover:-translate-y-1 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3 className="mb-2 flex min-h-16 items-center justify-center text-2xl font-semibold">
          {title}
        </h3>

        <p className="mb-3 min-h-28 text-gray-700 dark:text-gray-300">
          {preview}
        </p>

        <div className="mb-5 min-h-5">
          {hasMore && (
            <button
              type="button"
              onClick={() => setIsDetailsOpen(true)}
              className="text-sm font-medium text-indigo-600 underline-offset-4 hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-300 cursor-pointer"
              aria-label={`Read more about ${title}`}
            >
              More...
            </button>
          )}
        </div>

        <div className="mb-6 min-h-20">{technologyBadges}</div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
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
        </motion.a>
      </motion.article>

      <Transition appear show={hasMore && isDetailsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-150"
          onClose={() => setIsDetailsOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-md bg-black/20 dark:bg-black/40" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-2xl relative transform rounded-2xl bg-gradient-to-r from-white via-slate-200 to-slate-300 dark:from-gray-600 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 p-6 text-center shadow-2xl border border-indigo-500">
                <button
                  onClick={() => setIsDetailsOpen(false)}
                  className="absolute top-4 right-4 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-500 cursor-pointer"
                  aria-label="Close project details"
                >
                  <X size={24} />
                </button>

                <DialogTitle className="text-2xl sm:text-3xl font-bold font-mono mb-4 px-10">
                  {title}
                </DialogTitle>

                <motion.div
                  className="mx-auto mb-6 w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />

                <p className="mb-6 text-left text-gray-700 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>

                <div className="mb-6">{technologyBadges}</div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-sans"
                >
                  View Project
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
