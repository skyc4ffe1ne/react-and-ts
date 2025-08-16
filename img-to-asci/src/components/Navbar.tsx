import { useTheme } from "../context/ContextTheme";
import type { NavbarProps } from "../lib/types";

function Copy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function Moon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
}

function Sun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
export default function Navbar({
  handleImage,
  inputRef,
  handleCopy,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  return (
    <header className="border-border flex h-[80px] w-full items-center justify-between border-b px-12 shadow-xs">
      <div className="font-mono">Image-To-@scii</div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="focus:outline-accent-foreground grid size-9 cursor-pointer place-content-center rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2"
          title="Copy AsciiArt"
          onClick={handleCopy}
        >
          <Copy className="size-4" />
        </button>
        <label htmlFor="upload">
          <span
            className="border-broder bg-primary hover:bg-foreground/75 dark:text-primary-foreground z-50 cursor-pointer rounded-xl border px-4 py-2 text-sm/5 font-semibold text-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
            tabIndex={0}
          >
            Insert img
          </span>
          <input
            type="file"
            id="upload"
            hidden
            onChange={() => handleImage()}
            ref={inputRef}
          />
        </label>
        <div className="">
          <button className="focus:outline-accent-foreground cursor-pointer rounded-md px-4 py-2 text-sm/5 font-medium shadow-md focus:outline-2 focus:outline-offset-2">
            Download
          </button>
        </div>

        <div className="">
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
      </div>
    </header>
  );
}
