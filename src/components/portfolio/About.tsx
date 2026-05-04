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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          {/* Connecting line */}
          <div className="connecting-line hidden md:block absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-primary to-transparent origin-left -translate-x-1/2" />

          {/* Quote */}
          <div className="about-quote">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Au croisement de la <span className="text-gradient">santé</span>, du <span className="text-gradient">code</span> et de l'<span className="text-gradient">intelligence</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Je conçois des solutions où l'IA, l'IoT et la santé numérique se rencontrent pour transformer le suivi des patients et la sécurité des systèmes hospitaliers. Mon objectif : du code utile, élégant, qui sauve du temps — parfois des vies.
            </p>
          </div>

          {/* Identity card */}
          <div className="about-card glass-strong rounded-3xl p-8 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="flex items-start gap-5 mb-6 relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow flex-shrink-0">
                <img src={eyaPhoto} alt="Eya Abid Ghozzi" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-1">Eya Abid Ghozzi</h3>
                <p className="text-sm text-primary mb-1">Ingénieure en formation</p>
                <p className="text-xs text-muted-foreground">Franco-Tunisienne 🇫🇷 🇹🇳</p>
              </div>
            </div>

            <div className="space-y-3 relative">
              <InfoRow icon={<MapPin className="w-4 h-4" />} label="Castres, France (81100)" />
              <InfoRow icon={<GraduationCap className="w-4 h-4" />} label="ISIS — Groupe INSA Toulouse · 2025–2028" />
              <InfoRow icon={<Languages className="w-4 h-4" />} label="Français · Anglais · Arabe" />
              <InfoRow icon={<Heart className="w-4 h-4" />} label="Passionnée par la santé numérique" />
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
              <span className="pill">IA</span>
              <span className="pill">IoT</span>
              <span className="pill">SI Santé</span>
              <span className="pill">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-primary">{icon}</span>
    <span className="text-muted-foreground">{label}</span>
  </div>
);
