import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { HeartbeatLine } from "@/components/portfolio/HeartbeatLine";
import { About } from "@/components/portfolio/About";
import { Stats } from "@/components/portfolio/Stats";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Engagement } from "@/components/portfolio/Engagement";
import { Awards } from "@/components/portfolio/Awards";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Nav />
      <main className="relative">
        <Hero />
        <HeartbeatLine />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Engagement />
        <Awards />
        <Contact />
      </main>
    </SmoothScroll>
  );
};

export default Index;
