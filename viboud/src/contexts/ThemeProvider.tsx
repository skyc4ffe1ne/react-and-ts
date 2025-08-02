import { createContext } from "react";

const ThemeContext = createContext<undefined | ThemeProviderProps>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = {
    theme,
    setTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
