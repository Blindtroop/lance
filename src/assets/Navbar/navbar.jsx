import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar({ onContactOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#008080]"
      style={{
        // background: scrolled ? "[#008080]" : "transparent",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* logo */}
        <a
          href="#home"
          className="text-[17px] font-extrabold text-white tracking-[-0.02em]"
        >
          lance<span className="text-accent">.</span>
        </a>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="tracking-[0.04em] transition-colors duration-200 hover:text-white text-white text-base"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onContactOpen}
          className="bg-[#F4E1C1] hidden md:inline-flex items-center border border-accent/40 text-base px-4 py-2 rounded hover:border-accent transition-colors duration-200"
        >
          Hire me
        </button>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h14M4 11h14M4 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t px-10 py-6 flex flex-col gap-5"
            style={{
              background: "rgba(13,13,18,0.98)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[14px] text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onContactOpen?.();
              }}
              className="text-left text-[14px] text-accent font-medium"
            >
              Hire me →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
