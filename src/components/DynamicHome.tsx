"use client";

import dynamic from "next/dynamic";

const Reveal = dynamic(() => import("@/components/reveal").then(mod => mod.Reveal), { ssr: false });
const Terminal = dynamic(() => import("@/components/terminal"), { ssr: false });

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
      <Reveal>
        <div>
          <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 animate-pulse">
            Available for new projects
          </div>
          <h1 className="text-6xl font-bold tracking-wider text-white mb-6 leading-tight font-heading">
            Engineering <span className="text-blue-500">Intelligence.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mb-8">
            Developer specializing in local AI agents and high-performance web apps. 
            Currently optimizing LLMs for the M3 architecture.
          </p>
          
          <div className="flex gap-4 text-sm font-mono text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span> Python
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span> React
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span> M3 Max
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="hidden lg:block w-full max-w-xl ml-auto">
          <Terminal />
        </div>
      </Reveal>
    </section>
  );
};

export default function DynamicHome() {
  return (
    <>
      <Hero />
    </>
  );
}
