import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-[#020617] text-slate-200 p-6 flex items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-red-500/5 blur-[100px]" />

      <Reveal>
        <div className="max-w-xl mx-auto border border-red-500/30 bg-slate-900/80 rounded-lg overflow-hidden shadow-2xl font-mono">
          <div className="bg-slate-800 px-4 py-2 flex gap-1.5 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-slate-500 text-[10px] ml-2 uppercase tracking-widest">ERROR: 404</span>
          </div>

          <div className="p-6 space-y-4 text-sm md:text-base">
            <p className="text-red-400">&gt; Command Not Found</p>
            <p className="text-slate-400">The page you are looking for does not exist in this directory.</p>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2">
              <span className="text-green-400">➜</span>
              <span className="text-white">goto</span>
              <Link href="/" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                home
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
