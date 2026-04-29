"use client";
import { useState, useEffect } from 'react';
import { Home, Briefcase, Sparkles, FileText, Mail } from 'lucide-react';
import Image from "next/image";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'ai', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'ai', label: 'How I AI', icon: Sparkles },
    { id: 'blog', label: 'Blog', icon: FileText },
  ];

  const actionItems = [
    { icon: Mail, title: "Email", href: "mailto:pantheerajin@gmail.com", color: "text-[#FDC830]", bg: "bg-[#F37335]/15", border: "border-white/10", hover: "hover:bg-[#F37335]/25" },
    { icon: LinkedinIcon, title: "LinkedIn", href: "https://linkedin.com/in/rajinpanthee", color: "text-[#00d2ff]", bg: "bg-[#00d2ff]/15", border: "border-white/10", hover: "hover:bg-[#00d2ff]/25" },
    { icon: GithubIcon, title: "GitHub", href: "https://github.com/rajinpanthee", color: "text-white", bg: "bg-white/10", border: "border-white/10", hover: "hover:bg-white/16" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 lg:w-72 hidden md:flex flex-col bg-black/42 backdrop-blur-xl border-r border-white/10 z-50 transition-all duration-500 shadow-[20px_0_70px_rgba(0,0,0,0.28)]">
      {/* Sidebar Header */}
      <div className="h-28 flex items-center px-6 shrink-0">
        <div className="relative h-12 w-12 rounded-2xl overflow-hidden bg-black/20 ring-1 ring-white/15 shadow-premium shrink-0 rotate-[-4deg]">
          <Image src="/1732050172944.jpg" alt="Rajin Panthee" fill className="object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#00b09b]/20 via-transparent to-[#3a7bd5]/20 mix-blend-multiply" />
        </div>
        <div className="ml-4 flex flex-col overflow-visible">
          <span className="font-black text-white tracking-tight text-lg leading-tight">
            Rajin Panthee
          </span>
          <span className="text-[10px] font-black text-[#00d2ff] uppercase tracking-[0.15em] mt-0.5 opacity-90">
            Version 1.0.0
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-col gap-2 p-4 lg:p-6 mt-2 flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            aria-current={activeSection === item.id ? "page" : undefined}
            className={`flex items-center h-12 rounded-2xl transition-all duration-300 group relative ${
              activeSection === item.id 
                ? 'bg-gradient-to-r from-[#F37335]/18 via-[#00d2ff]/14 to-[#00b09b]/16 text-white shadow-sm border border-white/10' 
                : 'text-cyan-100/65 hover:bg-white/10 hover:text-white border border-transparent'
            }`}
          >
            <div className={`flex items-center justify-center w-12 lg:w-14 shrink-0 transition-transform duration-500 ${
              activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
            }`}>
              <item.icon size={18} strokeWidth={activeSection === item.id ? 2.5 : 2} />
            </div>
            <span className={`text-[11px] font-black uppercase tracking-[0.2em] hidden lg:block transition-opacity duration-300 ${
              activeSection === item.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
            }`}>
              {item.label}
            </span>
            {activeSection === item.id && (
              <div className="absolute left-0 w-1 h-6 bg-gradient-to-b from-[#FDC830] via-[#00d2ff] to-[#96c93d] rounded-full" />
            )}
          </button>
        ))}
      </nav>

      {/* Primary Actions Section (Refined with Subtle Colors) */}
      <div className="flex-grow flex flex-col justify-end p-4 lg:p-6 pb-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 px-2">
            {actionItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.title}
                  title={item.title}
                  className="flex justify-center"
                >
                  <span className={`flex items-center justify-center h-8 w-8 rounded-lg ${item.bg} border ${item.border} ${item.color} ${item.hover} transition-all cursor-pointer shadow-[0_6px_16px_rgba(15,23,42,0.05)] active:scale-95`}>
                    <Icon size={14} strokeWidth={2.5} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Fine Print Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 hidden lg:block">
          <p className="text-[9px] font-black text-white/42 uppercase tracking-[0.2em] leading-relaxed">
            &copy; {new Date().getFullYear()} Rajin Panthee<br />
            Architect Portfolio
          </p>
        </div>
      </div>
    </aside>
  );
}
