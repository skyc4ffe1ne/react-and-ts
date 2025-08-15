import { createContext, use, useEffect, useState } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
}

const ThemeContext = createContext<undefined | ThemeProps>(undefined);

function getSystemTheme() {
  if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">(getSystemTheme());

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light",
    );
    document.documentElement.classList.add(theme);
  }, [theme]);
  const value: ThemeProps = {
    theme,
    setTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme() {
  let context = use(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme is not being used in ThemeProvider");
  }

  return context;
}
