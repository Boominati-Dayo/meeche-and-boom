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
    price: "75,000 - 120,000 XAF",
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
    price: "60,000 - 100,000 XAF",
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
    price: "120,000 - 170,000 XAF",
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
    price: "90,000 - 150,000 XAF",
    image: "/projects/pets.jpg"
  },
  {
    id: "5",
    name: "ZipXpress Logistics",
    client: "ZipXpress",
    category: "tracking",
    url: "https://zip-xpresslogistics.com/",
    description: "Complete logistics and tracking system with real-time package tracking and management dashboard.",
    tags: ["Tracking", "Management", "Dashboard"],
    price: "70,000 - 100,000 XAF",
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
    price: "90,000 - 150,000 XAF",
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
    price: "75,000 - 120,000 XAF",
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
    price: "150,000 - 200,000 XAF",
    image: "/projects/auto.jpg"
  },
  {
    id: "9",
    name: "PetXpress Tracking",
    client: "PetXpress",
    category: "tracking",
    url: "https://petxpress-tracking.vercel.app/",
    description: "Specialized pet transport tracking system.",
    tags: ["Tracking", "Pets", "Transport"],
    price: "70,000 - 100,000 XAF",
    image: "/projects/pettrack.jpg"
  },
  {
    id: "10",
    name: "Global Track Courier",
    client: "Global Track",
    category: "tracking",
    url: "https://global-track-courier.vercel.app/",
    description: "International courier tracking platform.",
    tags: ["Tracking", "International", "Courier"],
    price: "70,000 - 100,000 XAF",
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
    price: "120,000 - 170,000 XAF",
    image: "/projects/tesla.jpg"
  },
  {
    id: "12",
    name: "EazyPost LLC",
    client: "EazyPost",
    category: "tracking",
    url: "https://eazypost-llc.vercel.app/",
    description: "Local delivery and logistics service.",
    tags: ["Delivery", "Local", "Logistics"],
    price: "70,000 - 100,000 XAF",
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
    price: "90,000 - 150,000 XAF",
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
    price: "90,000 - 150,000 XAF",
    image: "/projects/doxie.jpg"
  },
  {
    id: "15",
    name: "Rothschild Foundation",
    client: "Rothschild",
    category: "construction",
    url: "https://rothschild-foundation.vercel.app/",
    description: "Foundation and charity organization website.",
    tags: ["Foundation", "Charity", "Business"],
    price: "75,000 - 100,000 XAF",
    image: "/projects/foundation.jpg"
  },
  {
    id: "16",
    name: "Calmica Casa",
    client: "Calmica",
    category: "construction",
    url: "https://calmicasa.vercel.app/",
    description: "Real estate and property management platform.",
    tags: ["Real Estate", "Property", "Business"],
    price: "75,000 - 100,000 XAF",
    image: "/projects/realestate.jpg"
  },
  {
    id: "17",
    name: "Vote Mr Jean Baptiste",
    client: "Mr Jean Baptiste",
    category: "political",
    url: "https://vote-mr-jean-baptiste.vercel.app/",
    description: "Political campaign and voting platform.",
    tags: ["Campaign", "Political", "Voting"],
    price: "40,000 XAF",
    image: "/projects/vote.jpg"
  },
  {
    id: "18",
    name: "Navista",
    client: "Navista",
    category: "tracking",
    url: "https://navista.vercel.app/",
    description: "Navigation and tracking system with advanced features.",
    tags: ["Navigation", "Tracking", "System"],
    price: "70,000 - 100,000 XAF",
    image: "/projects/navista.jpg"
  }
];

export const services = [
  {
    id: "silicone",
    name: "Silicone Baby & Nursery Websites",
    shortDesc: "Online stores for reborn baby dolls and nursery products",
    description: "Beautiful e-commerce platforms for silicone baby doll stores. Features include product galleries, secure ordering system, and inventory management.",
    priceRange: "120,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Product galleries", "Order system", "Email notifications", "SEO included", "Mobile responsive"],
    icon: "Baby"
  },
  {
    id: "pets",
    name: "Pet Breeder & Rehoming Websites",
    shortDesc: "Platforms for pet breeders and adoption services",
    description: "Professional websites for pet breeders and rehoming services. Includes pet profiles, adoption forms, and contact systems.",
    priceRange: "150,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Pet profiles", "Adoption forms", "Gallery", "Contact system", "SEO included"],
    icon: "Paw"
  },
  {
    id: "tracking",
    name: "Tracking & Logistics Systems",
    shortDesc: "Real-time package and shipment tracking",
    description: "Custom tracking systems for logistics companies. Real-time updates, admin dashboard, and customer tracking portals.",
    priceRange: "100,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, live map, admin panel, and more",
    delivery: "1 day - 1 week",
    features: ["Tracking system", "Admin dashboard", "Email notifications", "SEO included", "Live map"],
    icon: "MapPin"
  },
  {
    id: "banking",
    name: "Banking & Financial Platforms",
    shortDesc: "Secure financial and asset management platforms",
    description: "High-security banking platforms with client portals, case tracking, and document handling for asset recovery services.",
    priceRange: "170,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Client portals", "Secure login", "Case tracking", "Document handling", "SEO included"],
    icon: "DollarSign"
  },
  {
    id: "healthcare",
    name: "Healthcare & Peptide Research Sites",
    shortDesc: "Professional platforms for healthcare and research",
    description: "Platforms for peptide labs, clinics, and healthcare services. Product catalogs, COA verification, and wholesale ordering.",
    priceRange: "100,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Product catalog", "COA verification", "Wholesale ordering", "SEO included", "Mobile responsive"],
    icon: "Heart"
  },
  {
    id: "automotive",
    name: "Automotive & Car Dealership Sites",
    shortDesc: "Professional car dealership platforms",
    description: "Car dealership platforms with inventory, financing calculators, and map integration for locating dealerships.",
    priceRange: "200,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, Google Search Console, and more",
    delivery: "1 day - 1 week",
    features: ["Vehicle inventory", "Financing calculator", "Map integration", "Top SEO", "Google Search Console"],
    icon: "Car"
  },
  {
    id: "political",
    name: "Political Campaign Sites",
    shortDesc: "Campaign platforms for Cameroon elections",
    description: "Political campaign websites for Cameroon candidates. Includes MTN and Orange Money payment integration for donations and merchandise.",
    priceRange: "40,000 XAF",
    priceNote: "Everything included: domain, email, hosting, MTN & Orange Money integration",
    delivery: "1 day - 1 week",
    features: ["MTN Mobile Money", "Orange Money", "Campaign info", "Donation system", "SEO included"],
    icon: "Vote"
  },
  {
    id: "construction",
    name: "Construction & Contractor Websites",
    shortDesc: "Professional sites for construction companies",
    description: "Professional websites for construction companies and contractors. Project portfolios, service listings, and contact forms.",
    priceRange: "100,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Project portfolio", "Service listings", "Contact forms", "SEO included", "Mobile responsive"],
    icon: "Hammer"
  },
  {
    id: "portfolio",
    name: "Personal Portfolio Websites",
    shortDesc: "Professional portfolios for individuals",
    description: "Clean, professional portfolio websites for individuals. Showcase your work, skills, and contact information.",
    priceRange: "100,000 XAF",
    priceNote: "Everything included: domain, email, hosting, SEO, and more",
    delivery: "1 day - 1 week",
    features: ["Personal branding", "Work showcase", "Contact form", "SEO included", "Responsive design"],
    icon: "User"
  },
  {
    id: "ecommerce",
    name: "E-commerce Websites",
    shortDesc: "Online stores with order system",
    description: "Full e-commerce platforms with order system. Client places order, receives payment instructions via email, and product ships after payment.",
    priceRange: "Coming Soon",
    priceNote: "Contact us for pricing",
    delivery: "Contact for timeframe",
    features: ["Product catalog", "Order system", "Email notifications", "MTN/Orange integration", "Inventory management"],
    icon: "ShoppingCart"
  }
];

export const addOnServices = [
  {
    id: "hosting",
    name: "Web Hosting",
    price: "8,500 XAF/year",
    description: "Annual hosting service. Included free with top-tier packages.",
    features: ["99.9% uptime", "SSL certificate", "Daily backups", "Support included"]
  },
  {
    id: "domain",
    name: "Domain Registration",
    price: "8,500 XAF/year",
    description: ".com domain registration and annual renewal. ($11.25 USD equivalent)",
    features: [".com domain", "Annual renewal", "DNS management", "Email forwarding"]
  },
  {
    id: "seo",
    name: "SEO Optimization",
    price: "Monthly retainer available",
    description: "Search engine optimization to improve your website's visibility.",
    features: ["On-page SEO", "Keyword research", "Monthly reports", "Google indexing"]
  },
  {
    id: "maintenance",
    name: "Website Maintenance",
    price: "Based on work required",
    description: "Ongoing maintenance and updates for your website.",
    features: ["Content updates", "Security patches", "Performance tuning", "Backup management"]
  },
  {
    id: "virtualnumbers",
    name: "Virtual Numbers",
    price: "Contact for pricing",
    description: "Business phone numbers with routing, voicemail, and SMS forwarding.",
    features: ["Call routing", "Voicemail", "SMS forwarding", "Business hours"]
  }
];

export const faqs = [
  {
    question: "How does payment work?",
    answer: "We use a 5-2-3 payment structure: 50% upfront before work begins, 20% at midpoint, and 30% on completion."
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "We offer full refunds if you are completely dissatisfied with the work. Your satisfaction is our priority."
  },
  {
    question: "How long does it take to build my website?",
    answer: "Delivery time ranges from 1 day to 1 week depending on complexity. Simple sites can be delivered same day, while complex platforms may take up to a week."
  },
  {
    question: "Do you offer rush orders?",
    answer: "Yes! For same-day or 2-day delivery, we charge an additional 10,000 XAF on top of the normal price."
  },
  {
    question: "Is hosting included?",
    answer: "For basic/lowest-tier packages, hosting is 8,500 XAF/year (separate). For top-tier packages, hosting is included in the price."
  },
  {
    question: "Do I need to provide my own logo?",
    answer: "For lowest-tier packages, you may need to provide your own logo. For higher-tier packages, we create logos as part of the package."
  },
  {
    question: "Do you include SEO?",
    answer: "Yes! All our websites come with SEO optimization. Top-tier packages include monthly SEO maintenance."
  },
  {
    question: "Do you offer maintenance after launch?",
    answer: "Yes. Top-tier packages include 1-2 months of free maintenance. After that, maintenance is charged based on the amount of work required."
  },
  {
    question: "Do you integrate payment methods?",
    answer: "Yes! We can integrate MTN and Orange Money for Cameroon-based clients."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept PayPal, bank transfers, MTN Mobile Money, and Orange Money. Payment plans available for larger projects."
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah M.",
    company: "Joana's Reborn Babies",
    quote: "Meeche & Boom Co. created the most beautiful website for my reborn baby business. Sales increased by 300% within the first month!",
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
    price: "Contact for quote",
    description: "Perfect for small businesses just getting started",
    features: [
      "Simple generic design",
      "Client pays domain & email separately",
      "Basic SEO",
      "Contact form",
      "1-2 weeks free maintenance"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "Contact for quote",
    description: "Ideal for growing businesses needing more features",
    features: [
      "Custom design",
      "Domain & email included",
      "Advanced SEO",
      "More features",
      "1 month free maintenance"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact for quote",
    description: "Complete solution for large businesses",
    features: [
      "Premium custom design",
      "Everything included",
      "Top SEO + monthly maintenance",
      "Google Search Console",
      "2 months free maintenance"
    ],
    popular: false
  }
];

export const paymentTerms = {
  structure: "5-2-3",
  description: "50% upfront, 20% at midpoint, 30% on completion",
  upfront: "50%",
  midpoint: "20%",
  completion: "30%",
  refundPolicy: "Full refund if completely dissatisfied",
  rushOrder: {
    available: true,
    extra: "10,000 XAF",
    timeframe: "Same day to 2 days"
  }
};

export const contactFormFields = {
  projectTypes: [
    { id: "silicone", name: "Silicone Baby / Nursery Website", priceRange: "120,000 XAF" },
    { id: "pets", name: "Pet Breeder / Rehoming Website", priceRange: "150,000 XAF" },
    { id: "tracking", name: "Tracking / Logistics System", priceRange: "100,000 XAF" },
    { id: "banking", name: "Banking / Financial Platform", priceRange: "170,000 XAF" },
    { id: "healthcare", name: "Healthcare / Peptide Website", priceRange: "100,000 XAF" },
    { id: "automotive", name: "Automotive / Car Dealership", priceRange: "200,000 XAF" },
    { id: "political", name: "Political Campaign Website", priceRange: "40,000 XAF" },
    { id: "construction", name: "Construction Website", priceRange: "100,000 XAF" },
    { id: "portfolio", name: "Portfolio Website", priceRange: "100,000 XAF" },
    { id: "ecommerce", name: "E-commerce Website", priceRange: "Contact for pricing" },
    { id: "other", name: "Other / Not Sure", priceRange: "Let's discuss" }
  ],
  addOns: [
    { id: "rush", name: "Rush Order (+10,000 XAF)", description: "Delivery in 1-2 days" },
    { id: "hosting", name: "Add Hosting (8,500 XAF/year)", description: "Annual hosting service" },
    { id: "domain", name: "Register Domain (8,500 XAF/year)", description: ".com domain registration" },
    { id: "seo", name: "Monthly SEO Maintenance", description: "Ongoing SEO optimization" },
    { id: "maintenance", name: "Extended Maintenance", description: "1-2 months free with top tiers" }
  ]
};