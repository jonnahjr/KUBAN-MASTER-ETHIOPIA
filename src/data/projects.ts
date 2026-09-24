export interface ProjectStory {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  location: string;
  machineModel: string;
  year: number;
  capacityWeekly: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  tags: string[];
}

export const PROJECTS: ProjectStory[] = [
  {
    id: "addis-specialty-flagship",
    slug: "addis-specialty-flagship",
    title: "Flagship Specialty Cafe & Micro-Roastery",
    clientType: "Specialty Cafe & Roaster",
    location: "Bole, Addis Ababa",
    machineModel: "Kuban Supreme 6 Kg (Matte Black & Polished Brass)",
    year: 2024,
    capacityWeekly: "350 kg / week",
    summary:
      "A premier specialty coffee brand wanted an iconic centerpiece roaster capable of producing competition-grade single-origin roasts in full view of customers.",
    challenge:
      "Limited cafe space, stringent building ventilation constraints, and the need for zero smoke exhaust into the indoor dining hall.",
    solution:
      "Kuban Master Ethiopia engineered an ultra-efficient ducting route with an external high-efficiency chaff cyclone and tailored Pre-Mix burner tuning. The machine was finished in custom matte black with polished brass accents.",
    outcome:
      "Daily showcase roasting with seamless Cropster logging and zero customer disruptions. Increased customer retention and bean retail sales by 140%.",
    image: "/images/projects/project-bole-cafe.jpg",
    tags: ["Supreme 6kg", "Addis Ababa", "Specialty Cafe", "Cropster"],
  },
  {
    id: "sidama-exporter-cupping-lab",
    slug: "sidama-exporter-cupping-lab",
    title: "Quality Control & Sample Lab Installation",
    clientType: "Green Coffee Exporter",
    location: "Sarbet / Gotera Corridor, Addis Ababa",
    machineModel: "Kuban Base 500g Electric & Artisan Setup",
    year: 2024,
    capacityWeekly: "Sample Batches (60-80 trials/day)",
    summary:
      "An established green coffee exporter required surgical batch repeatability to evaluate regional micro-lots from Yirgacheffe, Guji, and Sidama for international buyers.",
    challenge:
      "Gas lines were not permitted inside the office tower laboratory, requiring high-stability clean electric heating with micro-adjustments.",
    solution:
      "Installed the Kuban Base 500g with high-density ceramic electric elements, calibrated dual thermocouple logging, and direct Artisan computer sync.",
    outcome:
      "Flawless SCA-compliant sample profiling with verified thermal repeatability across all export cupping sessions.",
    image: "/images/projects/project-exporter-lab.jpg",
    tags: ["Base 500g", "Cupping Lab", "Green Coffee Export", "Artisan"],
  },
  {
    id: "commercial-roastery-expansion",
    slug: "commercial-roastery-expansion",
    title: "High-Volume Commercial Wholesale Plant",
    clientType: "Commercial Roastery & Wholesale Distributor",
    location: "Kality Industrial Zone, Addis Ababa",
    machineModel: "Kuban Supreme 24 Kg + Pneumatic Loader",
    year: 2023,
    capacityWeekly: "2,200 kg / week",
    summary:
      "A fast-growing roastery serving Ethiopian hotels and supermarket chains needed to quadruple throughput without increasing operator headcount.",
    challenge:
      "High labor costs from manual green coffee handling and inconsistency in roast color across shift rotations.",
    solution:
      "Supplied and commissioned the Kuban Supreme 24kg with pneumatic vacuum loading, automated pneumatic drop gates, and automated PLC recipe recall.",
    outcome:
      "Roastery output expanded to 2.2 tons weekly with consistent roast degree measurements (Agtron) and significant fuel savings.",
    image: "/images/projects/project-commercial-plant.jpg",
    tags: ["Supreme 24kg", "Industrial Scale", "PLC Automation", "Wholesale"],
  },
];
