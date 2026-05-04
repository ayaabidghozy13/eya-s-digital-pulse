import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AWARDS = [
  {
    icon: "🥇",
    title: "1er Prix TWISE Night Challenge",
    year: "2025",
    detail: "Vainqueurs du challenge innovation TWISE Night 2025, projet récompensé pour son impact social.",
  },
  {
    icon: "🥈",
    title: "2e Place Hackathon HackVision",
    year: "2025",
    detail: "Finalistes du hackathon HackVision 2025 — solution IA conçue en 48h.",
  },
  {
    icon: "🏆",
    title: "1er Prix IEEE RoboNerds",
    year: "2023",
    detail: "Robot suiveur de ligne autonome vainqueur du concours IEEE RoboNerds 2023.",
  },
  {
    icon: "🎓",
    title: "NVIDIA Deep Learning",
    year: "2025",
    detail: "Certification NVIDIA — Fundamentals of Deep Learning, validée en 2025.",
  },
  {
    icon: "✅",
    title: "ISTQB Foundation",
    year: "2024",
    detail: "Certification ISTQB Foundation Level — méthodologies de test logiciel.",
  },
  {
    icon: "🌐",
    title: "Ambassadrice Cordées de la Réussite",
    year: "2026",
    detail: "Engagement bénévole pour l'égalité des chances dans l'enseignement supérieur.",
  },
];

export const Awards = () => {
  const ref = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".award-card", {
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="awards" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">05 — Distinctions</div>
        <h2 className="font-display text-4xl md:text-6xl mb-16">Prix & Certifications</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((a, i) => {
            const isFlipped = flipped === i;
            return (
              <div
                key={a.title}
                className="award-card relative h-56 cursor-pointer group"
                style={{ perspective: "1200px" }}
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlipped ? null : i)}
                data-cursor-hover
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center group-hover:border-primary/40 transition-colors"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-5xl mb-4">{a.icon}</div>
                    <h3 className="font-display text-lg mb-1 leading-tight">{a.title}</h3>
                    <span className="text-xs text-primary uppercase tracking-wider">{a.year}</span>
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center text-center border-primary/40 shadow-glow"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
