"use client";

import { createContext, useContext, useState } from "react";

type TypingContextType = {
  typingDone: boolean;
  setTypingDone: (done: boolean) => void;
};

const TypingContext = createContext<TypingContextType | undefined>(undefined);

export function TypingProvider({ children }: { children: React.ReactNode }) {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <TypingContext.Provider value={{ typingDone, setTypingDone }}>
      {children}
    </TypingContext.Provider>
  );
}

export function useTypingContext() {
  const context = useContext(TypingContext);
  if (!context) {
    throw new Error("useTypingContext must be used within TypingProvider");
  }
  return context;
}
