import { BentoHero } from "@/components/BentoHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Master Profile Card */}
      <section id="home" className="flex items-stretch justify-stretch">
        <BentoHero />
      </section>

      <div className="w-full">
        <section id="projects" className="px-6 py-24 md:py-32 flex items-center justify-center min-h-[44vh] md:min-h-[50vh] bg-transparent">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">Projects</h2>
            <p className="text-purple-100/82 font-medium text-base md:text-lg">Engineering showcases and technical deep-dives coming soon.</p>
          </div>
        </section>

        <section id="ai" className="px-6 py-24 md:py-32 flex items-center justify-center min-h-[44vh] md:min-h-[50vh] bg-transparent">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase italic">Keeping up with AI</h2>
            <p className="text-white/76 font-medium text-base md:text-lg">Notes and insights on the evolving artificial intelligence landscape.</p>
          </div>
        </section>

        <section id="blog" className="px-6 py-24 md:py-32 flex items-center justify-center min-h-[44vh] md:min-h-[50vh] bg-transparent">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">Blog</h2>
            <p className="text-red-100/80 font-medium text-base md:text-lg">Technical writing, tutorials, and engineering stories.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
