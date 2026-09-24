import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Silos & Bean Dispensers | Kuban Master Ethiopia",
  description:
    "Kuban Coffee Dispensers and storage silos in Ethiopia. Cylindrical wall-mounted silos, rotating carousel systems, and stainless rectangular dispensers. Authorized distributor in Addis Ababa.",
  openGraph: {
    title: "Coffee Silos & Bean Dispensers | Kuban Master Ethiopia",
    description:
      "Inspirational storage and display solutions for coffee beans, dragees, and cereals. Supplied and installed in Addis Ababa, Ethiopia.",
    url: `${COMPANY.seo.siteUrl}/products/silos`,
  },
};

// ─── The three silo families, told as material ───
const SILO_FAMILIES = [
  {
    label: "Cylindrical",
    value: "Glass, chrome, and a lever",
    note: "A food-grade plexiglass cylinder over a stainless, brass, or copper mechanism — wall-mounted where the counter must stay clear, or grouped into rotating carousels of four and six for a wall of single origins. The lever drops a measured portion without crushing a single bean; the hermetic lid keeps humidity out of the aroma.",
    range: "4 kg wall unit · 16 kg 4-bank carousel · 24 kg 6-bank carousel",
    link: "/products/kuban-cylindrical-coffee-silo-4kg",
    linkLabel: "Start with the 4 kg",
  },
  {
    label: "Rectangular",
    value: "A flush wall of coffee",
    note: "Flat-sided stainless dispensers built to sit flush against each other on a shelf — no gaps, no wasted millimeters. Slide-gate dispensing, shatter-resistant front window, finishes in mirror chrome, polished brass, or any RAL powder coat. The quiet, orderly way to show eight origins at once.",
    range: "4 kg shelf unit · 7 kg high-volume · 10 kg with scoop",
    link: "/products/kuban-rectangular-coffee-dispenser-4kg",
    linkLabel: "The Shelf Series",
  },
  {
    label: "Systems",
    value: "From counter to roastery plant",
    note: "At the large end, the Ring 8 and Crown systems turn display into architecture — octagonal and crescent layouts of fourteen silos, 60 to 165 kg of coffee presented like jewelry. Beyond the counter, modular degassing batteries in 304 stainless rest roasted coffee and feed packaging lines directly.",
    range: "Ring 8 · 60 kg · Crown · 165 kg · Degassing batteries to 1,000 kg",
    link: "/products/kuban-crown-dispenser-165kg",
    linkLabel: "The Large Systems",
  },
];

// ─── Customization, told as four plain steps ───
const CUSTOM_STEPS = [
  {
    label: "RAL Colors",
    note: "Any color from the RAL architectural catalog, powder-coated to sit inside your interior rather than argue with it.",
  },
  {
    label: "Your Logo",
    note: "Laser-engraved or plate-mounted on the front face of each silo — the roastery's name carried at the point of the pour.",
  },
  {
    label: "Finishing",
    note: "High-luster mirror brass, brushed stainless chrome, vintage antique copper, or matte obsidian black.",
  },
  {
    label: "Sizing",
    note: "Dimensions and capacities adapted on a project basis — counters, columns, and shelf runs measured before manufacture.",
  },
];

export default function CoffeeSilosPage() {
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
            <span className="text-[#8A6535] font-medium">Silos &amp; Dispensers</span>
          </nav>

          <p className="eyebrow text-[#8A6535] mb-4">Storage &amp; Display · İzmir</p>

          <h1 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-3xl">
            Coffee Bean{" "}
            <span className="font-display-italic text-gradient-gold">Dispensers</span>
          </h1>

          <p className="text-[#6B4F32] text-base sm:text-lg leading-relaxed max-w-2xl">
            Storage that protects the roast and displays it — cylinders of glass and
            chrome that shield beans from heat and humidity while turning a counter
            or retail wall into the quietest kind of showcase. From a 4 kg wall
            bracket to a 165 kg crescent of fourteen silos.
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-10 text-[11px] uppercase tracking-[0.14em] text-[#8A7460]">
            <span>4 kg – 1,000 kg</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>Brass · Chrome · Copper · RAL</span>
            <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
            <span>In the Sarbet showroom</span>
          </div>
        </div>
      </section>

      {/* ═══════════ THE FAMILIES — three numbered editorial rows ═══════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl mb-20">
            <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
            <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
              Three families —{" "}
              <span className="font-display-italic text-[#8A6535]">glass, steel, and scale</span>.
            </h2>
          </Reveal>

          <div className="space-y-20 sm:space-y-24">
            {SILO_FAMILIES.map((family, i) => (
              <Reveal key={family.label}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                  <div className="lg:col-span-3">
                    <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow text-[#8A6535] mt-3">{family.label}</p>
                  </div>
                  <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
                    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#2D1B08] tracking-tight">
                        {family.value}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A7460]">
                        {family.range}
                      </span>
                    </div>
                    <p className="text-[#6B4F32] text-base leading-relaxed mt-4 max-w-2xl">
                      {family.note}
                    </p>
                    <Link
                      href={family.link}
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors mt-6"
                    >
                      {family.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CUSTOMIZATION — typographic band on cream ═══════════ */}
      <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[#8A6535] mb-3">Tailored to Your Brand</p>
              <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
                Made to order, in every sense.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
              <p className="text-[#6B4F32] text-base leading-relaxed">
                Colors, dimensions, capacities, and finishing are chosen before a
                single sheet is cut. Most Ethiopian cafés order chrome or brass;
                roastery retail walls tend toward full RAL palettes matched to the
                brand.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {CUSTOM_STEPS.map((step, i) => (
              <Reveal key={step.label} delay={i * 60}>
                <div className="pt-4 border-t border-[#2D1B08]/50">
                  <span className="font-display text-3xl font-light text-[#B9A480]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium text-[#2D1B08] mt-2">
                    {step.label}
                  </h3>
                  <p className="text-[#6B4F32] text-sm leading-relaxed mt-2">
                    {step.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FULL CATALOGUE ═══════════ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535] mb-3">The Catalogue</p>
            <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight">
              Every silo, with full specifications.
            </h2>
            <p className="text-[#6B4F32] text-sm mt-3 max-w-2xl">
              Each unit arrives with genuine mounting hardware and factory seals,
              installed and warranted locally by {COMPANY.name} — replacement
              cylinders and parts stocked in Addis Ababa.
            </p>
          </Reveal>
          <ProductGrid initialCategory="silos" theme="coffee" />
        </div>
      </section>

      {/* ═══════════ NEXT STEP — plain text close ═══════════ */}
      <section className="py-16 border-t border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-[#6B4F32] text-sm max-w-xl leading-relaxed">
            Before we quote, we ask about your space — counter length, wall
            structure, how many origins you pour. A few minutes of questions gives
            you a layout plan, not just a price.
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
