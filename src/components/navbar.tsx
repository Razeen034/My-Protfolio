"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const RESUME_PATH = "/Rajin-Panthee-Resume.pdf";

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
      <div className="max-w-6xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go("home")}
          className="hidden sm:flex items-center gap-2 shrink-0 font-display text-[13px] font-bold tracking-tight text-white hover:text-white transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
          Rajin Panthee
        </button>

        <div className="flex items-center gap-0 sm:gap-1 mx-auto sm:mx-0 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={`relative px-2 sm:px-3 py-1.5 font-display text-[12px] sm:text-[13px] font-medium tracking-tight whitespace-nowrap transition-colors ${
                active === item.id
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute left-2 right-2 sm:left-3 sm:right-3 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-cyan-300 to-fuchsia-400" />
              )}
            </button>
          ))}
        </div>

        <a
          href={RESUME_PATH}
          download
          className="hidden md:inline-flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-full font-display text-[12px] font-medium text-white/85 border border-white/[0.12] hover:text-white hover:border-fuchsia-400/40 hover:bg-fuchsia-400/[0.06] transition-colors"
        >
          <Download size={12} strokeWidth={2} />
          Resume
        </a>
      </div>
    </nav>
  );
}
