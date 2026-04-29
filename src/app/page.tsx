import { BentoHero } from "@/components/BentoHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Master Profile Card */}
      <section id="home" className="flex items-stretch justify-stretch">
        <BentoHero />
      </section>

      <div className="w-full">
        {/* Projects Section Placeholder */}
        <section id="projects" className="py-32 flex items-center justify-center min-h-[50vh] bg-transparent">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4 uppercase">Projects</h2>
            <p className="text-purple-100/82 font-medium text-lg">Engineering showcases and technical deep-dives coming soon.</p>
          </div>
        </section>

        {/* AI Insights Section Placeholder */}
        <section id="ai" className="py-32 flex items-center justify-center min-h-[50vh] bg-transparent">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4 uppercase italic">Keeping up with AI</h2>
            <p className="text-white/76 font-medium text-lg">Notes and insights on the evolving artificial intelligence landscape.</p>
          </div>
        </section>

        {/* Blog Section Placeholder */}
        <section id="blog" className="py-32 flex items-center justify-center min-h-[50vh] bg-transparent">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4 uppercase">Blog</h2>
            <p className="text-red-100/80 font-medium text-lg">Technical writing, tutorials, and engineering stories.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
