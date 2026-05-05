import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Stethoscope,
  Shield,
  Code2,
  BrainCircuit,
  Radio,
  Database,
  Workflow,
} from "lucide-react";

const LOGO_MAP: Record<string, string> = {
  Python: "python",
  Java: "openjdk",
  JavaScript: "javascript",
  React: "react",
  "Vue.js": "vuedotjs",
  "Next.js": "nextdotjs",
  Django: "django",
  "Spring Boot": "springboot",
  FastAPI: "fastapi",
  "Node.js": "nodedotjs",
  Flutter: "flutter",
  "Dart / Flutter": "flutter",
  TensorFlow: "tensorflow",
  PyTorch: "pytorch",
  OpenCV: "opencv",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Firebase: "firebase",
  Arduino: "arduino",
  Git: "git",
  GitHub: "github",
  GitLab: "gitlab",
  Docker: "docker",
  Figma: "figma",
  Linux: "linux",
  "Django REST": "django",
};

const SKILL_GROUPS = [
  {
    icon: Stethoscope,
    title: "Systèmes d'Information de Santé",
    skills: [
      "EBIOS Risk Manager",
      "PCA / PRA",
      "HL7 / FHIR (notions)",
      "SIH",
      "HDS",
      "RGPD & conformité",
      "Imagerie médicale",
      "Épidémiologie des données",
      "Interopérabilité",
      "Formation SI hospitaliers",
      "Infrastructure serveurs hospitaliers",
    ],
  },
  {
    icon: Shield,
    title: "Réseaux & Cybersécurité",
    skills: [
      "CCNA / CCNP",
      "TCP/IP",
      "LAN / WAN",
      "VPN",
      "Cryptographie",
      "Cybersécurité SI de santé",
      "Sécurisation infrastructure",
      "Gestion des accès & identités",
    ],
  },
  {
    icon: Code2,
    title: "Développement Full-Stack",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C / C++",
      "Dart / Flutter",
      "Django REST",
      "Vue.js",
      "Next.js",
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "React",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Intelligence Artificielle & Data",
    skills: [
      "Deep Learning",
      "BiLSTM",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Détection d'anomalies",
      "Signaux physiologiques",
      "Maintenance prédictive",
    ],
  },
  {
    icon: Radio,
    title: "IoT & Systèmes Embarqués",
    skills: ["ESP32", "ESP8266", "Arduino", "MQTT", "Protocoles temps réel", "VHDL"],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: Workflow,
    title: "Gestion de Projet & Méthodes",
    skills: [
      "Agile / Scrum",
      "UML (classes, séquences)",
      "Chef de projet tuteuré (ISIS 2025-26)",
      "DevOps",
      "Conception centrée utilisateur",
      "Figma",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "Linux",
    ],
  },
];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".skill-group").forEach((group) => {
        const pills = group.querySelectorAll(".skill-pill");
        gsap.fromTo(
          group,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 95%", once: true },
          }
        );
        gsap.fromTo(
          pills,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.03,
            ease: "back.out(2)",
            scrollTrigger: { trigger: group, start: "top 95%", once: true },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Stack</div>
        <h2 className="font-display text-3xl md:text-5xl mb-5">Compétences</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-14 leading-relaxed">
          Mon profil croise volontairement la santé numérique, la cybersécurité hospitalière, le développement logiciel et l'IA. Voici les briques techniques et méthodologiques sur lesquelles je m'appuie au quotidien pour concevoir des systèmes fiables et utiles aux soignants.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="skill-group glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-base leading-tight">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => {
                    const slug = LOGO_MAP[s];
                    return (
                      <span key={s} className="skill-pill pill">
                        {slug && (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}`}
                            alt=""
                            loading="lazy"
                            className="w-3.5 h-3.5 object-contain"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).style.display = "none";
                            }}
                          />
                        )}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
