import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <Reveal>
        <div className="max-w-3xl mx-auto pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Behind the Code
          </h1>

          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              I am a Senior Full-Stack Developer specializing in high-performance web applications and local AI agents.
              Recently, I relocated from Florida to North Carolina, bringing my passion for building robust, scalable systems to a new environment.
            </p>
            <p>
              My current technical focus lies at the intersection of web development and artificial intelligence.
              I am deeply invested in optimizing Large Language Models (LLMs) and local AI agents specifically for the Apple Silicon (M3) architecture.
              This involves leveraging frameworks like Next.js for the frontend and exploring hardware acceleration for low-latency AI inference.
            </p>
            <p>
              When I&apos;m not coding or fine-tuning models, I&apos;m exploring the mountains of North Carolina or researching the latest advancements in the open-source AI community.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-white font-bold mb-2">Core Tech Stack</h3>
              <p className="text-slate-400 text-sm">Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-white font-bold mb-2">AI & Architecture</h3>
              <p className="text-slate-400 text-sm">Local LLMs, Prompt Engineering, Python, Apple Silicon (M3 Max) Optimization.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}