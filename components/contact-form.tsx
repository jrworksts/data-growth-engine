"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setMessage("Message received. We will review it and follow up.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or use the CTAs below.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Name</span>
          <input required name="name" type="text" className="rounded-2xl border border-white/10 bg-[#08132d] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-aqua" placeholder="Jane Smith" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Work email</span>
          <input required name="email" type="email" className="rounded-2xl border border-white/10 bg-[#08132d] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-aqua" placeholder="jane@company.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Company</span>
          <input required name="company" type="text" className="rounded-2xl border border-white/10 bg-[#08132d] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-aqua" placeholder="B2B SaaS Company" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white">Monthly paid spend</span>
          <input name="spend" type="text" className="rounded-2xl border border-white/10 bg-[#08132d] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-aqua" placeholder="$50k-$500k" />
        </label>
      </div>
      <label className="mt-5 grid gap-2">
        <span className="text-sm font-medium text-white">What data problem are you trying to fix?</span>
        <textarea required name="message" rows={6} className="rounded-[1.5rem] border border-white/10 bg-[#08132d] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-aqua" placeholder="Tell us where attribution, targeting, or pipeline visibility is breaking down." />
      </label>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/60">This form posts to a local API route so a real backend can be wired in later without restructuring the UI.</p>
        <Button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending..." : "Send message"}</Button>
      </div>
      {message ? <p className={`mt-4 text-sm ${status === "success" ? "text-aqua" : "text-[#ff9f8f]"}`}>{message}</p> : null}
    </form>
  );
}
