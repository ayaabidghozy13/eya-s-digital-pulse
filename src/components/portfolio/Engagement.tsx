import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Users, Cpu, HeartHandshake, GraduationCap } from "lucide-react";

const ENGAGEMENTS = [
  {
    org: "Google Developer Student Club — ISITCOM",
    role: "Responsable Technique",
    period: "2023 — 2025",
    description:
      "Animatrice technique du club Google à l'ISITCOM, j'ai organisé des ateliers de développement, des hackathons internes et des sessions de veille technologique pour accompagner les étudiants dans leurs premiers projets numériques.",
    icon: Cpu,
    accent: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
    badge: "GDSC",
  },
  {
    org: "IEEE Student Branch — ISITCOM",
    role: "Membre active",
    period: "2023 — 2025",
    description:
      "Membre de la branche IEEE de l'ISITCOM, j'ai participé aux compétitions internationales de robotique et aux événements techniques inter-universités, dont IEEE RoboNerds 2023 où notre équipe a remporté le 1er prix.",
    icon: Users,
    accent: "from-[#00629B] to-[#0073B7]",
    badge: "IEEE",
  },
  {
    org: "SOS Ambassadors — Tunisie",
    role: "Assistante RH",
    period: "2024 — 2025",
    description:
      "Au sein de l'association SOS Ambassadeurs, j'ai contribué à la coordination des ressources humaines et participé au hackathon HackVision 2025 pour développer des solutions IA au service des enfants vulnérables.",
    icon: HeartHandshake,
    accent: "from-[#E4002B] to-[#A00020]",
    badge: "SOS",
  },
  {
    org: "Cordées de la Réussite — France",
    role: "Ambassadrice",
    period: "2026 — Présent",
    description:
      "Ambassadrice du programme national Cordées de la Réussite, je m'engage à guider des lycéens vers les filières scientifiques et les grandes écoles d'ingénieurs, en partageant mon parcours franco-tunisien.",
    icon: GraduationCap,
    accent: "from-[#0055A4] via-[#FFFFFF] to-[#EF4135]",
    badge: "CDR",
  },
];

export const Engagement = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".engagement-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 95%", once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="engagement" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
          05 — Engagement
        </div>
        <h2 className="font-display text-3xl md:text-5xl mb-5">
          Engagement &amp; Leadership
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-14 leading-relaxed">
          Au-delà de la technique, je m'investis dans des associations qui partagent une vision commune&nbsp;: rendre l'ingénierie accessible, utile et solidaire. Voici les communautés qui ont façonné ma façon de travailler en équipe.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {ENGAGEMENTS.map((e) => {
            const Icon = e.icon;
            return (
              <article
                key={e.org}
                className="engagement-card glass-strong rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                data-cursor-hover
              >
                <div
                  className={`relative h-28 bg-gradient-to-br ${e.accent} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-background/40" />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute bottom-3 left-5 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center shadow-card">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display text-2xl text-white drop-shadow-lg tracking-tight">
                      {e.badge}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-primary border border-primary/30">
                    {e.period}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors leading-snug">
                    {e.org}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary/80 mb-3">
                    {e.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {e.description}
                  </p>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60 border-t border-white/5 pt-3">
                    📌 Image à remplacer
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

