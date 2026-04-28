"use client";
import { useState, useEffect } from 'react';
import { Home, Briefcase, Sparkles, FileText, Download, MessageSquare } from 'lucide-react';

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

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
    { icon: Download, title: "Download CV", href: "#", color: "text-indigo-600", bg: "bg-indigo-50/50", border: "border-indigo-100" },
    { icon: MessageSquare, title: "Let's Talk", href: "#", color: "text-blue-600", bg: "bg-blue-50/50", border: "border-blue-100" },
    { icon: LinkedinIcon, title: "LinkedIn", href: "https://linkedin.com/in/rajinpanthee", color: "text-blue-700", bg: "bg-blue-50/50", border: "border-blue-100" },
    { icon: GithubIcon, title: "GitHub", href: "https://github.com/rajinpanthee", color: "text-slate-900", bg: "bg-slate-50", border: "border-slate-200" },
    { icon: XIcon, title: "X (Twitter)", href: "#", color: "text-slate-800", bg: "bg-slate-50", border: "border-slate-200" },
    { icon: InstagramIcon, title: "Instagram", href: "#", color: "text-rose-500", bg: "bg-rose-50/50", border: "border-rose-100" }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 lg:w-72 hidden md:flex flex-col bg-white/60 backdrop-blur-2xl border-r border-slate-200 z-50 transition-all duration-500">
      {/* Sidebar Header */}
      <div className="h-28 flex items-center px-6 shrink-0">
        <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl shadow-premium shrink-0 rotate-[-4deg]">
          RP
        </div>
        <div className="ml-4 flex flex-col overflow-visible">
          <span className="font-black text-slate-900 tracking-tight text-lg leading-tight">
            Rajin Panthee
          </span>
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.15em] mt-0.5 opacity-80">
            Version 1.0.0
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-col gap-2 p-4 lg:p-6 mt-2 flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center h-12 rounded-2xl transition-all duration-300 group relative ${
              activeSection === item.id 
                ? 'bg-blue-600/10 text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
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
              <div className="absolute left-0 w-1 h-6 bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </nav>

      {/* Primary Actions Section (Refined with Subtle Colors) */}
      <div className="flex-grow flex flex-col justify-end p-4 lg:p-6 pb-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 px-2">
            {actionItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div key={i} title={item.title} className={`flex items-center justify-center h-8 w-8 rounded-lg bg-white border ${item.border} ${item.color} hover:${item.bg} transition-all cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)] active:scale-95`}>
                  <Icon size={14} strokeWidth={2.5} />
                </div>
              );
              return item.href === "#" ? (
                <button key={i} className="flex justify-center">{content}</button>
              ) : (
                <a key={i} href={item.href} target="_blank" className="flex justify-center">{content}</a>
              );
            })}
          </div>
        </div>

        {/* Fine Print Footer */}
        <div className="mt-8 pt-6 border-t border-slate-100 hidden lg:block">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] leading-relaxed">
            &copy; {new Date().getFullYear()} Rajin Panthee<br />
            Architect Portfolio
          </p>
        </div>
      </div>
    </aside>
  );
}
