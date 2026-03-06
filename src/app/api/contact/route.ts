import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message).replace(/\n/g, "<br>");

    await resend.emails.send({
      from: "Sophia Foundry <noreply@sophiafoundry.com>",
      to: "jessyka@sophiafoundry.com",
      subject: `Contact form: ${safeName}`,
      replyTo: email,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#0a0a0f;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0f;">
    <tr>
      <td align="center" style="padding:32px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="padding:32px;background-color:#1a0f1f;border-radius:8px;">
              <h1 style="color:#a84de0;font-family:sans-serif;font-size:24px;margin:0 0 16px 0;">Contact Form</h1>
              <p style="color:#a0a0b0;font-family:sans-serif;line-height:1.8;margin:0 0 8px 0;">
                <strong style="color:#f5f5f7;">From:</strong> ${safeName} (${safeEmail})
              </p>
              <p style="color:#a0a0b0;font-family:sans-serif;line-height:1.8;margin:0;">
                ${safeMessage}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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