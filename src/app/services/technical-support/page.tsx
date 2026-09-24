import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle, MessageSquare, Phone, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Support",
  description: `Local technical support for Kuban coffee roasters in Ethiopia. ${COMPANY.name} provides rapid response burner diagnostics, thermocouple calibration, and preventive maintenance in Addis Ababa.`,
};

export default function TechnicalSupportPage() {
  const service = SERVICES.find((s) => s.id === "technical-support")!;

  return (
    <div className="min-h-screen bg-[#FBF9F5] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-xs text-[#8A7460] hover:text-[#2D1B08] mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          All Services
        </Link>

        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8A6535] font-semibold mb-3">Service</p>
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-[#2D1B08] mb-4">{service.title}</h1>
            <p className="text-[#6B4F32] text-base leading-relaxed">{service.description}</p>
          </div>

          <div className="bg-white border border-[#E8DEC8] rounded-2xl p-6">
            <h2 className="text-sm font-bold text-[#8A6535] uppercase tracking-wider mb-4">Local Addis Ababa Presence</h2>
            <p className="text-sm text-[#5C4836] leading-relaxed">{service.ethiopiaContext}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="font-display text-base font-semibold text-[#2D1B08] mb-4">Service Includes</h2>
              <ul className="space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#A77B4A] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#5C4836]">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-base font-semibold text-[#2D1B08] mb-4">Deliverables</h2>
              <ul className="space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#8A6535] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#5C4836]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8DEC8]">
            <a
              href={buildWhatsAppLink("spare_parts")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-600/30 bg-white text-[#2D1B08] text-sm font-semibold hover:border-emerald-500/60 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              WhatsApp Technical Team
            </a>
            <a
              href={`tel:${COMPANY.phones.support[0].raw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E8DEC8] text-[#2D1B08] text-sm font-semibold hover:border-[#A77B4A]/60 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8A6535]" />
              {COMPANY.phones.support[0].display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
