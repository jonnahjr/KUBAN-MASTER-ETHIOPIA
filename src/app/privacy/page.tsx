import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kuban Master Ethiopia",
  description: `Privacy policy and B2B commercial inquiry data handling terms for ${COMPANY.name} (${COMPANY.legalName}) in Addis Ababa, Ethiopia.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-24">
      {/* HEADER */}
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[var(--coffee-base)] to-[var(--bg-primary)]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Shield className="w-3.5 h-3.5 text-[#E7A93D]" />
            <span className="text-[11px] font-semibold text-[#B5C9C7] tracking-wide uppercase">
              B2B Data Protection
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-[var(--text-muted)] text-sm">
            Last updated: September 2024 · {COMPANY.legalName}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-sm leading-relaxed text-[#B5C9C7]">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              {COMPANY.legalName} (&quot;Kuban Master Ethiopia&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the B2B machinery catalog and quotation platform at {COMPANY.seo.siteUrl}. This policy describes how we collect, use, and protect commercial inquiry information submitted through our website, WhatsApp channels, and in-person showroom visits.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              As a specialized B2B industrial equipment supplier, we collect information necessary to prepare technical proposals, engineering site surveys, and commercial quotations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-muted)]">
              <li>Contact details: Name, business email address, phone/WhatsApp number.</li>
              <li>Company information: Roastery/business name, location (city/region), business category (cafe, exporter, commercial plant).</li>
              <li>Technical requirements: Desired roasting capacity, preferred fuel source (LPG, natural gas, electricity), electrical specifications, and installation timeline.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How Information Is Used</h2>
            <p>Information submitted is used exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[var(--text-muted)]">
              <li>Preparing accurate formal price quotations and machine specifications.</li>
              <li>Scheduling technical site inspections and showroom machine demonstrations.</li>
              <li>Coordinating warranty service, spare parts fulfillment, and engineering support.</li>
              <li>Communicating via phone, email, and WhatsApp regarding ongoing projects.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. WhatsApp Communication</h2>
            <p>
              When you choose to inquire via WhatsApp deep links on this website, communications are governed by WhatsApp&apos;s privacy policy in addition to our own standard business practices. We do not sell, rent, or distribute your phone number or business contacts to third-party marketing services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Data Sharing with Manufacturers</h2>
            <p>
              Where technical customizations, factory warranties, or direct factory dispatches are required, relevant equipment specifications may be shared with the manufacturer, Kuban Coffee Roasters (Izmir, Turkey), solely to execute machinery manufacturing, logistics, and technical warranty registration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Contact Our Compliance Team</h2>
            <p>
              For inquiries regarding this privacy statement or your business data, please contact:
            </p>
            <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 not-prose space-y-1 text-xs">
              <p className="font-bold text-white">{COMPANY.legalName}</p>
              <p className="text-[var(--text-muted)]">{COMPANY.location.address}, {COMPANY.location.city}, {COMPANY.location.country}</p>
              <p className="text-[var(--text-muted)]">Email: <a href={`mailto:${COMPANY.email.general}`} className="text-[#E7A93D] hover:underline">{COMPANY.email.general}</a></p>
              <p className="text-[var(--text-muted)]">Phone: {COMPANY.phones.sales[0].display}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
