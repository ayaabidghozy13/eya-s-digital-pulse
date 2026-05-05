import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Trophy, Award, BookOpen, Medal, ShieldCheck } from "lucide-react";
import twiseImg from "@/assets/award-twise.png";
import hackvisionImg from "@/assets/award-hackvision.jpg";
import robonerdsImg from "@/assets/award-robonerds.png";
import nvidiaImg from "@/assets/award-nvidia.jpg";
import istqbImg from "@/assets/award-istqb.jpg";

type Category = "prix" | "cert";

const CATEGORY_COLOR: Record<Category, string> = {
  prix: "#FFD700",
  cert: "#00d4aa",
};

const AWARDS: {
  icon: typeof Trophy;
  title: string;
  year: string;
  detail: string;
  category: Category;
  image?: string;
}[] = [
  {
    icon: Trophy,
    title: "1er Prix — TWISE Night Challenge",
    year: "2025",
    category: "prix",
    image: twiseImg,
    detail:
      "Vainqueurs du challenge innovation TWISE Night 2025 pour un projet récompensé pour son impact social et son potentiel terrain. Une expérience formatrice de pitch et de prototypage rapide en équipe.",
  },
  {
    icon: Medal,
    title: "2e Place — Hackathon HackVision",
    year: "2025",
    category: "prix",
    image: hackvisionImg,
    detail:
      "Finalistes du hackathon HackVision 2025 avec une solution IA pensée et conçue en 48h. Le jury a salué la pertinence métier et la qualité de l'expérience utilisateur proposée.",
  },
  {
    icon: Trophy,
    title: "1er Prix — IEEE RoboNerds",
    year: "2023",
    category: "prix",
    image: robonerdsImg,
    detail:
      "Notre robot suiveur de ligne autonome a remporté le concours IEEE RoboNerds 2023. Projet centré sur l'optimisation d'un algorithme PID et la fiabilité des capteurs en conditions réelles.",
  },
  {
    icon: BookOpen,
    title: "NVIDIA — Fundamentals of Deep Learning",
    year: "2025",
    category: "cert",
    image: nvidiaImg,
    detail:
      "Certification officielle NVIDIA validée en 2025 sur les fondamentaux du deep learning. Pratique approfondie des réseaux convolutifs et des bonnes pratiques d'entraînement.",
  },
  {
    icon: ShieldCheck,
    title: "ISTQB — Foundation Level",
    year: "2024",
    category: "cert",
    image: istqbImg,
    detail:
      "Certification internationale en méthodologies de test logiciel. J'y ai consolidé ma rigueur sur la qualité, la traçabilité des exigences et la stratégie de test produit.",
  },
  {
    icon: Award,
    title: "Digital Literacy Certificate",
    year: "2024",
    category: "cert",
    detail:
      "Certification officielle attestant d'une maîtrise complète des outils numériques essentiels. Bureautique avancée, collaboration cloud et bonnes pratiques de cybersécurité personnelle.",
  },
];

export const Awards = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".award-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 95%", once: true },
        }
      );
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
            const color = CATEGORY_COLOR[a.category];
            return (
              <article
                key={a.title}
                className="award-card glass rounded-2xl overflow-hidden relative hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow group flex flex-col"
                data-cursor-hover
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
                {a.image ? (
                  <div className="relative h-44 overflow-hidden bg-background/40">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-primary border border-primary/30">
                      {a.year}
                    </span>
                    <div
                      className="absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur"
                      style={{ background: `${color}26`, border: `1px solid ${color}55` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between px-6 pt-7">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${color}1a`, border: `1px solid ${color}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                      {a.year}
                    </span>
                  </div>
                )}
                <div className="p-6 flex-1">
                  <h3 className="font-display text-base md:text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
