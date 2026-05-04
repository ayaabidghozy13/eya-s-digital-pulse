import { useRef, MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}

export const MagneticButton = ({ children, onClick, href, variant = "primary", className = "" }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base = "magnetic-btn group";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:shadow-glow-strong"
      : "glass text-foreground hover:border-primary/50";

  const content = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a
        ref={ref as any}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`${base} ${styles} ${className}`}
        data-cursor-hover
      >
        {content}
      </a>
    );
  }
  return (
    <button
      ref={ref as any}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${styles} ${className}`}
      data-cursor-hover
    >
      {content}
    </button>
  );
};
