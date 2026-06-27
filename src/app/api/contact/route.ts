import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.firstName || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // TODO: wire to an email provider (Resend, SendGrid) or CRM.
    // For now, log the submission server-side.
    console.log("[contact] new submission:", {
      name: `${data.firstName} ${data.lastName ?? ""}`.trim(),
      email: data.email,
      inquiry: data.inquiry,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
