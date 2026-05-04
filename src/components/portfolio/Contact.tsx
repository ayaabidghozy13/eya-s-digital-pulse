import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Linkedin, Github, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-el", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/15 blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center w-full">
        <div className="contact-el text-xs uppercase tracking-[0.3em] text-primary mb-4">
          07 — Contact
        </div>
        <h2 className="contact-el font-display text-4xl md:text-6xl mb-5 leading-[1.05]">
          Travaillons <span className="text-gradient">ensemble.</span>
        </h2>
        <p className="contact-el text-muted-foreground text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Je suis disponible pour une alternance dès septembre 2026 en santé numérique, IA ou IoT. Si vous portez un projet qui a du sens, qui touche au soin ou à l'innovation médicale, écrivez-moi&nbsp;: j'aurai à cœur d'en discuter avec vous.
        </p>

        <a
          href="mailto:ayaabidghozy13@gmail.com"
          data-cursor-hover
          className="contact-el inline-flex items-center gap-3 font-display text-xl md:text-3xl text-foreground hover:text-primary transition-colors group mb-14 break-all"
        >
          ayaabidghozy13@gmail.com
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
        </a>

        <div className="contact-el flex flex-wrap justify-center gap-3 mb-14">
          <SocialLink
            href="https://www.linkedin.com/in/eya-abid-ghozzi-ba4139285/"
            icon={<Linkedin className="w-4 h-4" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/ayaabidghozy13"
            icon={<Github className="w-4 h-4" />}
            label="GitHub"
          />
          <SocialLink
            href="tel:+33780868097"
            icon={<Phone className="w-4 h-4" />}
            label="+33 7 80 86 80 97"
          />
          <SocialLink
            href="mailto:ayaabidghozy13@gmail.com"
            icon={<Mail className="w-4 h-4" />}
            label="Email"
          />
        </div>

        <div className="contact-el">
          <MagneticButton href="mailto:ayaabidghozy13@gmail.com" variant="primary">
            Envoyer un message
          </MagneticButton>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-el relative mt-24 pt-8 border-t border-white/5 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/70">
          <div className="flex items-center gap-2 uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Cherche alternance — Sept. 2026
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/eya-abid-ghozzi-ba4139285/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor-hover
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ayaabidghozy13"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor-hover
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 uppercase tracking-[0.2em]">
            <MapPin className="w-3 h-3" />© 2026 Eya Abid Ghozzi · Castres
          </div>
        </div>
      </footer>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    data-cursor-hover
    className="glass px-5 py-3 rounded-full text-sm flex items-center gap-2.5 hover:border-primary/40 hover:text-primary transition-all"
  >
    {icon} {label}
  </a>
);
