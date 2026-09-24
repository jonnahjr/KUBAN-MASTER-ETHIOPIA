"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
  /** Slide direction */
  from?: "up" | "down" | "left" | "right" | "fade" | "scale";
  as?: "div" | "section" | "li" | "span";
}

const FROM_CLASS: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "reveal-from-up",
  down: "reveal-from-down",
  left: "reveal-from-left",
  right: "reveal-from-right",
  fade: "reveal-from-fade",
  scale: "reveal-from-scale",
};

/**
 * Scroll-triggered luxury reveal wrapper.
 * Fades/slides children into view once, with optional stagger delay.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  from = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${FROM_CLASS[from]} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
