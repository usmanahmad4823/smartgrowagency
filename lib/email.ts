import nodemailer from "nodemailer";

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendContactEmails(params: {
  agencyEmail: string;
  clientEmail: string;
  clientName: string;
  summaryHtml: string;
}) {
  const transport = getTransport();
  const from = process.env.EMAIL_FROM ?? `"Smart Grow Agency" <${params.agencyEmail}>`;

  if (!transport) {
    console.warn("[email] SMTP not configured — skipping send.");
    return { sent: false as const };
  }

  await transport.sendMail({
    from,
    to: params.agencyEmail,
    subject: `New lead: ${params.clientName}`,
    html: params.summaryHtml,
  });

  await transport.sendMail({
    from,
    to: params.clientEmail,
    subject: "We received your project details",
    html: `
      <p>Hi ${params.clientName},</p>
      <p>Thanks for reaching out to Smart Grow Agency. A strategist reviews every submission and replies within one business day.</p>
      <p>— Smart Grow Agency</p>
    `,
  });

  return { sent: true as const };
}
