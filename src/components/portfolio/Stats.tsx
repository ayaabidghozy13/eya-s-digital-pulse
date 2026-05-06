import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const STATS = [
  { value: 4, suffix: "+", label: "Stages & expériences" },
  { value: 6, suffix: "", label: "Projets livrés" },
  { value: 3, suffix: "", label: "Prix & podiums" },
  { value: 10, suffix: "+", label: "Technos maîtrisées" },
];

export const Stats = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-num");
      counters.forEach((el) => {
        const target = parseInt(el.dataset.value || "0", 10);
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate() {
              el.innerText = Math.floor(Number(el.innerText)).toString();
            },
          }
        );
      });
      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-20 py-16 relative">
      <div className="max-w-7xl mx-auto glass-strong rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item text-center">
            <div className="font-display text-4xl md:text-6xl text-gradient mb-2">
              <span className="stat-num" data-value={s.value}>0</span>{s.suffix}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
