import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    id: "1",
    name: "Joana's Reborn Babies",
    client: "Joana's Reborn",
    category: "silicone",
    url: "https://joanas-reborn-babies.vercel.app/",
    description: "Premium silicone reborn baby doll e-commerce platform with gallery, custom ordering, and secure payments.",
    tags: ["E-commerce", "Gallery", "Custom Orders"],
    price: "1,500,000 - 3,000,000 XAF",
    image: "/projects/reborn.jpg"
  },
  {
    id: "2",
    name: "PeptideLab",
    client: "PeptideLab",
    category: "healthcare",
    url: "https://peptide-lab-six.vercel.app/",
    description: "Professional peptide research platform with product catalog, COA verification, and wholesale ordering.",
    tags: ["E-commerce", "B2B", "Research"],
    price: "1,800,000 - 3,600,000 XAF",
    image: "/projects/peptides.jpg"
  },
  {
    id: "3",
    name: "Recoverly Trust Bank",
    client: "Recoverly",
    category: "banking",
    url: "https://recoverlytrustbank.com/",
    description: "High-security private banking and asset recovery platform with client portals and case tracking.",
    tags: ["Banking", "Security", "Asset Recovery"],
    price: "3,000,000 - 9,000,000 XAF",
    image: "/projects/banking.jpg"
  },
  {
    id: "4",
    name: "Cavalier King Charles Rehoming",
    client: "CKCR Center",
    category: "pets",
    url: "https://cavalierkingcharlesrehomingcenter.com/",
    description: "Specialized dog rehoming platform with adoption applications and pet profiles.",
    tags: ["Pet Adoption", "Gallery", "Applications"],
    price: "900,000 - 1,800,000 XAF",
    image: "/projects/pets.jpg"
  },
  {
    id: "5",
    name: "ZipXpress Logistics",
    client: "ZipXpress",
    category: "logistics",
    url: "https://zip-xpresslogistics.com/",
    description: "Complete logistics and tracking system with real-time package tracking and management dashboard.",
    tags: ["Tracking", "Management", "Dashboard"],
    price: "2,100,000 - 4,800,000 XAF",
    image: "/projects/logistics.jpg"
  },
  {
    id: "6",
    name: "Tiffany Dawson Rehoming",
    client: "Tiffany Dawson",
    category: "pets",
    url: "https://tiffany-dawson-rehoming.vercel.app/",
    description: "Pet rehoming service with detailed pet profiles and adoption process.",
    tags: ["Pet Rehoming", "Profiles", "Contact"],
    price: "900,000 - 1,800,000 XAF",
    image: "/projects/pets2.jpg"
  },
  {
    id: "7",
    name: "Dolores Silicone",
    client: "Dolores",
    category: "silicone",
    url: "https://dolores-silicone.vercel.app/",
    description: "Premium silicone baby nursery store with detailed product catalog.",
    tags: ["E-commerce", "Nursery", "Silicone"],
    price: "1,500,000 - 3,000,000 XAF",
    image: "/projects/silicone2.jpg"
  },
  {
    id: "8",
    name: "Lithia Auto",
    client: "Lithia Auto",
    category: "automotive",
    url: "https://lithia-auto.vercel.app/",
    description: "Car dealership platform with inventory, financing, and map integration.",
    tags: ["Automotive", "Inventory", "Financing"],
    price: "2,400,000 - 4,800,000 XAF",
    image: "/projects/auto.jpg"
  },
  {
    id: "9",
    name: "PetXpress Tracking",
    client: "PetXpress",
    category: "logistics",
    url: "https://petxpress-tracking.vercel.app/",
    description: "Specialized pet transport tracking system.",
    tags: ["Tracking", "Pets", "Transport"],
    price: "1,200,000 - 2,400,000 XAF",
    image: "/projects/pettrack.jpg"
  },
  {
    id: "10",
    name: "Global Track Courier",
    client: "Global Track",
    category: "logistics",
    url: "https://global-track-courier.vercel.app/",
    description: "International courier tracking platform.",
    tags: ["Tracking", "International", "Courier"],
    price: "1,800,000 - 3,600,000 XAF",
    image: "/projects/courier.jpg"
  },
  {
    id: "11",
    name: "Tesla Capital",
    client: "Tesla Capital",
    category: "banking",
    url: "https://tesla-capital.vercel.app/",
    description: "Investment and capital management platform.",
    tags: ["Banking", "Investment", "Capital"],
    price: "3,000,000 - 7,200,000 XAF",
    image: "/projects/tesla.jpg"
  },
  {
    id: "12",
    name: "EazyPost LLC",
    client: "EazyPost",
    category: "logistics",
    url: "https://eazypost-llc.vercel.app/",
    description: "Local delivery and logistics service.",
    tags: ["Delivery", "Local", "Logistics"],
    price: "1,200,000 - 2,700,000 XAF",
    image: "/projects/post.jpg"
  },
  {
    id: "13",
    name: "Puppy Planet",
    client: "Puppy Planet",
    category: "pets",
    url: "https://puppyplanet.vercel.app/",
    description: "Puppy sales and breeder platform with puppy profiles.",
    tags: ["Puppies", "Breeder", "Profiles"],
    price: "1,200,000 - 2,400,000 XAF",
    image: "/projects/puppy.jpg"
  },
  {
    id: "14",
    name: "Morgan Doxie Kernel",
    client: "Morgan Doxie",
    category: "pets",
    url: "https://morgan-doxie-kernel.vercel.app/",
    description: "Specialized dog breeder and rehoming service.",
    tags: ["Dog Breeder", "Rehoming", "Doxie"],
    price: "1,080,000 - 2,100,000 XAF",
    image: "/projects/doxie.jpg"
  },
  {
    id: "15",
    name: "Rothschild Foundation",
    client: "Rothschild",
    category: "business",
    url: "https://rothschild-foundation.vercel.app/",
    description: "Foundation and charity organization website.",
    tags: ["Foundation", "Charity", "Business"],
    price: "1,500,000 - 3,000,000 XAF",
    image: "/projects/foundation.jpg"
  },
  {
    id: "16",
    name: "Calmica Casa",
    client: "Calmica",
    category: "business",
    url: "https://calmicasa.vercel.app/",
    description: "Real estate and property management platform.",
    tags: ["Real Estate", "Property", "Business"],
    price: "2,100,000 - 4,200,000 XAF",
    image: "/projects/realestate.jpg"
  },
  {
    id: "17",
    name: "Vote Mr Jean Baptiste",
    client: "Mr Jean Baptiste",
    category: "business",
    url: "https://vote-mr-jean-baptiste.vercel.app/",
    description: "Political campaign and voting platform.",
    tags: ["Campaign", "Political", "Voting"],
    price: "1,200,000 - 2,400,000 XAF",
    image: "/projects/vote.jpg"
  },
  {
    id: "18",
    name: "Navista",
    client: "Navista",
    category: "logistics",
    url: "https://navista.vercel.app/",
    description: "Navigation and tracking system with advanced features.",
    tags: ["Navigation", "Tracking", "System"],
    price: "1,800,000 - 3,600,000 XAF",
    image: "/projects/navista.jpg"
  }
];

export const services = [
  {
    id: "silicone",
    name: "Silicone Baby & Nursery Websites",
    shortDesc: "Online stores for reborn baby dolls and nursery products",
    description: "Beautiful e-commerce platforms specifically designed for silicone baby doll stores and nursery product retailers. Features include product galleries with multiple images, secure checkout, custom ordering options, and inventory management.",
    features: ["Product galleries", "Custom ordering", "Secure payments", "Photo galleries", "FAQ sections"],
    process: "Discovery → Design → Development → Testing → Launch",
    priceRange: "1,500,000 - 3,000,000 XAF",
    icon: "Baby"
  },
  {
    id: "pets",
    name: "Pet Sales & Breeder Websites",
    shortDesc: "Platforms for pet breeders and adoption services",
    description: "Professional websites for pet breeders, rescuers, and adoption services. Includes detailed pet profiles, application forms, and contact systems.",
    features: ["Pet profiles", "Adoption forms", "Gallery", "Application tracking", "Contact systems"],
    process: "Discovery → Design → Development → Testing → Launch",
    priceRange: "900,000 - 2,400,000 XAF",
    icon: "Paw"
  },
  {
    id: "tracking",
    name: "Tracking & Logistics Systems",
    shortDesc: "Real-time package and shipment tracking",
    description: "Custom tracking systems for logistics companies, couriers, and delivery services. Real-time updates, customer portals, and admin dashboards.",
    features: ["Real-time tracking", "Customer portals", "Admin dashboard", "Notifications", "Reports"],
    process: "Requirements → Architecture → Development → Integration → Launch",
    priceRange: "1,200,000 - 4,800,000 XAF",
    icon: "MapPin"
  },
  {
    id: "virtual",
    name: "Virtual Numbers",
    shortDesc: "Business phone numbers with routing",
    description: "Virtual phone number solutions for businesses. Call routing, voicemail, SMS forwarding, and custom business hours.",
    features: ["Call routing", "Voicemail", "SMS forwarding", "Multiple numbers", "Business hours"],
    priceRange: "30,000 - 120,000 XAF/mo",
    icon: "Phone"
  },
  {
    id: "graphic",
    name: "Graphic Design",
    shortDesc: "Logos, branding and promotional materials",
    description: "Professional design services including logos, brand identity, business cards, and promotional materials.",
    features: ["Logo design", "Brand identity", "Print materials", "Social media", "Packaging"],
    priceRange: "120,000 - 1,200,000 XAF",
    icon: "Palette"
  },
  {
    id: "business",
    name: "Business & Company Sites",
    shortDesc: "Professional websites for businesses",
    description: "Clean, professional websites for businesses of all sizes. Company info, services, team pages, and contact functionality.",
    features: ["Company info", "Services", "Team pages", "Contact forms", "Blog integration"],
    priceRange: "900,000 - 3,000,000 XAF",
    icon: "Building"
  },
  {
    id: "ecommerce",
    name: "E-commerce & Landing Pages",
    shortDesc: "Online stores and conversion pages",
    description: "Conversion-focused e-commerce stores and landing pages. Product catalogs, shopping carts, and payment integration.",
    features: ["Product catalogs", "Shopping cart", "Payment processing", "Landing pages", "Analytics"],
    priceRange: "1,200,000 - 3,600,000 XAF",
    icon: "ShoppingCart"
  },
  {
    id: "banking",
    name: "Banking & Refund Systems",
    shortDesc: "Secure financial platforms",
    description: "Secure banking platforms and refund management systems with client portals, case tracking, and document handling.",
    features: ["Client portals", "Secure login", "Case tracking", "Document upload", "Refund processing"],
    priceRange: "3,000,000 - 9,000,000 XAF",
    icon: "DollarSign"
  },
  {
    id: "updates",
    name: "Website Updates & Photo Editing",
    shortDesc: "Quick fixes and content updates",
    description: "Fast turnaround updates, modifications, and professional photo editing for your website.",
    features: ["Content updates", "Photo editing", "Bug fixes", "Performance tuning", "Security patches"],
    priceRange: "30,000 - 300,000 XAF",
    icon: "Edit"
  },
  {
    id: "branding",
    name: "Branding & Promo Design",
    shortDesc: "Complete brand identity packages",
    description: "Comprehensive branding packages including logo design, color schemes, business cards, and promotional materials.",
    features: ["Brand strategy", "Logo packages", "Business cards", "Brochures", "Social kits"],
    priceRange: "300,000 - 1,800,000 XAF",
    icon: "Award"
  }
];

export const faqs = [
  {
    question: "What is the typical timeline for a website project?",
    answer: "Timeline depends on complexity. Simple websites take 1-2 weeks, while complex e-commerce or tracking systems take 4-8 weeks. We provide detailed timelines after requirements gathering."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes! We offer monthly maintenance packages starting at 60,000 XAF/month that include updates, security patches, and minor modifications."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayPal, bank transfers, and mobile money. For large projects, we offer payment plans with 50% upfront and 50% on completion."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes, all our websites are built with SEO best practices. We also offer additional SEO packages starting at 120,000 XAF/month for ongoing optimization."
  },
  {
    question: "Can you work with existing websites?",
    answer: "Absolutely! We can update, redesign, or add features to existing websites. Contact us for a free audit."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the initial design concepts, we provide a full refund within the first 7 days."
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah M.",
    company: "Joana's Reborn Babies",
    quote: "BOOMINATI created the most beautiful website for my reborn baby business. Sales increased by 300% within the first month!",
    rating: 5
  },
  {
    id: "2",
    name: "Dr. James",
    company: "PeptideLab",
    quote: "Professional, responsive, and delivered exactly what we needed. Our research platform works perfectly.",
    rating: 5
  },
  {
    id: "3",
    name: "Michael R.",
    company: "Recoverly Trust Bank",
    quote: "Complex banking platform delivered on time and under budget. Outstanding technical skills.",
    rating: 5
  },
  {
    id: "4",
    name: "Emily K.",
    company: "Cavalier King Charles Rehoming",
    quote: "Our dog rehoming site now gets inquiries daily. The custom application system saves us hours each week.",
    rating: 5
  },
  {
    id: "5",
    name: "David L.",
    company: "ZipXpress Logistics",
    quote: "The tracking system transformed our operations. Customers love the real-time tracking feature.",
    rating: 5
  },
  {
    id: "6",
    name: "Lisa T.",
    company: "Dolores Silicone",
    quote: "Beautiful design and excellent customer service throughout the entire project.",
    rating: 5
  }
];

export const pricingPackages = [
  {
    name: "Starter",
    price: "600,000 XAF",
    description: "Perfect for small businesses just getting started",
    features: [
      "5-page responsive website",
      "Contact form integration",
      "Basic SEO optimization",
      "Social media links",
      "1 month free hosting",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "1,500,000 XAF",
    description: "Ideal for growing businesses needing more features",
    features: [
      "10-page responsive website",
      "E-commerce integration (up to 50 products)",
      "Advanced SEO package",
      "Blog/news section",
      "Customer portals",
      "Priority support",
      "Analytics dashboard",
      "3 months free hosting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "3,000,000 XAF",
    description: "Complete solution for large businesses",
    features: [
      "Unlimited pages",
      "Full e-commerce with unlimited products",
      "Custom applications",
      "API integrations",
      "Multi-user admin panels",
      "24/7 priority support",
      "Dedicated account manager",
      "6 months free hosting",
      "Custom domain emails"
    ],
    popular: false
  }
];