import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/company";
import { Reveal } from "@/components/ui/Reveal";
import {
  Flame,
  Globe2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
  Cpu,
  Quote
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${COMPANY.name} — the authorized Ethiopian partner of Kuban Coffee Roasters (İzmir, Türkiye, est. 1996). 29 years of manufacturing expertise, 5,000+ customers, 60+ countries, now with full local support in Addis Ababa.`,
  openGraph: {
    title: `About ${COMPANY.name}`,
    description:
      "A global brand in coffee roasting machine manufacturing — now with an authorized home in Ethiopia.",
    url: `${COMPANY.seo.siteUrl}/about`,
  },
};

const STATS = [
  { value: "1996", label: "Heritage", sub: "Founded in İzmir" },
  { value: "29+", label: "Mastery", sub: "Years of Engineering" },
  { value: "60+", label: "Global Presence", sub: "Export Countries" },
  { value: "1", label: "Local Home", sub: "Showroom in Addis Ababa" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-hidden">
      {/* HERO — full-bleed video, editorial split */}
      <section className="relative min-h-[92svh] flex items-center overflow-hidden bg-[#1A1414]">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/products/hero%203%20vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Kuban coffee roaster in action"
          />
          {/* Espresso wash — heavier left where the copy sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1414] via-[#1A1414]/85 to-[#1A1414]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1414] via-transparent to-[#1A1414]/55" />
          {/* Caramel bloom over the machinery */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 52% 48% at 76% 42%, rgba(179,126,46,0.16), transparent 66%)",
            }}
          />
          {/* Giant outline wordmark backdrop */}
          <span
            aria-hidden="true"
            className="absolute -bottom-6 left-0 font-display font-black leading-none select-none text-outline-cream pointer-events-none"
            style={{ fontSize: "clamp(110px, 15vw, 240px)", letterSpacing: "-0.02em" }}
          >
            KUBAN
          </span>
        </div>

        {/* Hairline frame — print feel */}
        <div
          className="absolute inset-4 sm:inset-6 border border-white/[0.07] rounded-[1.75rem] pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-36 pb-28">
          <div className="max-w-2xl">
            <div
              className="flex flex-wrap items-center gap-3 mb-7 animate-fade-up"
              style={{ "--delay": "80ms" } as React.CSSProperties}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/12 backdrop-blur-md">
                <Flame className="w-3 h-3 text-[#C9933E]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8DCC8]">
                  The Authority in Coffee Roasting
                </span>
              </span>
            </div>

            <h1
              className="font-display font-medium text-[#F4EFE6] leading-[1.04] tracking-tight text-[2.6rem] sm:text-6xl lg:text-[4.4rem] animate-fade-up"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              Global Engineering.<br />
              <span className="font-display-italic text-gradient-gold-dark">
                Ethiopian Soul.
              </span>
            </h1>

            <p
              className="text-[#C8B89A] text-base sm:text-lg leading-relaxed max-w-xl mt-7 animate-fade-up"
              style={{ "--delay": "320ms" } as React.CSSProperties}
            >
              We are the bridge between Türkiye&apos;s finest coffee manufacturing
              and the birthplace of coffee itself. Welcome to {COMPANY.name}.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 mt-10 animate-fade-up"
              style={{ "--delay": "440ms" } as React.CSSProperties}
            >
              <Link href="/products" className="btn-gold px-8 py-4 text-[11px] group">
                <span>Explore the Machines</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/showroom" className="btn-ghost-on-dark px-6 py-4 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-[var(--coffee-caramel)]" />
                <span>Visit the Showroom</span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* HERITAGE & STATS SECTION — BENTO BOX DESIGN */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-[var(--dark-section)]">
        <div className="absolute inset-0 texture-grain" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[var(--coffee-caramel)]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C9933E]" />
                <span className="eyebrow text-[#C9933E]">Since 1996</span>
                <div className="w-8 h-px bg-[#C9933E]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F4EFE6] leading-[1.05] tracking-tight">
                Our Heritage
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* BIG IMAGE BLOCK */}
            <Reveal delay={100} className="md:col-span-2 lg:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden border border-white/10 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--coffee-darkest)] to-transparent z-10 opacity-80" />
              <Image 
                src="/images/products/samp 3.jpeg" 
                alt="Kuban Factory" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-5 h-5 text-[#E8C98A]" />
                  <h4 className="font-display text-2xl text-white">Unmatched Precision</h4>
                </div>
                <p className="text-white/80 text-sm font-light">Equipped with Siemens PLC Touchscreens and Premix Burner Technology.</p>
              </div>
            </Reveal>

            {/* STORY BLOCK */}
            <Reveal delay={200} className="md:col-span-1 lg:col-span-2 md:row-span-1 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Globe2 className="w-24 h-24 text-white" />
              </div>
              <h3 className="font-display text-2xl text-[#E8C98A] mb-3 relative z-10">Born in İzmir. Perfected for the world.</h3>
              <p className="text-[#C8B89A] text-sm leading-relaxed font-light relative z-10">
                Founded by <strong className="text-white font-medium">Ahmet Demirden</strong> in 1996 in Bornova, İzmir. The mission was uncompromising: to engineer the most reliable, precise, and consistent coffee roasting machinery. Today, our equipment powers roasteries across 60+ countries.
              </p>
            </Reveal>

            {/* QUOTE BLOCK */}
            <Reveal delay={300} className="md:col-span-3 lg:col-span-2 md:row-span-1 bg-[var(--coffee-brown)]/20 border border-[#C9933E]/20 rounded-[2rem] p-8 flex items-center relative overflow-hidden">
              <Quote className="absolute -left-4 -top-4 w-24 h-24 text-[#C9933E]/10" />
              <p className="text-[#E8DCC8] italic text-lg sm:text-xl font-display leading-relaxed relative z-10 text-center w-full">
                "We don't just build machines. We forge the tools that unlock the true potential of the coffee bean."
              </p>
            </Reveal>

            {/* 4 STATS BLOCKS COMPACT */}
            <Reveal delay={400} className="md:col-span-3 lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-white/10">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center text-center px-4">
                    <h4 className="font-display text-3xl sm:text-4xl font-semibold text-[#E8C98A] mb-1 nums">{stat.value}</h4>
                    <p className="text-[10px] font-bold text-[#F4EFE6] uppercase tracking-widest mb-0.5">{stat.label}</p>
                    <p className="text-[9px] text-[#A89070] uppercase tracking-wider font-medium">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* THE ETHIOPIAN CONNECTION — CREAM SECTION */}
      <section className="py-32 bg-[var(--cream-base)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B37E2E]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B37E2E]/6 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow text-[var(--coffee-brown)] mb-4 block">The Local Advantage</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight">
              Roasting at the <span className="font-display-italic text-gradient-gold">Source.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={100} className="bg-white p-10 rounded-[2rem] border border-[var(--cream-border)] shadow-[0_24px_50px_-30px_rgba(45,27,8,0.25)] card-hover-lift group">
              <MapPin className="w-10 h-10 text-[#8A6535] mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-[var(--text-primary)] mb-4">Kuban Master Ethiopia</h3>
              <p className="text-[var(--text-muted)] font-light leading-relaxed mb-6">
                Under the umbrella of <strong className="text-[var(--text-primary)] font-medium">{COMPANY.tradeEthiopiaGroup.name}</strong>, we are the authorized sole distributor in Ethiopia. We bring world-class engineering directly to the birthplace of coffee, eliminating import headaches and providing instant access to elite equipment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> Full Commercial Lineup Available
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> Showroom & Parts in Sarbet, Addis Ababa
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> Direct Factory Warranty & Pricing
                </li>
              </ul>
            </Reveal>

            <Reveal delay={200} className="bg-white p-10 rounded-[2rem] border border-[var(--cream-border)] shadow-[0_24px_50px_-30px_rgba(45,27,8,0.25)] card-hover-lift group">
              <ShieldCheck className="w-10 h-10 text-[#8A6535] mb-6 group-hover:-translate-y-2 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-[var(--text-primary)] mb-4">Lifetime Local Support</h3>
              <p className="text-[var(--text-muted)] font-light leading-relaxed mb-6">
                Buying a machine is just the beginning. Our true value lies in our unparalleled after-sales support. We ensure your production never stops.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> Certified Local Engineers
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> On-Site Installation & Commissioning
                </li>
                <li className="flex items-center gap-3 text-sm text-[#5C4836]">
                  <CheckCircle2 className="w-4 h-4 text-[#7A4A22]" /> Comprehensive Roasting Training
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-12 border-y border-white/[0.06] overflow-hidden bg-[#1A1414] relative flex items-center">
        <div className="w-[200%] flex whitespace-nowrap animate-marquee-x items-center gap-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-display text-2xl text-[#C9933E] uppercase tracking-widest font-bold">Supreme Performance</span>
              <span className="coffee-ring-dark w-4 h-4 rounded-full" />
              <span className="font-display text-2xl text-[#C9933E] uppercase tracking-widest font-bold">Unmatched Durability</span>
              <span className="coffee-ring-dark w-4 h-4 rounded-full" />
              <span className="font-display text-2xl text-[#C9933E] uppercase tracking-widest font-bold">Turkish Engineering</span>
              <span className="coffee-ring-dark w-4 h-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="py-32 bg-[var(--bg-primary)] text-center relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[300px] bg-gradient-to-b from-transparent via-[var(--coffee-brown)]/20 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="w-16 h-16 mx-auto bg-[var(--cream-base)] rounded-2xl flex items-center justify-center mb-8 rotate-45 shadow-sm border border-[var(--cream-border)]">
              <Globe2 className="w-6 h-6 text-[var(--coffee-brown)] -rotate-45" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--text-primary)] mb-6">
              Ready to elevate your production?
            </h2>
            <p className="text-[var(--text-muted)] text-lg font-light mb-10 max-w-2xl mx-auto">
              Join the ranks of elite roasters worldwide. Visit our Addis Ababa showroom or reach out to our specialists today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold px-10 py-5 w-full sm:w-auto shadow-xl shadow-[var(--coffee-brown)]/20">
                Speak with an Expert
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/showroom" className="btn-ghost-gold px-10 py-5 w-full sm:w-auto bg-transparent">
                <Clock className="w-4 h-4 mr-2" />
                Visit Sarbet Showroom
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
