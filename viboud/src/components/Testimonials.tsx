import HeaderSection from "./HeaderSection";
import MarqueeCard from "./Marquee";

export default function Testimonials() {
  return (
    <section className="mt-24 w-full">
      <HeaderSection intro="testimonials" title="What people are saying" />
      <MarqueeCard />
    </section>
  );
}
