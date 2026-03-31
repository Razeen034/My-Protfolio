export default function ProjectCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <div className="p-6 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-blue-500 transition-all group">
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="mt-2 text-slate-400 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}