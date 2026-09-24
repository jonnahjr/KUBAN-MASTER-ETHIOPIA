import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ShowroomMap } from "@/components/showroom/ShowroomMap";
import { ShowroomVisitForm } from "@/components/showroom/ShowroomVisitForm";
import { Reveal } from "@/components/ui/Reveal";
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ArrowRight,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sarbet Showroom — See the Machines Run | Kuban Master Ethiopia",
  description:
    "Visit the Kuban Master Ethiopia showroom in Sarbet, Addis Ababa. Live roasting demos, cupping sessions, and hands-on machine inspections before you buy.",
  openGraph: {
    title: `Sarbet Showroom | ${COMPANY.name}`,
    description:
      "See the machines fire up before you buy. Live demos at our Addis Ababa showroom.",
    url: `${COMPANY.seo.siteUrl}/showroom`,
  },
};

export default function ShowroomPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2D1B08]">
      {/* ── HERO — dark editorial ── */}
      <section className="relative min-h-[70svh] flex items-center overflow-hidden bg-[#1A1414] pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/showroom/kuban_sarbet_showroom.jpg"
            alt="Kuban Sarbet showroom in Addis Ababa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414] via-[#1A1414]/85 to-[#1A1414]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-transparent to-[#1A1414]/60" />
          <span
            aria-hidden="true"
            className="absolute -bottom-4 left-0 font-display font-black leading-none select-none text-outline-cream pointer-events-none"
            style={{ fontSize: "clamp(90px, 13vw, 200px)" }}
          >
            SARbet
          </span>
        </div>

        <div className="absolute inset-4 sm:inset-6 border border-white/[0.07] rounded-[1.75rem] pointer-events-none z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#C9933E] mb-6 flex items-center gap-2">
              <Flame className="w-3.5 h-3.5" />
              Sarbet · Addis Ababa
            </p>
            <h1 className="font-display font-medium text-[#F4EFE6] leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              See the machines{" "}
              <span className="font-display-italic text-gradient-gold-dark">
                fire up, before you buy.
              </span>
            </h1>
            <p className="text-[#C8B89A] text-sm sm:text-base leading-relaxed max-w-lg mt-6">
              Live roast demos, cupping sessions, and honest advice — come talk
              beans with people who speak fluent harvest.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href={buildWhatsAppLink("showroom")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-7 py-4 text-[11px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>
              <Link href="/request-quote" className="btn-ghost-on-dark px-6 py-4 text-[11px]">
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT INFO — cream band ── */}
      <section className="py-20 sm:py-24 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info cards */}
            <div className="lg:col-span-5 space-y-4">
              <Reveal>
                <span className="marker-num">( Visit Us )</span>
                <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#2D1B08] tracking-tight leading-tight mt-4 mb-8">
                  The door is{" "}
                  <span className="font-display-italic text-gradient-gold">open.</span>
                </h2>
              </Reveal>

              {[
                {
                  icon: MapPin,
                  title: "Location",
                  lines: [
                    COMPANY.location.address,
                    `${COMPANY.location.city}, ${COMPANY.location.country}`,
                  ],
                  action: (
                    <a
                      href={COMPANY.location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  title: "Hours",
                  lines: COMPANY.location.hours.map((h) => `${h.days}: ${h.time}`),
                },
                {
                  icon: Phone,
                  title: "Sales & Showroom",
                  lines: COMPANY.phones.sales.map((p) => p.display),
                  action: (
                    <a
                      href={`tel:${COMPANY.phones.sales[0].raw}`}
                      className="inline-flex items-center gap-1.5 mt-3 font-mono text-[12px] font-semibold text-[#8A6535] hover:text-[#2D1B08] transition-colors nums"
                    >
                      {COMPANY.phones.sales[0].display}
                    </a>
                  ),
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 80}>
                  <div className="bg-white rounded-2xl border border-[#E8DEC8] p-6 hover:border-[#A77B4A]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FBF9F5] border border-[#E8DEC8] flex items-center justify-center">
                        <card.icon className="w-4 h-4 text-[#8A6535]" />
                      </div>
                      <h3 className="font-display text-lg font-medium text-[#2D1B08]">
                        {card.title}
                      </h3>
                    </div>
                    {card.lines.map((line) => (
                      <p key={line} className="text-[13px] text-[#6B4F32] leading-relaxed">
                        {line}
                      </p>
                    ))}
                    {card.action}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Form + map */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={120}>
                <div className="rounded-[1.75rem] bg-[#F4EFE6] border border-[#E8DEC8] p-7 sm:p-9">
                  <h3 className="font-display text-2xl font-medium text-[#2D1B08] tracking-tight mb-2">
                    Book a showroom visit
                  </h3>
                  <p className="text-[13px] text-[#6B4F32] leading-relaxed mb-6">
                    Tell us when you&apos;d like to come and what you want to see
                    running — we&apos;ll confirm the same working day.
                  </p>
                  <ShowroomVisitForm />
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="rounded-[1.75rem] overflow-hidden border border-[#E8DEC8] shadow-[0_24px_50px_-30px_rgba(45,27,8,0.25)]">
                  <ShowroomMap />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
