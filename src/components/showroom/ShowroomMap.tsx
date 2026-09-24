import React from "react";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { MapPin, Clock, ExternalLink, Navigation } from "lucide-react";

export function ShowroomMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[var(--coffee-base)]">
      {/* MAP PLACEHOLDER - styled with landmark info */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-[#0f1419] via-[var(--coffee-base)] to-[var(--bg-primary)] overflow-hidden flex items-center justify-center">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(231,169,61,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(231,169,61,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Roads simulation */}
        <div className="absolute inset-0">
          {/* Horizontal main road */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#1e2a35] -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#E7A93D]/10 -translate-y-1/2" />
          {/* Vertical road */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#1e2a35] -translate-x-1/2" />
        </div>

        {/* Showroom marker */}
        <div className="relative z-10 text-center space-y-3">
          <div className="relative mx-auto w-12 h-12">
            <div className="w-12 h-12 rounded-full bg-[#E7A93D] flex items-center justify-center shadow-xl shadow-[#E7A93D]/40 animate-pulse">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="bg-black/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-center">
            <p className="text-xs font-bold text-white">Kuban Master Ethiopia</p>
            <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Sarbet, Addis Ababa</p>
          </div>
        </div>

        {/* Landmark labels */}
        <div className="absolute top-6 left-8 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/8">
          <p className="text-[10px] text-[var(--text-muted)] font-medium">Vatican Embassy</p>
        </div>
        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/8">
          <p className="text-[10px] text-[var(--text-muted)] font-medium">White Building</p>
        </div>

        {/* Google Maps CTA overlay */}
        <Link
          href={COMPANY.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E7A93D] text-white text-xs font-semibold shadow-lg hover:bg-[var(--coffee-brown)] transition-colors whitespace-nowrap"
        >
          <Navigation className="w-3.5 h-3.5" />
          Open in Google Maps
          <ExternalLink className="w-3 h-3 opacity-70" />
        </Link>
      </div>

      {/* ADDRESS + HOURS PANEL */}
      <div className="p-5 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#E7A93D] mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white">{COMPANY.location.address}</p>
            <p className="text-xs text-[var(--text-muted)]">{COMPANY.location.city}, {COMPANY.location.country}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">Landmark: Vatican Embassy (opposite side), White Building (ground floor)</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-[#E7A93D] mt-0.5 shrink-0" />
          <div className="space-y-1">
            {COMPANY.location.hours.map((h) => (
              <div key={h.days} className="flex items-center justify-between gap-6 text-xs">
                <span className="text-[var(--text-muted)]">{h.days}</span>
                <span className="text-[#DDE8E6] font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
