import { Logo } from "./ui/icons";
import ToggleTheme from "./ui/ToggleTheme";

export default function Navbar() {

  return (
      <header className="flex justify-left gap-4 items-center px-4 sm:px-6 h-14">
					<Logo className="pr-2" />
					<div className="h-6 w-px bg-gray-950/10 dark:bg-white/10" />
					<ToggleTheme />
      </header>
  );
}

