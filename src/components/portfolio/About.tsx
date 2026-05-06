import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import eyaPhoto from "@/assets/eya.png";
import { MapPin, GraduationCap, Languages, Heart } from "lucide-react";

export const About = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-quote", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".about-card", {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".connecting-line", {
        scaleX: 0,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">01 — À propos</div>
        <h2 className="font-display text-3xl md:text-5xl mb-5 max-w-4xl leading-[1.1]">
          Au croisement de la <span className="text-gradient">santé</span>, du{" "}
          <span className="text-gradient">numérique</span> et de l'
          <span className="text-gradient">intelligence</span>.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-14 leading-relaxed">
          Quelques mots pour situer mon parcours&nbsp;: une ingénieure en formation, franco-tunisienne, qui aime construire des outils concrets pour le monde médical. Voici qui je suis et où je vais.
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          <div className="connecting-line hidden md:block absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-primary to-transparent origin-left -translate-x-1/2" />

          <div className="about-quote">
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-5">
              Je conçois des solutions où l'intelligence artificielle, l'Internet des objets et les systèmes d'information hospitaliers se rencontrent pour transformer le suivi des patients et fiabiliser les infrastructures de soins. Mon terrain de jeu&nbsp;: les hôpitaux, les laboratoires de recherche et les dispositifs médicaux connectés.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Je crois profondément qu'une ingénieure en santé numérique doit comprendre à la fois la rigueur du code, la sensibilité du soin et la criticité des données. Mon objectif est simple&nbsp;: produire un travail utile, élégant et conforme, qui fait gagner du temps aux soignants — parfois des vies aux patients.
            </p>
          </div>

          <div className="about-card glass-strong rounded-3xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex items-start gap-5 mb-6 relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow flex-shrink-0">
                <img
                  src={eyaPhoto}
                  alt="Portrait d'Eya Abid Ghozzi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Eya Abid Ghozzi</h3>
                <p className="text-sm text-primary mb-1 leading-snug">
                  Étudiante Ingénieure en Informatique et Systèmes d'Information pour la Santé
                </p>
                <p className="text-xs text-muted-foreground">Franco-Tunisienne</p>
              </div>
            </div>

            <div className="space-y-3 relative">
              <InfoRow icon={<MapPin className="w-4 h-4" />} label="Castres, France (81100)" />
              <InfoRow
                icon={<GraduationCap className="w-4 h-4" />}
                label="ISIS Castres — Groupe INSA Toulouse — Université Champollion · 2025–2028"
              />
              <InfoRow
                icon={<Languages className="w-4 h-4" />}
                label="Français · Anglais · Arabe"
              />
              <InfoRow
                icon={<Heart className="w-4 h-4" />}
                label="Passionnée par la santé numérique"
              />
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              <span className="pill">IA</span>
              <span className="pill">IoT</span>
              <span className="pill">SI Santé</span>
              <span className="pill">Cybersécurité</span>
              <span className="pill">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-start gap-3 text-sm">
    <span className="text-primary mt-0.5">{icon}</span>
    <span className="text-muted-foreground leading-snug">{label}</span>
  </div>
);
