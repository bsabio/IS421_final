# IS421 Final

Portfolio project repository containing a Next.js application in the `my-app` directory.

## What This Project Is

This project is a personal systems engineering and AI automation portfolio site built for IS421 final coursework. It presents a professional profile centered on enterprise workflow orchestration, reliability engineering, and traceable automation pipelines.

The current implementation is a single-page, App Router-based Next.js web application that:

- Showcases a technical portfolio narrative and branding
- Highlights engineering focus areas (automation, validation, observability)
- Includes links to external profiles and related project repositories
- Uses a custom terminal-inspired visual style built with Tailwind CSS

## Repository Layout

```text
IS421_final/
├── LICENSE
├── README.md
└── my-app/
	├── app/
	│   ├── globals.css
	│   ├── layout.tsx
	│   └── page.tsx
	├── public/
	├── package.json
	├── tsconfig.json
	├── next.config.ts
	├── eslint.config.mjs
	└── README.md
```

## Current App Stack (`my-app`)

- Next.js `16.2.4` (App Router)
- React `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4` via `@tailwindcss/postcss`
- ESLint `^9` with `eslint-config-next`

## Getting Started

From the repository root:

```bash
cd my-app
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

Run these from `my-app`:

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## App Notes

- The homepage is implemented in `my-app/app/page.tsx` and currently renders a systems-focused portfolio interface.
- Global styles and theme variables are defined in `my-app/app/globals.css`.
- Metadata and font configuration are defined in `my-app/app/layout.tsx`.