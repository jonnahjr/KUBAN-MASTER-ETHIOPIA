"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>("Roasters");
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (title: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        {/* TOP UTILITY STRIP — ABOVE THE NAVBAR PILL (fades away on scroll) */}
        <div
          className={`pointer-events-auto mx-auto max-w-7xl overflow-hidden transition-all duration-500 ease-out ${
            scrolled
              ? "max-h-0 -translate-y-2 opacity-0"
              : "max-h-12 translate-y-0 opacity-100 pb-2.5"
          }`}
        >
          <div className="hidden items-center justify-between rounded-full border border-white/10 bg-[#1A1414]/85 px-5 py-1.5 text-[11px] uppercase tracking-wider text-[#C8B89A] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] lg:flex"
            style={{
              backdropFilter: "blur(16px) saturate(140%)",
              WebkitBackdropFilter: "blur(16px) saturate(140%)",
            }}
          >
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-[#F4EFE6]">
                <MapPin className="w-3.5 h-3.5 text-[#C9933E]" />
                Sarbet Showroom, Addis Ababa · Official Turkish Machinery Partner
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-[#C8B89A] normal-case tracking-normal">
                <Clock className="w-3 h-3 text-[#C9933E]" />
                Mon–Sat: 8:30 AM – 6:00 PM
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`tel:${COMPANY.phones.primarySalesRaw}`}
                className="flex items-center gap-1.5 font-semibold text-[#F4EFE6] transition-colors hover:text-[#C9933E]"
              >
                <Phone className="w-3 h-3 text-[#C9933E]" />
                <span>{COMPANY.phones.sales[0].display}</span>
              </a>
              <a
                href={buildWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[#F4EFE6] transition-colors hover:text-[#25D366]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="group-hover:underline">WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>

        {/* FLOATING GLASS PILL SHELL — DARK ESPRESSO */}
        <div
          className={`pointer-events-auto relative mx-auto max-w-7xl rounded-full border transition-all duration-500 ease-out ${
            scrolled
              ? "border-white/12 bg-[#1A1414]/90 shadow-[0_20px_60px_-18px_rgba(0,0,0,0.7)]"
              : "border-white/[0.08] bg-[#1A1414]/70 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)]"
          }`}
          style={{
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
          }}
        >
          {/* Glass sheen highlights */}
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

          {/* MAIN NAVIGATION ROW */}
          <div className="flex h-[68px] items-center justify-between px-4 sm:h-[76px] sm:px-6">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3 rounded-xl py-1 pl-1 pr-2 focus:outline-none"
              aria-label="Kuban Master Ethiopia Home"
            >
              <div className="relative flex h-12 w-auto items-center sm:h-14 lg:h-16">
                <Image
                  src="/images/logo/kuban-logo-tight.png"
                  alt="Kuban Master Ethiopia - Coffee Processing Machinery & Solutions"
                  height={72}
                  width={220}
                  className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-13 lg:h-15"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden items-center gap-1 lg:flex xl:gap-1.5" aria-label="Main navigation">
              {MAIN_NAVIGATION.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isRoasters = item.title.toLowerCase() === "roasters";

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                        isActive
                          ? "bg-white/[0.1] text-white"
                          : "text-[#E8DCC8]/80 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <span className="relative">
                        {item.title}
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#A77B4A] to-[#E0C08A]" />
                        )}
                      </span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3 h-3 text-[#A77B4A] transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* BORDERLESS TEXT-ONLY DROPDOWN */}
                    {hasChildren && (
                      <div
                        className={`absolute top-full left-1/2 z-[60] -translate-x-1/2 pt-4 transition-all duration-200 ease-out ${
                          isRoasters ? "w-[460px]" : "w-[380px]"
                        } ${
                          activeDropdown === item.title
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-1.5 opacity-0"
                        }`}
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Dark floating panel — soft blur cloud */}
                        <div className="rounded-2xl bg-[#1A1414]/95 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7)] backdrop-blur-2xl px-4 py-3.5 border border-white/[0.07]">
                          <div className="space-y-0.5">
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.title}
                                href={sub.href}
                                className="group/sub flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.05] transition-colors"
                              >
                                <span className="text-[13.5px] font-medium text-[#F4EFE6] group-hover/sub:text-[#E8C98A] transition-colors">
                                  {sub.title}
                                </span>
                                <span className="flex items-center gap-2 min-w-0">
                                  {sub.badge && (
                                    <span className="text-[8.5px] font-bold uppercase tracking-[0.12em] text-[#C9933E]">
                                      {sub.badge}
                                    </span>
                                  )}
                                  <ArrowRight className="w-3.5 h-3.5 text-[#C9933E] opacity-0 -translate-x-1 transition-all duration-200 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 shrink-0" />
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* View all link */}
                          <Link
                            href={isRoasters ? "/products" : "/services"}
                            className="flex items-center gap-1 mt-2 pt-2.5 border-t border-white/[0.07] px-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#C9933E] hover:text-[#E8C98A] transition-colors"
                          >
                            <span>{isRoasters ? "View all machinery" : "All services"}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden shrink-0 items-center gap-2.5 sm:flex">
              {/* WhatsApp Quick Icon Button */}
              <a
                href={buildWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6] transition-all duration-200 hover:border-[#25D366]/40 hover:bg-white/[0.12] xl:inline-flex"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* REQUEST QUOTE CTA BUTTON */}
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center rounded-full border border-[#7A4A22]/40 bg-gradient-to-b from-[#6B3F1D] to-[#4A2B12] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FBF9F5] shadow-md shadow-[#6B3F1D]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[#6B3F1D]/30 hover:brightness-110"
              >
                Request Quote
              </Link>

              {/* Mobile Hamburger Toggle (Tablet) */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#F4EFE6] transition-all hover:bg-white/[0.12] lg:hidden"
                aria-label="Toggle Navigation"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* MOBILE ONLY TOP BAR BUTTONS */}
            <div className="flex items-center gap-2 sm:hidden">
              <Link
                href="/request-quote"
                className="rounded-full border border-[#7A4A22]/40 bg-gradient-to-b from-[#6B3F1D] to-[#4A2B12] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#FBF9F5]"
              >
                Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#F4EFE6]"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FLOATING GLASS DRAWER */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#2D1B08]/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute bottom-3 right-3 top-3 flex w-full flex-col justify-between overflow-y-auto rounded-[28px] border border-[#2D1B08]/10 bg-white/95 px-6 pb-8 pt-6 shadow-[0_30px_80px_-20px_rgba(45,27,8,0.35)] backdrop-blur-2xl transition-transform duration-300 ease-out sm:w-[420px] ${
            mobileOpen ? "translate-x-0" : "translate-x-[110%]"
          }`}
        >
          {/* Mobile Header Top */}
          <div className="flex items-center justify-between border-b border-[#2D1B08]/[0.08] pb-5">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo/kuban-logo-tight.png"
                alt="Kuban Master Ethiopia"
                height={50}
                width={160}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2D1B08]/10 bg-[#F4EFE6] text-[#2D1B08]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links Accordion */}
          <div className="flex-1 space-y-2 py-6">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = mobileExpandedSection === item.title;

              return (
                <div key={item.title} className="border-b border-[#2D1B08]/[0.07] pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !hasChildren && setMobileOpen(false)}
                      className="block py-2 text-[15px] font-semibold uppercase tracking-[0.1em] text-[#2D1B08] hover:text-[#8A5A28]"
                    >
                      {item.title}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedSection(isExpanded ? null : item.title)
                        }
                        className="p-2 text-[#A77B4A]"
                        aria-label={`Expand ${item.title}`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="my-1 space-y-2 rounded-xl border border-[#2D1B08]/[0.07] bg-[#FBF9F5] py-2 pl-3 pr-1">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-[13px] text-[#5C4836] hover:text-[#2D1B08]"
                        >
                          <div className="flex items-center justify-between">
                            <span>{sub.title}</span>
                            {sub.badge && (
                              <span className="rounded-full border border-[#A77B4A]/30 bg-[#F4EFE6] px-1.5 py-0.5 text-[9px] uppercase text-[#8A5A28]">
                                {sub.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Action Footer in Drawer */}
          <div className="space-y-3 border-t border-[#2D1B08]/[0.08] pt-4">
            <Link
              href="/request-quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-gradient-to-b from-[#6B3F1D] to-[#4A2B12] py-3 text-center text-[12px] font-semibold uppercase tracking-wider text-[#FBF9F5] shadow-md shadow-[#6B3F1D]/20 border border-[#7A4A22]/40"
            >
              Request a Formal Quote
            </Link>

            <a
              href={buildWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-[#2D1B08]/10 bg-[#FBF9F5] py-3 text-[12px] font-medium uppercase tracking-wider text-[#2D1B08] transition-colors hover:border-[#25D366]/40 hover:bg-white"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Showroom</span>
            </a>

            <div className="space-y-1 pt-2 text-center text-[11px] text-[#8A7460]">
              <p className="flex items-center justify-center gap-1.5 text-[#2D1B08] font-semibold">
                <Phone className="w-3 h-3 text-[#A77B4A]" />
                {COMPANY.phones.sales[0].display}
              </p>
              <p>Sarbet, Addis Ababa · Near Vatican Embassy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
