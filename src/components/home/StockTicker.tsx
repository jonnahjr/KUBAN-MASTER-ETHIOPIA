import React from "react";
import { Coffee, Cog, Wrench, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Coffee, text: "500 g sample labs → 120 kg export lines" },
  { icon: ShieldCheck, text: "ISO 9001 · CE Certified · 2-Year Warranty" },
  { icon: Cog, text: "Siemens PLC · Cropster · Artisan native" },
  { icon: Wrench, text: "Spare parts stocked in Addis Ababa" },
  { icon: Coffee, text: "Yirgacheffe · Sidama · Guji · Harrar" },
  { icon: ShieldCheck, text: "Live demos at the Sarbet showroom" },
  { icon: Cog, text: "Up to 480 kg/h continuous output" },
  { icon: Wrench, text: "Worldwide parts delivery in 2–3 days" },
];

export function StockTicker() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="relative bg-[#221B1B] border-y border-white/[0.06] overflow-hidden marquee-hover-pause">
      <div className="ticker-mask py-3.5 overflow-hidden">
        <div className="animate-marquee-x flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A89070]"
            >
              <item.icon className="w-3.5 h-3.5 text-[#C9933E]/80" />
              {item.text}
              <span className="ml-6 w-1 h-1 rounded-full bg-[#6B3F1D]" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
