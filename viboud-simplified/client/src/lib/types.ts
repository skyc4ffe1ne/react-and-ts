type Theme = "light" | "dark";

export interface ThemeProviderProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export interface SessionProviderProps {
  session: string | null;
  setSession: (s: string) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
}
