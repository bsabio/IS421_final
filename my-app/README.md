# Systems Portfolio

This repo presents a spec-driven Systems Portfolio focused on agentic AI workflows, auditability, and operational rigor.

## Knowledge Architecture

The project is organized around a knowledge-first structure. The intended knowledge layers are:

- docs/ for long-form design notes, system specs, and implementation decisions.
- _corpus/ for reference inputs that inform the agent behavior.
- _references/ for verified sources, policies, and external citations.

## Technical Stack

Built with Next.js and TypeScript to provide the type-safe foundation required for agentic AI orchestration.

## Proof of Rigor

Automated quality checks live in the tests/ directory and in .github/workflows (when present). These artifacts show that the plumbing is reinforced with repeatable validation.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.
