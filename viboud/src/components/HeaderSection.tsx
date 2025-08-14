import type { HeaderSectionProps } from "../lib/types";
export default function HeaderSection({ intro, title }: HeaderSectionProps) {
  return (
    <header className="mb-12 flex w-full flex-col items-center justify-center text-center">
      <h4 className="text-secondary-foreground pb-0.5 font-mono text-sm/4 font-bold tracking-wide uppercase">
        {intro}
      </h4>
      <h2 className="text-foreground max-w-xs text-3xl font-medium tracking-tight first-letter:uppercase sm:max-w-none md:text-5xl">
        {title}
      </h2>
    </header>
  );
}
