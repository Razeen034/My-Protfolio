"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "contact@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-slate-800 bg-[#020617] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Status */}
        <div className="flex items-center gap-3">
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </div>
          <span className="text-sm font-mono text-slate-400">
            System Status: Optimized for M3
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-sm text-slate-400">
          <Link href="https://github.com" target="_blank" className="hover:text-blue-400 transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors">
            LinkedIn
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition-colors">
            X (Twitter)
          </Link>
        </div>

        {/* Right Side: Contact */}
        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="text-slate-500">{email}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </footer>
  );
}
