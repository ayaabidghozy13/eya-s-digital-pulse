export const Nav = () => {
  const links = [
    { href: "#about", label: "À propos" },
    { href: "#experience", label: "Parcours" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#engagement", label: "Engagement" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1 text-sm">
        <a href="#hero" data-cursor-hover className="px-4 py-2 rounded-full font-display font-bold tracking-tight text-primary">EAG.</a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-cursor-hover
            className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
