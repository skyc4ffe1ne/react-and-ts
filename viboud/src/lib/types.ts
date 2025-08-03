export interface HeaderSectionProps {
  intro: string;
  title: string;
}

export type ButtonVariants = "primary" | "secondary" | "link";

export type Theme = "dark" | "light";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}
