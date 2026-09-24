import React from "react";
import Link from "next/link";
import {
  Wrench,
  Headphones,
  Cpu,
  Palette,
  Truck,
  Settings,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import type { ServiceItem } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Wrench,
  Headphones,
  Cpu,
  Palette,
  Truck,
  Settings,
  GraduationCap,
};

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = ICON_MAP[service.iconName] ?? Settings;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#A77B4A]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(45,27,8,0.28)] overflow-hidden">
      {/* TOP ACCENT BAR */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex-1 flex flex-col space-y-5">
        {/* ICON + NUMBER */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#FBF9F5] border border-[#E8DEC8] flex items-center justify-center group-hover:border-[#A77B4A]/60 transition-colors">
            <Icon className="w-6 h-6 text-[#8A6535]" />
          </div>
          <span className="font-mono text-xs text-[#CFC3B0] font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <h3 className="font-display text-lg font-medium text-[#2D1B08] group-hover:text-[#7A4A22] transition-colors">
            {service.title}
          </h3>
          <p className="text-[13px] text-[#6B4F32] leading-relaxed mt-2">
            {service.shortDescription}
          </p>
        </div>

        {/* LINK */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A6535] hover:text-[#2D1B08] transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
