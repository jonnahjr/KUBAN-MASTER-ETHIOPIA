import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Coffee Roasting Plants | 30kg, 60kg, 120kg Ethiopia",
  description: `Kuban Industrial coffee roasters in Ethiopia: 30kg, 60kg, and 120kg batch capacities. High-throughput commercial coffee production lines with pneumatic loaders, destoners, and SCADA automation.`,
  openGraph: {
    title: `Industrial Coffee Roasting Plants | ${COMPANY.name}`,
    description:
      "Continuous commercial roasting factories from 30kg to 120kg batch capacities with complete afterburner and SCADA integration.",
    url: `${COMPANY.seo.siteUrl}/products/industrial`,
  },
};

const MATERIALS = [
  {
    label: "Throughput",
    value: "Up to 480 kg per hour, continuously",
    note: "Three plants cover the entire industrial range: 30 kg batches for dedicated plants, 60 kg for factories running multiple shifts, and 120 kg producing nearly half a ton of roasted coffee every hour.",
  },
  {
    label: "Handling",
    value: "Fully pneumatic, bean to silo",
    note: "Green coffee is vacuum-loaded, weighed, destoned, and fed to the drum without a bag being lifted. After the roast, beans discharge pneumatically into degassing silos ready for packaging.",
  },
  {
    label: "Control",
    value: "Industrial PLC with SCADA integration",
    note: "Recipe execution, batch logging, and remote telemetry come standard. The plant reports to your control room — temperatures, throughput, burner status — shift after shift.",
  },
  {
    label: "Emissions",
    value: "Afterburner abatement built in",
    note: "Roasting smoke passes through an afterburner before it ever leaves the building, keeping your facility compliant with environmental requirements and your neighbors happy.",
  },
];

const TURNKEY = [
  "Custom factory CAD layouts",
  "Pneumatic conveyance & destoning design",
  "On-site technical commissioning",
  "Operator training at handover",
  "Local spare parts availability",
];

export default function IndustrialSeriesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      {/* ═══════════ EDITORIAL HERO ═══════════ */}
      <div className="relative min-h-[78svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kuban-ref/1.jpg"
            alt="Kuban industrial coffee roasting plant"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/95 via-[#1A1414]/45 to-[#1A1414]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414]/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-44 w-full">
          <p className="eyebrow text-[#C9933E] mb-4">Industrial Plants</p>

          <h1 className="font-display font-medium text-[#F4EFE6] tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl mb-5">
            Factories that{" "}
            <span className="font-display-italic text-gradient-gold-dark">roast coffee.</span>
          </h1>

          <p className="text-[#D4C5AF] text-base sm:text-lg leading-relaxed max-w-2xl">
            For exporters and commercial brands roasting at volume — plants
            built around continuous throughput, pneumatic handling, and
            automation that reports to your control room.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.14em] text-[#A89070]">
            <span>30 / 60 / 120 kg batches</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Up to 480 kg/h</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>SCADA ready</span>
          </div>
        </div>
      </div>

      {/* ═══════════ MATERIAL EDITORIAL — no boxes ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              Engineering for{" "}
              <span className="font-display-italic text-[#8A6535]">tons, not batches.</span>
            </h2>
            <p className="text-[#6B4F32] text-base leading-relaxed mt-5">
              An industrial roasting plant is a system, not a machine. These
              are the four systems that make the difference between a factory
              that runs and one that stalls.
            </p>
          </Reveal>

          <div className="space-y-20 sm:space-y-24">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.label}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                  <div className="lg:col-span-3">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow text-[#8A6535] mt-3">{m.label}</p>
                  </div>

                  <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#2D1B08] tracking-tight">
                      {m.value}
                    </h3>
                    <p className="text-[#6B4F32] text-base leading-relaxed mt-4 max-w-2xl">
                      {m.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Turnkey roll — typographic strip */}
          <Reveal>
            <div className="mt-24 py-12 border-t border-b border-[#E8DEC8]">
              <p className="eyebrow text-[#8A6535] mb-5">
                Turnkey factory implementation, from our Addis Ababa engineers
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {TURNKEY.map((t) => (
                  <span
                    key={t}
                    className="font-display text-lg sm:text-xl font-light text-[#2D1B08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CTA — plain typographic band ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-[#8A6535] mb-3">Planning a plant?</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-3xl sm:text-4xl tracking-tight leading-tight">
              We&apos;ll design the floor around{" "}
              <span className="font-display-italic text-[#8A6535]">the machine.</span>
            </h2>
            <p className="text-[#6B4F32] text-sm sm:text-base leading-relaxed mt-4">
              Send us your target output and building dimensions. Our engineers
              return a CAD layout, a utility plan, and a commissioning schedule.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/request-quote?category=industrial-roasters"
              className="btn-gold px-8 py-4 text-[11px]"
            >
              <span>Request Plant Proposal</span>
            </Link>
            <Link
              href="/contact"
              className="btn-ghost-gold px-8 py-4 text-[11px]"
            >
              <span>Consult an Engineer</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ THE MACHINES ═══════════ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Three plants. Full specifications.
            </h2>
          </Reveal>
          <ProductGrid initialCategory="industrial-roasters" initialSeries="all" theme="coffee" />
        </div>
      </section>
    </div>
  );
}
