"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  fallbackImage: string;
}

export function ProductGallery({ images, productName, fallbackImage }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : [fallbackImage];
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setActiveIdx((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveIdx((i) => (i + 1) % galleryImages.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") setLightboxOpen(false);
  };

  return (
    <>
      <div className="space-y-3">
        {/* MAIN IMAGE — flat frame, hairline border, no shadow */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-[#F4EFE6] border border-[#E8DEC8] group cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={galleryImages[activeIdx] || fallbackImage}
            alt={`${productName} — view ${activeIdx + 1}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
          />

          {/* COUNTER — small mono text, no pill */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-3 left-3 text-[11px] text-[#8A7460] font-mono tracking-wide">
              {activeIdx + 1} / {galleryImages.length}
            </div>
          )}
        </div>

        {/* THUMBNAILS — hairline selection, no chrome */}
        {galleryImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`relative shrink-0 w-20 h-16 overflow-hidden border transition-all ${
                  i === activeIdx
                    ? "border-[#8A6535] opacity-100"
                    : "border-[#E8DEC8] opacity-50 hover:opacity-90"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img || fallbackImage}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX — quiet dark room for the full-size view */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#1A1410]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-label={`${productName} image gallery`}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-[#A89070] hover:text-white transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIdx] || fallbackImage}
              alt={`${productName} — fullscreen view`}
              fill
              sizes="100vw"
              className="object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImage;
              }}
            />
          </div>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89070] hover:text-white transition-colors p-3"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A89070] hover:text-white transition-colors p-3"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
