import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fdfdfd] text-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Mesh Background */}
      <div className="mesh-gradient" />
      
      <Reveal>
        <div className="max-w-xl mx-auto bento-card p-12 shadow-floating text-center space-y-6">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto border border-blue-100 mb-4">
            <span className="text-3xl font-black italic">404</span>
          </div>
          
          <h1 className="text-4xl font-black tracking-tight">Page Not Found</h1>
          <p className="text-slate-500 font-regular text-lg">
            The architectural blueprint you're looking for doesn't exist in this directory.
          </p>

          <div className="pt-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all"
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
