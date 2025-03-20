import Hero from "./components/Hero";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import ScrollToSection from "./components/ScrollToSection";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main>
      <div className="relative z-20">
        <ScrollToSection />
        <Hero />
        <About />
        <WhyChoose />
        <Services />
        <Portfolio />
        <Contact />
        <Analytics />
      </div>
    </main>
  );
}
