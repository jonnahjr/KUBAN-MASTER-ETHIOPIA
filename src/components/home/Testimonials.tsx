"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dawit Bekele",
    title: "Head Roaster · Specialty Roastery, Addis Ababa",
    quote:
      "Roasting Yirgacheffe and Guji lots on the Kuban Supreme changed our business. The profile repeatability means the florals and citrus notes our customers love arrive in every single batch — and when we need a technician, he is in Sarbet, not Istanbul.",
    avatar: "/images/kuban-ref/Customer3-1.png",
  },
  {
    id: 2,
    name: "Selamawit Girma",
    title: "Quality Manager · Coffee Exporter, Addis Ababa",
    quote:
      "Our cupping lab runs on the Kuban Base sample roaster. Screen-size grading plus repeatable sample roasts lifted our lots' consistency — buyers now trust our quality scores before they even cup.",
    avatar: "/images/kuban-ref/Gallery2-1.png",
  },
  {
    id: 3,
    name: "Amanuel Tadesse",
    title: "Master Roaster · Sidama Coffee Union",
    quote:
      "Kuban's drum roaster offers precise control over roasting details and a user-friendly design. In my opinion, the consistency of the profiles makes this machine highly reliable for maximizing the complex, fruity notes of our local Ethiopian heirlooms.",
    avatar: "/images/kuban-ref/ZOOM8797.jpg",
  },
  {
    id: 4,
    name: "Yohannes Alemu",
    title: "Founder · Addis Specialty Roastery",
    quote:
      "Hi, this is Yohannes from Addis Specialty. We have a solid relationship with our KUBAN Supreme roaster—it roasts consistently and with ease. Having full control over the roasting stages means that we can highlight the fruity flavors we love so much in our coffees. We are proud to be roasting with KUBAN right here at home.",
    avatar: "/images/kuban-ref/kuban-fuar.jpg",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length),
    []
  );
  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, 9000);
    return () => clearInterval(timer);
  }, [nextSlide, current]);

  const t = TESTIMONIALS[current];

  return (
    <section className="relative py-24 sm:py-32 bg-[#F4EFE6] overflow-hidden">
      {/* Ambient decor */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 right-0 w-[420px] h-[420px] bg-[#B37E2E]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#B37E2E]/6 rounded-full blur-[120px]" />
        <span
          className="absolute right-6 top-8 font-display font-semibold leading-none select-none hidden lg:block text-outline-espresso"
          style={{
            fontSize: "clamp(120px, 16vw, 220px)",
          }}
        >
          96
        </span>
      </div>

      {/* Hairlines */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A77B4A]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <Reveal>
          <span className="marker-num">( Testimonials )</span>
          <h2 className="font-display font-medium text-[#2D1B08] tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-[2.9rem] mt-4">
            Discover why professionals{" "}
            <span className="font-display-italic text-gradient-gold">
              love Kuban roasters.
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[340px] sm:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B37E2E] to-[#6B3F1D] p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-[#A77B4A]/40 flex items-center justify-center shadow-sm"
                  aria-hidden="true"
                >
                  <Quote className="w-3 h-3 text-[#8A6535]" />
                </span>
              </div>

              <div className="flex justify-center gap-1.5 mb-7">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-[#B37E2E] text-[#B37E2E]"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="font-display font-light italic text-[#3D2B18] leading-relaxed text-lg sm:text-2xl max-w-3xl mx-auto">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-9">
                <span className="block font-display text-lg font-medium text-[#2D1B08]">
                  {t.name}
                </span>
                <span className="eyebrow text-[9.5px] text-[#8A6535] block mt-2">
                  {t.title}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-7 mt-11">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="p-3 rounded-full border border-[#CFC3B0] bg-white text-[#8A7460] hover:text-[#8A6535] hover:border-[#A77B4A]/60 hover:-translate-x-0.5 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  current === idx
                    ? "w-9 bg-[#8A6535]"
                    : "w-2 bg-[#CFC3B0] hover:bg-[#A77B4A]/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="p-3 rounded-full border border-[#CFC3B0] bg-white text-[#8A7460] hover:text-[#8A6535] hover:border-[#A77B4A]/60 hover:translate-x-0.5 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
