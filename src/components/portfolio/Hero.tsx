import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "./MagneticButton";
import { ArrowDown, Sparkles } from "lucide-react";

const NAME = "EYA ABID GHOZZI";

const FLOATING_CHIPS = [
  { label: "Deep Learning", x: "8%", y: "20%", delay: 0 },
  { label: "ESP32", x: "85%", y: "18%", delay: 1.2 },
  { label: "BiLSTM", x: "12%", y: "70%", delay: 2.4 },
  { label: "MQTT", x: "82%", y: "65%", delay: 0.6 },
  { label: "Django", x: "5%", y: "45%", delay: 1.8 },
  { label: "Next.js", x: "90%", y: "42%", delay: 3 },
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
        stagger: 0.1,
        delay: 1.4,
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

      {FLOATING_CHIPS.map((chip) => (
        <div
          key={chip.label}
          className="floating-chip absolute hidden md:block z-10"
          style={{
            left: chip.x,
            top: chip.y,
            animation: `drift 12s ease-in-out ${chip.delay}s infinite`,
          }}
        >
          <div className="glass px-4 py-2 rounded-full text-xs font-medium text-primary border-primary/20">
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
          className="font-display font-extrabold leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.4rem, 8vw, 7.5rem)" }}
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
