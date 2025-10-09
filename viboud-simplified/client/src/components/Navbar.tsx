import { Link } from "react-router";
import { LogoViboud } from "./ui/LogoViboud";
import { Moon, Sun } from "./ui/icons";
import { useTheme } from "../contexts/ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex h-20 items-center justify-between">
      <Link to="/">
        <LogoViboud className="fill-foreground" />
      </Link>

      <div className="flex h-fit gap-1 rounded-full bg-gray-950/15 p-1 dark:bg-white/10">
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
    </header>
  );
}
