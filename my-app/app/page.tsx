export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 font-mono">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <header className="relative border-b border-slate-700/90 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <span className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
            Applied AI Specialist / Interactive Laboratory
          </span>
          <nav className="flex items-center gap-6 text-sm uppercase tracking-[0.08em] text-slate-300">
            <a
              href="https://www.linkedin.com/in/brandon-sabio-68a098232/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition hover:text-cyan-300 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bsabio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition hover:text-cyan-300 hover:underline"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <section className="border border-slate-700 bg-slate-900/70">
          <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 md:px-6">
            <span>terminal://hero-directive</span>
            <span className="rounded-full border border-emerald-400/70 px-2 py-0.5 text-[0.62rem] tracking-[0.14em] text-emerald-300">
              System: Online
            </span>
          </div>
          <div className="px-4 py-8 md:px-6 md:py-10">
            <p className="text-[0.66rem] uppercase tracking-[0.28em] text-cyan-300">
              Command
            </p>
            <h1 className="mt-6 max-w-5xl text-4xl font-bold uppercase leading-[1.02] tracking-[-0.02em] text-slate-50 md:text-7xl">
              I automate complex enterprise workflows
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Systems-focused AI engineering for robust orchestration,
              reliability checks, and traceable automation pipelines.
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-12">
          <div className="border border-slate-700 bg-slate-900/70 lg:col-span-7">
            <div className="border-b border-slate-700 px-4 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 md:px-6">
              source://workflow-engine.ts
            </div>
            <pre className="overflow-x-auto px-4 py-6 text-xs leading-6 text-slate-300 md:px-6 md:text-sm"><code>{`const orchestrator = new AgentOrchestrator({
  policy: "enterprise",
  verification: "strict",
  telemetry: true,
});

const outcome = await orchestrator.execute(workflow);
assert(outcome.status === "verified");`}</code></pre>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <div className="border border-slate-700 bg-slate-900/70 p-5">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-300">
                Status Badge
              </p>
              <p className="mt-3 inline-block rounded-full border border-emerald-400/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-300">
                System: Online
              </p>
            </div>
            <div className="border border-slate-700 bg-slate-900/70 p-5">
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-300">
                Build Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Deep technical precision across architecture, testing, and
                operational observability.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="border border-slate-700 bg-slate-900/70 p-5 md:p-6">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-300">
              Project Module
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-slate-100 md:text-5xl">
              Secure-Gate
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Agentic middleware for enterprise controls, approval routing,
              policy enforcement, and fault-tolerant task execution.
            </p>
          </article>

          <article className="border border-slate-700 bg-slate-900/70 p-5 md:p-6">
            <p className="text-[0.66rem] uppercase tracking-[0.24em] text-cyan-300">
              Project Module
            </p>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-slate-100 md:text-5xl">
              Relational Systems / IT 218 Final
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              MVC-driven information infrastructure with SQL integrity,
              containerized deployment, and dependable CRUD services.
            </p>
            <a
              href="https://github.com/bsabio/218_final"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-slate-300 underline-offset-4 transition hover:text-cyan-300 hover:underline"
            >
              View Repository on GitHub
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}
