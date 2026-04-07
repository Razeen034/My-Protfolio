import { Reveal } from "@/components/reveal";

const demos = [
  {
    title: "Text Summarizer",
    description: "Condense long articles into a few key sentences. Powered by a transformer model.",
    status: "Coming Soon",
  },
  {
    title: "Image Generator Prompt Builder",
    description: "Create the perfect prompt to generate stunning images with DALL-E 3 or Midjourney.",
    status: "Coming Soon",
  },
  {
    title: "Model Comparator",
    description: "Compare the output of different language models for the same prompt.",
    status: "Coming Soon",
  },
  {
    title: "RAG Chatbot",
    description: "A chatbot trained on a custom knowledge base. Ask it anything about the content.",
    status: "Live",
    href: "/"
  },
];

export default function Playground() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 p-6 md:p-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-wider text-white mb-4 font-heading">
                    AI Playground
                  </h1>          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A collection of interactive AI demos and experiments. Explore the capabilities of modern language and vision models.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demos.map((demo, index) => (
          <Reveal key={index}>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-full flex flex-col hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2 font-heading">{demo.title}</h3>
              <p className="text-slate-400 text-sm flex-1">{demo.description}</p>
              <div className="mt-4">
                <span className={`text-xs font-mono px-2 py-1 rounded-full ${demo.status === "Live" ? "bg-green-500/10 text-green-400" : "bg-slate-700 text-slate-400"}`}>
                  {demo.status}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
