import React from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/product";
interface RelatedProductsProps {
  currentProduct: Product;
  maxItems?: number;
}

export function RelatedProducts({ currentProduct, maxItems = 3 }: RelatedProductsProps) {
  // Show same-category products, sorted by same-series first
  const related = PRODUCTS.filter(
    (p) =>
      p.id !== currentProduct.id &&
      (p.category === currentProduct.category || p.series === currentProduct.series)
  )
    .sort((a, b) => {
      // Same series first
      const aMatch = a.series === currentProduct.series ? 0 : 1;
      const bMatch = b.series === currentProduct.series ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
      // Then by closest capacity
      return Math.abs(a.capacityKg - currentProduct.capacityKg) - Math.abs(b.capacityKg - currentProduct.capacityKg);
    })
    .slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section aria-label="Related machines">
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-widest text-[#8A6535] font-semibold mb-1">
          Related Machines
        </p>
        <h2 className="font-display text-xl font-medium text-[#2D1B08]">You may also consider</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
