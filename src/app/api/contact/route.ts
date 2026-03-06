import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Sophia Foundry <noreply@sophiafoundry.com>",
      to: "jessyka@sophiafoundry.com",
      subject: `Contact form: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #f5f5f7; background: #0a0a0f; padding: 2rem;">
          <h1 style="color: #a84de0; font-size: 1.5rem;">Sophia Foundry</h1>
          <p style="color: #a0a0b0;"><strong>From:</strong> ${name} (${email})</p>
          <p style="color: #a0a0b0; line-height: 1.8;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}