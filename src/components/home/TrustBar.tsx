import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    no: "01",
    title: "29 Years of Kuban Engineering",
    body: "Every machine is built in İzmir, Türkiye by Kuban Makina — a manufacturer trusted by roasters in more than 60 countries since 1996.",
    image: "/images/kuban-ref/kuban-workshop-photo-16.webp",
    alt: "Kuban workshop in İzmir",
  },
  {
    no: "02",
    title: "Technicians on Ethiopian Ground",
    body: "Installation, altitude tuning, and repairs handled by our own Addis Ababa crew — no waiting for engineers to fly in from abroad.",
    image: "/images/kuban-ref/kuban-service-after-sale-06.webp",
    alt: "Kuban technicians at work",
  },
  {
    no: "03",
    title: "Certified Roaster Training",
    body: "Hands-on roasting and cupping courses at our Sarbet lab, built around Yirgacheffe, Sidama, and Guji profiles — certificates included.",
    image: "/images/kuban-ref/ZOOM8797.jpg",
    alt: "Roasting training session",
  },
  {
    no: "04",
    title: "Spare Parts on the Shelf",
    body: "Motors, thermocouples, igniters, and seals stocked locally, so a worn part never stops your roasting season for weeks.",
    image: "/images/kuban-ref/AUTONICS-222.jpg",
    alt: "Genuine Kuban spare parts",
  },
];

export function TrustBar() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#FBF9F5] overflow-hidden">
      {/* Soft warm glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-[#B37E2E]/8 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      {/* Giant outline ornament */}
      <span
        aria-hidden="true"
        className="absolute -top-8 right-0 font-display font-black leading-none select-none text-outline-espresso pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(140px, 14vw, 230px)" }}
      >
        1996
      </span>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-9 border-b border-[#CFC3B0]/60">
          <div className="max-w-2xl">
            <span className="marker-num">( Why Kuban Master Ethiopia )</span>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.06] text-3xl sm:text-4xl lg:text-5xl mt-4">
              Global machinery,{" "}
              <span className="font-display-italic text-gradient-gold">local hands.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[13px] sm:text-sm text-[#6B4F32] leading-relaxed md:text-right">
            Buying a roaster is easy — keeping it roasting is everything. Here is
            what makes working with us different from ordering a machine overseas.
          </p>
        </Reveal>

        {/* EDITORIAL NUMBERED ROWS */}
        <div className="divide-y divide-[#CFC3B0]/60 border-y border-[#CFC3B0]/60">
          {PILLARS.map((p, i) => (
            <Reveal key={p.no} delay={i * 70}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-9 lg:py-11">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-display text-2xl font-semibold text-[#D8CCBC] group-hover:text-[#7A4A22] transition-colors duration-300 nums">
                    {p.no}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-[#2D1B08] group-hover:text-[#7A4A22] transition-colors duration-300 leading-snug">
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="lg:col-span-4">
                  <p className="text-[13px] sm:text-sm text-[#8A7460] leading-relaxed max-w-md">
                    {p.body}
                  </p>
                </div>

                {/* Image + arrow */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-5">
                  <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-xl overflow-hidden border border-[#E8DEC8] shrink-0 group-hover:border-[#A77B4A]/50 transition-colors duration-300">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="112px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className="w-9 h-9 rounded-full border border-[#E8DEC8] bg-white flex items-center justify-center text-[#8A6535] group-hover:bg-[#2D1B08] group-hover:text-white group-hover:border-[#2D1B08] group-hover:rotate-45 transition-all duration-300"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom link */}
        <Reveal delay={300} className="mt-10 flex justify-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
          >
            <span>Read the full story — since 1996</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
