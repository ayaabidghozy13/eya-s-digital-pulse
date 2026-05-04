import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SKILL_GROUPS = [
  { icon: "⚕️", title: "SI Santé", skills: ["EBIOS", "PCA/PRA", "HL7/FHIR", "SIH", "HDS", "RGPD"] },
  { icon: "💻", title: "Développement", skills: ["Python", "Java", "JavaScript", "C/C++", "Dart/Flutter", "Django", "Vue.js", "Next.js", "Spring Boot", "FastAPI"] },
  { icon: "🧠", title: "IA / Data", skills: ["Deep Learning", "BiLSTM", "TensorFlow", "PyTorch", "OpenCV"] },
  { icon: "📡", title: "IoT", skills: ["ESP32", "ESP8266", "Arduino", "MQTT"] },
  { icon: "🗄️", title: "Bases de données", skills: ["PostgreSQL", "MongoDB", "Firebase"] },
  { icon: "🛠️", title: "Outils & Méthodes", skills: ["UML", "Agile / Scrum", "Figma", "Git", "DevOps"] },
];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".skill-group").forEach((group) => {
        const pills = group.querySelectorAll(".skill-pill");
        gsap.from(group, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
        gsap.from(pills, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(2)",
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">04 — Stack</div>
        <h2 className="font-display text-4xl md:text-6xl mb-16">Compétences</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="skill-group glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-display text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="skill-pill pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
