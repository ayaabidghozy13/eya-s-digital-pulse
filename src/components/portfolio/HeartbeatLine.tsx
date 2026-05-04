import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated ECG / heartbeat line that draws itself as the user scrolls.
 * Sits between Hero and About — an alive, medical-tech visual cue.
 */
export const HeartbeatLine = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const pulse = pulseRef.current;
    if (!path || !pulse) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1.2,
          onUpdate: (self) => {
            const pt = path.getPointAtLength(length * self.progress);
            pulse.setAttribute("cx", `${pt.x}`);
            pulse.setAttribute("cy", `${pt.y}`);
            pulse.setAttribute("opacity", self.progress > 0 && self.progress < 1 ? "1" : "0");
          },
        },
      });

      // Floating data nodes drift
      gsap.utils.toArray<HTMLElement>(".data-node").forEach((node, i) => {
        gsap.to(node, {
          y: i % 2 === 0 ? -25 : 25,
          duration: 4 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-48 md:h-64 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Floating medical data nodes */}
      <div className="data-node absolute left-[8%] top-6 glass px-3 py-1.5 rounded-full text-[10px] text-primary/80 hidden md:block">
        SpO₂ · 98%
      </div>
      <div className="data-node absolute right-[10%] top-10 glass px-3 py-1.5 rounded-full text-[10px] text-primary/80 hidden md:block">
        BPM · 72
      </div>
      <div className="data-node absolute left-[20%] bottom-8 glass px-3 py-1.5 rounded-full text-[10px] text-primary/80 hidden md:block">
        ECG · sinus
      </div>
      <div className="data-node absolute right-[22%] bottom-6 glass px-3 py-1.5 rounded-full text-[10px] text-primary/80 hidden md:block">
        Temp · 36.7°C
      </div>

      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="ecg-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <filter id="ecg-glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          d="M0,100 L180,100 L210,100 L230,80 L250,120 L270,40 L290,160 L310,100 L500,100 L530,100 L550,85 L570,115 L590,55 L610,145 L630,100 L820,100 L850,100 L870,75 L890,125 L910,30 L930,170 L950,100 L1200,100"
          fill="none"
          stroke="url(#ecg-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ecg-glow)"
        />
        <circle
          ref={pulseRef}
          r="5"
          fill="hsl(var(--primary))"
          opacity="0"
          filter="url(#ecg-glow)"
        />
      </svg>
    </div>
  );
};
