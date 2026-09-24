export type ProductCategory =
  | "shop-roasters"
  | "industrial-roasters"
  | "grinders"
  | "silos"
  | "equipment";

export type ProductSeries =
  | "base"
  | "supreme"
  | "supreme-v2"
  | "industrial"
  | "grinders"
  | "silos"
  | "equipment";

export type HeatingType =
  | "LPG"
  | "Natural Gas"
  | "Electricity"
  | "Bi-Fuel (LPG / Natural Gas)";

export type ControlType =
  | "Manual Control"
  | "Semi-Automatic"
  | "PLC Touchscreen (Artisan & Cropster)"
  | "Siemens PLC Touchscreen (Kuban Roast Manager)"
  | "Full Industrial PLC Automation";

export interface ProductSpecification {
  batchCapacityKg: number | string;
  hourlyCapacityKg?: number | string;
  roastingTimeMin?: string;
  heatingSources: HeatingType[];
  burnerType?: string;
  drumSpeedControl?: boolean | string;
  airflowControl?: boolean | string;
  controlSystem: ControlType;
  compatibleSoftware?: string[];
  voltageOptions?: string[];
  dimensionsCm?: string;
  weightKg?: number;
  coolingTimeMin?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  series: ProductSeries;
  category: ProductCategory;
  headline: string;
  capacityKg: number;
  capacityDisplay: string;
  hourlyOutputDisplay?: string;
  description: string;
  shortDescription: string;
  keyFeatures: string[];
  idealFor: string;
  specifications: ProductSpecification;
  image: string;
  gallery: string[];
  priceVisibility: "quote" | "public";
  priceAmount?: number;
  currency?: "ETB" | "USD";
  featured?: boolean;
  inShowroom: boolean;
  badge?: string;
  tags: string[];
}

export interface ProductFilterState {
  category?: ProductCategory | "all";
  series?: ProductSeries | "all";
  minCapacity?: number;
  maxCapacity?: number;
  heating?: HeatingType | "all";
  search?: string;
}
