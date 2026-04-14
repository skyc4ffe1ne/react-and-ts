import Hero from "@/components/Hero";
import SectionBento from "@/components/SectionBento";
import SectionReview from "@/components/SectionReview";
import SectionCTA from "@/components/SectionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionBento />
			<SectionReview />
			<SectionCTA />
    </>
  );
}
