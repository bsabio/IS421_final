# Systems Portfolio

This repo presents a spec-driven Systems Portfolio focused on agentic AI workflows, auditability, and operational rigor.

## Knowledge Architecture

The repo uses a knowledge-first structure at the repository root:

- docs/ for long-form design notes, system specs, and implementation decisions.
- _corpus/ for reference inputs that inform the agent behavior.
- _references/ for verified sources, policies, and external citations.

## Technical Stack

Built with Next.js and TypeScript to provide the type-safe foundation required for agentic AI orchestration.

## Proof of Rigor

A tests/ directory is provided for future automated checks. Add a test runner of your choice (Vitest, Jest, Playwright) and wire it to `npm run test`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in any required values.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.
