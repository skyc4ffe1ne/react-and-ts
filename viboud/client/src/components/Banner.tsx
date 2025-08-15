import HeaderSection from "./HeaderSection";
import Button from "./ui/Button";
import { ArrowRight } from "./ui/icons";

export default function Banner() {
  return (
    <section className="mt-24 flex w-full flex-col items-center justify-center">
      <HeaderSection
        intro="ready to get started?"
        title="Start to vibe today."
      />
      <Button variant="outline">
        Get started <ArrowRight className="size-4" />
      </Button>
    </section>
  );
}
