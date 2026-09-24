import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, FileText, MessageSquare, Phone } from "lucide-react";

// STATIC GENERATION
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

// DYNAMIC METADATA PER PRODUCT
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Machine Not Found" };

  return {
    title: product.name,
    description: `${product.shortDescription} Available in Ethiopia from ${COMPANY.legalName}. Professional installation and local technical support included.`,
    openGraph: {
      title: `${product.name} | ${COMPANY.name}`,
      description: product.shortDescription,
      url: `${COMPANY.seo.siteUrl}/products/${product.slug}`,
      images: [
        {
          url: product.image || "/images/hero/hero_kuban_roaster.jpg",
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

const FALLBACK_IMAGE = "/images/hero/hero_kuban_roaster.jpg";

function seriesName(series: string): string {
  switch (series) {
    case "base":
      return "Base Series";
    case "supreme":
      return "Supreme Series";
    case "supreme-v2":
      return "Supreme V2 Series";
    case "industrial":
      return "Industrial Line";
    case "grinders":
      return "Grinders";
    case "silos":
      return "Silos & Dispensers";
    default:
      return series.charAt(0).toUpperCase() + series.slice(1);
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const waProductLink = buildWhatsAppLink("product", {
    productName: product.name,
    capacity: product.capacityDisplay,
  });
  const waPriceLink = buildWhatsAppLink("price", { productName: product.name });

  // Structured data for this product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Kuban Coffee Roasters",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: COMPANY.name,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "ETB",
        description: "Price on request — contact for commercial quotation.",
      },
    },
  };

  // First three key features become the material story; the rest stay as a plain list.
  const materialNotes = [
    "Milled, welded, and balanced in İzmir before it is packed. The frame carries the heat, the bearings carry the speed, and nothing on the machine is there for show.",
    "Every curve of the roast is measured and remembered. Bean temperature, exhaust air, and rate of rise stream live into Artisan or Cropster while the machine holds the line you drew.",
    "Load the greens, close the door, and work. Independent motors for drum, blower, cooling, and stirrer mean the machine never waits on itself — batch after batch, all day.",
  ];

  const heroStats = [
    product.capacityDisplay,
    product.hourlyOutputDisplay,
    product.specifications.heatingSources.length > 0
      ? product.specifications.heatingSources.join(" · ")
      : null,
  ].filter(Boolean) as string[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#FBF9F5]">
        {/* ═══════════ EDITORIAL HERO — image right, typography left ═══════════ */}
        <section className="pt-32 sm:pt-36 pb-16 sm:pb-24 border-b border-[#E8DEC8]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {/* Breadcrumb — plain text */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#8A7460] mb-10"
            >
              <Link href="/" className="hover:text-[#2D1B08] transition-colors">Home</Link>
              <span className="text-[#C9B89E]">/</span>
              <Link href="/products" className="hover:text-[#2D1B08] transition-colors">Machinery</Link>
              <span className="text-[#C9B89E]">/</span>
              <span className="text-[#8A6535] font-medium">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left — typography */}
              <div className="lg:col-span-7">
                <p className="eyebrow text-[#8A6535] mb-4">{seriesName(product.series)}</p>

                <h1 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.05] text-4xl sm:text-5xl mb-4">
                  {product.name}
                </h1>

                <p className="text-[#6B4F32] text-base sm:text-lg leading-relaxed max-w-xl">
                  {product.shortDescription}
                </p>

                {heroStats.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-8 text-[11px] uppercase tracking-[0.14em] text-[#8A7460]">
                    {heroStats.map((stat, i) => (
                      <span key={stat} className="inline-flex items-center gap-8">
                        {i > 0 && (
                          <span className="w-1 h-1 rounded-full bg-[#C9933E]/60" aria-hidden="true" />
                        )}
                        {stat}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions — text links, no pill buttons */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10">
                  <Link
                    href={`/request-quote?machine=${product.slug}`}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Request a Formal Quote
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={waProductLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Ask on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`tel:${COMPANY.phones.primarySalesRaw}`}
                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {COMPANY.phones.sales[0].display}
                  </a>
                </div>

                <p className="text-[11px] text-[#8A7460] mt-8 max-w-md leading-relaxed">
                  Supplied and supported in Ethiopia by {COMPANY.name} — Authorized
                  Representative &amp; Distributor of Kuban Coffee Roasters, İzmir, Türkiye.
                  {product.inShowroom
                    ? " This machine is on the floor of our Sarbet showroom."
                    : " Commissioning and altitude calibration handled by our own technicians."}
                </p>
              </div>

              {/* Right — the machine itself */}
              <div className="lg:col-span-5">
                <ProductGallery
                  images={product.gallery}
                  productName={product.name}
                  fallbackImage={FALLBACK_IMAGE}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ THE MATERIAL — numbered editorial rows ═══════════ */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <Reveal className="max-w-3xl mb-20">
              <p className="eyebrow text-[#8A6535] mb-4">The Material</p>
              <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.12] text-3xl sm:text-4xl">
                What the machine is{" "}
                <span className="font-display-italic text-[#8A6535]">made of</span> —
                and how it behaves in the room.
              </h2>
              <p className="text-[#6B4F32] text-base leading-relaxed mt-5">
                {product.headline}. Read it the way you would read a spec sheet drawn by
                hand — no panels, no chrome, just the substance.
              </p>
            </Reveal>

            <div className="space-y-20 sm:space-y-24">
              {materialNotes.map((note, i) => (
                <Reveal key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-baseline">
                    <div className="lg:col-span-3">
                      <span className="font-display text-5xl sm:text-6xl font-light text-[#E2D2BB] leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="eyebrow text-[#8A6535] mt-3">
                        {product.keyFeatures[i]?.split(" ").slice(0, 2).join(" ") || "Engineering"}
                      </p>
                    </div>
                    <div className="lg:col-span-9 lg:pl-8 lg:border-l lg:border-[#E8DEC8]">
                      <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#2D1B08] tracking-tight">
                        {product.keyFeatures[i]}
                      </h3>
                      <p className="text-[#6B4F32] text-base leading-relaxed mt-4 max-w-2xl">
                        {note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ IDEAL FOR + SPECS — typographic band on cream ═══════════ */}
        <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8DEC8]">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Overview */}
              <div className="lg:col-span-5">
                <p className="eyebrow text-[#8A6535] mb-4">In Practice</p>
                <h2 className="font-display font-medium text-[#2D1B08] text-2xl sm:text-3xl tracking-tight mb-6">
                  Built for the work it will do here.
                </h2>
                <p className="text-[#6B4F32] text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-8 pt-6 border-t border-[#E8DEC8]">
                  <p className="eyebrow text-[#8A6535] mb-2">Ideal for</p>
                  <p className="text-[#2D1B08] text-sm leading-relaxed font-medium">
                    {product.idealFor}
                  </p>
                </div>
              </div>

              {/* Specs — hairline list */}
              <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-[#E8DEC8]">
                <ProductSpecs
                  specs={product.specifications}
                  hourlyOutput={product.hourlyOutputDisplay}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ REMAINING FEATURES + RELATED ═══════════ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            {product.keyFeatures.length > 3 && (
              <Reveal className="mb-20">
                <p className="eyebrow text-[#8A6535] mb-4">Also Included</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl">
                  {product.keyFeatures.slice(3).map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm text-[#2D1B08] leading-relaxed pt-3 border-t border-[#E8DEC8]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C9933E] mt-2 shrink-0" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <RelatedProducts currentProduct={product} />
          </div>
        </section>

        {/* ═══════════ FINAL CTA — dark band, plain text ═══════════ */}
        <section className="bg-[#2D1B08] py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow text-[#C9933E] mb-4">Next Step</p>
                <h2 className="font-display font-medium text-[#F4EFE6] text-2xl sm:text-3xl tracking-tight">
                  Interested in the {product.name}?
                </h2>
                <p className="text-[#A89070] text-sm leading-relaxed max-w-xl mt-4">
                  Request a formal price quote, book a showroom visit to inspect the
                  machine, or speak directly with a Kuban Master Ethiopia specialist.
                  Every enquiry is answered by an engineer, not a form.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start gap-4 lg:pl-10 lg:border-l lg:border-[#F4EFE6]/10">
                <Link
                  href={`/request-quote?machine=${product.slug}`}
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-[#F4EFE6] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Request a Quote
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={waProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-[#F4EFE6] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Talk on WhatsApp
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/showroom"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9933E] hover:text-[#F4EFE6] transition-colors"
                >
                  Visit the Showroom
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA — single hairline strip, no floating pill bar */}
        <div className="lg:hidden sticky bottom-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#E8DEC8] px-6 py-3 flex items-center justify-between gap-4">
          <Link
            href={`/request-quote?machine=${product.slug}`}
            className="text-xs font-bold uppercase tracking-[0.1em] text-[#8A6535]"
          >
            Request Quote
          </Link>
          <a
            href={waProductLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D1B08]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
