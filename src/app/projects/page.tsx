import { BentoCard, BentoGrid } from "@/components/BentoGrid";

const projects = [
  {
    title: "Local Voice Agent",
    description: "Real-time voice processing using Whisper and Ollama. Zero-latency inference on Apple Silicon.",
    tags: ["Python", "MPS", "Metal"],
    className: "col-span-3 lg:col-span-2",
  },
  {
    title: "Next.js Portfolio",
    description: "Ultra-fast personal site with custom component architecture and Framer Motion.",
    tags: ["TypeScript", "Tailwind"],
    className: "col-span-3 lg:col-span-1",
  },
  {
    title: "Model Comparator",
    description: "Compare the output of different language models for the same prompt.",
    tags: ["React", "API"],
    className: "col-span-3 lg:col-span-1",
  },
  {
    title: "Image Generator Prompt Builder",
    description: "Create the perfect prompt to generate stunning images with DALL-E 3 or Midjourney.",
    tags: ["AI", "Next.js"],
    className: "col-span-3 lg:col-span-2",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[--background-obsidian] text-slate-200 p-6 md:p-24 relative overflow-hidden">
      <div className="flex items-end justify-between mb-12 pt-10">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 font-heading tracking-wider">Selected Work</h1>
          <p className="text-slate-400">A collection of technical deep-dives.</p>
        </div>
      </div>

      <BentoGrid>
        {projects.map((project, i) => (
          <BentoCard
            key={i}
            title={project.title}
            description={project.description}
            className={project.className}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
