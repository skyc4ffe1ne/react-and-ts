import { createContext, use, useEffect, useState } from "react";
import type { Theme, ThemeContextProps } from "../lib/types";
import { getTheme } from "../utils/getTheme";

const ThemeContext = createContext<undefined | ThemeContextProps>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getTheme());
  const value: ThemeContextProps = {
    theme,
    setTheme,
  };

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark",
    );
    document.documentElement.classList.add(theme);
  }, [theme]);
  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme() {
  const context = use(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme should be used in ThemeProvider");
  }

  return context;
}
