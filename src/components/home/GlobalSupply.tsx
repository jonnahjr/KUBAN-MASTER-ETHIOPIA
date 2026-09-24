import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe2, Package, Truck, MonitorSmartphone, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function GlobalSupply() {
  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] relative overflow-hidden">
      {/* Warm radial tint */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 25% 40%, #B37E2E 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* LEFT: IMAGE */}
          <Reveal className="lg:col-span-6 relative order-2 lg:order-1 mb-10 lg:mb-0">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#E8DEC8] shadow-[0_32px_70px_-30px_rgba(45,27,8,0.35)]">
              <Image
                src="/images/kuban-ref/ZOOM9580-cp.png"
                alt="Kuban roaster production with globally recognized components"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-[1.5s] hover:scale-105"
              />
              {/* Corner ticks — technical drawing feel */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F4EFE6]/80" aria-hidden="true" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F4EFE6]/80" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F4EFE6]/80" aria-hidden="true" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F4EFE6]/80" aria-hidden="true" />
            </div>

            {/* Floating white badge */}
            <div className="absolute -bottom-6 left-6 sm:left-10 px-6 py-4 rounded-2xl bg-white border border-[#E8DEC8] shadow-[0_20px_44px_-16px_rgba(45,27,8,0.3)] flex items-center gap-4">
              <Truck className="w-6 h-6 text-[#8A6535]" />
              <div>
                <span className="font-display text-lg font-semibold text-[#2D1B08] leading-none block nums">
                  2–3 Days
                </span>
                <span className="eyebrow text-[8px] text-[#8A7460] mt-1 block">
                  Worldwide Spare Parts
                </span>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: COPY + POINTS */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6 order-1 lg:order-2">
            <Reveal>
              <span className="marker-num">( Supply Chain )</span>
              <h2 className="font-display font-medium text-[#2D1B08] mt-4 leading-[1.1] tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem]">
                Global supply chain,{" "}
                <span className="font-display-italic text-gradient-gold">
                  sustainable production.
                </span>
              </h2>
              <p className="text-[#8A7460] text-sm sm:text-base mt-5 leading-relaxed">
                We manufacture with globally recognized components, ensuring all
                parts are accessible wherever you are. Should you need spare
                parts, we deliver worldwide within 2–3 days through expedited
                shipping — and our Addis Ababa warehouse stocks the high-wear
                components Ethiopian roasteries rely on daily.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Globe2,
                  title: "Globally Recognized Components",
                  desc: "Siemens, Autonics, and standard industrial parts available anywhere on earth.",
                },
                {
                  icon: Package,
                  title: "Stocked Local Inventory",
                  desc: "Motors, thermocouples, igniters, and seals stocked in Addis Ababa for immediate dispatch.",
                },
              ].map((pt, i) => (
                <Reveal key={pt.title} delay={i * 100}>
                  <div className="h-full p-5 rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#A77B4A]/50 hover:shadow-[0_20px_44px_-24px_rgba(45,27,8,0.3)] transition-all duration-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] border border-[#E8DEC8] flex items-center justify-center mb-3">
                      <pt.icon className="w-4.5 h-4.5 text-[#8A6535]" />
                    </div>
                    <h4 className="font-display text-[15px] font-semibold text-[#2D1B08]">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-[#8A7460] leading-relaxed mt-1.5">
                      {pt.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="space-y-3">
              {[
                "Factory-trained commissioning on Ethiopian highland altitude",
                "High-wear parts dispatched from the Addis warehouse same day",
              ].map((line) => (
                <div key={line} className="flex items-center gap-2.5 text-[13px] text-[#6B4F32]">
                  <span className="w-5 h-5 rounded-full bg-[#F4EFE6] border border-[#E8DEC8] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#7A4A22]" />
                  </span>
                  {line}
                </div>
              ))}
            </Reveal>

            <Reveal delay={250}>
              <Link
                href="/services/spare-parts"
                className="btn-gold px-7 py-3.5 text-[11px]"
              >
                <span>Spare Parts & Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoastManager() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#221B1B] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/kuban-ref/sw-kuban-bg1.jpg"
          alt="Kuban Roast Manager software background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221B1B] via-[#221B1B]/90 to-[#221B1B]/60" />
      </div>

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9933E]/40 to-transparent" aria-hidden="true" />

      {/* Giant outline ornament */}
      <span
        aria-hidden="true"
        className="absolute bottom-4 right-0 font-display font-black leading-none select-none text-outline-cream pointer-events-none hidden lg:block"
        style={{ fontSize: "clamp(120px, 13vw, 210px)" }}
      >
        V2
      </span>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#C9933E]/30 backdrop-blur-md mb-7">
                <MonitorSmartphone className="w-3.5 h-3.5 text-[#C9933E]" />
                <span className="eyebrow text-[#C9933E]">
                  Coffee Roasting Software
                </span>
              </div>

              <h2 className="font-display font-medium text-[#F4EFE6] tracking-tight leading-[1.06] text-4xl sm:text-5xl">
                Kuban{" "}
                <span className="font-display-italic text-gradient-gold-dark">
                  Roast Manager
                </span>
              </h2>

              <p className="font-display italic text-[#E8DCC8] text-lg mt-4">
                Manage your coffee roasting process with smart technology.
              </p>

              <p className="text-sm sm:text-base text-[#A89070] leading-relaxed mt-5 max-w-2xl">
                Revolutionize your roasting with our advanced software system —
                from precise control over roasting parameters to seamless profile
                management, our apps empower roasters to craft exceptional coffee
                with consistency and ease. Native Cropster and Artisan
                connectivity on every PLC-equipped machine.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <Link
                  href="/services/technical-support"
                  className="btn-gold px-7 py-3.5 text-[11px]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/products/supreme-v2"
                  className="btn-ghost-on-dark px-6 py-3.5 text-[11px]"
                >
                  <span>PLC-Equipped Roasters</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Feature ticks column */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <ul className="space-y-3.5">
                {[
                  "Real-time bean & exhaust temperature curves",
                  "Automated recipe replication across batches",
                  "Full roast telemetry logging & export",
                  "15\" Siemens touchscreen on V2 machines",
                ].map((f, i) => (
                  <li
                    key={f}
                    className="flex items-center gap-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] px-5 py-4"
                  >
                    <span className="font-display text-sm font-semibold text-[#C9933E] nums shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-[13px] text-[#E8DCC8] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
