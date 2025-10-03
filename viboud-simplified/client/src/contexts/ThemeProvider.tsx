import { createContext, use, useEffect, useState } from "react";
import type { ThemeProviderProps } from "../lib/types.ts";

function getTheme() {
  if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

const ThemeContext = createContext<undefined | ThemeProviderProps>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark",
    );

    document.documentElement.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = use(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme should be used in ThemeProvider");
  }
  return context;
};
