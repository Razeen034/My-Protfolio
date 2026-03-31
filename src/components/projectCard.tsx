export default function ProjectCard({ title, description, tags, deepDive }: { title: string, description: string, tags: string[], deepDive?: string }) {
  return (
    <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-blue-500 transition-all group h-full flex flex-col">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="mt-2 text-slate-400 text-sm leading-relaxed flex-1">{description}</p>

      {deepDive && (
        <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Technical Deep Dive</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{deepDive}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}