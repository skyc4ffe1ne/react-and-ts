import { Sun, Moon } from "./ui/icons";
export default function Footer() {
  return (
    <footer className="border-border mt-24 mb-4 flex justify-between border-t pt-10">
      <h1> Logo </h1>
      <div className="flex gap-1 rounded-full bg-gray-950/15 p-1 dark:bg-white/10">
        <span
          aria-label="Light theme"
          className="data-current:bg-background sun_footer fill-foreground p-1.5 data-current:rounded-full data-current:ring data-current:ring-gray-950/20 data-current:inset-ring-white/10"
        >
          <Sun className="size-4" />
        </span>

        <span
          aria-label="Dark theme"
          className="fill-foreground p-1.5 data-current:rounded-full data-current:bg-stone-700 data-current:ring data-current:ring-stone-600 data-current:inset-ring-white"
        >
          <Moon className="size-4" />
        </span>
      </div>
    </footer>
  );
}
