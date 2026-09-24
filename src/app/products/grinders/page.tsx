import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial & Industrial Coffee Grinders | Kuban Master Ethiopia",
  description:
    "Official Kuban coffee grinders in Ethiopia: Kuban Bold (KM01), Kuban Sharp (KM09), Kuban Turk (KM05), Industrial Sharp Pro (KM10), and Spice Grinder. Stainless steel burrs, CE certified, 2-year warranty.",
  openGraph: {
    title: "Kuban Coffee Grinders | Kuban Master Ethiopia",
    description:
      "Precision commercial and industrial coffee grinders from 16 kg/h up to 300 kg/h with zero residue retention and 100mm, 120mm & 200mm steel burrs.",
    url: `${COMPANY.seo.siteUrl}/products/grinders`,
  },
};

// ─── The three engineering decisions, told as material ───
const ENGINEERING = [
  {
    label: "The Burrs",
    value: "Hardened steel, milled for tons",
    note: "100 mm, 120 mm, and 200 mm disc sets are milled from high-carbon stainless alloy and hold their slicing edge across eight to ten tons of coffee. Calibration runs down to 50–100 microns — the flour-fine grind a real Jebena ceremony asks for.",
  },
  {
    label: "The Motor",
    value: "Vertical, and therefore empty",
    note: "Because the motor stands vertical and the chamber discharges by centrifugal airflow, no ground coffee stays behind. Grind Yirgacheffe, then Guji, then Sidama, back to back — the cup in the next bag tastes only like itself.",
  },
  {
    label: "The Duty",
    value: "Built for the whole day, not the demo",
    note: "Cast aluminum and steel chassis, thermal motor protection, CE-certified European manufacture in İzmir. These grinders sit on packaging lines and roastery counters through harvest season without complaint — and every unit is backed by our Addis Ababa spare-parts stock.",
  },
];

// ─── Typographic comparison — five grinders, one table, no boxes ───
const GRINDER_TABLE = [
  {
    model: "Kuban Bold",
    code: "KM01",
    slug: "kuban-bold-commercial-coffee-grinder",
    burrs: "100 mm hardened steel",
    motor: "1100 W vertical",
    turkish: "30 kg/h",
    espresso: "50 kg/h",
    filter: "70 kg/h",
    for: "Café counters & retail",
  },
  {
    model: "Kuban Sharp",
    code: "KM09",
    slug: "kuban-sharp-semi-industrial-coffee-grinder",
    burrs: "120 mm hardened steel",
    motor: "2200 W heavy-duty",
    turkish: "90 kg/h",
    espresso: "120 kg/h",
    filter: "200 kg/h",
    for: "Wholesale & packaging",
  },
  {
    model: "Kuban Turk",
    code: "KM05",
    slug: "kuban-turk-turkish-coffee-grinder",
    burrs: "100 mm special grind",
    motor: "1100 W",
    turkish: "16 kg/h",
    espresso: "—",
    filter: "—",
    for: "Jebena & Turkish foam",
  },
  {
    model: "Kuban Sharp Pro",
    code: "KM10",
    slug: "kuban-sharp-pro-industrial-coffee-grinder",
    burrs: "200 mm stainless discs",
    motor: "5.5 kW 3-phase",
    turkish: "150 kg/h",
    espresso: "200 kg/h",
    filter: "300 kg/h",
    for: "Factory mass production",
  },
  {
    model: "Kuban Spice",
    code: "Spice Series",
    slug: "kuban-spice-grinder",
    burrs: "Stainless cauldron blade",
    motor: "Thermal-protected",
    turkish: "—",
    espresso: "—",
    filter: "Batch 1–3 min",
    for: "Spices & multi-grain",
  },
];

export default function GrindersPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      {/* ═══════════ EDITORIAL HERO — pure typography on cream ═══════════ */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-2 text-xs text-[#8A7460] mb-10">
            <Link href="/" className="hover:text-[#2D1B08] transition-colors">Home</Link>
            <span className="text-[#C9B89E]">/</span>
            <Link href="/products" className="hover:text-[#2D1B08] transition-colors">Machinery</Link>
            <span className="text-[#C9B89E]">/</span>
            <span className="text-[#8A6535] font-medium">Grinders</span>
          </nav>

          <p className="eyebrow text-[#8A6535] mb-4">Kuban · İzmir · CE Certified</p>

          <h1 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-3xl">
            Coffee{" "}
            <span className="font-display-italic text-gradient-gold">Grinders</span>
          </h1>

          <p className="text-[#6B4F32] text-base sm:text-lg leading-relaxed max-w-2xl">
            Easy, rapid, high-quality grinding — from extra-fine Turkish and Jebena
            coffee to espresso and coarse filter batches. Hardened steel burrs of
            100, 120, and 200 millimeters; vertical zero-retention motors; European
            CE standards. Five machines, sixteen to three hundred kilograms an hour,
            all with local Ethiopian warranty.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-10 text-[11px] uppercase tracking-[0.14em] text-[#8A7460]">
            <span>5 models</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>16 – 300 kg per hour</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>50 – 100 micron capability</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>In stock in Addis Ababa</span>
          </div>
        </div>
      </section>

      {/* ═══════════ THE MATERIAL — three numbered editorial rows ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              Three decisions define the grind —{" "}
              <span className="font-display-italic text-[#8A6535]">steel, air, and duty</span>.
            </h2>
          </Reveal>

          <div className="space-y-20 sm:space-y-24">
            {ENGINEERING.map((item, i) => (
              <Reveal key={item.label}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                  <div className="lg:col-span-3">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow text-[#8A6535] mt-3">{item.label}</p>
                  </div>
                  <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#2D1B08] tracking-tight">
                      {item.value}
                    </h3>
                    <p className="text-[#6B4F32] text-base leading-relaxed mt-4 max-w-2xl">
                      {item.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON — typographic table, hairlines only ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow text-[#8A6535] mb-3">The Range</p>
              <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
                Five grinders, read side by side.
              </h2>
            </div>
            <p className="text-xs text-[#8A7460] max-w-xs leading-relaxed">
              Hourly output follows grind profile — the finer the grind, the slower
              the pass through the burrs.
            </p>
          </Reveal>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#2D1B08]/70">
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Model</th>
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Burrs</th>
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Motor</th>
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Turkish</th>
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Espresso</th>
                  <th className="py-3 pr-6 eyebrow text-[#2D1B08]">Filter</th>
                  <th className="py-3 eyebrow text-[#2D1B08]">For</th>
                </tr>
              </thead>
              <tbody>
                {GRINDER_TABLE.map((g) => (
                  <tr
                    key={g.slug}
                    className="border-b border-[#D8CBB0] hover:bg-[#FBF9F5]/60 transition-colors"
                  >
                    <td className="py-4 pr-6">
                      <Link
                        href={`/products/${g.slug}`}
                        className="group block"
                      >
                        <span className="font-display text-lg font-medium text-[#2D1B08] group-hover:text-[#8A6535] transition-colors">
                          {g.model}
                        </span>
                        <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8A7460] mt-0.5">
                          {g.code}
                        </span>
                      </Link>
                    </td>
                    <td className="py-4 pr-6 text-sm text-[#2D1B08]">{g.burrs}</td>
                    <td className="py-4 pr-6 text-sm text-[#6B4F32]">{g.motor}</td>
                    <td className="py-4 pr-6 text-sm font-semibold text-[#8A6535]">{g.turkish}</td>
                    <td className="py-4 pr-6 text-sm text-[#6B4F32]">{g.espresso}</td>
                    <td className="py-4 pr-6 text-sm text-[#6B4F32]">{g.filter}</td>
                    <td className="py-4 text-sm text-[#6B4F32]">{g.for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════ FULL CATALOGUE ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every grinder, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Each machine ships with local installation, a two-year international
              warranty, and spare parts stocked in Addis Ababa — commissioning
              handled by our own technicians.
            </p>
          </Reveal>
          <ProductGrid initialCategory="grinders" initialSeries="all" theme="coffee" />
        </div>
      </section>

      {/* ═══════════ NEXT STEP — plain text close ═══════════ */}
      <section className="py-16 border-t border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#6B4F32] text-sm max-w-xl leading-relaxed">
            Test particle uniformity on the showroom floor — the burrs, the
            zero-retention chamber, and the grind adjustment are all live in
            Sarbet, Addis Ababa.
          </p>
          <div className="flex items-center gap-8 shrink-0">
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/showroom"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
            >
              Visit the Showroom
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
