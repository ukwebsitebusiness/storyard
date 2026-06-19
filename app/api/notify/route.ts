import { Resend } from "resend";
import { NextResponse } from "next/server";

const fromEmail = process.env.NOTIFY_FROM_EMAIL || "Storyard <no-reply@storyard.im>";
const toEmail = process.env.NOTIFY_TO_EMAIL || "info@storyard.co.uk";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, phone, storage_type, location, message, sourcePage, operatorSlug } = body;

    if (!toEmail) {
      return NextResponse.json({ error: "NOTIFY_TO_EMAIL not configured" }, { status: 500 });
    }

    const subject = `New lead: ${name} - ${storage_type || "Quote request"}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Storage type: ${storage_type || "N/A"}`,
      `Location: ${location || "N/A"}`,
      `Source page: ${sourcePage || "N/A"}`,
      `Operator: ${operatorSlug || "N/A"}`,
      `Message: ${message || "N/A"}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
