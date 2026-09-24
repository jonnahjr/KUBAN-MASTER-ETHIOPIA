"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PRODUCTS } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle, Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone number is required"),
  company: z.string().optional(),
  preferredDate: z.string().optional(),
  machineInterest: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ShowroomVisitForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const machineInterest = watch("machineInterest");

  const onSubmit = async (data: FormData) => {
    // Build WhatsApp message and redirect
    const selectedProduct = PRODUCTS.find((p) => p.slug === data.machineInterest);
    const waLink = buildWhatsAppLink("showroom", {
      name: data.name,
      date: data.preferredDate,
      productName: selectedProduct?.name ?? data.machineInterest ?? "your machines",
    });
    setSubmitted(true);
    // Open WhatsApp after a short delay for UX
    setTimeout(() => {
      window.open(waLink, "_blank", "noopener noreferrer");
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-emerald-950/30 border border-emerald-500/20 p-8 text-center space-y-4">
        <CheckCircle className="w-10 h-10 text-[var(--muted-tan)] mx-auto" />
        <h3 className="text-lg font-bold text-white">Visit Request Sent</h3>
        <p className="text-sm text-[var(--text-muted)]">
          Your showroom visit request was forwarded via WhatsApp. A Kuban Master Ethiopia specialist will
          confirm your preferred date and time.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[var(--coffee-base)] border border-white/10 p-6 space-y-6">
      <div>
        <h3 className="text-base font-bold text-white">Book a Showroom Visit</h3>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          See the machines before you build your roast line. Request a visit and we will confirm availability.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="visit-name" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
              Full Name *
            </label>
            <input
              id="visit-name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              {...register("name")}
              className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors ${errors.name ? "border-red-500/50" : "border-white/10"}`}
            />
            {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="visit-phone" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
              Phone Number *
            </label>
            <input
              id="visit-phone"
              type="tel"
              autoComplete="tel"
              placeholder="+251 9X XXX XXXX"
              {...register("phone")}
              className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors ${errors.phone ? "border-red-500/50" : "border-white/10"}`}
            />
            {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="visit-company" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
            Company / Business Name
          </label>
          <input
            id="visit-company"
            type="text"
            placeholder="Your business (optional)"
            {...register("company")}
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="visit-date" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
              Preferred Visit Date
            </label>
            <input
              id="visit-date"
              type="date"
              {...register("preferredDate")}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="visit-machine" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
              Machine of Interest
            </label>
            <select
              id="visit-machine"
              {...register("machineInterest")}
              className="w-full px-4 py-2.5 rounded-lg bg-[var(--coffee-base)] border border-white/10 text-sm text-[#B5C9C7] focus:outline-none focus:border-[#E7A93D]/60 transition-colors"
            >
              <option value="">General visit / All machines</option>
              {PRODUCTS.filter((p) => p.inShowroom).map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
              <option value="other">Other / Not sure yet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="visit-message" className="block text-xs font-semibold text-[#B5C9C7] mb-1.5">
            Message (Optional)
          </label>
          <textarea
            id="visit-message"
            rows={3}
            placeholder="Any specific questions or requirements for your visit…"
            {...register("message")}
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-[#4A6664] focus:outline-none focus:border-[#E7A93D]/60 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E7A93D] to-[#b37532] hover:from-[#d89b5b] hover:to-[#E7A93D] text-white text-sm font-bold shadow-lg shadow-[#E7A93D]/20 transition-all disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request Showroom Visit
            </>
          )}
        </button>

        <p className="text-[11px] text-[var(--text-muted)] text-center">
          Your request will be sent via WhatsApp to our sales team for confirmation.
        </p>
      </form>
    </div>
  );
}
