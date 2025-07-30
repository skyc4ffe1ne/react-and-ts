import { createContext, use, useEffect, useState } from "react";
import type { Theme, ThemeContextProps } from "../lib/types";

export const ThemeContext = createContext<undefined | ThemeContextProps>(
  undefined,
);

function getTheme(): Theme {
  console.log(window.matchMedia("(prefer-color-scheme: dark)"));
  if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const value: ThemeContextProps = {
    theme,
    setTheme,
  };

  return <ThemeContext value={value}> {children} </ThemeContext>;
}

export function useTheme() {
  let context = use(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme should be used in ThemeProvider");
  }
  return context;
}
