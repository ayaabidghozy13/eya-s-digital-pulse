import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";
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
    <section ref={ref} id="contact" className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-primary/15 blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-4xl text-center">
        <div className="contact-el text-xs uppercase tracking-[0.3em] text-primary mb-4">06 — Contact</div>
        <h2 className="contact-el font-display text-5xl md:text-8xl mb-6 leading-[0.95]">
          Travaillons <br /> <span className="text-gradient">ensemble.</span>
        </h2>
        <p className="contact-el text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Disponible pour une alternance dès septembre 2026 en santé numérique, IA ou IoT. Toujours partante pour discuter d'un projet qui a du sens.
        </p>

        <a
          href="mailto:ayaabidghozy13@gmail.com"
          data-cursor-hover
          className="contact-el inline-flex items-center gap-3 font-display text-2xl md:text-4xl text-foreground hover:text-primary transition-colors group mb-16"
        >
          ayaabidghozy13@gmail.com
          <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="contact-el flex flex-wrap justify-center gap-4 mb-16">
          <SocialLink href="https://linkedin.com/in/eya-abid-ghozzi" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
          <SocialLink href="https://github.com/ayaabidghozy13" icon={<Github className="w-4 h-4" />} label="GitHub" />
          <SocialLink href="tel:+33780868097" icon={<Phone className="w-4 h-4" />} label="+33 7 80 86 80 97" />
          <SocialLink href="mailto:ayaabidghozy13@gmail.com" icon={<Mail className="w-4 h-4" />} label="Email" />
        </div>

        <div className="contact-el">
          <MagneticButton href="mailto:ayaabidghozy13@gmail.com" variant="primary">
            Envoyer un message
          </MagneticButton>
        </div>

        <div className="contact-el mt-24 pt-8 border-t border-white/5 text-xs text-muted-foreground/60 uppercase tracking-[0.2em]">
          © 2026 Eya Abid Ghozzi · Castres, France
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
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
