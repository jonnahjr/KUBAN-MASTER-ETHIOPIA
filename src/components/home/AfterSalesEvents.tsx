import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import {
  Headset,
  Wrench,
  CalendarDays,
  MapPin,
  ArrowRight,
  MessageSquare,
  Store,
} from "lucide-react";

export function AfterSalesEvents() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#B37E2E]/8 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── AFTER-SALES ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-7">
            <Reveal>
              <span className="marker-num">( Technical Support & After-Sales )</span>
              <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.75rem] mt-4">
                We care about your business at{" "}
                <span className="font-display-italic text-gradient-gold">
                  every stage.
                </span>
              </h2>
              <p className="text-[#8A7460] text-sm sm:text-base mt-5 leading-relaxed max-w-xl">
                From analyzing your project&apos;s needs and selecting the ideal
                products and capacities, to ensuring fast and secure delivery —
                our Addis Ababa team supports you throughout your journey,
                ensuring seamless performance for years to come.
              </p>
            </Reveal>

            <div className="space-y-3">
              {[
                {
                  icon: Headset,
                  title: "Dedicated Technical Desk",
                  desc: "Factory-trained engineers on standby in Addis Ababa.",
                  phone: COMPANY.phones.support[0],
                },
                {
                  icon: Wrench,
                  title: "Installation & Commissioning",
                  desc: "Gas line, exhaust flue, electrical, and altitude calibration.",
                  phone: null,
                },
                {
                  icon: Store,
                  title: "Sarbet Showroom",
                  desc: "Hands-on demonstrations before you commit to a machine.",
                  phone: null,
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="group flex items-start gap-4 p-4 bg-white rounded-2xl border border-[#E8DEC8] hover:border-[#A77B4A]/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] border border-[#E8DEC8] flex items-center justify-center shrink-0 group-hover:border-[#A77B4A]/50 transition-colors">
                      <item.icon className="w-4.5 h-4.5 text-[#8A6535]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-[15px] font-medium text-[#2D1B08]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#8A7460] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.phone && (
                        <a
                          href={`tel:${item.phone.raw}`}
                          className="inline-flex items-center gap-1.5 mt-2 font-mono text-[11px] font-semibold text-[#8A6535] hover:text-[#2D1B08] transition-colors nums"
                        >
                          {item.phone.display}
                          <span className="text-[9px] uppercase tracking-wider text-[#A77B4A] font-sans font-bold">
                            — {item.phone.label}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={250}>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services/technical-support"
                  className="btn-gold px-7 py-3.5 text-[11px]"
                >
                  <span>Support Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildWhatsAppLink("spare_parts")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E8DEC8] bg-white text-[#2D1B08] text-[11px] font-bold uppercase tracking-[0.08em] hover:border-emerald-500/40 transition-all duration-300"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* VIDEO */}
          <Reveal from="scale" className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#E8DEC8] shadow-[0_32px_70px_-30px_rgba(45,27,8,0.35)] bg-[#221B1B]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/products/hero-kuban-base-5kg.mp4"
                poster="/images/products/Kuban Base 5 Kg Shop Coffee Roaster.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-label="Kuban Base 5kg shop roaster in action"
              />
              {/* Subtle espresso edge wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B08]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </Reveal>
        </div>

        {/* ── INTERNATIONAL EVENTS ────────────────────────────────────── */}
        <Reveal className="relative rounded-[2.5rem] overflow-hidden border border-[#E8DEC8] shadow-[0_40px_90px_-40px_rgba(45,27,8,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative min-h-[320px] lg:min-h-[460px]">
              <Image
                src="/images/kuban-ref/kuban-fuar.jpg"
                alt="Kuban at international coffee exhibitions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Copy side */}
            <div className="p-8 sm:p-12 lg:p-14 bg-white relative flex flex-col justify-center">
              <span
                className="absolute top-0 inset-x-20 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/60 to-transparent"
                aria-hidden="true"
              />

              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FBF9F5] border border-[#E8DEC8] w-fit mb-6">
                <CalendarDays className="w-3.5 h-3.5 text-[#8A6535]" />
                <span className="eyebrow text-[#8A6535]">International Events</span>
              </div>

              <h3 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl">
                We represent our country at{" "}
                <span className="font-display-italic text-gradient-gold">
                  annual coffee events
                </span>{" "}
                worldwide.
              </h3>

              <p className="text-sm text-[#8A7460] leading-relaxed mt-4 max-w-md">
                Visit the Kuban booth at major international coffee and
                equipment exhibitions — or see the machines closer to home at
                our Sarbet showroom in Addis Ababa.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href="https://kubancoffeeroasters.com/events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 text-[11px]"
                >
                  <span>Upcoming Events</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/showroom"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E8DEC8] bg-[#FBF9F5] text-[#2D1B08] text-[11px] font-semibold uppercase tracking-[0.08em] hover:border-[#A77B4A]/60 transition-all duration-300"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8A6535]" />
                  <span>Sarbet Showroom</span>
                </Link>
              </div>

              <p className="text-[11px] text-[#8A7460] mt-6">
                {COMPANY.location.address} · {COMPANY.location.city}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
