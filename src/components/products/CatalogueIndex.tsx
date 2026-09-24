"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface SeriesLine {
  label: string;
  title: string;
  range: string;
  desc: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

const SERIES_LINES: SeriesLine[] = [
  {
    label: "Sample to Showcase",
    title: "Shop & Boutique Roasters",
    range: "0.5 kg – 6 kg",
    desc: "Compact footprints and quiet drums for cupping labs, training rooms, and cafés that roast in front of their customers. Absolute profile repeatability at the smallest scales.",
    link: "/products/supreme",
    linkLabel: "Explore the Supreme Series",
    image: "/images/kuban-ref/0000637_supreme-18.jpeg",
    imageAlt: "Kuban Supreme specialty coffee roaster",
  },
  {
    label: "The New Generation",
    title: "Supreme V2 — Siemens PLC",
    range: "1.8 kg – 24 kg",
    desc: 'A 15" Siemens touchscreen, premix combustion, and Kuban Roast Manager software. The V2 line is for roasteries that want their drum to think with them.',
    link: "/products/supreme-v2",
    linkLabel: "Explore the V2 Series",
    image: "/images/kuban-ref/supreme-v2-j.jpg",
    imageAlt: "Kuban Supreme V2 coffee roaster with Siemens PLC",
  },
  {
    label: "The Shop Workhorse",
    title: "Base Series",
    range: "500 g – 20 kg",
    desc: "Cast-iron reliability with manual or PLC control, configured before it ships. The line most Ethiopian roasteries actually start on — honest, repairable, and priced for real budgets.",
    link: "/products/base",
    linkLabel: "Explore the Base Series",
    image: "/images/kuban-ref/kuban-base-120kg-coffee-roaster00003.jpg",
    imageAlt: "Kuban Base shop coffee roaster",
  },
  {
    label: "Tons, Not Batches",
    title: "Industrial Plants",
    range: "30 kg – 120 kg",
    desc: "Pneumatic handling, destoners, afterburners, and SCADA-ready control rooms. Continuous output up to 480 kg/hour for exporters and commercial brands roasting at volume.",
    link: "/products/industrial",
    linkLabel: "Explore Industrial Plants",
    image: "/images/kuban-ref/1.jpg",
    imageAlt: "Kuban industrial coffee roasting plant",
  },
  {
    label: "Beyond the Drum",
    title: "Processing Equipment",
    range: "Grinders · Silos · Graders",
    desc: "Industrial steel-burr grinders, aroma-sealed degassing silos, and automated green-coffee size graders screening beans in 1/64-inch export grades.",
    link: "/products/grinders",
    linkLabel: "Explore Processing Equipment",
    image: "/images/kuban-ref/grinder-bg-2.jpg",
    imageAlt: "Kuban industrial coffee grinder",
  },
];

export function CatalogueIndex() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#1A1414] overflow-hidden">
      {/* Ambient decor */}
      <div className="absolute inset-0 texture-grain" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--coffee-caramel)]/8 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-0 font-display font-black leading-none select-none text-outline-cream pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(110px, 13vw, 200px)" }}
      >
        KUBAN
      </span>
      {/* Gold hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9933E]/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9933E]/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#C9933E]">( The Catalogue )</span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-[#F4EFE6] tracking-tight leading-[1.1] mt-4">
              Five lines, one standard of{" "}
              <span className="font-display-italic text-gradient-gold-dark">engineering.</span>
            </h2>
          </div>
          <p className="text-[#A89070] text-sm sm:text-base leading-relaxed max-w-md lg:text-right">
            Every Kuban machine is built in the same İzmir workshop. What
            changes between the lines is scale — and the way each one thinks
            about heat.
          </p>
        </Reveal>

        {/* DESKTOP: SPLIT — ACCORDION LIST + LIVE PREVIEW */}
        <div className="hidden lg:grid grid-cols-12 gap-12">
          {/* Accordion list */}
          <div className="col-span-6">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {SERIES_LINES.map((line, i) => {
                const isActive = active === i;
                return (
                  <div key={line.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="w-full text-left py-6 flex items-center gap-6 cursor-pointer group"
                    >
                      <span
                        className={`font-display text-sm font-semibold nums transition-colors duration-300 ${
                          isActive ? "text-[#C9933E]" : "text-white/25"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span
                          className={`block font-display text-xl xl:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                            isActive ? "text-[#F4EFE6]" : "text-white/50"
                          }`}
                        >
                          {line.title}
                        </span>
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[0.18em] mt-1 transition-colors duration-300 ${
                            isActive ? "text-[#C9933E]" : "text-white/30"
                          }`}
                        >
                          {line.label}
                        </span>
                      </span>
                      <span
                        className={`font-mono text-[11px] font-semibold nums transition-colors duration-300 ${
                          isActive ? "text-[#E8C98A]" : "text-white/25"
                        }`}
                      >
                        {line.range}
                      </span>
                      {/* Accent bar */}
                      <span
                        className={`w-[3px] self-stretch rounded-full transition-all duration-300 ${
                          isActive ? "bg-[#C9933E]" : "bg-transparent"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Expandable detail — accordion */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-7 pl-[calc(2rem+12px)] pr-4">
                          <p className="text-[13px] text-[#C8B89A] leading-relaxed max-w-lg">
                            {line.desc}
                          </p>
                          <Link
                            href={line.link}
                            className="group/link inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C9933E] hover:text-[#E8C98A] transition-colors"
                          >
                            <span>{line.linkLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sticky preview panel */}
          <div className="col-span-6">
            <div className="sticky top-28">
              <Link
                href={SERIES_LINES[active].link}
                className="group block relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-[#221B1B] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]"
              >
                <div className="relative aspect-[4/3]">
                  {SERIES_LINES.map((line, i) => (
                    <Image
                      key={line.title}
                      src={line.image}
                      alt={line.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover object-center transition-all duration-700 ease-out ${
                        active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-[#1A1414]/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-7 flex items-end justify-between gap-5">
                  <div>
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-[#E8DCC8] border border-white/15">
                      {SERIES_LINES[active].range}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#F4EFE6] mt-3">
                      {SERIES_LINES[active].title}
                    </h3>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#C9933E] mt-1">
                      {SERIES_LINES[active].label}
                    </p>
                  </div>
                  <span
                    className="w-11 h-11 rounded-full bg-[#F4EFE6] text-[#2D1B08] flex items-center justify-center shrink-0 group-hover:bg-[#E8C98A] transition-colors duration-300"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>

              {/* Preview footer note */}
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/30 mt-4 text-center">
                Hover a line to preview · Click to open the catalogue
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE: stacked expandable rows */}
        <div className="lg:hidden divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERIES_LINES.map((line, i) => {
            const isActive = active === i;
            return (
              <div key={line.title}>
                <button
                  type="button"
                  onClick={() => setActive(isActive ? -1 : i)}
                  aria-expanded={isActive}
                  className="w-full text-left py-5 flex items-center gap-4 cursor-pointer"
                >
                  <span
                    className={`font-display text-sm font-semibold nums ${
                      isActive ? "text-[#C9933E]" : "text-white/25"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-display text-lg font-medium tracking-tight ${
                        isActive ? "text-[#F4EFE6]" : "text-white/60"
                      }`}
                    >
                      {line.title}
                    </span>
                    <span className="block font-mono text-[10px] text-white/35 mt-0.5 nums">
                      {line.range}
                    </span>
                  </span>
                  <span
                    className={`text-[#C9933E] transition-transform duration-300 ${
                      isActive ? "rotate-90" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6">
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={line.image}
                          alt={line.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/70 to-transparent" />
                      </div>
                      <p className="text-[13px] text-[#C8B89A] leading-relaxed">{line.desc}</p>
                      <Link
                        href={line.link}
                        className="inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C9933E]"
                      >
                        <span>{line.linkLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
