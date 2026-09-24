import React from "react";
import type { ProductSpecification } from "@/types/product";

interface ProductSpecsProps {
  specs: ProductSpecification;
  hourlyOutput?: string;
}

function SpecRow({ label, value }: { label: string; value: string | string[] | undefined | boolean }) {
  if (value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0)) return null;
  const display = Array.isArray(value) ? value.join(" · ") : String(value);

  return (
    <div className="flex items-baseline justify-between gap-6 py-3 border-b border-[#E8DEC8]">
      <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A7460] shrink-0">
        {label}
      </span>
      <span className="text-sm text-[#2D1B08] font-medium text-right">
        {display}
      </span>
    </div>
  );
}

export function ProductSpecs({ specs, hourlyOutput }: ProductSpecsProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-6 pb-4 border-b-2 border-[#2D1B08]/80">
        <h3 className="eyebrow text-[#2D1B08]">Specifications</h3>
        <span className="text-[10px] text-[#8A7460]">Kuban · İzmir</span>
      </div>
      <div>
        <SpecRow label="Batch Capacity" value={String(specs.batchCapacityKg)} />
        {hourlyOutput && <SpecRow label="Hourly Output" value={hourlyOutput} />}
        <SpecRow label="Roasting Time" value={specs.roastingTimeMin ? `${specs.roastingTimeMin} min` : undefined} />
        <SpecRow label="Cooling Time" value={specs.coolingTimeMin ? `${specs.coolingTimeMin} min` : undefined} />
        <SpecRow label="Heating Sources" value={specs.heatingSources.length > 0 ? specs.heatingSources : undefined} />
        {specs.burnerType && <SpecRow label="Burner Type" value={specs.burnerType} />}
        <SpecRow label="Control System" value={specs.controlSystem} />
        <SpecRow label="Compatible Software" value={specs.compatibleSoftware} />
        <SpecRow label="Voltage Options" value={specs.voltageOptions} />
        {typeof specs.drumSpeedControl === "string" && (
          <SpecRow label="Drum Speed" value={specs.drumSpeedControl} />
        )}
        {typeof specs.airflowControl === "string" && (
          <SpecRow label="Airflow Control" value={specs.airflowControl} />
        )}
        {"dimensionsCm" in specs && specs.dimensionsCm && (
          <SpecRow label="Dimensions" value={specs.dimensionsCm} />
        )}
        {"weightKg" in specs && specs.weightKg && (
          <SpecRow label="Weight" value={typeof specs.weightKg === "number" ? `${specs.weightKg} kg` : String(specs.weightKg)} />
        )}
      </div>
      <p className="text-[10px] text-[#8A7460] leading-relaxed mt-4">
        Specifications based on manufacturer data from Kuban Coffee Roasters (İzmir,
        Türkiye). Subject to configuration options — contact us for detailed technical
        datasheets.
      </p>
    </div>
  );
}
