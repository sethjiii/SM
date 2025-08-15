import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets"; // note the .js extension in ESM
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Simple in-memory throttle ---
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 30; // per IP per minute

function throttle(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip) || { count: 0, ts: now };
  if (now - rec.ts > WINDOW_MS) {
    rec.count = 0;
    rec.ts = now;
  }
  rec.count += 1;
  hits.set(ip, rec);
  if (rec.count > MAX_HITS) throw new Error("Rate limit exceeded");
}

// --- Validation schema ---
const FormSchema = z.object({
  name: z.string().min(2).max(100),
  organization: z.string().max(150).optional().default(""),
  email: z.string().email(),
  number: z.string().max(30).optional().default(""),
  website: z.string().url().optional().or(z.literal("")).default(""),
  message: z.string().min(3).max(5_000),
  hearAbout: z.enum([
    "Referral",
    "Media & News",
    "LinkedIn",
    "Instagram/Facebook",
    "Emails/Newsletter",
    "Search",
  ]),
  services: z.enum([
    "Marketing",
    "MarTech",
    "Development",
    "Idea to First 10K Users",
  ]),
  otherSource: z.string().max(200).optional().default(""),
  _hp: z.string().optional().default(""), // honeypot
  recaptchaToken: z.string().optional(),
});

async function verifyRecaptcha(token?: string) {
  if (!token) return true;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;

  try {
    const form = new URLSearchParams();
    form.append("secret", secret);
    form.append("response", token);

    const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });

    const data = (await resp.json()) as { success: boolean; score?: number };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    throttle(ip);

    const body = await req.json();
    const parsed = FormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot
    if (data._hp.trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // reCAPTCHA
    const ok = await verifyRecaptcha(data.recaptchaToken);
    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA failed" },
        { status: 400 }
      );
    }

    // Append to Google Sheets (must match your column order)
    await appendRow([
      data.name,
      data.organization,
      data.email,
      data.number,
      data.website,
      data.message,
      data.hearAbout,
      data.services,
      data.otherSource,
    ]);

    return NextResponse.json(
      { ok: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    const msg = typeof err?.message === "string" ? err.message : "Internal Error";
    const status = msg.includes("Rate limit") ? 429 : 500;
    return NextResponse.json({ ok: false, error: msg }, { status });
  }
}
