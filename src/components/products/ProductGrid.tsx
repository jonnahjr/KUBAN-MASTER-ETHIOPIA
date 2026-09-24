"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import type { Product, ProductCategory, ProductSeries } from "@/types/product";

interface ProductGridProps {
  initialCategory?: ProductCategory | "all";
  initialSeries?: ProductSeries | "all";
  theme?: "dark" | "coffee";
}

export function ProductGrid({
  initialCategory = "all",
  initialSeries = "all",
  theme = "dark",
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(initialCategory);
  const [selectedSeries, setSelectedSeries] = useState<ProductSeries | "all">(initialSeries);
  const [search, setSearch] = useState("");
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
      if (selectedSeries !== "all" && p.series !== selectedSeries) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.capacityDisplay.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedSeries, search]);

  const handleCategoryChange = (cat: ProductCategory | "all") => {
    setSelectedCategory(cat);
    setSelectedSeries("all");
  };

  const handleCompareToggle = (product: Product) => {
    setComparisonIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((x) => x !== product.id)
        : prev.length < 3
        ? [...prev, product.id]
        : prev
    );
  };

  const filterWrapperCls =
    theme === "coffee"
      ? "bg-white border border-[#E8DEC8] rounded-2xl p-5 shadow-[0_16px_40px_-28px_rgba(45,27,8,0.4)]"
      : "bg-white border border-[#E8DEC8] rounded-2xl p-5 shadow-[0_16px_40px_-28px_rgba(45,27,8,0.4)]";

  const emptyCls =
    theme === "coffee" ? "text-[#6B4A2F] text-sm" : "text-[#6B4F32] text-sm";

  const clearLinkCls =
    theme === "coffee" ? "text-[#A9713B]" : "text-[#E6BE8A]";

  return (
    <div className="space-y-8">
      {/* FILTERS */}
      <div className={filterWrapperCls}>
        <ProductFilter
          selectedCategory={selectedCategory}
          selectedSeries={selectedSeries}
          search={search}
          onCategoryChange={handleCategoryChange}
          onSeriesChange={setSelectedSeries}
          onSearchChange={setSearch}
          totalCount={PRODUCTS.length}
          filteredCount={filtered.length}
          theme={theme}
        />
      </div>

      {/* GRID */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 space-y-4">
          <p className="text-4xl">🔍</p>
          <p className={emptyCls}>No machines match your filters.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedSeries("all");
              setSearch("");
            }}
            className={`text-xs hover:underline cursor-pointer ${clearLinkCls}`}
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isCompared={comparisonIds.includes(product.id)}
              onCompareToggle={handleCompareToggle}
              theme={theme}
            />
          ))}
        </div>
      )}
    </div>
  );
}
