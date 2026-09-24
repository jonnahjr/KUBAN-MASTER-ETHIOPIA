import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Installation, Support & Spare Parts",
  description: `Professional coffee machinery services by ${COMPANY.name}: turnkey installation, local technical support, genuine Kuban spare parts, and custom configurations for Ethiopian coffee businesses.`,
  openGraph: {
    title: `Services | ${COMPANY.name}`,
    description: "Professional installation, technical support, spare parts, and customization for Kuban coffee machinery in Ethiopia.",
    url: `${COMPANY.seo.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* HERO — light */}
      <div className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-[#F4EFE6] to-[#FBF9F5]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(122,74,34,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-[#8A6535] font-semibold mb-4">
              Professional Services
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-medium text-[#2D1B08] tracking-tight leading-tight mb-6">
              The machine is only{" "}
              <span className="font-display-italic text-[#8A6535]">part of the story.</span>
            </h1>
            <p className="text-[#6B4F32] text-lg leading-relaxed max-w-2xl">
              Every Kuban roaster we supply is backed by local Ethiopian installation expertise,
              responsive technical support, genuine spare parts, and the ability to customize
              your machine before it ships from Turkey.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ETHIOPIA ALTITUDE NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-2xl bg-white border border-[#E8DEC8] p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8A6535] font-semibold mb-3">
              Ethiopia-Specific Expertise
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-medium text-[#2D1B08] mb-4">
              Calibrated for Ethiopian conditions.
            </h2>
            <p className="text-sm text-[#6B4F32] leading-relaxed">
              Addis Ababa sits at 2,355 metres above sea level — significantly impacting oxygen
              density, gas combustion efficiency, and draft pressure in roasting machines. Our
              technicians specifically tune airflow dampers, burner air-fuel mixtures, and
              thermocouple calibration for optimal performance in Ethiopian highland environments.
            </p>
            <p className="text-sm text-[#6B4F32] leading-relaxed mt-3">
              This is a service no overseas distributor can replicate. Our engineers are physically
              present in Addis Ababa, understanding both the machines and the local conditions.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Gas pressure verification for Ethiopian LPG and natural gas supply",
              "Altitude-adjusted burner air-fuel ratio calibration",
              "Three-phase 380V Ethiopian power supply configuration",
              "Local flue exhaust routing compliance",
              "Artisan and Cropster software setup in Addis Ababa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A77B4A] shrink-0" />
                <span className="text-[#5C4836]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA — DARK */}
      <section className="relative overflow-hidden bg-[var(--dark-section)]">
        <div className="absolute inset-0 texture-grain" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--coffee-caramel)]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8">
            <MessageSquare className="w-4 h-4 text-[#C9933E]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8DCC8]">Technical Support</span>
          </div>

          <h2 className="font-display font-medium text-[#F4EFE6] leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
            Questions about<br/>
            <span className="font-display-italic text-gradient-gold-dark">our services?</span>
          </h2>

          <p className="text-[#C8B89A] text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
            Our technical team is available by phone or WhatsApp to discuss your project requirements and provide accurate service pricing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={buildWhatsAppLink("installation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b558] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageSquare className="w-4 h-4" />
              Ask on WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phones.support[0].raw}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.06] border border-white/15 text-[#E8DCC8] text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#C9933E]" />
              Call Technical Team
            </a>
            <Link
              href="/request-quote"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-xs shadow-lg shadow-[var(--coffee-brown)]/20"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
