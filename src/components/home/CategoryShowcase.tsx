"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface MachineCategory {
  id: string;
  number: string;
  title: string;
  range: string;
  subtitle: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  badge: string;
}

const CATEGORIES: MachineCategory[] = [
  {
    id: "supreme",
    number: "01",
    title: "Supreme Series",
    range: "1.8 – 24 kg",
    subtitle: "Specialty Coffee Roasters",
    description:
      "Touchscreen Siemens PLC, variable drum speed, and dual-burner thermal precision engineered for specialty coffee craft.",
    href: "/products/supreme",
    image: "/images/kuban-ref/0000637_supreme-18.jpeg",
    imageAlt: "Kuban Supreme specialty coffee roaster",
    badge: "Flagship Specialty",
  },
  {
    id: "base",
    number: "02",
    title: "Base Series",
    range: "500 g – 20 kg",
    subtitle: "Commercial Shop Roasters",
    description:
      "Cast iron drum workhorses built for nonstop daily production in commercial cafes, micro-roasteries, and tasting labs.",
    href: "/products/base",
    image: "/images/kuban-ref/kuban-base-120kg-coffee-roaster00003.jpg",
    imageAlt: "Kuban Base shop coffee roaster",
    badge: "Commercial Shop",
  },
  {
    id: "industrial",
    number: "03",
    title: "Industrial Plants",
    range: "30 / 60 / 120 kg",
    subtitle: "Continuous Processing Lines",
    description:
      "High-throughput commercial lines outputting up to 480 kg/hour, complete with pneumatic loaders, destoners, and SCADA automation.",
    href: "/products/industrial",
    image: "/images/kuban-ref/1.jpg",
    imageAlt: "Kuban industrial coffee roasting plant",
    badge: "Up to 480 kg/h",
  },
  {
    id: "grinders",
    number: "04",
    title: "Grinders",
    range: "Café to Industrial",
    subtitle: "Precision Milling Systems",
    description:
      "Heavy-duty steel flat and conical burr grinders processing from 16 kg/h up to 300 kg/h with absolute micronic uniformity.",
    href: "/products/grinders",
    image: "/images/kuban-ref/grinder-bg-2.jpg",
    imageAlt: "Kuban commercial and industrial coffee grinders",
    badge: "Micrometric Burrs",
  },
  {
    id: "silos",
    number: "05",
    title: "Coffee Silos",
    range: "Storage & Dispensing",
    subtitle: "Degassing & Green Storage",
    description:
      "Cylindrical and rectangular aroma-sealed silos with acrylic windows for showroom display and bulk roastery batch management.",
    href: "/coffee-silos",
    image: "/images/kuban-ref/kare-silolar.jpg",
    imageAlt: "Kuban modular coffee silos and dispensers",
    badge: "Aroma Locked",
  },
  {
    id: "software",
    number: "06",
    title: "Roast Manager Software",
    range: "PLC · Cropster · Artisan",
    subtitle: "Digital Roast Profiling",
    description:
      "Real-time thermal curve tracking, automated recipe replication, and full telemetry logging integrated with Cropster and Artisan.",
    href: "/services/technical-support",
    image: "/images/kuban-ref/sw-kuban-bg1.jpg",
    imageAlt: "Kuban Roast Manager software and automation telemetry",
    badge: "Industry 4.0",
  },
];

export function CategoryShowcase() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F4EFE6] overflow-hidden">
      {/* Edge hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* HEADER */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 pb-8 border-b border-[#CFC3B0]/50">
          <div className="max-w-xl">
            <span className="marker-num">( The Machines — 01 to 06 )</span>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[44px] mt-4">
              One machine for every{" "}
              <span className="font-display-italic text-gradient-gold">
                stage of your journey
              </span>
            </h2>
          </div>

          <div className="max-w-md md:text-right">
            <p className="text-[13px] sm:text-sm text-[#6B4F32] leading-relaxed">
              Starting with a 500 g sample roaster in your cupping lab, or feeding
              a 120 kg export line — every machine below is in our catalog, our
              showroom, or our parts warehouse.
            </p>
            <div className="mt-4 flex items-center md:justify-end gap-2 text-[11px] font-bold tracking-wider uppercase text-[#8A6535]">
              <span>Every Model · Tested &amp; Tuned for Ethiopia</span>
            </div>
          </div>
        </Reveal>

        {/* ── DESKTOP: SPLIT INDEX ── */}
        <div className="hidden lg:grid grid-cols-12 gap-10">
          {/* List */}
          <div className="col-span-6 divide-y divide-[#CFC3B0]/60 border-y border-[#CFC3B0]/60">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group w-full text-left py-5 flex items-center gap-5 cursor-pointer transition-colors duration-300 ${
                  active === i ? "pl-4" : "pl-0"
                }`}
              >
                <span
                  className={`font-display text-sm font-semibold nums transition-colors duration-300 ${
                    active === i ? "text-[#7A4A22]" : "text-[#CFC3B0]"
                  }`}
                >
                  {c.number}
                </span>
                <span className="flex-1">
                  <span
                    className={`block font-display text-xl font-medium transition-colors duration-300 ${
                      active === i ? "text-[#2D1B08]" : "text-[#6B4F32]"
                    }`}
                  >
                    {c.title}
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#A77B4A] mt-0.5">
                    {c.subtitle}
                  </span>
                </span>
                <span
                  className={`font-mono text-[11px] font-semibold nums transition-colors duration-300 ${
                    active === i ? "text-[#8A6535]" : "text-[#CFC3B0]"
                  }`}
                >
                  {c.range}
                </span>
                {/* Sliding accent bar */}
                <span
                  className={`h-9 w-[3px] rounded-full transition-all duration-300 ${
                    active === i ? "bg-[#7A4A22] scale-y-100" : "bg-transparent scale-y-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div className="col-span-6">
            <div className="sticky top-28">
              <Link
                href={cat.href}
                className="group block relative rounded-[1.75rem] overflow-hidden bg-[#221B1B] border border-[#2D1B08] shadow-[0_40px_80px_-40px_rgba(45,27,8,0.45)]"
              >
                <div className="relative aspect-[4/3]">
                  {CATEGORIES.map((c, i) => (
                    <Image
                      key={c.id}
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover object-center transition-all duration-700 ease-out ${
                        active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-[#1A1414]/25 to-transparent" />
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-0 inset-x-0 p-7 flex items-end justify-between gap-6">
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#E8DCC8] border border-white/15">
                      {cat.badge}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#F4EFE6] mt-3">
                      {cat.title}
                    </h3>
                    <p className="text-[12px] text-[#C8B89A] leading-relaxed mt-1.5 max-w-sm">
                      {cat.description}
                    </p>
                  </div>
                  <span
                    className="w-11 h-11 rounded-full bg-[#F4EFE6] text-[#2D1B08] flex items-center justify-center shrink-0 group-hover:bg-[#E8C98A] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ── MOBILE: SNAP CAROUSEL ── */}
        <div className="lg:hidden">
          <div className="scroll-snap-x flex gap-5 overflow-x-auto pb-4 -mx-6 px-6">
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="group relative shrink-0 w-[82vw] max-w-[340px] rounded-[1.5rem] overflow-hidden bg-[#221B1B] border border-[#2D1B08]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="82vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-[#1A1414]/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] font-semibold text-[#C9933E] nums">
                      {c.number}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#E8DCC8] border border-white/15">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-[#F4EFE6]">
                    {c.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#A89070] mt-0.5 nums">
                    {c.range}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM METRIC STRIP */}
        <Reveal
          delay={200}
          className="mt-12 pt-8 border-t border-[#CFC3B0]/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#6B4F32]"
        >
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#A77B4A]" />
              500g Sample to 120kg Industrial Batch Capacity
            </span>
            <span className="hidden md:inline text-[#CFC3B0]">|</span>
            <span className="hidden md:inline">
              ISO 9001 · CE Certified · Direct Factory Warranty
            </span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#8A6535] hover:text-[#2D1B08] transition-colors self-start sm:self-auto"
          >
            <span>Compare All Models & Tech Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
