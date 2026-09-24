"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { X, Check, FileText, MessageSquare } from "lucide-react";

interface ComparisonProps {
  products: Product[];
  onRemove: (id: string) => void;
  onClear: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductComparisonModal({
  products,
  onRemove,
  onClear,
  isOpen,
  onClose,
}: ComparisonProps) {
  if (!isOpen || products.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[var(--coffee-base)] border border-white/10 rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E7A93D] font-semibold">
              Technical Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Side-by-Side Roaster Evaluation ({products.length} of 3)
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClear}
              className="text-xs text-[var(--text-muted)] hover:text-white"
            >
              Clear all
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl bg-white/[0.02] border border-white/10 p-5 space-y-4 relative"
            >
              <button
                type="button"
                onClick={() => onRemove(p.id)}
                className="absolute top-3 right-3 p-1 rounded-full bg-white/10 text-[var(--text-muted)] hover:text-white hover:bg-white/20"
                aria-label={`Remove ${p.name}`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-black/40">
                <Image
                  src={p.image || "/images/hero/hero_kuban_roaster.jpg"}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#E7A93D]">
                  {p.series.toUpperCase()}
                </span>
                <h4 className="font-bold text-white text-base mt-0.5">{p.name}</h4>
              </div>

              {/* SPECIFICATION LIST */}
              <div className="space-y-2.5 text-xs text-[#B5C9C7] border-t border-white/5 pt-3">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Batch Capacity:</span>
                  <span className="font-semibold text-white">{p.capacityDisplay}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Hourly Throughput:</span>
                  <span className="font-mono text-[#DDE8E6]">
                    {p.hourlyOutputDisplay || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Control System:</span>
                  <span className="text-right text-[#DDE8E6] font-medium">
                    {p.specifications.controlSystem}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Heating Options:</span>
                  <span className="text-right text-[#DDE8E6]">
                    {p.specifications.heatingSources.join(", ")}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[var(--text-muted)]">Telemetry / Software:</span>
                  <span className="text-right text-[#E7A93D] font-medium">
                    {p.specifications.compatibleSoftware?.join(", ") || "Standard Telemetry"}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase">
                    Recommended Business Scale:
                  </span>
                  <p className="text-[11px] text-[#B5C9C7] mt-0.5 leading-relaxed">
                    {p.idealFor}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="pt-2 space-y-2">
                <Link
                  href={`/request-quote?machine=${p.slug}`}
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#E7A93D] to-[#b37532] text-white text-xs font-semibold shadow-md"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Specific Quote</span>
                </Link>

                <a
                  href={buildWhatsAppLink("product", { productName: p.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[var(--muted-tan)]" />
                  <span>WhatsApp Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            Need an engineer to assess your cafe or roastery floor plan in Addis Ababa?
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/request-quote"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
            >
              Discuss Which Fits My Business
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
