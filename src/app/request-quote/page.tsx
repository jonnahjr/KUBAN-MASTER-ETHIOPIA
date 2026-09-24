import type { Metadata } from "next";
import { COMPANY } from "@/config/company";
import { QuoteWizard } from "@/components/quote/QuoteWizard";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Request a formal commercial quotation for Kuban coffee roasting machinery. ${COMPANY.legalName} provides professional B2B pricing for all machine configurations.`,
  openGraph: {
    title: `Request a Quote | ${COMPANY.name}`,
    description: "Get a formal quote for Kuban coffee roasting machinery in Ethiopia.",
    url: `${COMPANY.seo.siteUrl}/request-quote`,
  },
};

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PAGE HEADER */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#E7A93D] font-semibold">
            Commercial Inquiries
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request a Quote
          </h1>
          <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl mx-auto">
            Tell us about your business and machinery requirements. A Kuban Master Ethiopia specialist
            will respond with a tailored proposal.
          </p>
        </div>

        {/* QUOTE WIZARD */}
        <QuoteWizard />
      </div>
    </div>
  );
}
