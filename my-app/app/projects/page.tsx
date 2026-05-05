import Link from "next/link";

const projects = [
  {
    label: "SECURE-GATE",
    title: "Auth Anomaly Detection",
    problem: "Identity risk scoring lacked escalation-ready evidence.",
    impact: "Built anomaly workflows aligned with governance review.",
    chips: ["RISK SCORING", "AUDIT TRAILS", "GOVERNANCE"],
    href: "https://github.com/bsabio/secure_gate",
    demo: "https://secure-gate-4d3zakosm-brandons-projects-d6627d5f.vercel.app/",
    accent: "text-amber-200",
    border: "border-amber-300/60",
    chipBorder: "border-amber-300/40",
  },
  {
    label: "PLUMBER",
    title: "MCP Tooling",
    problem: "Service workflows lacked consistent agent handoffs.",
    impact: "Delivered modular tooling with traceable task routing.",
    chips: ["MCP", "ORCHESTRATION", "OBSERVABILITY"],
    href: "https://github.com/bsabio/plumber",
    demo: "https://plumber-silk.vercel.app/",
    accent: "text-emerald-200",
    border: "border-emerald-300/60",
    chipBorder: "border-emerald-300/40",
  },
  {
    label: "WORKFLOW MIDTERM",
    title: "Workflow Midterm",
    problem: "The workflow needed a clear, user-facing project narrative.",
    impact: "Shipped a structured UI that documents the workflow end to end.",
    chips: ["WORKFLOW", "UI", "DOCUMENTATION"],
    href: "https://github.com/bsabio/midterm_IS322",
    demo: "https://bsabio.github.io/midterm_IS322/index.html",
    accent: "text-sky-200",
    border: "border-sky-300/60",
    chipBorder: "border-sky-300/40",
  },
  {
    label: "AI PUBLICATION",
    title: "Research Synthesis",
    problem: "Leaders needed clear signals on agentic adoption.",
    impact: "Published decision-grade briefs with traceable lineage.",
    chips: ["RESEARCH", "SYNTHESIS", "ENTERPRISE"],
    href: "https://github.com/bsabio/IS421_prototype",
    accent: "text-violet-200",
    border: "border-violet-300/60",
    chipBorder: "border-violet-300/40",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-20 h-48 w-48 rounded-full border border-cyan-300/20" />
        <div className="absolute bottom-20 left-10 h-32 w-32 rounded-full border border-cyan-300/20" />
      </div>
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pb-28">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-300/40 pb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
              PROJECTS
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Repository Links and System Impact.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              Focused projects with governance-first delivery, each backed by proofs and repository links.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
          >
            RETURN_HOME →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.label}
              className={`border ${project.border} bg-[#1e293b] p-6`}
            >
              <p className={`font-mono text-xs uppercase tracking-[0.3em] ${project.accent}`}>
                {project.label}
              </p>
              <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
              <p className="mt-4 text-sm text-slate-200">
                <span className={`font-mono text-xs uppercase tracking-[0.24em] ${project.accent}`}>
                  Problem
                </span>
                <span className="ml-2">{project.problem}</span>
              </p>
              <p className="mt-3 text-sm text-slate-200">
                <span className={`font-mono text-xs uppercase tracking-[0.24em] ${project.accent}`}>
                  Impact
                </span>
                <span className="ml-2">{project.impact}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.chips.map((chip) => (
                  <span
                    key={chip}
                    className={`border ${project.chipBorder} px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] ${project.accent}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex font-mono text-xs uppercase tracking-[0.24em] ${project.accent}/90 transition hover:text-white`}
                >
                  REPOSITORY →
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex font-mono text-xs uppercase tracking-[0.24em] ${project.accent}/90 transition hover:text-white`}
                  >
                    LIVE DEMO →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
