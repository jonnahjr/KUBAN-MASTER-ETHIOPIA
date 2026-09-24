import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kuban Supreme V2 Series Roasters | 1.8kg to 24kg Siemens PLC — Ethiopia",
  description: `The new generation of Kuban coffee roasting technology: 15" Siemens Touchscreen, Siemens PLC, premix burners, and Kuban Roast Manager software. Supreme V2 roasters (1.8, 3, 6, 12, 18, 24 kg) available from ${COMPANY.name} in Addis Ababa.`,
  openGraph: {
    title: `Kuban Supreme V2 Series | ${COMPANY.name}`,
    description:
      "New-generation specialty roasters with Siemens PLC automation and premix combustion.",
    url: `${COMPANY.seo.siteUrl}/products/supreme-v2`,
  },
};

const MATERIALS = [
  {
    label: "Automation",
    value: '15" Siemens touchscreen · Siemens PLC',
    note: "A control system built specifically for coffee roasting — not adapted from another industry. Every parameter lives one touch away, and the system logs the roast as it happens.",
  },
  {
    label: "Burner",
    value: "Environment-friendly premix",
    note: "Lower CO, CO₂, and NOX emissions than atmospheric burners, with higher energy savings and full compliance with global emission standards. Cleaner combustion, cleaner cup.",
  },
  {
    label: "Software",
    value: "Kuban Roast Manager",
    note: "Precise control over roasting parameters with seamless profile management. Design a curve once, and the machine walks the beans through it — with airflow driven by variable frequency drives.",
  },
  {
    label: "Build",
    value: "Premium materials, tested rigorously",
    note: "Each machine is assembled from high-grade components and passes strict quality control before leaving İzmir — engineered to withstand commercial roasting duty for many years.",
  },
];

const SENSORS = [
  "Gas pressure",
  "Inlet temperature",
  "Temperature & humidity",
  "Airflow pressure (PA)",
];

const CAPACITIES = [
  { label: "1.8 kg", slug: "kuban-supreme-v2-1-8kg", note: "Cafés & labs" },
  { label: "3 kg", slug: "kuban-supreme-v2-3kg", note: "Boutique roasteries" },
  { label: "6 kg", slug: "kuban-supreme-v2-6kg", note: "Growing specialty brands" },
  { label: "12 kg", slug: "kuban-supreme-v2-12kg", note: "Commercial output" },
  { label: "18 kg", slug: "kuban-supreme-v2-18kg", note: "Continuous production" },
  { label: "24 kg", slug: "kuban-supreme-v2-24kg", note: "National brands" },
];

export default function SupremeV2Page() {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      {/* ═══════════ EDITORIAL HERO ═══════════ */}
      <div className="relative min-h-[78svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/kuban-supreme-v2-6-p250429339_4.jpg"
            alt="Kuban Supreme V2 coffee roaster with Siemens PLC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/95 via-[#1A1414]/45 to-[#1A1414]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414]/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-44 w-full">
          <p className="eyebrow text-[#C9933E] mb-4">The New Generation</p>

          <h1 className="font-display font-medium text-[#F4EFE6] tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl mb-5">
            Kuban{" "}
            <span className="font-display-italic text-gradient-gold-dark">Supreme V2</span>
          </h1>

          <p className="text-[#D4C5AF] text-base sm:text-lg leading-relaxed max-w-2xl">
            Reliable, strong, built to last — and now thinking. The V2 pairs
            Kuban&apos;s drum craft with a Siemens PLC brain and clean premix
            combustion, in six sizes from café bench to production floor.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.14em] text-[#A89070]">
            <span>1.8 – 24 kg per batch</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Siemens PLC</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Premix burner</span>
          </div>
        </div>
      </div>

      {/* ═══════════ MATERIAL EDITORIAL — no boxes ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              New technology, in service of an{" "}
              <span className="font-display-italic text-[#8A6535]">old craft.</span>
            </h2>
            <p className="text-[#6B4F32] text-base leading-relaxed mt-5">
              The V2 generation is defined by four things. Together they turn a
              well-built drum into a repeatable, data-rich roasting system.
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

          {/* Sensor roll — typographic strip */}
          <Reveal>
            <div className="mt-24 py-12 border-t border-b border-[#E8DEC8]">
              <p className="eyebrow text-[#8A6535] mb-5">Full sensor suite, standard</p>
              <div className="flex flex-wrap gap-x-10 gap-y-3">
                {SENSORS.map((s) => (
                  <span
                    key={s}
                    className="font-display text-lg sm:text-xl font-light text-[#2D1B08]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CAPACITIES ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-14">
            <p className="eyebrow text-[#8A6535] mb-3">Capacities</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Four sizes, tailored to your floor.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-xl">
              Sizing, RAL colors, and special designs are available on a
              project basis — the machine adapts to your space, not the other
              way around.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {CAPACITIES.map((cap, i) => (
              <Reveal key={cap.slug} delay={i * 60}>
                <Link href={`/products/${cap.slug}`} className="group block">
                  <span className="font-display text-3xl sm:text-4xl font-medium text-[#2D1B08] group-hover:text-[#8A6535] transition-colors">
                    {cap.label}
                  </span>
                  <span className="block text-[11px] text-[#8A7460] mt-1.5">
                    {cap.note}
                  </span>
                  <span className="block mt-3 h-px w-8 bg-[#C9933E]/50 group-hover:w-full transition-all duration-500" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE MACHINES ═══════════ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every Supreme V2, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Local installation, altitude calibration, Roast Manager setup,
              and a two-year international warranty are included with every
              machine.
            </p>
          </Reveal>
          <ProductGrid initialCategory="shop-roasters" initialSeries="supreme-v2" theme="coffee" />
        </div>
      </section>
    </div>
  );
}
