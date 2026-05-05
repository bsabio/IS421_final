import { NextResponse } from "next/server";

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
};

export async function POST(req: Request) {
  try {
    const { question } = (await req.json()) as { question?: string };

    if (!question || !question.trim()) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }

    const headerKey = req.headers.get("x-gemini-api-key")?.trim();
    const apiKey = headerKey || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is missing. Provide it in the cockpit or configure GEMINI_API_KEY." },
        { status: 500 },
      );
    }

    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    const projectContext = [
      "You are answering questions about Brandon Sabio's project portfolio.",
      "Contact links:",
      "- Email: bsabio@njit.edu",
      "- GitHub: https://github.com/bsabio",
      "- LinkedIn: https://linkedin.com/in/bsabio",
      "Projects:",
      "- Secure-Gate: Auth anomaly detection with high-assurance safeguards for identity risk scoring and threat escalation. Proof systems include control-plane signals, policy test harnesses, and forensic audit trails. Repo: https://github.com/bsabio/secure_gate",
      "- Plumber: MCP tooling and automation-focused orchestration for tickets, appointments, and service flows. Automation includes workflow routing with agent-run tooling and structured data handoffs. Repo: https://github.com/bsabio/plumber",
      "- AI Publication: Research synthesis focused on high-impact briefs for agentic research and enterprise adoption signals. Repo: https://github.com/bsabio/IS421_prototype",
      "- Calculator: Relational foundations covering schema design, query discipline, and structural data integrity. Repo: https://github.com/bsabio",
      "If the question is ambiguous, ask a brief clarifying question about which project or area.",
    ].join("\n");

    const prompt = `${projectContext}\n\nUser question: ${question.trim()}`;

    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      },
    );

    if (!upstream.ok) {
      const errorText = await upstream.text();
      return NextResponse.json(
        { error: `Gemini request failed: ${errorText || upstream.statusText}` },
        { status: 502 },
      );
    }

    const data = (await upstream.json()) as GeminiResponse;
    const answer =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text)
        .filter(Boolean)
        .join("\n")
        .trim() || "No answer returned by model.";

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}