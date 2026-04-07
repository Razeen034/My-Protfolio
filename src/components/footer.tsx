"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center justify-center py-4 bg-transparent border-t border-slate-200/10 z-50">
      <div className="flex gap-6 text-sm text-slate-400 tracking-wider">
        <Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">
          GitHub
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
          LinkedIn
        </Link>
        <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">
          X
        </Link>
        <span className="text-slate-600">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

