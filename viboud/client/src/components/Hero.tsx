import Button from "./ui/Button";
import { Dot, Note, SmallArrowRight, ArrowRight } from "./ui/icons";

export default function Hero() {
  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center text-center">
      <div className="transtion-translate mx-auto mb-2 flex w-fit translate-y-0 flex-nowrap items-center gap-1 rounded-full border border-gray-400 px-3 py-2 text-xs/4 whitespace-nowrap duration-300 starting:-translate-y-12">
        <Note className="stroke-foreground size-4 fill-transparent" />
        <span className="text-foreground ml-1 font-medium">
          Added new features
        </span>
        <Dot className="stroke-secondary-foreground" />
        <span className="text-foreground">Learn more</span>
        <SmallArrowRight className="fill-foreground size-4" />
      </div>
      <h1 className="from-foreground translate-y-0 bg-gradient-to-br from-30% bg-clip-text py-4 text-4xl leading-none font-medium tracking-tighter text-balance text-transparent duration-600 sm:text-6xl md:max-w-6xl md:py-6 md:text-7xl starting:translate-y-12">
        Pick your favorite songs with your friends
      </h1>

      <p className="text-secondary-foreground mb-8 max-w-3xl text-center text-sm/5 tracking-tight text-balance opacity-100 transition-opacity duration-900 sm:text-lg/6 starting:opacity-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        eveniet! Saepe, dolores. Deleniti harum quaerat in nam, asperiores
      </p>

      <Button variant="accent">
        Get Started <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
