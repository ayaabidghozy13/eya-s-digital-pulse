import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import VanillaTilt from "vanilla-tilt";
import {
  Activity,
  Footprints,
  ClipboardCheck,
  ScanFace,
  Building2,
  Bot,
  MapPin,
} from "lucide-react";

const PROJECTS = [
  {
    icon: Activity,
    title: "HopeLink",
    tag: "IA · IoT · Santé",
    location: "Sousse, Tunisie",
    context: "Laboratoire MARS — Modeling of Automated Reasoning Systems",
    description:
      "Plateforme de surveillance médicale en temps réel combinant capteurs ESP32, modèle BiLSTM de prédiction d'événements physiologiques et dashboard Next.js, pour permettre un suivi clinique fiable à distance.",
    tech: ["Django REST", "Next.js", "BiLSTM", "ESP32", "MQTT"],
  },
  {
    icon: Footprints,
    title: "Step By Step",
    tag: "Dispositif Médical",
    location: "Castres, France",
    context: "École ISIS — Module Innovation Santé",
    description:
      "Dispositif IoT portable de détection des troubles de la marche, avec analyse temps réel des signaux et reporting clair destiné au personnel médical pour faciliter le diagnostic.",
    tech: ["Arduino", "IoT", "Signal Processing", "Mobile"],
  },
  {
    icon: ClipboardCheck,
    title: "ISIS Eval",
    tag: "Application Web",
    location: "Castres, France",
    context: "École ISIS — Projet Tuteuré 1ère année cycle ingénieur",
    description:
      "Application complète d'évaluation des enseignements pour l'école ISIS&nbsp;: back Spring Boot, front Vue.js, gestion fine des rôles et reporting analytique pour la direction pédagogique.",
    tech: ["Vue.js", "Spring Boot", "REST", "PostgreSQL"],
  },
  {
    icon: ScanFace,
    title: "Reconnaissance Faciale",
    tag: "Computer Vision",
    location: "Monastir, Tunisie",
    context: "Flesk — Startup franco-tunisienne",
    description:
      "Système de contrôle d'accès sécurisé basé sur le deep learning, avec reconnaissance temps réel et API d'authentification prête à intégrer dans une infrastructure existante.",
    tech: ["TensorFlow", "OpenCV", "FastAPI", "PyTorch"],
  },
  {
    icon: Building2,
    title: "Stadium Management",
    tag: "IoT · Mobile",
    location: "Sfax, Tunisie",
    context: "Tn Smart IoT — Startup IoT tunisienne",
    description:
      "Application Flutter de supervision d'infrastructures sportives connectées&nbsp;: pilotage des capteurs, alertes temps réel et synchronisation cloud Firebase pour les équipes terrain.",
    tech: ["Flutter", "Firebase", "ESP8266", "Dart"],
  },
  {
    icon: Bot,
    title: "Line Follower Robot",
    tag: "1er Prix IEEE 2023",
    location: "Tunisie",
    context: "Compétition internationale IEEE RoboNerds 2023",
    description:
      "Robot suiveur de ligne autonome, vainqueur du concours IEEE RoboNerds 2023. Optimisation fine de l'algorithme PID et des capteurs IR pour garantir une trajectoire stable à grande vitesse.",
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
      <div className="absolute top-10 md:top-16 left-6 md:left-20 z-10 max-w-2xl">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">03 — Sélection</div>
        <h2 className="font-display text-3xl md:text-5xl mb-3">Projets</h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed hidden md:block">
          Une sélection de projets où IA, IoT et santé numérique se rejoignent. Faites défiler horizontalement pour découvrir le détail de chaque réalisation.
        </p>
      </div>

      <div
        ref={trackRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-6 md:gap-10 px-6 md:px-20 will-change-transform"
      >
        {PROJECTS.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="glass-strong rounded-3xl p-7 md:p-9 w-[85vw] md:w-[460px] flex-shrink-0 shadow-card hover:shadow-glow transition-shadow duration-500 group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    aria-label={`Code source de ${p.title} sur GitHub`}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <span className="text-xs uppercase tracking-wider text-primary/80 mb-2 block">
                  {p.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: p.description }}
                />

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary hover:gap-3 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Voir le code
                </a>
              </div>
            </div>
          );
        })}
        <div className="w-[20vw] flex-shrink-0" />
      </div>

      <div className="absolute bottom-8 right-6 md:right-20 text-xs uppercase tracking-[0.3em] text-muted-foreground/50">
        ← Scroll →
      </div>
    </section>
  );
};
