"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-saturate-[180%] backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-12 flex items-center justify-center">
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link 
            href="/" 
            className={`transition-colors ${pathname === '/' ? 'text-white' : 'hover:text-white'}`}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`transition-colors ${pathname === '/about' ? 'text-white' : 'hover:text-white'}`}
          >
            About
          </Link>

          <Link
            href="/projects"
            className={`transition-colors ${pathname === '/projects' ? 'text-white' : 'hover:text-white'}`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}