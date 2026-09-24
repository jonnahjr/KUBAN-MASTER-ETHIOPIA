"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0): HTMLMotionProps<"div"> => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export function Hero() {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden bg-[#1A1414]">
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/products/hero-main.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Kuban coffee roaster in action"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414] via-[#1A1414]/85 to-[#1A1414]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-transparent to-[#1A1414]/55" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 52% 48% at 76% 42%, rgba(179,126,46,0.16), transparent 66%)",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-6 left-0 font-display font-black leading-none select-none text-outline-cream pointer-events-none"
          style={{ fontSize: "clamp(120px, 17vw, 260px)", letterSpacing: "-0.02em" }}
        >
          KUBAN
        </span>
      </div>

      {/* Hairline frame — print feel */}
      <div
        className="absolute inset-4 sm:inset-6 border border-white/[0.07] rounded-[1.75rem] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ── CONTENT ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-32 pb-24 sm:pt-36 sm:pb-36">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0.1)} className="eyebrow text-[#C9933E] mb-4 sm:mb-6">
            Official Kuban Representative
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-medium text-[#F4EFE6] leading-[1.08] tracking-tight text-3xl sm:text-5xl lg:text-6xl"
          >
            Roasting machinery for the{" "}
            <span className="font-display-italic text-gradient-gold-dark">
              birthplace of coffee.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.32)}
            className="text-[#C8B89A] text-sm sm:text-base leading-relaxed max-w-lg mt-5 sm:mt-6"
          >
            Engineered in İzmir since 1996 — delivered, installed, and supported
            in Addis Ababa.
          </motion.p>

          <motion.div {...fadeUp(0.44)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-9">
            <Link href="/products" className="btn-gold w-full sm:w-auto px-8 py-3.5 sm:py-4 text-[11px] group">
              <span>Explore the Machines</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/request-quote" className="btn-ghost-on-dark w-full sm:w-auto px-6 py-3.5 sm:py-4 text-[11px]">
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
