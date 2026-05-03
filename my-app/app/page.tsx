export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pb-28">
        <section className="border-b border-cyan-300/40 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
            SYSTEM_ARCHITECT: BRANDON_SABIO
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            I automate enterprise trust through agentic AI.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 md:text-xl">
            Applied AI specialist designing governance-first systems where every workflow earns trust on first contact and holds up under audit.
          </p>
        </section>

        <section className="border-b border-cyan-300/40 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                5
              </p>
              <p className="mt-3 text-base text-slate-200">
                automation systems carried from prototype to governance review
              </p>
            </div>
            <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                3X
              </p>
              <p className="mt-3 text-base text-slate-200">
                faster policy validation via spec-driven development playbooks
              </p>
            </div>
            <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                40+
              </p>
              <p className="mt-3 text-base text-slate-200">
                governance artifacts aligned across dashboards, docs, and controls
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-cyan-300/40 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
                HOW I WORK
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Trust-first systems, end to end.
              </h2>
            </div>
            <div className="md:col-span-2 grid gap-6">
              <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
                <h3 className="text-lg font-semibold">Earn trust before asking for attention.</h3>
                <p className="mt-3 text-base text-slate-200">
                  I lead with systems evidence, not hype, so stakeholders understand why a model is safe to deploy.
                </p>
              </div>
              <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
                <h3 className="text-lg font-semibold">One workflow, one voice across every surface.</h3>
                <p className="mt-3 text-base text-slate-200">
                  The cockpit, the policy, and the UI speak the same governance language to keep decisions traceable.
                </p>
              </div>
              <div className="border border-cyan-300/40 bg-[#1e293b] p-6">
                <h3 className="text-lg font-semibold">Prove behavior, not just capability.</h3>
                <p className="mt-3 text-base text-slate-200">
                  MCP orchestration and vector-backed audits create a live trail of why systems respond the way they do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-cyan-300/40 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
                SELECTED PROJECTS
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Systems that earn trust under pressure.
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
              LIVE DIAGNOSTICS
            </p>
          </div>

          <div className="mt-8 grid gap-8">
            <article className="border border-amber-300/60 bg-[#1e293b] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-200">
                    SECURE-GATE
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">Auth Anomaly Detection</h3>
                </div>
                <a
                  href="https://github.com/bsabio/secure_gate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.24em] text-amber-200/90 transition hover:text-amber-100"
                >
                  REPOSITORY →
                </a>
              </div>
              <p className="mt-5 text-base text-slate-200">
                High-assurance safeguards for identity risk scoring and threat escalation.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="border border-amber-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm text-slate-200">
                    Auth anomaly detection tuned for escalation workflows and governance review.
                  </p>
                </div>
                <div className="border border-amber-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber-200">
                    Proof System
                  </p>
                  <ul className="mt-3 space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-200">
                    <li>CONTROL-PLANE SIGNALS</li>
                    <li>POLICY TEST HARNESSES</li>
                    <li>FORENSIC AUDIT TRAILS</li>
                  </ul>
                </div>
              </div>
              <a
                href="/cockpit"
                className="mt-6 inline-flex border border-amber-300/60 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-amber-200 transition hover:bg-amber-300 hover:text-black"
              >
                LAUNCH_COCKPIT →
              </a>
            </article>

            <article className="border border-emerald-300/60 bg-[#1e293b] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-200">
                    PLUMBER
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">MCP Tooling</h3>
                </div>
                <a
                  href="https://github.com/bsabio/plumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-200/90 transition hover:text-emerald-100"
                >
                  REPOSITORY →
                </a>
              </div>
              <p className="mt-5 text-base text-slate-200">
                Automation-focused orchestration for tickets, appointments, and service flows.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="border border-emerald-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm text-slate-200">
                    Modular tooling that routes tasks across MCP agents and operator handoffs.
                  </p>
                </div>
                <div className="border border-emerald-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200">
                    Proof System
                  </p>
                  <ul className="mt-3 space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-200">
                    <li>MCP TOOL CHAINS</li>
                    <li>STRUCTURED DATA HANDOFFS</li>
                    <li>WORKFLOW OBSERVABILITY</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="border border-violet-300/60 bg-[#1e293b] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-200">
                    AI PUBLICATION
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">Research Synthesis</h3>
                </div>
                <a
                  href="https://github.com/bsabio/IS421_prototype"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.24em] text-violet-200/90 transition hover:text-violet-100"
                >
                  REPOSITORY →
                </a>
              </div>
              <p className="mt-5 text-base text-slate-200">
                High-impact briefs on agentic research and enterprise adoption signals.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="border border-violet-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-200">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm text-slate-200">
                    Technical research synthesis tailored for enterprise decision-makers.
                  </p>
                </div>
                <div className="border border-violet-300/40 bg-[#111827] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-200">
                    Proof System
                  </p>
                  <ul className="mt-3 space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-200">
                    <li>RESEARCH LINEAGE</li>
                    <li>INDUSTRY SCANS</li>
                    <li>ORCHESTRATED EDITION</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="pt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
                CONNECT
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Teams building agentic systems that need trust-first delivery.
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
              OPEN TO COLLABORATION
            </p>
          </div>
          <div className="mt-8 grid gap-6 border border-cyan-300/40 bg-[#1e293b] p-6 font-mono text-xl uppercase tracking-[0.22em] text-white md:grid-cols-3 md:text-2xl">
            <a
              href="mailto:bsabio@njit.edu"
              className="transition hover:text-cyan-200"
            >
              EMAIL
            </a>
            <a
              href="https://github.com/bsabio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/bsabio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-200"
            >
              LINKEDIN
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
