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

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured on the server." },
        { status: 500 },
      );
    }

    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: question.trim() }] }],
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