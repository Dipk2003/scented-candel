"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.message) {
      setError("❌ All fields are required!");
      setLoading(false);
      return;
    }

    try {
      // Save to database
      const { error: dbError } = await supabase.from("contacts").insert([form]);
      if (dbError) throw new Error("❌ Failed to save in database.");

      // Send email notification
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "❌ Failed to send email.");

      setSuccess("✅ Inquiry submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">📩 Contact Us</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg" onChange={handleChange} value={form.name} />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" onChange={handleChange} value={form.email} />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="4" onChange={handleChange} value={form.message}></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600" disabled={loading}>
            {loading ? "Submitting..." : "📨 Send Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

