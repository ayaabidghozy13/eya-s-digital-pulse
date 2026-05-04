import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Trophy, Award, BookOpen, Globe, Medal, ShieldCheck } from "lucide-react";

const AWARDS = [
  {
    icon: Trophy,
    title: "1er Prix — TWISE Night Challenge",
    year: "2025",
    detail:
      "Vainqueurs du challenge innovation TWISE Night 2025 pour un projet récompensé pour son impact social et son potentiel terrain. Une expérience formatrice de pitch et de prototypage rapide en équipe.",
  },
  {
    icon: Medal,
    title: "2e Place — Hackathon HackVision",
    year: "2025",
    detail:
      "Finalistes du hackathon HackVision 2025 avec une solution IA pensée et conçue en 48h. Le jury a salué la pertinence métier et la qualité de l'expérience utilisateur proposée.",
  },
  {
    icon: Trophy,
    title: "1er Prix — IEEE RoboNerds",
    year: "2023",
    detail:
      "Notre robot suiveur de ligne autonome a remporté le concours IEEE RoboNerds 2023. Projet centré sur l'optimisation d'un algorithme PID et la fiabilité des capteurs en conditions réelles.",
  },
  {
    icon: BookOpen,
    title: "NVIDIA — Fundamentals of Deep Learning",
    year: "2025",
    detail:
      "Certification officielle NVIDIA validée en 2025 sur les fondamentaux du deep learning. Pratique approfondie des réseaux convolutifs et des bonnes pratiques d'entraînement.",
  },
  {
    icon: ShieldCheck,
    title: "ISTQB — Foundation Level",
    year: "2024",
    detail:
      "Certification internationale en méthodologies de test logiciel. J'y ai consolidé ma rigueur sur la qualité, la traçabilité des exigences et la stratégie de test produit.",
  },
  {
    icon: Award,
    title: "Digital Literacy Certificate",
    year: "2024",
    detail:
      "Certification officielle attestant d'une maîtrise complète des outils numériques essentiels. Bureautique avancée, collaboration cloud et bonnes pratiques de cybersécurité personnelle.",
  },
  {
    icon: Globe,
    title: "Ambassadrice — Cordées de la Réussite",
    year: "2026",
    detail:
      "Engagement bénévole pour l'égalité des chances dans l'enseignement supérieur. J'accompagne des lycéens vers les filières scientifiques en partageant mon parcours franco-tunisien.",
  },
];

export const Awards = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".award-card", {
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="awards" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">06 — Distinctions</div>
        <h2 className="font-display text-3xl md:text-5xl mb-5">Prix &amp; Certifications</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-14 leading-relaxed">
          Les distinctions obtenues lors de hackathons et de concours techniques, ainsi que les certifications professionnelles qui structurent mon parcours d'ingénieure en santé numérique.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((a) => {
            const Icon = a.icon;
            return (
              <article
                key={a.title}
                className="award-card glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow group"
                data-cursor-hover
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    {a.year}
                  </span>
                </div>
                <h3 className="font-display text-base md:text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
