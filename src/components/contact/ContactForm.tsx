"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { COMPANY } from "@/config/company";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  subject: z.string().min(3, "Please provide a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const message = `Hello Kuban Master Ethiopia,\n\nName: ${data.name}\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ""}\n\nSubject: ${data.subject}\n\n${data.message}`;
    const waLink = `https://wa.me/${COMPANY.phones.primaryWhatsAppRaw}?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    setTimeout(() => window.open(waLink, "_blank", "noopener noreferrer"), 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-950/30 border border-emerald-500/20 p-8 text-center space-y-4">
        <CheckCircle className="w-10 h-10 text-[var(--muted-tan)] mx-auto" />
        <h3 className="text-lg font-bold text-white">Message Sent</h3>
        <p className="text-sm text-[var(--text-muted)]">Your message was forwarded via WhatsApp. We will respond shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {(["name", "phone"] as const).map((field) => (
          <div key={field}>
            <label htmlFor={`contact-${field}`} className="block text-xs font-semibold text-[#B5C9C7] mb-1.5 capitalize">
              {field === "name" ? "Full Name *" : "Phone *"}
            </label>
            <input
              id={`contact-${field}`}
              type={field === "phone" ? "tel" : "text"}
              autoComplete={field}
              placeholder={field === "phone" ? "+251 9X XXX XXXX" : "Your name"}
              {...register(field)}
              className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors ${errors[field] ? "border-red-500/50" : "border-white/10"}`}
            />
            {errors[field] && <p className="text-[11px] text-red-400 mt-1">{errors[field]?.message}</p>}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
          Email Address (optional)
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          {...register("email")}
          className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors ${errors.email ? "border-red-500/50" : "border-white/10"}`}
        />
        {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">Subject *</label>
        <input
          id="contact-subject"
          type="text"
          placeholder="e.g. Inquiry about Kuban Supreme 6kg"
          {...register("subject")}
          className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors ${errors.subject ? "border-red-500/50" : "border-white/10"}`}
        />
        {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">Message *</label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your business and requirements…"
          {...register("message")}
          className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors resize-none ${errors.message ? "border-red-500/50" : "border-white/10"}`}
        />
        {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E7A93D] to-[#b37532] hover:from-[#d89b5b] hover:to-[#E7A93D] text-white text-sm font-bold shadow-lg shadow-[#E7A93D]/20 transition-all disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {isSubmitting ? "Sending…" : "Send Message via WhatsApp"}
      </button>
    </form>
  );
}
