import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  MapPin,
  Mail,
  MessageSquare,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Phone,
  Globe2,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16.11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <>
      {/* ══ TOP TONE: CREAM — VISIT CARD + CTA ══ */}
      <section className="relative bg-[#F4EFE6] text-[#2D1B08] z-10 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/60 to-transparent" aria-hidden="true" />

        {/* ── VISIT + CTA SPLIT ── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* STORY + CTA */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DEC8] text-[#6B3F1D] text-[10px] font-bold tracking-[0.15em] uppercase mb-5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6B3F1D]" />
                Official Kuban Representative in Ethiopia
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#2D1B08] leading-tight">
                See the machines fire up,{" "}
                <span className="font-display-italic text-[#A77B4A]">before you buy.</span>
              </h3>
              <p className="text-[#6B4F32] text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
                Every roaster we sell runs in our Sarbet showroom first. Come
                for a live roast demo, a cupping session, or just to talk beans
                with people who speak fluent harvest.
              </p>
              <div className="flex flex-wrap items-center gap-3.5 mt-7">
                <Link
                  href="/request-quote"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-b from-[#6B3F1D] to-[#4A2B12] hover:from-[#7D4922] hover:to-[#5C3418] text-[#F4EFE6] text-[11px] font-bold tracking-[0.15em] uppercase border border-[#7A4A22]/40 transition-all duration-200 shadow-md shadow-[#6B3F1D]/20 hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
                <a
                  href={buildWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FBF9F5] text-[#2D1B08] text-[11px] font-bold tracking-[0.12em] uppercase border border-[#E8DEC8] transition-all duration-200 shadow-sm hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Sales Desk</span>
                </a>
              </div>
            </div>

            {/* VISIT CARD */}
            <div className="lg:col-span-5">
              <div className="rounded-[1.75rem] bg-white border border-[#E8DEC8] p-7 shadow-[0_20px_50px_-24px_rgba(45,27,8,0.25)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[#8A6535]">Visit the Showroom</p>
                    <p className="font-display text-lg font-medium text-[#2D1B08] mt-1.5">
                      Sarbet, Addis Ababa
                    </p>
                    <p className="text-xs text-[#8A7460] mt-1 leading-relaxed">
                      {COMPANY.location.address}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-[#F4EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#6B3F1D] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#E8DEC8]/70 space-y-2.5 text-xs">
                  <p className="flex items-center gap-2 text-[#5C4836]">
                    <Clock className="w-3.5 h-3.5 text-[#A77B4A] shrink-0" />
                    Mon–Sat: 8:30 AM – 6:00 PM · Sun by appointment
                  </p>
                  <a
                    href={`tel:${COMPANY.phones.primarySalesRaw}`}
                    className="flex items-center gap-2 text-[#2D1B08] font-semibold hover:text-[#7A4A22] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A77B4A] shrink-0" />
                    {COMPANY.phones.sales[0].display}
                  </a>
                  <a
                    href={COMPANY.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#8A6535] font-semibold hover:text-[#2D1B08] transition-colors"
                  >
                    <Globe2 className="w-3.5 h-3.5 text-[#A77B4A] shrink-0" />
                    Open in Google Maps
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM TONE: DEEP ESPRESSO — COLUMNS & LEGAL ══ */}
      <footer className="relative bg-[#1A1414] text-[#A89070] overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9933E]/50 to-transparent" aria-hidden="true" />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[220px] bg-[#C9933E]/[0.05] blur-[130px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* ── MAIN COLUMNS ── */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* BRAND + STORY */}
            <div className="lg:col-span-2 space-y-6 lg:pr-10 flex flex-col items-center text-center">
              <Link href="/" className="group block focus:outline-none mb-2 w-full flex justify-center">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/images/logo/kuban-logo-tight.png"
                    alt="Kuban Master Ethiopia"
                    width={280}
                    height={88}
                    className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              <p className="text-[13px] leading-relaxed max-w-sm">
                The authorized sole representative of Kuban Coffee Roasters —
                engineering roasters in İzmir, Türkiye since 1996 and supporting
                them in 60+ countries. We bring that machinery to the birthplace
                of coffee, with installation, training, and spare parts handled
                entirely on Ethiopian ground, under{" "}
                <span className="text-[#E8C98A] font-medium">
                  {COMPANY.tradeEthiopiaGroup.name}
                </span>
                .
              </p>

              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#A89070] hover:text-[#C9933E] hover:border-[#C9933E]/50 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#A89070] hover:text-[#C9933E] hover:border-[#C9933E]/50 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={buildWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-[#A89070] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* MACHINES */}
            <div className="space-y-5">
              <h4 className="eyebrow text-[#C9933E]">The Machines</h4>
              <ul className="space-y-3 text-[12px]">
                <li>
                  <Link href="/products/supreme" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Supreme Series (1.8–24 kg)
                  </Link>
                </li>
                <li>
                  <Link href="/products/supreme-v2" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Supreme V2 · Siemens PLC
                  </Link>
                </li>
                <li>
                  <Link href="/products/base" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Base Series (500 g – 20 kg)
                  </Link>
                </li>
                <li>
                  <Link href="/products/industrial" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Industrial Plants (30–120 kg)
                  </Link>
                </li>
                <li>
                  <Link href="/products/grinders" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Grinders &amp; Green Bean Graders
                  </Link>
                </li>
                <li>
                  <Link href="/coffee-silos" className="hover:text-[#E8C98A] transition-colors duration-200">
                    Coffee Silos &amp; Dispensers
                  </Link>
                </li>
                <li className="pt-1">
                  <Link
                    href="/products"
                    className="text-[#C9933E] flex items-center gap-1 font-semibold hover:text-[#E8C98A] transition-colors duration-200"
                  >
                    Full Catalog <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className="space-y-5">
              <h4 className="eyebrow text-[#C9933E]">Support</h4>
                <ul className="space-y-3 text-[12px]">
                  <li>
                    <Link href="/services/installation" className="hover:text-[#E8C98A] transition-colors duration-200">
                      Installation &amp; Commissioning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/training" className="hover:text-[#E8C98A] transition-colors duration-200">
                      Roasting &amp; Cupping Training
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/spare-parts" className="hover:text-[#E8C98A] transition-colors duration-200">
                      Genuine Spare Parts
                    </Link>
                  </li>
                  <li>
                    <Link href="/showroom" className="hover:text-[#E8C98A] transition-colors duration-200">
                      Showroom Visits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-5">
                <h4 className="eyebrow text-[#C9933E]">Contact</h4>
                <div className="space-y-2.5 text-[12px]">
                  {COMPANY.phones.sales.map((p) => (
                    <a
                      key={p.raw}
                      href={`tel:${p.raw}`}
                      className="block font-mono hover:text-[#E8C98A] transition-colors duration-200"
                    >
                      {p.display}
                    </a>
                  ))}
                  <a
                    href={`mailto:${COMPANY.email.sales}`}
                    className="flex items-center gap-1.5 hover:text-[#E8C98A] transition-colors duration-200 pt-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C9933E]/60" />
                    <span>{COMPANY.email.sales}</span>
                  </a>
                </div>
              </div>
            </div>

          {/* BOTTOM BAR */}
          <div className="mt-12 pt-7 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
            <div className="text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>
              <p className="mt-0.5 text-[#A89070]/70">
                Machinery by Kuban Makina · İzmir, Türkiye · Est. 1996
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[#E8C98A] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-[#E8C98A] transition-colors duration-200">
                Contact Sales
              </Link>
              <a
                href={COMPANY.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8C98A] transition-colors duration-200 flex items-center gap-1"
              >
                Google Maps <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
