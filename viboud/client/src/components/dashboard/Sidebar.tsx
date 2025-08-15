import { Link } from "react-router";
import {
  AddFriend,
  Exit,
  Moon,
  Note,
  Sun,
  Vibes,
  Settings,
  ViboudLogo,
} from "../ui/icons";
import { useTheme } from "../../contexts/ThemeProvider";
import logo from "../../../public/logo_viboud.svg";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screnn border-border flex w-full flex-col items-center justify-between border-r p-4">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link className="" to="/dashboard">
              <div className="rounded-md bg-blue-400 p-3">
                <ViboudLogo
                  src={logo}
                  className="fill-foreground size-5"
                  alt="Viboud logo"
                />
              </div>
            </Link>
          </li>
          <li>
            <div className="hover:bg-foreground/10 cursor-pointer rounded-xl p-3">
              <Note className="stroke-secondary-foreground size-5" />
            </div>
          </li>
          <li>
            <div className="hover:bg-foreground/10 cursor-pointer rounded-xl p-3">
              <AddFriend className="stroke-secondary-foreground size-5" />
            </div>
          </li>
          <li>
            <div className="hover:bg-foreground/10 cursor-pointer rounded-xl p-3">
              <Vibes className="stroke-secondary-foreground size-5" />
            </div>
          </li>
        </ul>
      </nav>

      <ul className="flex flex-col gap-4">
        <li className="mx-auto">
          <div className="flex w-fit flex-col gap-1 rounded-full bg-gray-950/15 p-1 dark:bg-white/10">
            <span
              aria-label="Light theme"
              className="aria-checked:bg-background fill-foreground w-fit p-1.5 aria-checked:rounded-full aria-checked:ring aria-checked:ring-gray-950/20 aria-checked:inset-ring-white/10"
              onClick={() => setTheme("light")}
              aria-checked={theme === "light"}
            >
              <Sun className="size-4" />
            </span>

            <span
              aria-label="Dark theme"
              className="fill-foreground w-fit p-1.5 aria-checked:rounded-full aria-checked:bg-stone-700 aria-checked:ring aria-checked:ring-stone-600 aria-checked:inset-ring-white"
              onClick={() => setTheme("dark")}
              aria-checked={theme === "dark"}
            >
              <Moon className="size-4" />
            </span>
          </div>
        </li>
        <li>
          <div className="hover:bg-foreground/10 cursor-pointer rounded-xl p-3">
            <Settings className="stroke-secondary-foreground size-5" />
          </div>
        </li>
        <li>
          <div className="hover:bg-foreground/10 cursor-pointer rounded-xl p-3">
            <Exit className="stroke-secondary-foreground size-5" />
          </div>
        </li>
      </ul>
    </div>
  );
}
