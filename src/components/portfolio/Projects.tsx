import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { Activity, Footprints, ClipboardCheck, ScanFace, Building2, Bot } from "lucide-react";

const PROJECTS = [
  {
    icon: Activity,
    title: "HopeLink",
    tag: "IA · IoT · Santé",
    description: "Plateforme de surveillance médicale temps réel combinant capteurs ESP32, modèle BiLSTM de prédiction et dashboard Next.js pour le suivi clinique à distance.",
    tech: ["Django REST", "Next.js", "BiLSTM", "ESP32", "MQTT"],
  },
  {
    icon: Footprints,
    title: "Step By Step",
    tag: "Dispositif Médical",
    description: "Dispositif IoT portable de détection des troubles de la marche, avec analyse temps réel et reporting destiné au personnel médical.",
    tech: ["Arduino", "IoT", "Signal Processing", "Mobile"],
  },
  {
    icon: ClipboardCheck,
    title: "ISIS Eval",
    tag: "Application Web",
    description: "Application complète d'évaluation des enseignements pour l'école ISIS — back Spring Boot, front Vue.js, gestion des rôles et reporting.",
    tech: ["Vue.js", "Spring Boot", "REST", "PostgreSQL"],
  },
  {
    icon: ScanFace,
    title: "Reconnaissance Faciale",
    tag: "Computer Vision",
    description: "Système de contrôle d'accès sécurisé basé sur le deep learning, avec reconnaissance temps réel et API d'authentification.",
    tech: ["TensorFlow", "OpenCV", "FastAPI", "PyTorch"],
  },
  {
    icon: Building2,
    title: "Stadium Management",
    tag: "IoT · Mobile",
    description: "Application Flutter de supervision d'infrastructures sportives — pilotage de capteurs, alertes temps réel, synchronisation cloud.",
    tech: ["Flutter", "Firebase", "ESP8266", "Dart"],
  },
  {
    icon: Bot,
    title: "Line Follower Robot",
    tag: "🥇 1er Prix IEEE 2023",
    description: "Robot suiveur de ligne autonome — vainqueur du concours IEEE RoboNerds 2023, optimisation algorithme PID et capteurs IR.",
    tech: ["Arduino", "PID", "Embedded C", "Hardware"],
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // Tilt
      cardsRef.current.forEach((card) => {
        if (card) {
          VanillaTilt.init(card, {
            max: 12,
            speed: 600,
            glare: true,
            "max-glare": 0.25,
            scale: 1.03,
          });
        }
      });

      return () => {
        cardsRef.current.forEach((card: any) => card?.vanillaTilt?.destroy());
      };
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative h-screen overflow-hidden">
      <div className="absolute top-12 md:top-20 left-6 md:left-20 z-10">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">03 — Sélection</div>
        <h2 className="font-display text-4xl md:text-6xl">Projets</h2>
      </div>

      <div ref={trackRef} className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-6 md:gap-10 px-6 md:px-20 will-change-transform">
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="glass-strong rounded-3xl p-8 md:p-10 w-[85vw] md:w-[460px] flex-shrink-0 shadow-card hover:shadow-glow transition-shadow duration-500 group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 shadow-glow">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <span className="text-xs uppercase tracking-wider text-primary/80 mb-2 block">{p.tag}</span>
                <h3 className="font-display text-3xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
            </div>
          );
        })}
        {/* spacer */}
        <div className="w-[20vw] flex-shrink-0" />
      </div>

      {/* Hint */}
      <div className="absolute bottom-8 right-6 md:right-20 text-xs uppercase tracking-[0.3em] text-muted-foreground/50">
        ← Scroll →
      </div>
    </section>
  );
};
