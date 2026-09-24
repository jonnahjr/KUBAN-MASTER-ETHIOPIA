import React from "react";
import { SERVICES } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      {SERVICES.map((service, i) => (
        <ServiceCard key={service.id} service={service} index={i} />
      ))}
    </div>
  );
}
