import Link from "next/link";
import ProcessTimeline from "./components/ProcessTimeline";

export default function Home() {
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
                BENTO DASHBOARD
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Workflow telemetry in one view.
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
              ACTIVE STAGE: VALIDATE
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ProcessTimeline />
          </div>
        </section>

        <section className="border-b border-cyan-300/40 py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-cyan-200">
                PROJECTS
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Systems that earn trust under pressure.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-200">
                See the full project catalog, impact statements, and repository links.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
            >
              VIEW_PROJECTS →
            </Link>
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
              href="https://www.linkedin.com/in/brandon-sabio-68a098232/"
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
