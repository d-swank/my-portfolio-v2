"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTypingContext } from "@/components/common/TypingContext";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { typingDone } = useTypingContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !typingDone) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-indigo-400" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-500" />
      )}
    </button>
  );
}
