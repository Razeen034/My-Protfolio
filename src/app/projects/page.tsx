import ProjectCard from "@/components/projectCard";
import { Reveal } from "@/components/reveal";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <Reveal>
        <div className="flex items-end justify-between mb-12 pt-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Selected Work</h1>
            <p className="text-slate-400">A collection of technical deep-dives.</p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <ProjectCard
            title="Local Voice Agent"
            description="Real-time voice processing using Whisper and Ollama. Zero-latency inference on Apple Silicon."
            tags={["Python", "MPS", "Metal"]}
            deepDive="Leveraged MPS framework for accelerating PyTorch inferences on Apple Silicon. Utilized Ollama for local LLM inference to minimize latency."
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            title="Next.js Portfolio"
            description="Ultra-fast personal site with custom component architecture and Framer Motion."
            tags={["TypeScript", "Tailwind"]}
            deepDive="Built with Next.js App Router, using heavily optimized client components for interactivity while maintaining server-side rendering for performance."
          />
        </Reveal>
      </div>
    </main>
  );
}
