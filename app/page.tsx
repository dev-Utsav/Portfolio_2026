import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </>
  );
}
