"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, ArrowRight, MapPin } from "lucide-react";

const REGIONS = [
  {
    name: "Yirgacheffe",
    note: "Floral, tea-like, citrus spark — the cup that put Ethiopian specialty on the map.",
  },
  {
    name: "Sidama",
    note: "Balanced stone fruit and silky body, grown at altitude under enset shade.",
  },
  {
    name: "Guji",
    note: "Jammy blueberry and jasmine from the fast-rising origin next to Shakiso.",
  },
  {
    name: "Harrar",
    note: "Wild, winey natural process — the heritage bean of ancient trade routes.",
  },
];

export function OriginStory() {
  const [region, setRegion] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#F4EFE6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent" aria-hidden="true" />

      {/* Coffee-ring ornament */}
      <div
        className="coffee-ring absolute -right-24 -top-24 w-[340px] h-[340px] pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* LEFT: STORY COPY */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="marker-num">( The Origin Story )</span>
              <h2 className="font-display font-medium text-[#2D1B08] mt-4 leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem]">
                Coffee was born here.{" "}
                <span className="font-display-italic text-gradient-gold">
                  Now the roasting stays here.
                </span>
              </h2>
              <div className="space-y-4 text-[#6B4F32] text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
                <p>
                  Ethiopia gave the world <em>Coffea arabica</em> — and with it,
                  the most diverse cup profiles on Earth. For decades, those
                  beans left the country green while others captured the
                  roasting value abroad.
                </p>
                <p>
                  We exist to change that. Kuban Master Ethiopia puts
                  world-class roasting, grinding, and grading machinery within
                  reach of the people who know these beans best — so the flavor
                  premium stays with Ethiopian roasters, exporters, and
                  washing stations.
                </p>
              </div>
            </Reveal>

            {/* Region tabs — interactive cup profile switcher */}
            <Reveal delay={150} className="mt-9">
              <div className="flex flex-wrap gap-2 mb-5">
                {REGIONS.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setRegion(i)}
                    className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] border transition-all duration-300 cursor-pointer ${
                      region === i
                        ? "bg-[#2D1B08] text-[#F4EFE6] border-[#2D1B08] shadow-md"
                        : "bg-white text-[#6B4F32] border-[#E8DEC8] hover:border-[#A77B4A]/60"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
              <div
                key={region}
                className="animate-rise-in rounded-2xl bg-white border border-[#E8DEC8] p-5 flex items-start gap-3.5"
              >
                <MapPin className="w-4 h-4 text-[#A77B4A] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[13px] font-display font-semibold text-[#2D1B08]">
                    {REGIONS[region].name}
                  </p>
                  <p className="text-xs text-[#8A7460] leading-relaxed mt-1">
                    {REGIONS[region].note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: IMAGE + TRAINING SPOTLIGHT CARD */}
          <div className="lg:col-span-6 relative">
            <Reveal from="scale">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#E8DEC8] shadow-[0_32px_70px_-30px_rgba(45,27,8,0.35)] bg-[#221B1B]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/images/products/hero-kuban-cafe-roaster.mp4"
                  poster="/images/kuban-ref/crops.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  aria-label="Kuban cafe roaster in action at the Sarbet showroom"
                />
                {/* Warm cream wash so the frame sits with the light section */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B08]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>

            {/* Training spotlight card overlapping image */}
            <Reveal delay={200}>
              <div className="relative lg:absolute lg:-bottom-10 lg:-left-10 mt-6 lg:mt-0 max-w-sm rounded-[1.75rem] bg-[#221B1B] border border-[#2D1B08]/20 p-7 shadow-[0_30px_70px_-25px_rgba(45,27,8,0.5)]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-[#C9933E]/30 mb-4">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C9933E]" />
                  <span className="eyebrow text-[#C9933E]">Training Academy</span>
                </div>
                <h3 className="font-display text-xl font-medium text-[#F4EFE6] leading-snug">
                  Learn to roast Ethiopian coffee — in Ethiopia.
                </h3>
                <p className="text-[13px] text-[#A89070] leading-relaxed mt-2.5">
                  Certified roasting &amp; cupping courses at our Sarbet lab.
                  Small cohorts, Kuban machines, SCA-aligned cupping.
                </p>
                <Link
                  href="/services/training"
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C9933E] hover:text-[#E8C98A] transition-colors"
                >
                  <span>See the Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
