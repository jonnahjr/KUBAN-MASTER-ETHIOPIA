import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kuban Supreme Series Specialty Roasters | 1.8kg to 24kg Ethiopia",
  description: `Kuban Supreme Series — the next generation of coffee roasting technology. PID control, premix burners, double-walled drums, PLC recipe execution with Cropster & Artisan. Available from ${COMPANY.name} in Addis Ababa.`,
};

const MATERIALS = [
  {
    label: "Drum",
    value: "Double-jacketed carbon steel",
    note: "Internal mixing vanes fold the beans through a smooth convective current — even development without scorching, batch after batch.",
  },
  {
    label: "Burner",
    value: "Modulating premix combustion",
    note: "Gas and air mix fully before ignition. The flame responds instantly to the profile, with lower emissions and no wasted fuel.",
  },
  {
    label: "Control",
    value: "PLC touchscreen with recipe memory",
    note: "Record a roast once, replay it forever. Bean temperature, air temperature, and rate of rise are tracked and stored curve by curve.",
  },
  {
    label: "Software",
    value: "Artisan & Cropster native",
    note: "Every machine connects over USB or ethernet, streaming live roast data into the profiling tools your quality team already uses.",
  },
];

const CAPACITIES = [
  { label: "1.8 kg", slug: "kuban-supreme-1-8kg", note: "Cupping rooms & labs" },
  { label: "3 kg", slug: "kuban-supreme-3kg", note: "Boutique cafés" },
  { label: "6 kg", slug: "kuban-supreme-6kg", note: "The specialty standard" },
  { label: "12 kg", slug: "kuban-supreme-12kg", note: "Growing roasteries" },
  { label: "18 kg", slug: "kuban-supreme-18kg", note: "Wholesale output" },
  { label: "24 kg", slug: "kuban-supreme-24kg", note: "National brands" },
];

export default function SupremeSeriesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      {/* ═══════════ EDITORIAL HERO — full-bleed material image ═══════════ */}
      <div className="relative min-h-[78svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kuban-ref/supreme-2-banner.jpg"
            alt="Kuban Supreme specialty coffee roaster"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep espresso wash for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/95 via-[#1A1414]/45 to-[#1A1414]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414]/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 pt-44 w-full">
          <p className="eyebrow text-[#C9933E] mb-4">The Specialty Flagship</p>

          <h1 className="font-display font-medium text-[#F4EFE6] tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl mb-5">
            Kuban{" "}
            <span className="font-display-italic text-gradient-gold-dark">Supreme Series</span>
          </h1>

          <p className="text-[#D4C5AF] text-base sm:text-lg leading-relaxed max-w-2xl">
            A roaster built the way instrument makers build instruments.
            Double-jacketed steel, premix combustion, and a control system that
            remembers every curve you have ever drawn — so the roast you loved
            in June is the roast you pour in December.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.14em] text-[#A89070]">
            <span>1.8 – 24 kg per batch</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>LPG · Natural Gas · Electric</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Custom finishes</span>
          </div>
        </div>
      </div>

      {/* ═══════════ MATERIAL EDITORIAL — alternating rows, no boxes ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section opener */}
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              What the machine is{" "}
              <span className="font-display-italic text-[#8A6535]">made of</span> —
              and why each choice matters.
            </h2>
            <p className="text-[#6B4F32] text-base leading-relaxed mt-5">
              Four engineering decisions define how a Supreme roasts. Read them
              the way you would read a spec sheet drawn by hand — no panels, no
              chrome, just the substance.
            </p>
          </Reveal>

          {/* Alternating editorial rows */}
          <div className="space-y-20 sm:space-y-24">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.label}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                  {/* Big number + label */}
                  <div className="lg:col-span-3">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow text-[#8A6535] mt-3">{m.label}</p>
                  </div>

                  {/* Value + story */}
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

          {/* Ambient sensor note — plain text between hairlines */}
          <Reveal>
            <div className="mt-24 py-12 border-t border-b border-[#E8DEC8]">
              <p className="eyebrow text-[#8A6535] mb-3">Also sensing</p>
              <p className="font-display text-xl sm:text-2xl font-light text-[#2D1B08] leading-relaxed max-w-3xl">
                Roasting begins when the hopper lid opens. Cooling begins the
                moment beans discharge. An ambient humidity and temperature
                sensor reports the room&apos;s conditions in real time — because
                the air around the drum is part of every roast.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CAPACITIES — typographic grid on cream ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-[#8A6535] mb-3">Capacities</p>
              <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
                Six sizes. One roast philosophy.
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
            >
              <span>Compare all models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
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

      {/* ═══════════ THE MACHINES — full grid ═══════════ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every Supreme, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Each machine below ships with local installation, altitude
              calibration for Addis Ababa, and a two-year international
              warranty — commissioning handled by our own technicians.
            </p>
          </Reveal>
          <ProductGrid initialCategory="shop-roasters" initialSeries="supreme" theme="coffee" />
        </div>
      </section>
    </div>
  );
}
