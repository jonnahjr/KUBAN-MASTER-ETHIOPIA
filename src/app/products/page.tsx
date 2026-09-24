import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CatalogueIndex } from "@/components/products/CatalogueIndex";
import { Reveal } from "@/components/ui/Reveal";
import {
  Flame,
  Cpu,
  SlidersHorizontal,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Roasters & Equipment Catalog | Kuban Master Ethiopia",
  description: `Explore the full catalog of Kuban coffee roasting and processing machinery in Ethiopia: Shop & Boutique Roasters (0.5kg–6kg), Commercial Roasters (12kg–18kg), Industrial Giants (30kg–120kg), and Essential Processing Equipment (Grinders, Silos, Size Graders). Backed by Trade Ethiopia Group.`,
  openGraph: {
    title: `Coffee Roasters & Equipment Catalog | ${COMPANY.name}`,
    description: "4-tier professional coffee roasting machinery and processing systems in Addis Ababa, Ethiopia.",
    url: `${COMPANY.seo.siteUrl}/products`,
  },
};

const VALUE_PROPS = [
  {
    icon: Cpu,
    title: "Smart Technology Integration",
    desc: "Full software compatibility with industry-leading roast profiling apps like Cropster and Artisan, alongside Kuban's proprietary Roast Manager software.",
  },
  {
    icon: SlidersHorizontal,
    title: "Full Customization",
    desc: "Built with manual or fully automatic PLC touchscreen systems, customized with bespoke RAL colors, polished brass/copper accents, and aesthetic roastery branding.",
  },
  {
    icon: GraduationCap,
    title: "End-to-End Solutions & Training",
    desc: "We don't just sell the box. We provide nationwide delivery, professional on-site installation, and certified coffee roasting & cupping training programs right here in Ethiopia.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] pt-24 text-[#2D1B08]">
      {/* ═══════════ 1. PAGE HERO ═══════════ */}
      <section className="relative overflow-hidden border-b border-[#E8DEC8] bg-[#F4EFE6] py-16 sm:py-24">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(122,74,34,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DEC8] mb-6">
              <Flame className="w-3.5 h-3.5 text-[#8A6535]" />
              <span className="text-[11px] font-semibold text-[#6B4F32] tracking-wide uppercase">
                Authorized Sole Distributor · Trade Ethiopia Group
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2D1B08] tracking-tight leading-tight mb-4">
              Coffee Roasters &amp;{" "}
              <span className="font-display-italic text-[#8A6535]">Processing Machinery</span>
            </h1>
            <p className="text-[#6B4F32] text-base sm:text-lg leading-relaxed max-w-2xl">
              Engineered by Kuban Makina (İzmir, Türkiye, since 1996) and delivered locally across
              Ethiopia. From 500g cupping labs to 120kg industrial export plants — empowering Ethiopian
              coffee enterprises to roast and value-add locally.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ 2. THE CATALOGUE — DARK INTERACTIVE INDEX ═══════════ */}
      <CatalogueIndex />

      {/* ═══════════ 3. VALUE PROPOSITIONS — plain typographic band ═══════════ */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#E8DEC8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal className="mb-10">
            <p className="eyebrow text-[#8A6535]">Every machine, regardless of line</p>
          </Reveal>
          <div className="space-y-8">
            {VALUE_PROPS.map((prop) => (
              <Reveal key={prop.title} delay={80}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 pb-8 border-b border-[#E8DEC8] last:border-0 last:pb-0">
                  <h4 className="font-display text-xl sm:text-2xl font-medium text-[#2D1B08] tracking-tight sm:col-span-5">
                    {prop.title}
                  </h4>
                  <p className="text-[#6B4F32] text-sm sm:text-base leading-relaxed sm:col-span-7">
                    {prop.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. FULL FILTERABLE CATALOG ═══════════ */}
      <section className="bg-[#FBF9F5] text-[#2D1B08] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#8A6535] font-bold">
              Complete Equipment Inventory
            </span>
            <h2 className="font-display font-medium text-[#2D1B08] text-3xl sm:text-4xl mt-2 tracking-tight">
              All Available Machinery
            </h2>
            <p className="text-sm text-[#6B4F32] mt-2 leading-relaxed">
              Filter by category, series, or batch capacity to inspect detailed specifications and request official quotes.
            </p>
          </div>

          <ProductGrid theme="coffee" />
        </div>
      </section>
    </div>
  );
}
