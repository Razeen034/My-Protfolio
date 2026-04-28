"use client";
import { useState, useEffect } from 'react';
import { Home, Briefcase, Sparkles, FileText } from 'lucide-react';

export default function Navbar() {
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
        top: element.offsetTop - 80,
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

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-center">
        <div className="flex gap-2 sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center min-w-[80px] transition-colors group relative py-1 ${
                activeSection === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              <item.icon size={18} className={activeSection === item.id ? 'text-blue-600' : 'group-hover:text-blue-600'} />
              <span className={`text-[10px] font-bold mt-1 transition-all duration-200 ${
                activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="absolute bottom-[-1px] h-0.5 w-12 bg-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
