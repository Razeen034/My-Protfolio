// src/components/Navbar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // This hook detects your current URL

export default function Navbar() {
  const pathname = usePathname(); // Example: if you are on /about, pathname is "/about"

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white tracking-tighter">
          PORTFOLIO<span className="text-blue-500">.</span>
        </Link>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link 
            href="/" 
            className={`transition-colors ${pathname === '/' ? 'text-blue-400' : 'hover:text-white'}`}
          >
            Home
          </Link>
          
          {/* 1. Updated the About Link */}
          <Link 
            href="/about" 
            className={`transition-colors ${pathname === '/about' ? 'text-blue-400' : 'hover:text-white'}`}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={`transition-colors ${pathname === '/projects' ? 'text-blue-400' : 'hover:text-white'}`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}