import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="mesh-bg" />
      <div className="noise-overlay" />

      <Reveal>
        <div className="max-w-xl mx-auto bento-card p-10 md:p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-white/10 text-[#00d2ff] rounded-2xl flex items-center justify-center mx-auto border border-white/10 mb-4 shadow-premium">
            <span className="text-3xl font-black italic">404</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight">Page Not Found</h1>
          <p className="text-cyan-50/78 font-regular text-lg">
            The architectural blueprint you&apos;re looking for doesn&apos;t exist in this directory.
          </p>

          <div className="pt-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-950 rounded-2xl font-bold hover:bg-[#00d2ff] hover:text-white shadow-lg transition-all"
            >
              <Home size={18} />
              Return Home
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
