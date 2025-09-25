import { useTheme } from "../contexts/ThemeProvider";
import { Sun, Moon } from "./ui/icons";
import { Link } from "react-router";
import { LogoViboud } from "./ui/LogoViboud";
export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="border-border mt-24 mb-4 flex justify-between border-t pt-10">
      <Link to="/">
        <LogoViboud className="fill-foreground" />
      </Link>
      <div className="flex gap-1 rounded-full bg-gray-950/15 p-1 dark:bg-white/10">
        <span
          aria-label="Light theme"
          className="aria-checked:bg-background sun_footer fill-foreground p-1.5 aria-checked:rounded-full aria-checked:ring aria-checked:ring-gray-950/20 aria-checked:inset-ring-white/10"
          onClick={() => setTheme("light")}
          aria-checked={theme === "light"}
        >
          <Sun className="size-4" />
        </span>

        <span
          aria-label="Dark theme"
          className="fill-foreground p-1.5 aria-checked:rounded-full aria-checked:bg-stone-700 aria-checked:ring aria-checked:ring-stone-600 aria-checked:inset-ring-white"
          onClick={() => setTheme("dark")}
          aria-checked={theme === "dark"}
        >
          <Moon className="size-4" />
        </span>
      </div>
    </footer>
  );
}
