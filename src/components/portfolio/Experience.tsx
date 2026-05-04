import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const EXPERIENCES = [
  {
    company: "Hôpital Paris Est Val de Marne",
    role: "Stage SI Santé",
    dates: "Avr — Juin 2026",
    description: "Analyse de risques EBIOS, plans de continuité (PCA/PRA), déploiement Hucency, gestion des incidents SI hospitaliers.",
    tech: ["EBIOS", "PCA/PRA", "Hucency", "ITIL", "SIH"],
  },
  {
    company: "Laboratoire MARS",
    role: "PFE — HopeLink IA/IoT",
    dates: "Févr — Juin 2025",
    description: "Conception complète d'une plateforme de surveillance médicale temps réel : back Django REST, front Next.js, modèle BiLSTM, capteurs ESP32 via MQTT.",
    tech: ["Django REST", "Next.js", "Python", "BiLSTM", "ESP32", "MQTT", "PostgreSQL"],
  },
  {
    company: "Flesk",
    role: "Stage Dev IA — Reconnaissance Faciale",
    dates: "Août — Sept 2024",
    description: "Développement d'un système de contrôle d'accès par reconnaissance faciale, pipeline complet de la collecte de données au déploiement API.",
    tech: ["React", "TensorFlow", "OpenCV", "PyTorch", "FastAPI"],
  },
  {
    company: "Tn Smart IoT",
    role: "Stage IoT — Stadium Management",
    dates: "Juin — Juil 2024",
    description: "Application mobile de supervision IoT pour infrastructures sportives : pilotage capteurs, dashboard temps réel, sync Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "ESP8266"],
  },
];

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -80 : 80,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">02 — Parcours</div>
        <h2 className="font-display text-4xl md:text-6xl mb-20">Expériences</h2>

        <div className="relative">
          {/* Center line */}
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-gradient-to-b from-primary via-primary/40 to-transparent shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item relative mb-16 md:mb-24 flex ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start gap-6`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary shadow-glow ring-4 ring-background" />
              </div>

              <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-primary uppercase tracking-wider">{exp.dates}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 mb-4 font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
