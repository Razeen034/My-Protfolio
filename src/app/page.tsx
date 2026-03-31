import { Reveal } from "@/components/reveal";
import Terminal from "@/components/terminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
        {/* Left Side: Text */}
        <Reveal>
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-6">
              Available for new projects
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Engineering <span className="text-blue-500">Intelligence.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-8">
              Developer specializing in local AI agents and high-performance web apps. 
              Currently optimizing LLMs for the M3 architecture.
            </p>
            
            {/* Quick Stats/Tags */}
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

        {/* Right Side: The Functional Terminal */}
        <Reveal>
          <div className="hidden lg:block w-full max-w-xl ml-auto">
            {/* 2. Swapped placeholder div for your actual Terminal component */}
            <Terminal />
          </div>
        </Reveal>
      </section>
    </main>
  );
}