"use client";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(10,10,18,0.7)] border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-14 px-5 sm:px-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go("home")}
          className="hidden sm:block text-[13px] font-medium tracking-tight text-white/90 hover:text-white transition-colors"
        >
          Rajin Panthee
        </button>

        <div className="flex items-center gap-0.5 sm:gap-1 mx-auto sm:mx-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`relative px-2.5 sm:px-3 py-1.5 text-[12px] sm:text-[13px] tracking-tight transition-colors ${
                active === item.id
                  ? "text-white"
                  : "text-white/55 hover:text-white/90"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute left-2.5 right-2.5 sm:left-3 sm:right-3 -bottom-px h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
