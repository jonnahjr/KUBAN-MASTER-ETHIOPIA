import Link from "next/link";
import { COMPANY } from "@/config/company";
import { Home, ArrowLeft, MessageSquare, Search } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4 py-24">
      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E7A93D]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-lg space-y-8">
        {/* 404 DISPLAY */}
        <div>
          <p className="text-8xl sm:text-9xl font-black text-white/5 select-none leading-none">
            404
          </p>
          <div className="mt-4 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Page not found</h1>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              The page you are looking for may have been moved, renamed, or doesn&apos;t
              exist. Let us help you find what you need.
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="grid grid-cols-2 gap-3 text-left">
          {[
            { href: "/products", label: "Browse Machines", desc: "Explore the full catalog" },
            { href: "/request-quote", label: "Request a Quote", desc: "Get commercial pricing" },
            { href: "/showroom", label: "Visit Showroom", desc: "Come see us in Sarbet" },
            { href: "/contact", label: "Contact Us", desc: "Speak with our team" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E7A93D]/30 hover:bg-white/[0.07] transition-all group"
            >
              <p className="text-sm font-semibold text-white group-hover:text-[#E7A93D] transition-colors">
                {item.label}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</p>
            </Link>
          ))}
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E7A93D] to-[#b37532] text-white text-sm font-semibold hover:brightness-110 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <a
            href={buildWhatsAppLink("general")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-[var(--text-primary)] text-sm font-semibold hover:bg-emerald-900/60 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          {COMPANY.name} · Sarbet, Addis Ababa, Ethiopia
        </p>
      </div>
    </div>
  );
}
