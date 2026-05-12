import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

const ADMIN_EMAIL = "meecheandboom@gmail.com";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    await connectDB();
    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
      status: "new",
    });
    await contact.save();

    // Send email notification
    const mailOptions = {
      from: `"Meeche & Boom Co." <${ADMIN_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #c9a227 0%, #e8c547 100%); padding: 20px; border-radius: 8px 8px 0 0; }
            .header h1 { color: #fff; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #c9a227; }
            .value { padding: 8px 12px; background: #fff; border-radius: 4px; border: 1px solid #e0e0e0; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://meecheandboom.com/assets/Meeche&BoomCoLogo.png" alt="Meeche & Boom Co." style="height: 50px; margin-bottom: 10px;" />
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${service || "Not specified"}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Meeche & Boom Co. contact form.</p>
              <p>Sent at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}

---
This email was sent from the Meeche & Boom Co. contact form.
Sent at: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}