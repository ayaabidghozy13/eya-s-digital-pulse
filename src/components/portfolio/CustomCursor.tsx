import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest('a, button, [data-cursor-hover]'));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference transition-[width,height,opacity] duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 48 : 10,
          height: hover ? 48 : 10,
          transform: "translate(-50%, -50%)",
          background: "hsl(var(--primary))",
          opacity: visible ? (hover ? 0.4 : 1) : 0,
          boxShadow: "0 0 20px hsl(var(--primary) / 0.6)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 4,
          height: 4,
          transform: "translate(-50%, -50%)",
          background: "hsl(var(--primary-glow))",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
};
