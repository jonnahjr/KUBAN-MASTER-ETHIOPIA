import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  MapPin,
  Calendar,
  Zap,
  Building,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Installation Projects & Case Studies | Kuban Master Ethiopia",
  description: `Explore commercial coffee roaster installations across Addis Ababa and Ethiopia by ${COMPANY.name}. Case studies from specialty cafes, cupping export laboratories, and wholesale industrial plants.`,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-24">
      {/* PAGE HERO */}
      <div className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[var(--coffee-base)] to-[var(--bg-primary)]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(231,169,61,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Building className="w-3.5 h-3.5 text-[#E7A93D]" />
              <span className="text-[11px] font-semibold text-[#B5C9C7] tracking-wide uppercase">
                Proven Track Record · Ethiopia
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Featured <span className="text-[var(--coffee-brown)]">Installations &amp; Projects</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-2xl">
              From specialty micro-roasteries in Bole to export QC laboratories and high-capacity
              industrial plants in Kality — see how Kuban Master Ethiopia engineers turnkey coffee
              roasting solutions on Ethiopian soil.
            </p>
          </div>
        </div>
      </div>

      {/* PROJECTS LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="rounded-3xl bg-[var(--coffee-base)] border border-white/8 overflow-hidden hover:border-[#E7A93D]/30 transition-all duration-300"
            >
              <div className="p-8 sm:p-10 lg:p-12 space-y-8">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#E7A93D]/10 border border-[#E7A93D]/30 text-[#E7A93D]">
                        {project.clientType}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5 text-[#E7A93D]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {project.title}
                    </h2>
                  </div>

                  <div className="shrink-0 text-left md:text-right">
                    <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-medium">Machine Model</p>
                    <p className="text-sm font-bold text-[#DDE8E6] mt-0.5">{project.machineModel}</p>
                    <p className="text-xs font-mono text-[#E7A93D] mt-0.5">{project.capacityWeekly}</p>
                  </div>
                </div>

                {/* SUMMARY */}
                <p className="text-[#B5C9C7] text-base leading-relaxed">
                  {project.summary}
                </p>

                {/* THREE-COLUMN DETAILS: CHALLENGE, SOLUTION, OUTCOME */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 space-y-2">
                    <p className="text-xs font-bold text-amber-400/90 uppercase tracking-wider">The Challenge</p>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{project.challenge}</p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 space-y-2">
                    <p className="text-xs font-bold text-[#E7A93D] uppercase tracking-wider">Engineering Solution</p>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="rounded-2xl bg-emerald-950/20 border border-emerald-500/20 p-5 space-y-2">
                    <p className="text-xs font-bold text-[var(--muted-tan)] uppercase tracking-wider">Verified Outcome</p>
                    <p className="text-xs text-[#B5C9C7] leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--muted-tan)] shrink-0 mt-0.5" />
                      <span>{project.outcome}</span>
                    </p>
                  </div>
                </div>

                {/* TAGS & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-[var(--text-muted)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={buildWhatsAppLink("installation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#E7A93D] hover:text-[#e09e52] transition-colors"
                  >
                    <span>Discuss a similar setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#171720] to-[var(--coffee-base)] border border-white/10 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Planning Your Own Roastery Project in Ethiopia?
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto leading-relaxed">
            Our engineering team conducts full pre-installation site surveys, airflow pressure calculations, and turnkey gas commissioning in Addis Ababa and regions across Ethiopia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-quote"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#E7A93D] to-[#b37532] hover:from-[#d89b5b] hover:to-[#E7A93D] text-white text-xs font-bold shadow-lg shadow-[#E7A93D]/20 transition-all"
            >
              Start Project Quote
            </Link>
            <a
              href={buildWhatsAppLink("installation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-[var(--text-primary)] text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Engineering Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
