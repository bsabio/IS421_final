export default function Home() {
  const memorandums = [
    {
      title: "Technical Memorandum 01: Secure-Gate",
      classification: "Applied AI / Security",
      outcome:
        "Repository currently focuses on a core risk engine and an accompanying control-plane dashboard for secure operations.",
      proof:
        "TypeScript-first implementation with a dedicated control-plane module and Jest-based validation scaffolding.",
      repository: "https://github.com/bsabio/secure_gate",
    },
    {
      title: "Technical Memorandum 02: Plumber",
      classification: "Infrastructure / Automation",
      outcome:
        "A full-stack MCP demo for a plumbing portal where an AI assistant manages tickets, appointments, users, and newsletter retrieval.",
      proof:
        "Next.js App Router, SQLite with Drizzle ORM, and MCP tools integrated with Gemini/OpenAI-compatible workflows.",
      repository: "https://github.com/bsabio/plumber",
    },
    {
      title: "Technical Memorandum 03: AI Newsletter Factory",
      classification: "Full-Stack / Prototype",
      outcome:
        "An MVP newsletter generator that produces weekly startup funding, events, and accelerator briefings in a reporter-style format.",
      proof:
        "Plugin-oriented Python pipeline with collect/normalize/dedupe/rank/render stages, JSON schema contracts, citations, and deterministic templates.",
      repository: "https://github.com/bsabio/IS421_prototype",
    },
  ];

  const framework = [
    {
      title: "Rigorous Infrastructure",
      description:
        "Building systems that don't just work, but are validated via TypeScript and Automated Testing.",
    },
    {
      title: "Orchestrated Intelligence",
      description:
        "Using tools like Plumber to pipe intelligence into existing business workflows.",
    },
    {
      title: "Transparent Security",
      description:
        "Implementing explainable AI (XAI) layers to ensure every automated decision is auditable.",
    },
  ];

  return (
    <div className="min-h-screen relative z-0">
      <header className="section-divider bg-[#f4f1ea] sticky top-0 z-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <span className="text-xs uppercase tracking-[0.22em] text-[#5a5144]">
            SYSTEMS PORTFOLIO
          </span>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="/cockpit"
              className="vintage-link"
            >
              Cockpit
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-sabio-68a098232/"
              target="_blank"
              rel="noopener noreferrer"
              className="vintage-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bsabio"
              target="_blank"
              rel="noopener noreferrer"
              className="vintage-link"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-36 relative z-10">
        <section className="section-divider py-16 md:py-24 px-2 md:px-4 mt-8">
          <p className="memo-label">
            SYSTEM SUMMARY
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl leading-tight md:text-6xl lg:text-7xl text-[#2f2a22]">
            I automate complex enterprise workflows with agentic AI that earns trust through rigorous testing.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-[#3d372e]">
            Third-year Web Information Systems student at NJIT. Currently building Secure-Gate and Plumber to bridge the gap between raw LLM capabilities and production-ready infrastructure.
          </p>
        </section>

        <section className="section-divider py-16 md:py-24 px-2 md:px-4 mt-8">
          <div className="mb-12 md:mb-16">
            <p className="memo-label">
              TECHNICAL MEMORANDUMS
            </p>
            <h2 className="mt-6 text-3xl md:text-5xl text-[#2f2a22]">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            {memorandums.map((project) => (
              <div key={project.title}>
                <div className="memo-box">
                  <p className="memo-label mb-3">
                    {project.classification}
                  </p>
                  <h3 className="text-2xl md:text-4xl mb-4 text-[#2f2a22]">
                    {project.title}
                  </h3>
                  <div className="grid gap-2">
                    <div className="text-sm text-[#3d372e]">
                      <span className="font-semibold">Outcome:</span> {project.outcome}
                    </div>
                    <div className="text-sm text-[#3d372e]">
                      <span className="font-semibold">Proof System:</span> {project.proof}
                    </div>
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vintage-link text-sm"
                    >
                      Repository
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-divider py-16 md:py-24 px-2 md:px-4 mt-8">
          <div className="mb-12 md:mb-16">
            <p className="memo-label">
              WORKFLOW FRAMEWORK
            </p>
            <h2 className="mt-6 text-3xl md:text-5xl text-[#2f2a22]">
              How I Work
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {framework.map((item) => (
              <div key={item.title} className="memo-box">
                <h3 className="text-xl md:text-2xl mb-2 text-[#2f2a22]">
                  {item.title}
                </h3>
                <p className="text-base text-[#3d372e]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="section-divider mt-10 py-6 text-center text-xs text-[#5a5144]">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}
