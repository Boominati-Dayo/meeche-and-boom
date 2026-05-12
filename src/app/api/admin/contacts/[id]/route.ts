import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "meechandboom@gmail.com";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    
    const contact = await Contact.findById(id);
    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    // Send reply email if provided
    if (body.replyMessage && body.sendEmail) {
      await transporter.sendMail({
        from: `"Meeche & Boom Co." <${ADMIN_EMAIL}>`,
        to: contact.email,
        subject: `Re: Your inquiry - Meeche & Boom Co.`,
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
              .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Meeche & Boom Co.</h1>
              </div>
              <div class="content">
                <p>Hi ${contact.name},</p>
                <p>${body.replyMessage}</p>
                <p>Best regards,<br/>Meeche & Boom Co. Team</p>
              </div>
              <div class="footer">
                <p>This is an automated response. For urgent matters, email us directly.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Hi ${contact.name},\n\n${body.replyMessage}\n\nBest regards,\nMeeche & Boom Co. Team`,
      });
    }

    // Update contact status
    contact.status = body.status || "replied";
    contact.replyMessage = body.replyMessage;
    contact.repliedAt = new Date();
    await contact.save();

    return NextResponse.json(contact);
  } catch (error) {
    console.error("Reply error:", error);
    return NextResponse.json({ error: "Failed to send reply" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Contact deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 });
  }
}