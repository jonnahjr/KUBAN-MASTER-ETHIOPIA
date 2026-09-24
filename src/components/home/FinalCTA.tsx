import React from "react";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import { FileText, MessageSquare, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

const STATS = [
  { value: "1996", label: "Manufacturing Since" },
  { value: "5,000+", label: "Customers Worldwide" },
  { value: "60+", label: "Export Countries" },
  { value: "2 Years", label: "International Warranty" },
];

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#1A1414] overflow-hidden">
      {/* Ambient decor */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-[var(--coffee-caramel)]/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--coffee-caramel)]/50 to-transparent" />
      <span
        aria-hidden="true"
        className="absolute top-6 left-1/2 -translate-x-1/2 font-display font-black leading-none select-none text-outline-cream pointer-events-none whitespace-nowrap"
        style={{ fontSize: "clamp(80px, 11vw, 170px)" }}
      >
        TASTE IT
      </span>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* HEADLINE */}
        <Reveal>
          <span className="eyebrow text-[var(--coffee-caramel)]">
            ( Talk to a Specialist )
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-medium text-[#FBF7F1] leading-[1.06] tracking-tight mt-5">
            Ready when you are.{" "}
            <span className="font-display-italic text-gradient-gold-dark">
              Start the conversation.
            </span>
          </h2>
          <p className="text-[#A89070] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            Tell us your beans, your volume, and your ambition — a café in Bole,
            a roastery in Hawassa, an export line in Addis. Most quotes are
            returned the same working day.
          </p>
        </Reveal>

        {/* STATS — hairline-divided row */}
        <Reveal delay={120}>
          <div className="mt-14 border-y border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] grid grid-cols-2 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="py-6 sm:py-7">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-gradient-gold-dark nums block leading-none">
                  {s.value}
                </span>
                <span className="eyebrow text-[8px] text-[#A89070] mt-2 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={180}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link href="/request-quote" className="btn-gold px-8 py-4 text-[11px]">
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>

            <a
              href={buildWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-[#E8DCC8] text-xs font-bold uppercase tracking-[0.08em] hover:bg-white/[0.08] hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/showroom"
              className="btn-ghost-on-dark inline-flex items-center gap-2 px-7 py-4 text-[11px]"
            >
              <MapPin className="w-4 h-4 text-[var(--coffee-caramel)]" />
              <span>Visit the Showroom</span>
            </Link>
          </div>
        </Reveal>

        {/* SHOWROOM STRIP */}
        <Reveal delay={240}>
          <div className="mt-14 rounded-2xl bg-white/[0.035] border border-white/[0.08] backdrop-blur-md p-6 sm:p-7 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <MapPin className="w-4 h-4 text-[#C9933E] mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[13px] font-display font-medium text-[#F4EFE6]">
                    Sarbet Showroom —{" "}
                    <span className="font-display-italic text-[#E8C98A]">
                      see the machines fire up, before you buy.
                    </span>
                  </p>
                  <p className="text-[11px] text-[#A89070] mt-1 leading-relaxed">
                    {COMPANY.location.address}, {COMPANY.location.city} · Mon–Sat 8:30 AM – 6:00 PM · Sun by appointment
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:shrink-0">
                <a
                  href={`tel:${COMPANY.phones.sales[0].raw}`}
                  className="font-mono text-[12px] font-semibold text-[#E8DCC8] hover:text-[#E8C98A] transition-colors nums"
                >
                  {COMPANY.phones.sales[0].display}
                </a>
                <a
                  href={COMPANY.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A89070] hover:text-[#E8C98A] transition-colors"
                >
                  Maps
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A89070] hover:text-[#E8C98A] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  {COMPANY.socials.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* HOTLINES FOOTER LINE */}
        <Reveal delay={280}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-[#8A7460]">
            <span className="font-medium uppercase tracking-[0.14em]">Sales Hotlines</span>
            {COMPANY.phones.sales.map((p) => (
              <a
                key={p.raw}
                href={`tel:${p.raw}`}
                className="text-[#E8DCC8] font-mono font-semibold hover:text-[var(--coffee-caramel)] transition-colors nums"
              >
                {p.display}
              </a>
            ))}
            <span className="text-white/15">·</span>
            <Link
              href="/contact"
              className="text-[var(--coffee-caramel)] font-semibold link-luxury"
            >
              Contact Sales
            </Link>
            <ArrowRight className="w-3 h-3 text-[var(--coffee-caramel)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
