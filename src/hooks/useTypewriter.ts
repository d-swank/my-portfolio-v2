"use client";

import { useEffect, useState } from "react";

type UseTypewriterOptions = {
  speed?: number;
};

export function useTypewriter(
  text: string,
  { speed = 150 }: UseTypewriterOptions = {},
) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = window.setTimeout(() => {
      setIndex((currentIndex) => currentIndex + 1);
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [index, speed, text.length]);

  return {
    text: text.slice(0, index),
    done: index >= text.length,
  };
}
