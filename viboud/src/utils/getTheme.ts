import type { Theme } from "../lib/types";
export function getTheme(): Theme {
  if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}
