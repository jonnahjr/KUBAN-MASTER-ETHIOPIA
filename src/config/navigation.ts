export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
    badge?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    title: "Roasters",
    href: "/products",
    children: [
      {
        title: "All Coffee Roasters",
        href: "/products",
        description: "From 500g sample roasters to 120kg industrial plants.",
      },
      {
        title: "Kuban Base Series",
        href: "/products/base",
        description: "Robust shop workhorses from 500g to 20kg.",
        badge: "500g-20kg",
      },
      {
        title: "Kuban Supreme V2 Series",
        href: "/products/supreme-v2",
        description: "New-generation roasters with Siemens PLC & Roast Manager.",
        badge: "New",
      },
      {
        title: "Kuban Supreme Series",
        href: "/products/supreme",
        description: "Specialty flagship roasters with touchscreen PLC.",
        badge: "Flagship",
      },
      {
        title: "Industrial Plants",
        href: "/products/industrial",
        description: "Commercial high-output lines (30kg, 60kg, 120kg).",
      },
    ],
  },
  {
    title: "Coffee Silos",
    href: "/coffee-silos",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Installation & Setup",
        href: "/services/installation",
        description: "Turnkey on-site installation and ventilation in Ethiopia.",
      },
      {
        title: "Local Technical Support",
        href: "/services/technical-support",
        description: "Rapid Addis Ababa technicians for maintenance and tuning.",
      },
      {
        title: "Roasting & Cupping Training",
        href: "/services/training",
        description: "Certified programs at our Sarbet training lab — birthplace of coffee.",
        badge: "Certified",
      },
      {
        title: "Genuine Spare Parts",
        href: "/services/spare-parts",
        description: "In-stock Turkish replacement parts in Addis Ababa.",
      },
    ],
  },

  {
    title: "About",
    href: "/about",
  },
];
