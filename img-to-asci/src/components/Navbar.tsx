import { useTheme } from "../context/ContextTheme";
import { Copy, Sun, Moon, Check } from "./icons";

import type { NavbarProps } from "../lib/types";
import { useEffect } from "react";
export default function Navbar({
  handleImage,
  inputRef,
  handleCopy,
  picture,
  setFC,
  fc,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (fc === false) return;
    const timeoutID = setTimeout(() => {
      setFC(false);
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [fc]);
  return (
    <header className="border-border flex h-[80px] w-full items-center justify-between border-b px-12 shadow-xs">
      <div className="font-mono">Image-To-@scii</div>

      <div className="flex items-center justify-center gap-2">
        <label htmlFor="upload">
          <span
            className="border-border bg-accent hover:bg-accent/75 text-accent-foreground z-50 cursor-pointer rounded-xl border px-4 py-2 text-sm/5 font-semibold focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
            tabIndex={0}
          >
            Add image
          </span>
          <input
            type="file"
            id="upload"
            hidden
            onChange={() => handleImage()}
            ref={inputRef}
          />
        </label>
        <div className="mx-2 h-6 w-px bg-gray-950/10 dark:bg-white/10" />

        <button
          className="focus:outline-accent-foreground grid size-9 cursor-pointer place-content-center rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2 disabled:pointer-events-none disabled:opacity-50"
          title="Copy AsciiArt"
          onClick={handleCopy}
          disabled={picture === null ? true : false}
        >
          {fc === true ? (
            <Check className="size-4 stroke-green-400" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>

        {theme === "light" && (
          <button
            className="focus:outline-accent-foreground grid size-9 cursor-pointer place-content-center rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2"
            onClick={() => setTheme("dark")}
          >
            <Sun className="size-4" />
          </button>
        )}

        {theme === "dark" && (
          <button
            className="focus:outline-accent-foreground grid size-9 cursor-pointer place-content-center rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2"
            onClick={() => setTheme("light")}
          >
            <Moon className="size-4" />
          </button>
        )}
      </div>
    </header>
  );
}
