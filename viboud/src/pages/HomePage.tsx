import Hero from "../components/Hero";
import PreviewApp from "../components/PreviewApp";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Banner from "../components/Banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PreviewApp />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Banner />
    </>
  );
}
