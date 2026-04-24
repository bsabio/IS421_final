"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const corpusFiles = [
  "security_policy_v2.pdf",
  "geo_velocity_specs.json",
  "rbac_matrix_2026.yaml",
  "threat_signatures.parquet",
  "anomaly_thresholds.toml",
  "incident_playbook_alpha.md",
];

const reasoningEvents = [
  "Booting policy-aware agent runtime...",
  "Loading governance model and role bindings...",
  "Searching SQLite vectors for similar auth patterns...",
  "Checking RBAC permissions for privileged action path...",
  "Action: CHALLENGE triggered",
  "Escalation path queued for human review.",
  "Post-action telemetry committed to audit log.",
];

export default function CockpitPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!question.trim()) {
      setError("Enter a question first.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = (await res.json()) as { answer?: string; error?: string };
      if (!res.ok || !data.answer) {
        setError(data.error || "Failed to get an answer.");
        return;
      }

      setResponse(data.answer);
    } catch {
      setError("Request failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen relative z-0">
      <header className="section-divider bg-[#f4f1ea] sticky top-0 z-20">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="vintage-link text-sm">
            Return to Portfolio
          </Link>
          <span className="text-xs uppercase tracking-[0.22em] text-[#5a5144]">
            AI OPERATING COCKPIT
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-36 relative z-10">
        <section className="section-divider py-10 md:py-12 px-2 md:px-4 mt-8">
          <div className="grid gap-3 text-xs uppercase tracking-[0.18em] text-[#5a5144] md:grid-cols-3">
            <p>SYSTEM: OPERATIONAL</p>
            <p>VERSION: 1.0.4</p>
            <p>MODE: GOVERNANCE/RBAC</p>
          </div>
        </section>

        <section className="section-divider py-16 md:py-24 px-2 md:px-4 mt-8">
          <div className="grid gap-8 md:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="memo-box">
              <h2 className="memo-label mb-4">Knowledge Corpus (_corpus)</h2>
              <ul className="space-y-3 text-sm text-[#3d372e]">
                {corpusFiles.map((fileName) => (
                  <li key={fileName} className="border-b border-[#d8d2c6] pb-2">
                    {fileName}
                  </li>
                ))}
              </ul>
            </aside>

            <article className="memo-box">
              <p className="memo-label">Command Channel</p>
              <h1 className="mt-4 text-3xl md:text-5xl text-[#2f2a22]">Security Reasoning Interface</h1>
              <p className="mt-6 text-base leading-8 text-[#3d372e]">
                Issue governance-focused commands and inspect model decisions against policy, context, and role access controls.
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>
                <label htmlFor="command-input" className="memo-label block mb-3">
                  Command Input
                </label>
                <input
                  id="command-input"
                  placeholder="Issue command to agent..."
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  className="w-full border border-[#8d8578] bg-[#f7f4ed] px-4 py-3 text-sm text-[#2f2a22] outline-none focus:border-[#5a5144]"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 border border-[#8d8578] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#2f2a22] hover:bg-[#ece6da] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Querying Gemini..." : "Submit Query"}
                </button>
                {error ? <p className="mt-3 text-sm text-[#8b2f2f]">{error}</p> : null}
              </form>
            </article>
          </div>
        </section>

        <section className="section-divider py-16 md:py-24 px-2 md:px-4 mt-8">
          <h2 className="memo-label mb-6">The Console</h2>
          <div className="memo-box">
            <div className="space-y-2 text-sm text-[#3d372e]">
              {reasoningEvents.map((entry, index) => (
                <p key={entry}>
                  <span className="text-[#5a5144] mr-2">[{String(index + 1).padStart(2, "0")}]</span>
                  {entry}
                </p>
              ))}
              {response ? (
                <div className="mt-4 border-t border-[#d8d2c6] pt-4">
                  <p className="memo-label mb-2">Gemini Response</p>
                  <p className="whitespace-pre-wrap leading-7">{response}</p>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
