import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const EXPERIENCES = [
  {
    company: "Hôpital Paris Est Val de Marne — DSI",
    role: "Stage Immersion Santé — SI Hospitaliers",
    dates: "Avr — Juin 2026",
    description:
      "Au sein de la DSI du CHPEVM, j'ai participé à des analyses de risques EBIOS, aux ateliers de continuité et reprise d'activité (PCA/PRA), à la gestion des incidents SI via la plateforme Hucency, et à la rédaction de procédures techniques. J'ai également été formée aux systèmes d'information hospitaliers (SIH), à la cybersécurité des SI de santé, aux VPN et à l'infrastructure des serveurs hospitaliers, ainsi qu'à la gestion des identités et des accès dans un environnement critique de soins.",
    tech: [
      "EBIOS",
      "PCA/PRA",
      "SIH",
      "Hucency",
      "Cybersécurité",
      "VPN",
      "Infrastructure serveurs",
      "RGPD",
    ],
  },
  {
    company: "Laboratoire MARS",
    role: "Projet de Fin d'Études — HopeLink IA/IoT",
    dates: "Févr — Juin 2025",
    description:
      "Conception complète d'une plateforme de surveillance médicale en temps réel destinée au suivi clinique à distance. J'ai pris en charge le back-end Django REST, le front-end Next.js, l'entraînement d'un modèle BiLSTM de prédiction d'événements physiologiques et l'intégration de capteurs ESP32 communiquant via MQTT, avec un stockage PostgreSQL pensé pour la traçabilité médicale.",
    tech: ["Django REST", "Next.js", "Python", "BiLSTM", "ESP32", "MQTT", "PostgreSQL"],
  },
  {
    company: "Flesk",
    role: "Stage Développement IA — Reconnaissance Faciale",
    dates: "Août — Sept 2024",
    description:
      "Développement complet d'un système de contrôle d'accès basé sur la reconnaissance faciale, de la collecte et l'annotation des données jusqu'au déploiement de l'API d'authentification. J'ai conçu le pipeline d'entraînement, optimisé les performances en conditions réelles et livré une intégration prête à être consommée par le front.",
    tech: ["React", "TensorFlow", "OpenCV", "PyTorch", "FastAPI"],
  },
  {
    company: "Tn Smart IoT",
    role: "Stage IoT — Stadium Management",
    dates: "Juin — Juil 2024",
    description:
      "Conception et développement d'une application mobile Flutter pour la supervision IoT d'infrastructures sportives. J'ai mis en place le pilotage des capteurs ESP8266, un dashboard temps réel et la synchronisation cloud via Firebase, en collaborant étroitement avec l'équipe hardware sur le terrain.",
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
        <h2 className="font-display text-3xl md:text-5xl mb-5">Expériences</h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
          De l'IoT industriel à la cybersécurité hospitalière, en passant par l'IA appliquée au médical, chaque expérience a renforcé ma conviction&nbsp;: la santé numérique se construit à l'intersection du terrain, du code et de la conformité. Voici les étapes qui ont structuré mon parcours.
        </p>

        <div className="relative">
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-gradient-to-b from-primary via-primary/40 to-transparent shadow-[0_0_20px_hsl(var(--primary)/0.4)]" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item relative mb-16 md:mb-24 flex ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start gap-6`}
            >
              <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-primary shadow-glow ring-4 ring-background" />
              </div>

              <div className="md:w-1/2 pl-12 md:pl-0 md:px-10">
                <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-primary uppercase tracking-wider">
                      {exp.dates}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl mb-1 group-hover:text-primary transition-colors leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 mb-4 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
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
