"use server"; // ✅ Add this line

import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ✅ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // ✅ Step 1: Save in Database
    const { error } = await supabase.from("contacts").insert([
      { name, email, message },
    ]);
    if (error) throw error;

    // ✅ Step 2: Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "dkpandeyking123@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
