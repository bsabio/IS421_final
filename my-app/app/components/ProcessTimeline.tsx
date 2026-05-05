type Stage = {
  title: string;
  description: string;
  isActive?: boolean;
};

const stages: Stage[] = [
  {
    title: "DISCOVERY",
    description: "Spec-driven research & _references audits.",
  },
  {
    title: "DESIGN",
    description: "Architectural mapping & MCP tool selection.",
  },
  {
    title: "BUILD",
    description: "TypeScript implementation & RAG orchestration.",
  },
  {
    title: "VALIDATE",
    description: "Jest suite execution & Governance/RBAC testing.",
    isActive: true,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bento-card md:col-span-2">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
            PROCESS TIMELINE
          </p>
          <h3 className="mt-3 text-2xl font-bold">Bento Delivery Loop</h3>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-200">
          ACTIVE: VALIDATE
        </span>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-3 right-3 top-4 h-px bg-cyan-300/40" />
        <div className="grid gap-6 md:grid-cols-4">
          {stages.map((stage) => (
            <div key={stage.title} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full border border-cyan-200/70 ${
                    stage.isActive
                      ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse"
                      : "bg-[#0f172a]"
                  }`}
                />
                <span className="font-jetbrains text-xs uppercase tracking-[0.24em] text-cyan-100">
                  {stage.title}
                </span>
              </div>
              <p className="mt-3 text-xs font-sans text-slate-200">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
