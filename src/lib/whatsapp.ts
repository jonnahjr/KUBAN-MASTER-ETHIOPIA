import { COMPANY } from "@/config/company";

export type WhatsAppIntent =
  | "product"
  | "price"
  | "installation"
  | "showroom"
  | "spare_parts"
  | "training"
  | "general";

interface WhatsAppOptions {
  productName?: string;
  capacity?: string;
  city?: string;
  date?: string;
  name?: string;
}

export function buildWhatsAppLink(
  intent: WhatsAppIntent = "general",
  options: WhatsAppOptions = {}
): string {
  const phone = COMPANY.phones.primaryWhatsAppRaw;
  let message = "";

  switch (intent) {
    case "product":
      message = `Hello Kuban Master Ethiopia,

I am interested in your coffee roasting equipment:
Machine: ${options.productName || "Kuban Coffee Roaster"}
${options.capacity ? `Capacity: ${options.capacity}\n` : ""}
I would like to receive:
• Technical specifications & brochure
• Current availability in Ethiopia
• Delivery & installation options

Thank you.`;
      break;

    case "price":
      message = `Hello Kuban Master Ethiopia,

I would like to request official pricing and commercial terms for:
Machine: ${options.productName || "Kuban Coffee Roaster"}

Could you please send me a formal quotation and payment terms?

Thank you.`;
      break;

    case "installation":
      message = `Hello Kuban Master Ethiopia Technical Team,

I am inquiring about professional installation and commissioning services for coffee processing machinery in Ethiopia.

Location: ${options.city || "Addis Ababa"}
Equipment: ${options.productName || "Kuban Roaster"}

Please advise on technician availability and site requirements.`;
      break;

    case "training":
      message = `Hello Kuban Master Ethiopia,

I would like to learn more about your certified coffee roasting & cupping training programs in Addis Ababa.

Name: ${options.name || "Interested Roaster"}
Team size: ${options.capacity || ""}

Please share the upcoming cohort schedule and pricing.`;
      break;

    case "showroom":
      message = `Hello Kuban Master Ethiopia,

I would like to book a showroom visit at your Sarbet location in Addis Ababa (in front of the Vatican Embassy, White Building).

Name: ${options.name || "Interested Customer"}
${options.date ? `Preferred Date/Time: ${options.date}\n` : ""}Equipment to inspect: ${options.productName || "Shop & Commercial Roasters"}

Thank you.`;
      break;

    case "spare_parts":
      message = `Hello Kuban Master Ethiopia Support,

I need assistance regarding genuine Kuban spare parts and technical servicing for our roasting line in Ethiopia.

Machine Model: ${options.productName || "Kuban Roaster"}

Thank you.`;
      break;

    default:
      message = `Hello Kuban Master Ethiopia,

I am interested in professional coffee roasting and processing machinery. Please connect me with a technical sales specialist.`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
