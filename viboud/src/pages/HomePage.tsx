import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";

export default function HomePage() {
  return (
    <div className="mt-24 flex w-full flex-col items-center justify-center text-center">
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
