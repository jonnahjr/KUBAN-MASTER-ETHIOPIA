import { z } from "zod";

export const quoteSchema = z.object({
  // Step 1: Business Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company or roastery name is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  email: z.string().email("Valid email address is required"),
  city: z.string().min(2, "City or region is required (e.g. Addis Ababa, Hawassa, Jimma)"),
  businessType: z.enum([
    "specialty_cafe",
    "boutique_roastery",
    "commercial_roastery",
    "coffee_exporter",
    "hotel_hospitality",
    "industrial_processor",
    "new_venture",
  ]),

  // Step 2: Machine Selection
  machineSlug: z.string().min(1, "Please select a machine model or capacity"),
  quantity: z.number().int().min(1).default(1),

  // Step 3: Technical & Operational Requirements
  heatingPreference: z.enum(["lpg", "natural_gas", "electricity", "undecided"]),
  voltagePreference: z.enum(["220v_single_phase", "380v_three_phase", "undecided"]),
  installationRequired: z.boolean().default(true),
  deliveryLocation: z.string().optional(),
  estimatedStartTimeline: z.enum([
    "immediate_stock",
    "within_1_month",
    "1_to_3_months",
    "planning_phase",
  ]),

  // Step 4: Additional Requirements & Message
  notes: z.string().optional(),

  // Step 5: Contact Preference
  preferredContact: z.enum(["whatsapp", "phone", "email"]),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
