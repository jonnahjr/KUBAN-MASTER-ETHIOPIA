import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, MessageSquare, MapPin, Clock, Mail, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Kuban Master Ethiopia | Addis Ababa Showroom & Support",
  description: `Contact ${COMPANY.name} in Addis Ababa, Ethiopia. Connect with sales, book a showroom visit in Sarbet, or request technical support for Kuban coffee roasters.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--coffee-base)]">
      {/* HERO — Coffee Dark */}
      <div className="relative overflow-hidden pt-32 pb-16 bg-[var(--coffee-base)]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(231,169,61,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[300px] bg-[#E7A93D]/8 blur-[100px] rounded-full pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-[#E7A93D] font-bold mb-4">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FAF7F2] tracking-tight mb-4">
              Contact{" "}
              <span className="text-[#E7A93D]">Kuban Master Ethiopia</span>
            </h1>
            <p className="text-[#B5C9C7] text-base leading-relaxed">
              Sales, technical inquiries, spare parts, or showroom visits — our
              team is available by phone, WhatsApp, and in person at our Sarbet
              showroom.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN — Cream */}
      <div className="bg-[#FAF7F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT: CONTACT INFO CARDS */}
            <div className="lg:col-span-5 space-y-4">
              {/* SALES */}
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 space-y-4 hover:shadow-md transition-shadow">
                <h2 className="text-sm font-bold text-[#0A2628] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E7A93D]" />
                  Sales &amp; Showroom
                </h2>
                <div className="space-y-3">
                  {COMPANY.phones.sales.map((p) => (
                    <div key={p.raw} className="flex items-center justify-between">
                      <span className="text-xs text-[#5C483C]">{p.label}</span>
                      <a
                        href={`tel:${p.raw}`}
                        className="font-mono text-sm text-[#0A2628] hover:text-[#E7A93D] font-semibold transition-colors"
                      >
                        {p.display}
                      </a>
                    </div>
                  ))}
                </div>
                <a
                  href={buildWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border-2 border-emerald-500/40 text-emerald-700 text-xs font-bold hover:bg-emerald-50 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Sales
                </a>
              </div>

              {/* TECHNICAL SUPPORT */}
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 space-y-4 hover:shadow-md transition-shadow">
                <h2 className="text-sm font-bold text-[#0A2628] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E7A93D]" />
                  Technical Support
                </h2>
                <div className="space-y-3">
                  {COMPANY.phones.support.map((p) => (
                    <div key={p.raw} className="flex items-center justify-between">
                      <span className="text-xs text-[#5C483C]">{p.label}</span>
                      <a
                        href={`tel:${p.raw}`}
                        className="font-mono text-sm text-[#0A2628] hover:text-[#E7A93D] font-semibold transition-colors"
                      >
                        {p.display}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMAIL */}
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 space-y-3 hover:shadow-md transition-shadow">
                <h2 className="text-sm font-bold text-[#0A2628] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E7A93D]" />
                  Email
                </h2>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C483C]">General</span>
                    <a href={`mailto:${COMPANY.email.general}`} className="text-[#0A2628] hover:text-[#E7A93D] font-medium transition-colors">{COMPANY.email.general}</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C483C]">Sales</span>
                    <a href={`mailto:${COMPANY.email.sales}`} className="text-[#0A2628] hover:text-[#E7A93D] font-medium transition-colors">{COMPANY.email.sales}</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C483C]">Support</span>
                    <a href={`mailto:${COMPANY.email.support}`} className="text-[#0A2628] hover:text-[#E7A93D] font-medium transition-colors">{COMPANY.email.support}</a>
                  </div>
                </div>
              </div>

              {/* TRADE ETHIOPIA GROUP AFFILIATION */}
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 space-y-3 hover:shadow-md transition-shadow">
                <h2 className="text-sm font-bold text-[#0A2628] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#E7A93D]" />
                  Corporate Umbrella
                </h2>
                <div>
                  <p className="text-xs font-semibold text-[#0A2628]">Trade Ethiopia Group</p>
                  <p className="text-[11px] text-[#5C483C] leading-relaxed mt-1">
                    Kuban Master Ethiopia operates under the corporate umbrella of Trade Ethiopia Group as the authorized sole representative and distributor of Kuban equipment in Ethiopia.
                  </p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-[#E8DEC8] text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C483C]">Desk 1</span>
                    <a href="tel:+251907597371" className="font-mono text-[#0A2628] font-semibold hover:text-[#E7A93D]">
                      +251 90 759 7371
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5C483C]">Desk 2</span>
                    <a href="tel:+251909619893" className="font-mono text-[#0A2628] font-semibold hover:text-[#E7A93D]">
                      +251 90 961 9893
                    </a>
                  </div>
                </div>
              </div>

              {/* ADDRESS & SHOWROOM */}
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 space-y-3 hover:shadow-md transition-shadow">
                <h2 className="text-sm font-bold text-[#0A2628] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E7A93D]" />
                  Showroom Address
                </h2>
                <p className="text-xs text-[#0A2628] leading-relaxed font-medium">
                  {COMPANY.location.address}
                </p>
                <p className="text-xs text-[#5C483C]">{COMPANY.location.city}, {COMPANY.location.country}</p>
                <div className="space-y-1.5 pt-3 border-t border-[#E8DEC8]">
                  {COMPANY.location.hours.map((h) => (
                    <div key={h.days} className="flex items-center gap-2 text-xs">
                      <Clock className="w-3 h-3 text-[#E7A93D]" />
                      <span className="text-[#5C483C]">{h.days}:</span>
                      <span className="text-[#0A2628] font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={COMPANY.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#E7A93D] hover:text-[#b37532] font-semibold flex items-center gap-1 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Open in Google Maps →
                  </a>
                  <Link
                    href="/showroom"
                    className="text-xs text-[#5C483C] hover:text-[#0A2628] font-medium flex items-center gap-1 transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Explore the Sarbet Showroom →
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white border border-[#E8DEC8] p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h2 className="text-lg font-bold text-[#0A2628]">Send us a message</h2>
                  <p className="text-xs text-[#5C483C] mt-1">
                    Your message will be delivered directly via WhatsApp for the fastest response.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
