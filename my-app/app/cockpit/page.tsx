"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

export default function CockpitPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [apiKeySaved, setApiKeySaved] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem("geminiApiKey");
    if (savedKey) {
      setApiKey(savedKey);
      setApiKeySaved(true);
    }
  }, []);

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
          "x-gemini-api-key": apiKey.trim(),
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

  function handleSaveKey() {
    const trimmedKey = apiKey.trim();
    if (!trimmedKey) {
      setError("Enter an API key first.");
      return;
    }

    localStorage.setItem("geminiApiKey", trimmedKey);
    setApiKeySaved(true);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-12 md:px-12 md:pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <section className="relative col-span-1 flex items-center justify-between gap-8 border border-cyan-300/60 bg-[#1e293b] px-6 py-4 md:col-span-4">
            <span className="absolute right-5 top-4 font-mono text-sm text-cyan-200">
              SYSTEM_ID 01
            </span>
            <Link
              href="/"
              className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-100 transition hover:text-cyan-200"
            >
              RETURN_TO_PORTFOLIO
            </Link>
            <span className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-100">
              AI_OPERATING_COCKPIT
            </span>
          </section>

          <section className="relative col-span-1 border border-cyan-300/60 bg-[#1e293b] p-8 md:col-span-4">
            <span className="absolute right-5 top-5 font-mono text-sm text-cyan-200">
              SYSTEM_ID 02
            </span>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-200">
              SYSTEM STATUS
            </p>
            <div className="mt-4 grid gap-4 font-mono text-sm uppercase tracking-[0.26em] text-cyan-100 md:grid-cols-3">
              <span>SYSTEM: OPERATIONAL</span>
              <span>VERSION: 1.0.4</span>
              <span>MODE: GOVERNANCE/RBAC</span>
            </div>
          </section>

          <section className="relative col-span-1 border border-cyan-300/60 bg-[#1e293b] p-8 md:col-span-4">
            <span className="absolute right-5 top-5 font-mono text-sm text-cyan-200">
              SYSTEM_ID 03
            </span>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-200">
              COMMAND CHANNEL
            </p>
            <h1 className="mt-5 text-3xl font-bold md:text-4xl">
              Security Reasoning Interface
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              Ask anything about the projects and review the response output only.
            </p>

            <form className="mt-8" onSubmit={handleSubmit}>
              <label htmlFor="command-input" className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-200">
                Command Input
              </label>
              <input
                id="command-input"
                placeholder="Ask how a project works, architecture, or tooling..."
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className="mt-3 w-full border border-cyan-300/60 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-200"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Querying Gemini..." : "Submit Query"}
              </button>
              {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
            </form>

            <div className="mt-8 border-t border-cyan-300/30 pt-5">
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-200">
                RESPONSE OUTPUT
              </p>
              {response ? (
                <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-100">
                  {response}
                </p>
              ) : (
                <p className="mt-3 text-sm text-slate-400">No response yet.</p>
              )}
            </div>
          </section>

          <section className="relative col-span-1 border border-cyan-300/60 bg-[#1e293b] p-8 md:col-span-4">
            <span className="absolute right-5 top-5 font-mono text-sm text-cyan-200">
              SYSTEM_ID 04
            </span>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-200">
              API ACCESS
            </p>
            <p className="mt-4 max-w-2xl text-base text-slate-200">
              Add your Gemini API key to use personal access on this device only. The key is stored in local storage.
            </p>

            <div className="mt-6">
              <label
                htmlFor="gemini-key"
                className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-200"
              >
                Gemini API Key
              </label>
              <input
                id="gemini-key"
                type="password"
                placeholder="Paste your Gemini API key"
                value={apiKey}
                onChange={(event) => {
                  setApiKey(event.target.value);
                  setApiKeySaved(false);
                }}
                className="mt-3 w-full border border-cyan-300/60 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-200"
              />
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleSaveKey}
                  className="inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-sm uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
                >
                  SAVE_KEY
                </button>
                {apiKeySaved ? (
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-200">
                    KEY_SAVED
                  </span>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
