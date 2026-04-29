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
    <nav className="fixed top-0 z-50 w-full bg-black/42 backdrop-blur-md border-b border-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.22)]">
      <div className="mx-auto h-14 max-w-6xl px-2 sm:px-4 flex items-center justify-center">
        <div className="grid w-full grid-cols-4 gap-1 sm:flex sm:w-auto sm:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center transition-colors group relative py-1 ${
                activeSection === item.id ? 'text-white' : 'text-cyan-100/65 hover:text-white'
              }`}
            >
              <item.icon size={18} className={activeSection === item.id ? 'text-white' : 'group-hover:text-white'} />
              <span className={`mt-1 max-w-full truncate text-[9px] sm:text-[10px] font-bold transition-all duration-200 ${
                activeSection === item.id ? 'opacity-100' : 'opacity-70 sm:opacity-0 sm:group-hover:opacity-100'
              }`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="absolute bottom-[-1px] h-0.5 w-8 sm:w-12 bg-gradient-to-r from-[#FDC830] via-[#00d2ff] to-[#96c93d]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
