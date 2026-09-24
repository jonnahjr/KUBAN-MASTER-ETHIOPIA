"use client";

import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import type { ProductCategory, ProductSeries } from "@/types/product";

interface ProductFilterProps {
  selectedCategory: ProductCategory | "all";
  selectedSeries: ProductSeries | "all";
  search: string;
  onCategoryChange: (cat: ProductCategory | "all") => void;
  onSeriesChange: (series: ProductSeries | "all") => void;
  onSearchChange: (value: string) => void;
  totalCount: number;
  filteredCount: number;
  theme?: "dark" | "coffee";
}

const CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "shop-roasters", label: "Shop Roasters" },
  { value: "industrial-roasters", label: "Industrial" },
  { value: "grinders", label: "Grinders" },
  { value: "silos", label: "Silos & Storage" },
];

const SERIES: { value: ProductSeries | "all"; label: string }[] = [
  { value: "all", label: "All Series" },
  { value: "base", label: "Base Series" },
  { value: "supreme", label: "Supreme Series" },
  { value: "supreme-v2", label: "Supreme V2" },
  { value: "industrial", label: "Industrial" },
  { value: "grinders", label: "Grinders" },
  { value: "silos", label: "Silos" },
];

export function ProductFilter({
  selectedCategory,
  selectedSeries,
  search,
  onCategoryChange,
  onSeriesChange,
  onSearchChange,
  totalCount,
  filteredCount,
  theme = "dark",
}: ProductFilterProps) {
  const isCoffee = theme === "coffee";

  const searchCls =
    "w-full pl-11 pr-4 py-3 rounded-xl bg-[#FBF9F5] border border-[#E8DEC8] text-sm text-[#2D1B08] placeholder-[#B08D5F] focus:outline-none focus:border-[#A77B4A] transition-all";

  const searchIconCls = "text-[#B08D5F]";

  const labelCls = "text-[#8A7460]";

  const catActiveCls = "bg-[#6B3F1D] border-[#6B3F1D] text-[#FBF9F5] shadow-md shadow-[#6B3F1D]/20";
  const catInactiveCls = "bg-white border-[#E8DEC8] text-[#8A6535] hover:text-[#2D1B08] hover:border-[#A77B4A]/60";

  const seriesActiveCls = "bg-[#2D1B08] border-[#2D1B08] text-[#F4EFE6]";
  const seriesInactiveCls = "bg-white border-[#E8DEC8] text-[#8A7460] hover:text-[#2D1B08] hover:border-[#A77B4A]/60";

  const countLabelCls = "text-[#8A7460]";
  const countValueCls = "text-[#2D1B08] font-semibold";

  return (
    <div className="space-y-5">
      {/* SEARCH */}
      <div className="relative">
        <Search
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${searchIconCls}`}
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search machines…"
          className={searchCls}
        />
      </div>

      {/* CATEGORY TABS */}
      <div>
        <p
          className={`text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5 ${labelCls}`}
        >
          <SlidersHorizontal className="w-3 h-3" />
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => onCategoryChange(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  active ? catActiveCls : catInactiveCls
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SERIES FILTER (only show for roaster categories) */}
      {(selectedCategory === "all" || selectedCategory === "shop-roasters" || selectedCategory === "industrial-roasters") && (
        <div>
          <p className={`text-[10px] uppercase tracking-widest mb-2 ${labelCls}`}>
            Series
          </p>
          <div className="flex flex-wrap gap-2">
            {SERIES.filter((s) =>
              selectedCategory === "industrial-roasters"
                ? ["all", "industrial"].includes(s.value)
                : !["silos", "grinders"].includes(s.value)
            ).map((s) => {
              const active = selectedSeries === s.value;
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => onSeriesChange(s.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    active ? seriesActiveCls : seriesInactiveCls
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* COUNT */}
      <p className={`text-xs ${countLabelCls}`}>
        Showing <span className={countValueCls}>{filteredCount}</span> of{" "}
        {totalCount} machines
      </p>
    </div>
  );
}
