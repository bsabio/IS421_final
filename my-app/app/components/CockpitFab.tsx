"use client";

import { FormEvent, useEffect, useState } from "react";

export default function CockpitFab() {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 border border-cyan-300/60 bg-[#1e293b] px-5 py-4 font-mono text-sm uppercase tracking-[0.28em] text-cyan-100 shadow-lg transition hover:border-cyan-200 hover:text-cyan-200"
      >
        OPEN_COCKPIT
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-8">
          <button
            type="button"
            aria-label="Close cockpit"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0b1220]/80"
          />
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto border border-cyan-300/60 bg-[#0f172a] p-6 text-white shadow-2xl md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-300/40 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200">
                  AI_OPERATING_COCKPIT
                </p>
                <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                  Command and Governance Console
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="border border-cyan-300/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 transition hover:border-cyan-200 hover:text-cyan-200"
              >
                CLOSE
              </button>
            </div>

            <section className="mt-6 border border-cyan-300/60 bg-[#1e293b] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                COMMAND CHANNEL
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Ask anything about the projects and review the response output only.
              </p>

              <form className="mt-5" onSubmit={handleSubmit}>
                <label htmlFor="cockpit-command" className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                  Command Input
                </label>
                <input
                  id="cockpit-command"
                  placeholder="Ask how a project works, architecture, or tooling..."
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  className="mt-3 w-full border border-cyan-300/60 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-200"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Querying Gemini..." : "Submit Query"}
                </button>
                {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
              </form>

              <div className="mt-6 border-t border-cyan-300/40 pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                  RESPONSE OUTPUT
                </p>
                {response ? (
                  <p className="mt-3 whitespace-pre-wrap leading-7 text-slate-100">
                    {response}
                  </p>
                ) : (
                  <p className="mt-3 text-sm text-slate-400">
                    No response yet.
                  </p>
                )}
              </div>
            </section>

            <section className="mt-6 border border-cyan-300/60 bg-[#1e293b] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-200">
                API ACCESS
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Add your Gemini API key for this device only. It is stored in local storage.
              </p>
              <label
                htmlFor="cockpit-gemini-key"
                className="mt-4 block font-mono text-xs uppercase tracking-[0.28em] text-cyan-200"
              >
                Gemini API Key
              </label>
              <input
                id="cockpit-gemini-key"
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
                  className="inline-flex border border-cyan-300/60 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
                >
                  SAVE_KEY
                </button>
                {apiKeySaved ? (
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-200">
                    KEY_SAVED
                  </span>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
