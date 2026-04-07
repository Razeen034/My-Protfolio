import DynamicHome from "@/components/DynamicHome";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 p-6 md:p-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

      <DynamicHome />
    </main>
  );
}