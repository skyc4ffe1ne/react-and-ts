import Button from "./ui/Button";
import { Dot, Note, SmallArrowRight, ArrowRight } from "./ui/icons";

export default function Hero() {
  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center text-center">
      <div className="mx-auto mb-2 flex w-fit flex-nowrap items-center gap-1 rounded-full border border-gray-400 px-3 py-2 text-xs/4 whitespace-nowrap">
        <Note className="stroke-foreground size-4 fill-transparent" />
        <span className="text-foreground ml-1 font-medium">
          Added new features
        </span>
        <Dot className="stroke-gray-400" />
        <span className="text-foreground">Learn more</span>
        <SmallArrowRight className="size-4" />
      </div>
      <h1 className="from-foreground bg-gradient-to-br from-30% bg-clip-text py-4 text-4xl leading-none font-medium tracking-tighter text-balance text-transparent sm:text-6xl md:max-w-6xl md:py-6 md:text-7xl">
        Pick your favorite songs with your friends
      </h1>

      <p className="text-secondary-foreground mb-8 max-w-3xl text-center text-xs tracking-tight text-balance sm:text-lg/6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        eveniet! Saepe, dolores. Deleniti harum quaerat in nam, asperiores
      </p>

      <Button variant="primary">
        Get Started <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}
