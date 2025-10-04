import { useTheme } from "../contexts/ThemeProvider";
import { Sun, Moon, AddFriend } from "./ui/icons";
import { Link } from "react-router";
import { LogoViboud } from "./ui/LogoViboud";
export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="mb-4 flex justify-between">
      <Link to="/">
        <LogoViboud className="fill-foreground" />
      </Link>

      <div className="">
        <ul className="flex gap-2">
          <li>
            <div className="text-shadow-accent grid size-10 place-content-center rounded-full bg-gradient-to-b from-purple-400 to-blue-400 text-xl font-semibold text-gray-100/95 text-shadow-2xs">
              S
            </div>
          </li>
          <li className="cursor-pointer">
            <div className="text-foreground border-border grid size-8 place-content-center rounded-full border">
              <AddFriend className="stroke-muted-foreground size-4" />
            </div>
          </li>
        </ul>
      </div>

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
    </footer>
  );
}
