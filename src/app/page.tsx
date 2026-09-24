import React from "react";
import { Hero } from "@/components/home/Hero";
import { StockTicker } from "@/components/home/StockTicker";
import { TrustBar } from "@/components/home/TrustBar";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { OriginStory } from "@/components/home/OriginStory";
import { GlobalSupply, RoastManager } from "@/components/home/GlobalSupply";
import { AfterSalesEvents } from "@/components/home/AfterSalesEvents";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)]">
      {/* 1 — HERO: roasting machinery for the birthplace of coffee */}
      <Hero />

      {/* 2 — TICKER: capability marquee band */}
      <StockTicker />

      {/* 3 — WHY KUBAN MASTER ETHIOPIA: editorial numbered pillars */}
      <TrustBar />

      {/* 4 — THE MACHINES: interactive category index */}
      <CategoryShowcase />

      {/* 5 — ORIGIN STORY: birthplace of coffee + region tabs + training */}
      <OriginStory />

      {/* 6 — SUPPLY CHAIN: global parts, local stock */}
      <GlobalSupply />

      {/* 7 — KUBAN ROAST MANAGER software (dark contrast) */}
      <RoastManager />

      {/* 8 — AFTER-SALES SUPPORT + INTERNATIONAL EVENTS */}
      <AfterSalesEvents />

      {/* 9 — TESTIMONIALS carousel */}
      <Testimonials />

      {/* 10 — FINAL CTA + SHOWROOM CARD (dark contrast) */}
      <FinalCTA />
    </div>
  );
}
