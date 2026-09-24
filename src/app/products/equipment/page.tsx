import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Processing Equipment & Ancillary Machinery | Kuban Ethiopia",
  description: `Commercial coffee equipment in Ethiopia: industrial grinders, storage silos, pneumatic vacuum loaders, destoners, and afterburners by Kuban. Full roastery plant integration.`,
};

// ─── The roastery line, read as one continuous flow ───
const LINE_STAGES = [
  {
    label: "Before the Drum",
    value: "Graders & destoners",
    note: "Green coffee is classified by screen size on the Kuban Green Coffee Size Grader — 1/64-inch grades, 500 kg an hour — then freed of stones and foreign matter before a single bean reaches the drum. Export premiums are won or lost at this stage.",
    link: "/products/kuban-green-coffee-size-grader",
    linkLabel: "The Size Grader",
  },
  {
    label: "Around the Drum",
    value: "Loaders & afterburners",
    note: "Pneumatic vacuum loaders lift greens into the hopper without a shovel; afterburners take the smoke out of the exhaust so a roastery can sit inside a city building. Both tie into the roaster's own automation.",
    link: "/products",
    linkLabel: "Roasting Lines",
  },
  {
    label: "After the Drum",
    value: "Grinders & packaging flow",
    note: "The Kuban Bold, Sharp, and Sharp Pro grinders carry roasted coffee down to brew grind at 30 to 300 kg an hour, each leaving zero residue between single origins. Sized to sit directly under your roastery's output.",
    link: "/products/grinders",
    linkLabel: "The Grinder Range",
  },
  {
    label: "Between Batches",
    value: "Silos & degassing",
    note: "Modular stainless silos hold roasted coffee through its degassing window — 100 to 1,000 kg per battery — and feed packaging lines through pneumatic gates, so freshness survives the wait.",
    link: "/products/silos",
    linkLabel: "Silos & Dispensers",
  },
];

export default function EquipmentPage() {
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
            <span className="text-[#8A6535] font-medium">Processing Equipment</span>
          </nav>

          <p className="eyebrow text-[#8A6535] mb-4">Around the Roaster</p>

          <h1 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-3xl">
            Processing &amp;{" "}
            <span className="font-display-italic text-gradient-gold">Ancillary Equipment</span>
          </h1>

          <p className="text-[#6B4F32] text-base sm:text-lg leading-relaxed max-w-2xl">
            A roastery is one continuous line: green coffee graded and cleaned,
            lifted into the drum, roasted, ground, rested, and packed. The machines
            on this page are the quiet stages of that line — the ones that decide
            whether a great roast arrives in the cup.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-10 text-[11px] uppercase tracking-[0.14em] text-[#8A7460]">
            <span>Grading</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Loading</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Grinding</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Storage &amp; degassing</span>
          </div>
        </div>
      </section>

      {/* ═══════════ THE LINE — four numbered editorial rows ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material Flow</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              One line, from{" "}
              <span className="font-display-italic text-[#8A6535]">green to packed</span>.
            </h2>
          </Reveal>

          <div className="space-y-20 sm:space-y-24">
            {LINE_STAGES.map((stage, i) => (
              <Reveal key={stage.label}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                  <div className="lg:col-span-3">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow text-[#8A6535] mt-3">{stage.label}</p>
                  </div>
                  <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#2D1B08] tracking-tight">
                      {stage.value}
                    </h3>
                    <p className="text-[#6B4F32] text-base leading-relaxed mt-4 max-w-2xl">
                      {stage.note}
                    </p>
                    <Link
                      href={stage.link}
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors mt-6"
                    >
                      {stage.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FULL CATALOGUE ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every ancillary machine, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Grinders, graders, silos, and dispensers — sized and sequenced to fit
              the roaster you already run, with installation by our own technicians
              anywhere in Ethiopia.
            </p>
          </Reveal>
          <ProductGrid initialCategory="grinders" theme="coffee" />
        </div>
      </section>

      {/* ═══════════ NEXT STEP — plain text close ═══════════ */}
      <section className="py-16 border-t border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#6B4F32] text-sm max-w-xl leading-relaxed">
            Planning a full roastery line? Our engineers lay out the flow — drum
            position, loader height, silo battery, packaging table — before a single
            machine ships.
          </p>
          <div className="flex items-center gap-8 shrink-0">
            <Link
              href="/request-quote"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
            >
              Plan Your Line
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
            >
              Talk to an Engineer
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
