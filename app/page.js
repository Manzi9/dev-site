import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToSection from "./components/ScrollToSection";

export default function Home() {
  return (
    <>
      <ScrollToSection />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <Contact />
    </>
  );
}
