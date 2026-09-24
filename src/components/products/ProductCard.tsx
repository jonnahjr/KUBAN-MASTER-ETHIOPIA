"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  ArrowRight,
  FileText,
  Gauge,
  Cpu,
  Layers,
  MessageSquare,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  onCompareToggle?: (product: Product) => void;
  isCompared?: boolean;
  theme?: "dark" | "coffee";
}

export function ProductCard({
  product,
  onCompareToggle,
  isCompared = false,
  theme = "dark",
}: ProductCardProps) {
  const waLink = buildWhatsAppLink("product", {
    productName: product.name,
    capacity: product.capacityDisplay,
  });

  const isCoffee = theme === "coffee";

  // ─── THEME CLASS MAPS ───
  const cardCls = isCoffee
    ? "group relative flex flex-col justify-between h-full rounded-[1.75rem] bg-[#FDFAF4] border border-[#E2D2BB] hover:border-[#C89B5E] shadow-[0_2px_16px_-6px_rgba(59,36,29,0.10)] hover:shadow-[0_30px_60px_-18px_rgba(59,36,29,0.32)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
    : "group relative flex flex-col justify-between h-full rounded-[1.75rem] bg-white/80 backdrop-blur-sm border border-[var(--cream-border)] hover:border-[var(--coffee-brown)]/70 shadow-[0_2px_16px_-6px_rgba(2,28,30,0.08)] hover:shadow-[0_30px_60px_-18px_rgba(2,28,30,0.28)] hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden";

  const hairlineCls = isCoffee
    ? "via-[#C89B5E]/70"
    : "via-[var(--coffee-brown)]/60";

  const imageBgCls = isCoffee
    ? "bg-gradient-to-b from-[#F7F1E6] to-[#EFE2CE]"
    : "bg-gradient-to-b from-[#FDFBF7] to-[#F0E9DC]";

  const seriesBadgeCls = isCoffee
    ? "px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-[0.18em] bg-[#2D1B08]/90 backdrop-blur-md text-[#E6BE8A] border border-[#C89B5E]/40"
    : "px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-[0.18em] bg-[var(--bg-primary)]/90 backdrop-blur-md text-[var(--text-primary)] border border-[var(--coffee-brown)]/30";

  const promoBadgeCls = isCoffee
    ? "px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#E6BE8A] to-[#C89B5E] text-[#2D1B08] shadow-md"
    : "px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#F7C85C] to-[#E7A93D] text-[var(--text-dark)] shadow-md";

  const showroomBadgeCls = isCoffee
    ? "px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#2D1B08]/90 text-[#E6BE8A] border border-[#C89B5E]/45 backdrop-blur-md"
    : "px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#0D1F14]/85 text-[var(--text-primary)] border border-emerald-500/30 backdrop-blur-md";

  const nameCls = isCoffee
    ? "font-display text-lg font-medium text-[#2D1B08] group-hover:text-[#A9713B] transition-colors line-clamp-1"
    : "font-display text-lg font-medium text-[var(--text-dark)] group-hover:text-[var(--coffee-brown)] transition-colors line-clamp-1";

  const capacityChipCls = isCoffee
    ? "font-mono text-[11px] font-bold text-[#A9713B] bg-[#F3E5D3] px-2.5 py-1 rounded-full border border-[#C89B5E]/40 shrink-0"
    : "font-mono text-[11px] font-bold text-[var(--coffee-brown)] bg-[#F0E9DC] px-2.5 py-1 rounded-full border border-[var(--coffee-brown)]/30 shrink-0";

  const descCls = isCoffee ? "text-[#8A6A4F]" : "text-[var(--text-muted)]";

  const specsRowCls = isCoffee
    ? "border-[#E2D2BB]/80 text-[#6B4A2F]"
    : "border-[var(--cream-border)]/70 text-[#334D4B]";

  const specIconCls = isCoffee ? "text-[#C89B5E]" : "text-[#E7A93D]";

  const pricingEyebrowCls = isCoffee ? "text-[#B08D5F]" : "text-[var(--text-muted)]";
  const priceCls = isCoffee ? "text-[#2D1B08]" : "text-[var(--text-dark)]";

  const compareSelectedCls = isCoffee
    ? "bg-[#C89B5E]/20 border-[#A9713B] text-[#8E5B28]"
    : "bg-[#E7A93D]/15 border-[#E7A93D] text-[var(--coffee-brown)]";
  const compareUnselectedCls = isCoffee
    ? "border-[#E2D2BB] text-[#8A6A4F] hover:text-[#2D1B08] hover:border-[#C89B5E]"
    : "border-[var(--cream-border)] text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:border-[var(--coffee-brown)]/60";

  const viewSpecsCls = isCoffee
    ? "bg-[#F3E5D3] hover:bg-[#EAD9BF] text-[#2D1B08] border border-[#E2D2BB]"
    : "bg-[var(--bg-secondary)] hover:bg-[#F0E9DC] text-[var(--text-dark)] border border-[var(--cream-border)]";
  const viewSpecsArrowCls = isCoffee ? "text-[#A9713B]" : "text-[#E7A93D]";

  const getPriceCls = isCoffee
    ? "bg-[#2D1B08] hover:bg-[#3D2712] text-[#F3E5D3]"
    : "bg-[var(--bg-primary)] hover:bg-[#14494B] text-[#F7F2EA]";
  const getPriceIconCls = isCoffee ? "text-[#E6BE8A]" : "text-[var(--coffee-brown)]";

  const whatsappCls = isCoffee
    ? "bg-transparent hover:bg-[#C89B5E]/10 text-[#8E5B28] border border-[#C89B5E]/40 hover:border-[#A9713B]"
    : "bg-transparent hover:bg-emerald-950/10 text-emerald-800/80 border border-emerald-700/20 hover:border-emerald-600/40";
  const whatsappIconCls = isCoffee ? "text-[#A9713B]" : "text-emerald-600";

  return (
    <div className={cardCls}>
      {/* Gold top hairline */}
      <span
        className={`absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent ${hairlineCls} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        aria-hidden="true"
      />

      {/* IMAGE */}
      <div className={`relative aspect-[16/11] ${imageBgCls} overflow-hidden`}>
        <Image
          src={product.image || "/images/hero/hero_kuban_roaster.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
        />

        {/* BADGES */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
          <span className={seriesBadgeCls}>{product.series}</span>

          {product.badge && (
            <span className={promoBadgeCls}>{product.badge}</span>
          )}
        </div>

        {/* SHOWROOM BADGE */}
        {product.inShowroom && (
          <div className="absolute bottom-3.5 left-4 z-10">
            <span className={showroomBadgeCls}>In Sarbet Showroom</span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 pt-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className={nameCls}>{product.name}</h3>
            <span className={capacityChipCls}>{product.capacityDisplay}</span>
          </div>

          <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${descCls}`}>
            {product.shortDescription}
          </p>

          {/* SPECS */}
          <div
            className={`flex items-center gap-4 pt-3 mt-3 border-t text-[11px] ${specsRowCls}`}
          >
            {product.hourlyOutputDisplay && (
              <div className="flex items-center gap-1.5 truncate">
                <Gauge className={`w-3.5 h-3.5 shrink-0 ${specIconCls}`} />
                <span className="truncate font-semibold">
                  {product.hourlyOutputDisplay}
                </span>
              </div>
            )}

            {product.specifications.controlSystem && (
              <div className="flex items-center gap-1.5 truncate">
                <Cpu className={`w-3.5 h-3.5 shrink-0 ${specIconCls}`} />
                <span className="truncate font-medium">
                  {product.specifications.controlSystem.includes("PLC")
                    ? "PLC Touch"
                    : "Manual/Dual"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* PRICING & ACTIONS */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs">
              <span className={`eyebrow text-[9px] block ${pricingEyebrowCls}`}>
                Pricing
              </span>
              <span className={`text-xs font-bold ${priceCls}`}>
                {product.priceVisibility === "public" && product.priceAmount
                  ? `${product.currency} ${product.priceAmount.toLocaleString()}`
                  : "Price on Request"}
              </span>
            </div>

            {onCompareToggle && (
              <button
                type="button"
                onClick={() => onCompareToggle(product)}
                className={`text-[11px] font-semibold px-3 py-1.5 rounded-full border transition-all flex items-center gap-1 cursor-pointer ${
                  isCompared ? compareSelectedCls : compareUnselectedCls
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>{isCompared ? "Selected" : "Compare"}</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.slug}`}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold transition-all ${viewSpecsCls}`}
            >
              <span>View Specs</span>
              <ArrowRight className={`w-3 h-3 ${viewSpecsArrowCls}`} />
            </Link>

            <Link
              href={`/request-quote?machine=${product.slug}`}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold shadow-md transition-all ${getPriceCls}`}
            >
              <FileText className={`w-3 h-3 ${getPriceIconCls}`} />
              <span>Get Price</span>
            </Link>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-full text-[11px] font-bold transition-colors ${whatsappCls}`}
          >
            <MessageSquare className={`w-3.5 h-3.5 ${whatsappIconCls}`} />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
