export interface HeaderSectionProps {
  intro: string;
  title: string;
}

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "link"
  | "outline"
  | "accent"
  | "ghost";

export interface Variants {
  primary: string;
  secondary: string;
  link: string;
  outline: string;
  accent: string;
}

export type Theme = "dark" | "light";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export type User = {
  username: string;
  avatar?: string;
}

export type SessionProps = {
  session: User | null;
  setSession: () => void;
}

export interface PopupProps {
  setPopup: (b: boolean) => void;
}
