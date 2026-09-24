export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
  ethiopiaContext: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "installation",
    slug: "installation",
    title: "Turnkey Installation & Commissioning",
    shortDescription:
      "On-site mechanical installation, ventilation exhaust routing, and electrical commissioning by factory-trained technicians.",
    description:
      "Proper installation is the bedrock of roaster longevity, fire safety, and thermal efficiency. The Kuban Master Ethiopia technical crew conducts site surveys, verifies gas supply pressures, designs custom stainless-steel exhaust flues, and commissions your machine on-site anywhere in Ethiopia.",
    iconName: "Wrench",
    highlights: [
      "Site pre-inspection and utility readiness checks",
      "Gas piping and pressure regulator verification",
      "Stainless steel double-wall exhaust flue routing and chaff cyclone positioning",
      "First roast trial run and temperature telemetry validation",
    ],
    deliverables: [
      "Certified installation checklist",
      "Initial safety & emergency shut-off test report",
      "Roaster operator basic training certificate",
    ],
    ethiopiaContext:
      "Addis Ababa's high altitude (2,355m above sea level) impacts oxygen density and draft pressure. Our local engineers specifically tune airflow dampers and burner air-fuel mixtures for optimal combustion in Ethiopian highland environments.",
  },
  {
    id: "technical-support",
    slug: "technical-support",
    title: "Local Technical Support & Tuning",
    shortDescription:
      "Rapid local response in Addis Ababa and nationwide for burner tuning, thermocouple diagnostics, and preventive maintenance.",
    description:
      "Unlike purchasing overseas machinery with zero local backing, Kuban Master Ethiopia provides responsive local technical support. Our engineers carry diagnostic equipment to calibrate PID controllers, service burner nozzles, and ensure uninterrupted roasting operations.",
    iconName: "Headphones",
    highlights: [
      "Dedicated Addis Ababa support desk reachable via direct hotline & WhatsApp",
      "On-demand emergency troubleshooting for roastery breakdowns",
      "Thermocouple probe recalibration and Rate-of-Rise (RoR) accuracy tests",
      "Quarterly and annual preventive maintenance contracts",
    ],
    deliverables: [
      "Detailed diagnostic service log",
      "Burner combustion efficiency tuning",
      "PLC firmware & software updates",
    ],
    ethiopiaContext:
      "Our support technicians are physically stationed in Addis Ababa (Sarbet), allowing rapid on-site intervention without waiting weeks for overseas technicians.",
  },
  {
    id: "spare-parts",
    slug: "spare-parts",
    title: "Genuine Kuban Spare Parts",
    shortDescription:
      "In-stock authentic Turkish replacement parts in Addis Ababa: motors, thermocouples, burner nozzles, seals, and drive belts.",
    description:
      "Downtime is catastrophic for commercial coffee roasters. Kuban Master Ethiopia maintains an active warehouse inventory of original manufacturer spare parts directly imported from Kuban Turkey, guaranteeing immediate availability.",
    iconName: "Cpu",
    highlights: [
      "100% original manufacturer replacement parts from Izmir, Turkey",
      "High-wear components stocked locally in Addis Ababa: bearings, drive belts, ceramic igniters, solenoids",
      "Precision PT100 and Type-K thermocouple probes",
      "Same-day dispatch for critical components across Addis Ababa",
    ],
    deliverables: [
      "Original manufacturer warranty compliance",
      "Factory replacement seals and food-grade lubricants",
      "Full technical schematic diagrams for parts identification",
    ],
    ethiopiaContext:
      "Eliminates months-long customs delays and currency bottlenecks. When you need a replacement motor or sensor, it is already on the ground in Ethiopia.",
  },
  {
    id: "training",
    slug: "training",
    title: "Roasting & Cupping Training Academy",
    shortDescription:
      "Certified coffee roasting and cupping training programs run right here in Ethiopia — from green bean fundamentals to advanced profile roasting.",
    description:
      "Great machines need great roasters. Kuban Master Ethiopia runs certified roasting and cupping training programs in Addis Ababa for café owners, roastery operators, quality teams, and export cupping labs. Courses combine hands-on machine time on Kuban roasters with sensory theory, green coffee evaluation, and roast-profile development — all calibrated to Ethiopian specialty beans like Yirgacheffe, Sidama, Guji, and Harar.",
    iconName: "GraduationCap",
    highlights: [
      "Foundation course: green coffee classification, moisture, and density fundamentals",
      "Hands-on roasting practice on Kuban Base and Supreme roasters at our Sarbet training lab",
      "Cupping protocol training aligned with SCA standards using Ethiopian specialty lots",
      "Roast-profile development with Artisan, Cropster, and Kuban Roast Manager software",
      "Certificates issued on completion — valued by Ethiopian roasteries and exporters",
    ],
    deliverables: [
      "Certified training completion certificate",
      "Personal roast-profile portfolio built during the course",
      "Green-to-roasted evaluation workbook for your team",
    ],
    ethiopiaContext:
      "Ethiopia grows some of the most complex specialty coffees on earth — florals, citrics, and stone fruits found nowhere else. Our training programs are built around Ethiopian bean density, altitude-grown hardness, and the heritage of jebena buna coffee culture, so your team masters roasting the birthplace of coffee's finest lots.",
  },
  {
    id: "customization",
    slug: "customization",
    title: "Customization & Roastery Branding",
    shortDescription:
      "Bespoke RAL powder-coat colors, brass/chrome accents, dual-fuel configurations, and custom roastery nameplates.",
    description:
      "Your coffee roaster is often the visual centerpiece of your cafe or roastery. Through our direct manufacturing partnership with Kuban Turkey, we configure machines to match your brand identity, architectural palette, and operational parameters.",
    iconName: "Palette",
    highlights: [
      "Custom RAL powder-coating finishes (matte obsidian, British racing green, ivory cream, brushed metallic)",
      "Polished brass, copper, or chrome trims and cooling tray accents",
      "Laser-engraved custom company nameplates and roastery emblems",
      "Custom electrical options: single-phase 220V or three-phase 380V matching Ethiopian grid supply",
    ],
    deliverables: [
      "Pre-manufacturing 3D color rendering preview",
      "Factory-applied high-temperature heat-resistant finish",
      "Customized documentation and operator interface",
    ],
    ethiopiaContext:
      "Allows Ethiopian specialty coffee brands to stand out with an iconic, photogenic roasting centerpiece in their flagship retail outlets.",
  },
];
