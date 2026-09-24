"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, QuoteFormData } from "@/types/quote";
import { PRODUCTS } from "@/data/products";
import { COMPANY } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  CheckCircle2,
  FileText,
  MessageSquare,
  Phone,
  ArrowRight,
  ArrowLeft,
  Building,
  Wrench,
  Flame,
  Send,
} from "lucide-react";

interface QuoteWizardProps {
  initialMachineSlug?: string;
}

export function QuoteWizard({ initialMachineSlug }: QuoteWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      city: "Addis Ababa",
      businessType: "specialty_cafe",
      machineSlug: initialMachineSlug || "kuban-supreme-6kg",
      quantity: 1,
      heatingPreference: "lpg",
      voltagePreference: "380v_three_phase",
      installationRequired: true,
      deliveryLocation: "Addis Ababa",
      estimatedStartTimeline: "within_1_month",
      notes: "",
      preferredContact: "whatsapp",
    },
  });

  const selectedMachineSlug = watch("machineSlug");
  const selectedMachine = PRODUCTS.find((p) => p.slug === selectedMachineSlug);

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["fullName", "companyName", "phone", "email", "city", "businessType"]);
    } else if (currentStep === 2) {
      isValid = await trigger(["machineSlug", "quantity"]);
    } else if (currentStep === 3) {
      isValid = await trigger(["heatingPreference", "voltagePreference", "installationRequired", "estimatedStartTimeline"]);
    } else if (currentStep === 4) {
      isValid = true;
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: QuoteFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  if (isSubmitted && submittedData) {
    const selectedProd = PRODUCTS.find((p) => p.slug === submittedData.machineSlug);
    const waLink = buildWhatsAppLink("price", {
      productName: selectedProd?.name || submittedData.machineSlug,
      name: submittedData.fullName,
      city: submittedData.city,
    });

    return (
      <div className="bg-[var(--coffee-base)] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mx-auto text-[var(--muted-tan)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#E7A93D] font-semibold">
            Quotation Request Received
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Thank you, {submittedData.fullName}.
          </h2>
          <p className="text-sm text-[#B5C9C7] max-w-lg mx-auto leading-relaxed">
            Your quotation request for{" "}
            <strong className="text-white">
              {selectedProd?.name || submittedData.machineSlug}
            </strong>{" "}
            has been forwarded to our technical sales team in Addis Ababa.
          </p>
        </div>

        {/* SUMMARY CARD */}
        <div className="bg-black/40 border border-white/5 rounded-2xl p-5 text-left text-xs space-y-2 text-[#B5C9C7]">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[var(--text-muted)]">Company:</span>
            <span className="font-semibold text-white">{submittedData.companyName}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[var(--text-muted)]">Location:</span>
            <span className="text-white">{submittedData.city}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-[var(--text-muted)]">Heating / Power:</span>
            <span className="text-white uppercase">{submittedData.heatingPreference} • {submittedData.voltagePreference.replace(/_/g, " ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--text-muted)]">Installation:</span>
            <span className="text-[#E7A93D] font-semibold">
              {submittedData.installationRequired ? "Turnkey Ethiopia Setup Requested" : "Supply Only"}
            </span>
          </div>
        </div>

        {/* IMMEDIATE ACTION CTAS */}
        <div className="space-y-3 pt-2">
          <p className="text-xs text-[var(--text-muted)]">
            For immediate proforma delivery or urgent stock checks, connect directly with our desk:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-[var(--text-primary)] text-xs sm:text-sm font-semibold transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward to WhatsApp Desk</span>
            </a>

            <a
              href={`tel:${COMPANY.phones.primarySalesRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all"
            >
              <Phone className="w-4 h-4 text-[#E7A93D]" />
              <span>Call Sales Hotline</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--coffee-base)] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
      {/* STEP PROGRESS BAR */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
          <span className="font-semibold text-white">Step {currentStep} of 5</span>
          <span className="text-[#E7A93D] font-medium">
            {currentStep === 1 && "Business Information"}
            {currentStep === 2 && "Machine Selection"}
            {currentStep === 3 && "Technical Configuration"}
            {currentStep === 4 && "Operational Notes"}
            {currentStep === 5 && "Contact Preference & Confirmation"}
          </span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#E7A93D] to-[#b37532] transition-all duration-300"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* STEP 1: BUSINESS INFORMATION */}
        {currentStep === 1 && (
          <div className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="pb-2 border-b border-white/5">
              <h3 className="text-lg font-bold text-white">1. Business Profile</h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Tell us about your organization and physical location in Ethiopia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="e.g. Dawit Tadesse"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Company / Roastery Name *
                </label>
                <input
                  type="text"
                  {...register("companyName")}
                  placeholder="e.g. Origin Coffee Roasters PLC"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                />
                {errors.companyName && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Phone Number (Ethiopian or International) *
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="+251 9..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  City / Region in Ethiopia *
                </label>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="Addis Ababa, Hawassa, Jimma..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                />
                {errors.city && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Business Operation Type *
                </label>
                <select
                  {...register("businessType")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                >
                  <option value="specialty_cafe">Specialty Cafe / Micro-Roastery (Addis Ababa & regions)</option>
                  <option value="boutique_roastery">Boutique Craft Roastery</option>
                  <option value="commercial_roastery">Commercial Wholesale Roastery</option>
                  <option value="coffee_exporter">Green Coffee Exporter / Cupping Lab</option>
                  <option value="hotel_hospitality">Hotel / Hospitality Group</option>
                  <option value="industrial_processor">Industrial Coffee Processing Plant</option>
                  <option value="new_venture">New Coffee Venture / Investor</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: MACHINE INTEREST */}
        {currentStep === 2 && (
          <div className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="pb-2 border-b border-white/5">
              <h3 className="text-lg font-bold text-white">2. Machine Selection</h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Select the Kuban coffee roaster or processing equipment you wish to quote.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-2">
                  Quick Select by Desired Batch Capacity (in KG):
                </label>
                <div className="flex flex-wrap gap-1.5 pb-2">
                  {[
                    { label: "0.5 kg (Sample)", slug: "kuban-base-500g" },
                    { label: "1.8 kg (Specialty)", slug: "kuban-supreme-1-8kg" },
                    { label: "3 kg (Shop)", slug: "kuban-base-3kg" },
                    { label: "6 kg (Bestseller)", slug: "kuban-supreme-6kg" },
                    { label: "12 kg (Mid-Range)", slug: "kuban-supreme-12kg" },
                    { label: "18 kg (Siemens PLC)", slug: "kuban-supreme-18kg" },
                    { label: "24 kg (Commercial)", slug: "kuban-supreme-24kg" },
                    { label: "30 kg (Industrial)", slug: "kuban-industrial-30kg" },
                    { label: "60 kg (Plant)", slug: "kuban-industrial-60kg" },
                    { label: "120 kg (Giant)", slug: "kuban-industrial-120kg" },
                    { label: "Bean Size Grader", slug: "kuban-green-coffee-size-grader" },
                  ].map((quick) => (
                    <button
                      key={quick.slug}
                      type="button"
                      onClick={() => setValue("machineSlug", quick.slug)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border ${
                        selectedMachineSlug === quick.slug
                          ? "bg-[#6B3F1D] text-white border-[#A77B4A] shadow-md"
                          : "bg-white/5 text-[#B5C9C7] border-white/10 hover:border-white/30"
                      }`}
                    >
                      {quick.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className="text-xs font-semibold text-[#B5C9C7] block">
                Or Select Machine from Catalog:
              </label>
              <select
                {...register("machineSlug")}
                className="w-full px-3.5 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
              >
                <optgroup label="Shop & Boutique Roasters (0.5kg – 6kg)">
                  <option value="kuban-base-500g">Kuban Base 500g Sample / Cupping Roaster</option>
                  <option value="kuban-base-1-5kg">Kuban Base 1.5 Kg Coffee Roaster</option>
                  <option value="kuban-supreme-1-8kg">Kuban Supreme 1.8 Kg Coffee Roaster</option>
                  <option value="kuban-base-3kg">Kuban Base 3 Kg Shop Roaster</option>
                  <option value="kuban-supreme-3kg">Kuban Supreme 3 Kg Coffee Roaster</option>
                  <option value="kuban-base-5kg">Kuban Base 5 Kg Shop Roaster</option>
                  <option value="kuban-supreme-6kg">Kuban Supreme 6 Kg Coffee Roaster (Bestseller)</option>
                </optgroup>
                <optgroup label="Commercial & Mid-Range Roasters (10kg – 24kg)">
                  <option value="kuban-base-10kg">Kuban Base 10 Kg Shop Roaster</option>
                  <option value="kuban-supreme-12kg">Kuban Supreme 12 Kg Coffee Roaster</option>
                  <option value="kuban-base-15kg">Kuban Base 15 Kg Commercial Roaster</option>
                  <option value="kuban-supreme-18kg">Kuban Supreme 18 Kg Coffee Roaster (15\" Siemens PLC)</option>
                  <option value="kuban-base-20kg">Kuban Base 20 Kg Commercial Roaster</option>
                  <option value="kuban-supreme-24kg">Kuban Supreme 24 Kg Coffee Roaster</option>
                </optgroup>
                <optgroup label="Industrial Giants (30kg – 120kg)">
                  <option value="kuban-industrial-30kg">Kuban Supreme 30 Kg Industrial Plant</option>
                  <option value="kuban-industrial-60kg">Kuban 60 Kg Industrial Plant</option>
                  <option value="kuban-industrial-120kg">Kuban 120 Kg Industrial Plant (250 kW Premix)</option>
                </optgroup>
                <optgroup label="Grinders, Silos & Processing Equipment">
                  <option value="kuban-commercial-shop-grinder">Kuban Commercial Shop Grinder</option>
                  <option value="kuban-turkish-coffee-fine-grinder">Kuban Turkish Coffee Fine Grinder</option>
                  <option value="kuban-cylindrical-coffee-silo">Kuban Cylindrical Glass & Brass Silo</option>
                  <option value="kuban-green-coffee-size-grader">Kuban Green Coffee Size Grader (1/64\" Sorting Screens)</option>
                </optgroup>
              </select>

              {selectedMachine && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white">{selectedMachine.name}</span>
                    <span className="text-[var(--text-muted)] block mt-0.5">
                      Batch Capacity: {selectedMachine.capacityDisplay} • {selectedMachine.hourlyOutputDisplay || "Continuous"}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#E7A93D]/20 text-[#E7A93D] font-semibold border border-[#E7A93D]/30 uppercase text-[10px]">
                    {selectedMachine.series}
                  </span>
                </div>
              )}

              <div className="pt-2">
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Quantity Required:
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  {...register("quantity", { valueAsNumber: true })}
                  className="w-32 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: TECHNICAL REQUIREMENTS */}
        {currentStep === 3 && (
          <div className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="pb-2 border-b border-white/5">
              <h3 className="text-lg font-bold text-white">3. Utilities & Installation in Ethiopia</h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Ensure compatibility with your building utilities and site infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Heating / Energy Source *
                </label>
                <select
                  {...register("heatingPreference")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                >
                  <option value="lpg">LPG / Propane Gas (Most Common in Ethiopia)</option>
                  <option value="natural_gas">Natural Gas (Pipeline)</option>
                  <option value="electricity">Electric (Recommended for cupping labs/mall cafes)</option>
                  <option value="undecided">Undecided / Need Consultation</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Electrical Supply Configuration *
                </label>
                <select
                  {...register("voltagePreference")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                >
                  <option value="380v_three_phase">380V Three Phase (Commercial standard)</option>
                  <option value="220v_single_phase">220V Single Phase</option>
                  <option value="undecided">Need Technical Site Inspection</option>
                </select>
              </div>

              <div className="sm:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">
                    Request On-Site Turnkey Installation & Commissioning?
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)]">
                    Includes exhaust flue routing, gas pressure tuning, and high-altitude calibration.
                  </div>
                </div>
                <input
                  type="checkbox"
                  {...register("installationRequired")}
                  className="w-4 h-4 accent-[#E7A93D] rounded"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#B5C9C7] block mb-1">
                  Target Project Timeline *
                </label>
                <select
                  {...register("estimatedStartTimeline")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D]"
                >
                  <option value="immediate_stock">Immediate / Ready for Available Showroom Stock</option>
                  <option value="within_1_month">Within 1 Month</option>
                  <option value="1_to_3_months">1 – 3 Months (Ordering custom color / build)</option>
                  <option value="planning_phase">Budgeting & Feasibility Phase</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: NOTES */}
        {currentStep === 4 && (
          <div className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="pb-2 border-b border-white/5">
              <h3 className="text-lg font-bold text-white">4. Specific Requirements or Questions</h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Mention any custom body colors, destoner requirements, green bean loaders, or ducting layout details.
              </p>
            </div>

            <div>
              <textarea
                rows={4}
                {...register("notes")}
                placeholder="e.g. We are building a specialty cafe in Bole and would like a custom matte black finish with brass cooling tray, plus an in-line destoner. Please include estimated freight to Hawassa if applicable."
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E7A93D] resize-none"
              />
            </div>
          </div>
        )}

        {/* STEP 5: CONTACT PREFERENCE */}
        {currentStep === 5 && (
          <div className="space-y-4 text-left animate-in fade-in duration-200">
            <div className="pb-2 border-b border-white/5">
              <h3 className="text-lg font-bold text-white">5. Preferred Contact Method</h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                How would you prefer our sales and technical team to reach you?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "whatsapp", label: "WhatsApp Direct", icon: MessageSquare },
                { id: "phone", label: "Direct Phone Call", icon: Phone },
                { id: "email", label: "Formal Email Proforma", icon: FileText },
              ].map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#E7A93D]/40 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={item.id}
                    {...register("preferredContact")}
                    className="accent-[#E7A93D]"
                  />
                  <item.icon className="w-4 h-4 text-[#E7A93D]" />
                  <span className="text-xs font-semibold text-white">{item.label}</span>
                </label>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-[var(--text-muted)] leading-relaxed">
              By submitting this request, your details will be processed solely by Kuban Master
              Ethiopia to formulate your quotation and technical consultation. No spam.
            </div>
          </div>
        )}

        {/* NAVIGATION BUTTONS */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-1.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#7D4922] to-[#5C3418] border border-[#A77B4A]/30 text-white text-xs sm:text-sm font-bold shadow-lg hover:brightness-110 transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7D4922] to-[#5C3418] border border-[#A77B4A]/30 text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#6B3F1D]/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Submitting..." : "Submit Quotation Request"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
