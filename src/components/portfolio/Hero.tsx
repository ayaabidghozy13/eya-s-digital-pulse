import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "./MagneticButton";
import { ArrowDown, Sparkles } from "lucide-react";

const NAME = "EYA ABID GHOZZI";

const FLOATING_CHIPS = [
  { label: "Gestion de Projet", x: "4%", y: "12%", dur: 14, delay: 0 },
  { label: "Agile Scrum", x: "20%", y: "8%", dur: 16, delay: 1.2 },
  { label: "Chef de Projet", x: "70%", y: "10%", dur: 18, delay: 0.4 },
  { label: "EBIOS", x: "88%", y: "14%", dur: 13, delay: 2.0 },
  { label: "BiLSTM", x: "6%", y: "30%", dur: 15, delay: 0.8 },
  { label: "Django", x: "92%", y: "28%", dur: 17, delay: 1.6 },
  { label: "Vue.js", x: "2%", y: "48%", dur: 19, delay: 2.4 },
  { label: "Flutter", x: "94%", y: "46%", dur: 14, delay: 0.2 },
  { label: "MQTT", x: "8%", y: "66%", dur: 16, delay: 1.0 },
  { label: "ESP32", x: "90%", y: "64%", dur: 18, delay: 2.2 },
  { label: "Deep Learning", x: "14%", y: "82%", dur: 15, delay: 0.6 },
  { label: "Next.js", x: "78%", y: "84%", dur: 17, delay: 1.4 },
  { label: "PostgreSQL", x: "32%", y: "88%", dur: 20, delay: 2.6 },
  { label: "CCNA", x: "60%", y: "90%", dur: 13, delay: 0.3 },
  { label: "HL7/FHIR", x: "24%", y: "20%", dur: 19, delay: 1.8 },
  { label: "TensorFlow", x: "74%", y: "22%", dur: 14, delay: 0.9 },
  { label: "Spring Boot", x: "16%", y: "56%", dur: 18, delay: 2.1 },
  { label: "IoT", x: "84%", y: "54%", dur: 15, delay: 0.5 },
  { label: "RGPD", x: "46%", y: "6%", dur: 17, delay: 1.5 },
];

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = nameRef.current?.querySelectorAll("span.letter");
      if (letters) {
        gsap.from(letters, {
          y: 120,
          opacity: 0,
          rotateX: -90,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.04,
          delay: 0.2,
        });
      }
      gsap.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 1.1,
      });
      gsap.from(".floating-chip", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.6)",
        stagger: 0.05,
        delay: 1.2,
      });
      gsap.to(gridRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-content", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div ref={gridRef} className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {FLOATING_CHIPS.map((chip, i) => (
        <div
          key={chip.label}
          className={`floating-chip absolute z-10 ${i > 9 ? "hidden md:block" : "hidden sm:block"}`}
          style={{
            left: chip.x,
            top: chip.y,
            animation: `drift ${chip.dur}s ease-in-out ${chip.delay}s infinite`,
          }}
        >
          <div className="glass px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium text-primary/90 border-primary/20 whitespace-nowrap">
            {chip.label}
          </div>
        </div>
      ))}

      <div className="hero-content relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="hero-fade inline-flex items-center gap-2.5 mb-8 glass px-5 py-2.5 rounded-full border-primary/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
          </span>
          <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
            Disponible — Alternance Sept. 2026
          </span>
        </div>

        <h1
          ref={nameRef}
          className="font-display font-light leading-[0.95] mb-6 whitespace-nowrap tracking-tight"
          style={{ fontSize: "clamp(1.4rem, 5.2vw, 4.5rem)" }}
        >
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              className="letter inline-block"
              style={{ display: ch === " " ? "inline" : "inline-block" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <p className="hero-fade text-base md:text-xl text-foreground/90 mb-3 font-light leading-snug max-w-3xl mx-auto">
          Étudiante Ingénieure en{" "}
          <span className="text-primary font-medium">
            Informatique et Systèmes d'Information pour la Santé
          </span>
        </p>
        <p className="hero-fade text-sm md:text-base text-muted-foreground mb-10 flex items-center justify-center gap-2 flex-wrap">
          <Sparkles className="w-4 h-4 text-primary" />
          ISIS Castres — Groupe INSA Toulouse — Université Champollion · 2025–2028
        </p>

        <div className="hero-fade flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton href="#projects" variant="primary">
            Voir mes projets
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Me contacter
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce-down" />
      </div>
    </section>
  );
};
