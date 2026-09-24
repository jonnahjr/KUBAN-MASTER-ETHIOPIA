import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kuban Base Series Shop Roasters | 500g to 20kg Ethiopia",
  description: `Kuban Base Series shop coffee roasters — easy control systems for beginners and professionals alike. Flexible design, excellent ergonomics, Artisan/Cropster USB compatibility. Available from ${COMPANY.name}.`,
};

const MATERIALS = [
  {
    label: "Control",
    value: "Easy enough to learn, deep enough to trust",
    note: "Base machines run manual controls or PLC software — whichever suits your team. Beginners start roasting on day one; professionals still get thermocouple precision and repeatability.",
  },
  {
    label: "Drum",
    value: "Cast-iron front plate, your choice of wall",
    note: "Choose a double wall for thermal stability across back-to-back batches, or a single wall for faster response. Either way, the drum heats evenly and holds its temperature.",
  },
  {
    label: "Connection",
    value: "USB link to Artisan & Cropster",
    note: "Plug the machine into your laptop and your roast curves appear in the software you already use — no bridges, no hacks, no extra hardware.",
  },
  {
    label: "Heating",
    value: "Premix or atmospheric, LPG or natural gas",
    note: "Configure the burner to your fuel supply and your flavor goals. Premix burns cleaner and modulates; atmospheric delivers the classic direct character.",
  },
];

const CONFIGURATIONS = [
  "Drum: single or double wall",
  "Control: manual or PLC",
  "Heating: LPG or natural gas",
  "Burner: premix or atmospheric",
  "Probes: 3 mm or 6 mm",
  "Finish: any RAL color",
];

const CAPACITIES = [
  { label: "500 g", slug: "kuban-base-500g", note: "Sample & cupping" },
  { label: "1.5 kg", slug: "kuban-base-1-5kg", note: "Café bench" },
  { label: "3 kg", slug: "kuban-base-3kg", note: "Growing cafés" },
  { label: "5 kg", slug: "kuban-base-5kg", note: "The bestseller" },
  { label: "10 kg", slug: "kuban-base-10kg", note: "Wholesale-ready" },
  { label: "15 kg", slug: "kuban-base-15kg", note: "Regional roasteries" },
  { label: "20 kg", slug: "kuban-base-20kg", note: "Commercial anchor" },
];

export default function BaseSeriesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      {/* ═══════════ EDITORIAL HERO — kept, refined ═══════════ */}
      <div className="relative min-h-[82svh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kuban-ref/kuban-base-120kg-coffee-roaster00003.jpg"
            alt="Kuban Base shop coffee roaster"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414]/95 via-[#1A1414]/45 to-[#1A1414]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414]/70 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-14 pt-44 w-full">
          <p className="eyebrow text-[#C9933E] mb-4">The Shop Workhorse</p>

          <h1 className="font-display font-medium text-[#F4EFE6] tracking-tight leading-[1.02] text-4xl sm:text-5xl lg:text-6xl mb-5">
            Kuban{" "}
            <span className="font-display-italic text-gradient-gold-dark">Base Series</span>
          </h1>

          <p className="text-[#D4C5AF] text-base sm:text-lg leading-relaxed max-w-2xl">
            From a 500 g sample drum to a 20 kg commercial anchor — the Base
            line is how most roasteries actually start. Honest controls,
            cast-iron reliability, and a price that leaves budget for beans.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.14em] text-[#A89070]">
            <span>500 g – 20 kg per batch</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Seven machines</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>CE certified</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>2-year international warranty</span>
          </div>

          {/* Jump links — plain text */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10">
            <a
              href="#material"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-white transition-colors"
            >
              Read the Material
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#capacities"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-white transition-colors"
            >
              Seven Sizes
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════ MATERIAL EDITORIAL — 2x2 Grid ═══════════ */}
      <section id="material" className="scroll-mt-24 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-16 lg:mb-24">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              Everything you need,{" "}
              <span className="font-display-italic text-[#8A6535]">nothing you don&apos;t.</span>
            </h2>
            <p className="text-[#6B4F32] text-base leading-relaxed mt-5">
              The Base series is deliberately simple. Four decisions define the
              machine — and each one is yours to configure before it ships from
              İzmir.
            </p>
          </Reveal>

          {/* 2x2 Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div className="group relative">
                  {/* Decorative Number */}
                  <div className="absolute -top-10 -left-6 lg:-left-10 text-[8rem] sm:text-[10rem] font-display font-light text-[#E8DEC8]/30 leading-none select-none z-0 transition-colors duration-500 group-hover:text-[#E8DEC8]/60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 pt-8 border-t border-[#2D1B08]/10 group-hover:border-[#8A6535] transition-colors duration-500">
                    <p className="eyebrow text-[#8A6535] mb-4">{m.label}</p>
                    <h3 className="font-display text-2xl sm:text-[28px] font-medium text-[#2D1B08] tracking-tight leading-tight mb-4">
                      {m.value}
                    </h3>
                    <p className="text-[#6B4F32] text-sm leading-relaxed max-w-sm">
                      {m.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ DARK BAND — configuration + capacities on espresso ═══════════ */}
      <section className="bg-[#2D1B08] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Configuration roll */}
          <Reveal>
            <p className="eyebrow text-[#C9933E] mb-8">Configured before it ships</p>
            <div className="flex flex-wrap gap-x-10 gap-y-4 max-w-4xl">
              {CONFIGURATIONS.map((c, i) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-10 font-display text-lg sm:text-xl font-light text-[#F4EFE6]"
                >
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
                  )}
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Capacities — typographic, dark */}
          <div id="capacities" className="scroll-mt-24 mt-24 pt-16 border-t border-[#F4EFE6]/10">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow text-[#C9933E] mb-3">Capacities</p>
                <h2 className="font-display font-medium text-[#F4EFE6] text-2xl sm:text-3xl tracking-tight">
                  Seven sizes from{" "}
                  <span className="font-display-italic text-[#C9933E]">lab to production.</span>
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-[#F4EFE6] transition-colors"
              >
                <span>Compare all series</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-12">
              {CAPACITIES.map((cap, i) => (
                <Reveal key={cap.slug} delay={i * 50}>
                  <Link href={`/products/${cap.slug}`} className="group block">
                    <span className="font-display text-3xl sm:text-4xl font-medium text-[#F4EFE6] group-hover:text-[#C9933E] transition-colors">
                      {cap.label}
                    </span>
                    <span className="block text-[11px] text-[#A89070] mt-1.5">
                      {cap.note}
                    </span>
                    <span className="block mt-3 h-px w-8 bg-[#C9933E]/50 group-hover:w-full transition-all duration-500" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE MACHINES — light catalogue ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every Base, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Backed by CE-certified manufacturing, a two-year international
              warranty, and lifetime spare-parts support from Addis Ababa.
            </p>
          </Reveal>
          <ProductGrid initialCategory="shop-roasters" initialSeries="base" theme="coffee" />
        </div>
      </section>

      {/* ═══════════ NEXT STEP — plain text close ═══════════ */}
      <section className="py-16 border-t border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#6B4F32] text-sm max-w-xl leading-relaxed">
            Undecided between sizes? Tell us your weekly volume and we&apos;ll
            point you at the machine that pays itself back fastest — no
            upselling, just arithmetic.
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
