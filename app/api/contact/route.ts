import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { prisma } from "@/lib/db";
import { sendContactEmails } from "@/lib/email";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please review the highlighted fields.", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const agencyEmail = process.env.AGENCY_INBOX_EMAIL ?? process.env.SMTP_USER;

  try {
    await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone?.trim() ? data.phone.trim() : null,
        service: data.service,
        budget: data.budget,
        message: data.message,
        referral: data.referral,
      },
    });
  } catch (error) {
    console.error("[contact] database error", error);
    return NextResponse.json({ success: false, message: "Could not save your submission." }, { status: 500 });
  }

  const summaryHtml = `
    <h2>New lead</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "—"}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Budget:</strong> ${data.budget}</p>
    <p><strong>Referral:</strong> ${data.referral}</p>
    <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
  `;

  if (agencyEmail) {
    try {
      await sendContactEmails({
        agencyEmail,
        clientEmail: data.email,
        clientName: data.name,
        summaryHtml,
      });
    } catch (error) {
      console.error("[contact] email error", error);
      // Lead is saved; still return success but note email issue in logs
    }
  } else {
    console.warn("[contact] AGENCY_INBOX_EMAIL not set — skipping email notification.");
  }

  return NextResponse.json({
    success: true,
    message: "Thanks — we received your details and will reply within 24 hours.",
  });
}
