"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare, Phone, FileText, MapPin, X } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP ──────────────────────────────────────────────────────── */}
      <div className="hidden md:block fixed bottom-7 right-7 z-40">

        {/* Expanded panel */}
        <div
          className={`mb-4 w-64 transition-all duration-400 origin-bottom-right ${
            open
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none translate-y-2"
          }`}
          style={{ transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="bg-[var(--bg-primary)]/96 backdrop-blur-2xl border border-[var(--coffee-brown)]/14 rounded-2xl overflow-hidden shadow-[0_24px_56px_-12px_rgba(0,0,0,0.9)]">
            {/* Gold accent top */}
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--coffee-brown)]/50 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="text-[11px] font-semibold text-[var(--text-primary)] tracking-wide">
                  Kuban Support
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-muted)] transition-colors"
                aria-label="Close contact"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-4 h-px bg-[var(--coffee-brown)]/10 mb-3" />

            {/* Actions */}
            <div className="px-3 pb-3 space-y-1.5">
              <a
                href={buildWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--coffee-base)]/40 border border-transparent hover:border-emerald-500/20 text-[var(--text-primary)] text-[11px] font-medium transition-all duration-200 group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[var(--muted-tan)] shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[var(--text-primary)] font-semibold">WhatsApp Chat</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Instant specs & pricing</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phones.primarySalesRaw}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-[var(--coffee-brown)]/15 text-[var(--text-primary)] text-[11px] font-medium transition-all duration-200 group"
              >
                <Phone className="w-3.5 h-3.5 text-[var(--coffee-brown)] shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[var(--text-muted)] font-semibold">Call Sales</div>
                  <div className="text-[10px] text-[var(--text-muted)]">{COMPANY.phones.sales[0].display}</div>
                </div>
              </a>

              <Link
                href="/request-quote"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--coffee-brown)]/[0.07] border border-transparent hover:border-[var(--coffee-brown)]/25 text-[var(--text-primary)] text-[11px] font-medium transition-all duration-200 group"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--coffee-brown)] shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[var(--coffee-brown)] font-semibold">Request Quote</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Proforma & specs</div>
                </div>
              </Link>

              <Link
                href="/showroom"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[var(--coffee-brown)]/10 to-transparent border border-[var(--coffee-brown)]/20 hover:border-[var(--coffee-brown)]/40 text-[var(--text-primary)] text-[11px] font-medium transition-all duration-200 group shadow-inner"
              >
                <MapPin className="w-3.5 h-3.5 text-[var(--coffee-brown)] shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[var(--coffee-brown)] font-semibold tracking-wide">Sarbet Showroom</div>
                  <div className="text-[10px] text-[var(--text-muted)]">Vatican Embassy area</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating trigger — circular bubble */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close contact" : "Open contact"}
          className={`relative flex items-center justify-center transition-all duration-350 focus:outline-none w-14 h-14 rounded-full backdrop-blur-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.8)] hover:scale-105 active:scale-95 ${
            open
              ? "bg-[var(--bg-primary)] border border-[var(--coffee-brown)]/40 text-[var(--coffee-brown)]"
              : "bg-gradient-to-tr from-[var(--coffee-brown)] via-[#D4A359] to-[#E8C88C] text-[#0D0603] shadow-[0_0_25px_rgba(242,179,61,0.5)]"
          }`}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" style={{ fill: "currentColor" }} />
              {/* Notification ping */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5 translate-x-0.5 -translate-y-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0D0603]" />
              </span>
            </>
          )}
        </button>
      </div>

      {/* ── MOBILE STICKY BOTTOM BAR ──────────────────────────────────────── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        {/* Top gold line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--coffee-brown)]/30 to-transparent" />

        <div className="bg-[var(--bg-primary)]/96 backdrop-blur-xl px-4 py-3">
          <div className="grid grid-cols-3 gap-2">
            <a
              href={buildWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/30 text-[var(--muted-tan)] text-[10px] font-semibold uppercase tracking-[0.06em] hover:bg-emerald-950/50 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY.phones.primarySalesRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--coffee-brown)]/20 bg-[var(--coffee-brown)]/[0.05] text-[var(--text-muted)] text-[10px] font-semibold uppercase tracking-[0.06em] hover:bg-[var(--coffee-brown)]/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--coffee-brown)]" />
              <span>Call</span>
            </a>

            <Link
              href="/request-quote"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--coffee-brown)] to-[#C8922E] text-[var(--text-dark)] text-[10px] font-bold uppercase tracking-[0.06em] shadow-[0_4px_16px_-4px_rgba(242,179,61,0.4)] hover:shadow-[0_6px_20px_-4px_rgba(242,179,61,0.55)] transition-shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
