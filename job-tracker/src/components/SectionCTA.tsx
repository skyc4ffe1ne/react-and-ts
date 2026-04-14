import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SectionCTA() {
  return (
    <section
      id="cta"
      className="pb-24 sm:pb-40 text text-primary-foreground max-w-(--breakpoint-xl) mx-auto"
    >
      <div className="p-8 flex bg-primary rounded-xl shadow-xl items-baseline">
        <SectionHeader
          title="Get started with jobtracker"
					description="Keep everything in one place and move closer to your next opportunity."
          cnDescription="text-left pb-0"
          cnTitle="text-left"
        />
        <Button variant="secondary" size="lg">
          Get started <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
