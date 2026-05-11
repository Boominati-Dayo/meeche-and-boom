import "dotenv/config";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mishaelsema_db_user:boominati237@boominati.e8utj4w.mongodb.net/?appName=boominati";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
}
import { PricingPackage } from "@/models/PricingPackage";
import { Project } from "@/models/Project";

async function seed() {
  await connectDB();
  
  console.log("Seeding pricing packages...");
  const pricingPackages = [
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
      popular: false,
      order: 1,
      status: "active"
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
      popular: true,
      order: 2,
      status: "active"
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
      popular: false,
      order: 3,
      status: "active"
    }
  ];
  
  await PricingPackage.deleteMany({});
  await PricingPackage.insertMany(pricingPackages);
  console.log("✓ Pricing packages seeded");
  
  console.log("Seeding projects...");
  const projects = [
    {
      title: "Joana's Reborn Babies",
      client: "Joana's Reborn",
      category: "silicone",
      url: "https://joanas-reborn-babies.vercel.app/",
      description: "Premium silicone reborn baby doll e-commerce platform with gallery, custom ordering, and secure payments.",
      tags: ["E-commerce", "Gallery", "Custom Orders"],
      priceRange: "1,500,000 - 3,000,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 1
    },
    {
      title: "PeptideLab",
      client: "PeptideLab",
      category: "healthcare",
      url: "https://peptide-lab-six.vercel.app/",
      description: "Professional peptide research platform with product catalog, COA verification, and wholesale ordering.",
      tags: ["E-commerce", "B2B", "Research"],
      priceRange: "1,800,000 - 3,600,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 2
    },
    {
      title: "Recoverly Trust Bank",
      client: "Recoverly",
      category: "banking",
      url: "https://recoverlytrustbank.com/",
      description: "High-security private banking and asset recovery platform with client portals and case tracking.",
      tags: ["Banking", "Security", "Asset Recovery"],
      priceRange: "3,000,000 - 9,000,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 3
    },
    {
      title: "Cavalier King Charles Rehoming",
      client: "CKCR Center",
      category: "pets",
      url: "https://cavalierkingcharlesrehomingcenter.com/",
      description: "Specialized dog rehoming platform with adoption applications and pet profiles.",
      tags: ["Pet Adoption", "Gallery", "Applications"],
      priceRange: "900,000 - 1,800,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 4
    },
    {
      title: "ZipXpress Logistics",
      client: "ZipXpress",
      category: "logistics",
      url: "https://zip-xpresslogistics.com/",
      description: "Complete logistics and tracking system with real-time package tracking and management dashboard.",
      tags: ["Tracking", "Management", "Dashboard"],
      priceRange: "2,100,000 - 4,800,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 5
    },
    {
      title: "Tiffany Dawson Rehoming",
      client: "Tiffany Dawson",
      category: "pets",
      url: "https://tiffany-dawson-rehoming.vercel.app/",
      description: "Pet rehoming service with detailed pet profiles and adoption process.",
      tags: ["Pet Rehoming", "Profiles", "Contact"],
      priceRange: "900,000 - 1,800,000 XAF",
      images: [],
      featured: true,
      status: "active",
      order: 6
    },
    {
      title: "Dolores Silicone",
      client: "Dolores",
      category: "silicone",
      url: "https://dolores-silicone.vercel.app/",
      description: "Premium silicone baby nursery store with detailed product catalog.",
      tags: ["E-commerce", "Nursery", "Silicone"],
      priceRange: "1,500,000 - 3,000,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 7
    },
    {
      title: "Lithia Auto",
      client: "Lithia Auto",
      category: "automotive",
      url: "https://lithia-auto.vercel.app/",
      description: "Car dealership platform with inventory, financing, and map integration.",
      tags: ["Automotive", "Inventory", "Financing"],
      priceRange: "2,400,000 - 4,800,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 8
    },
    {
      title: "PetXpress Tracking",
      client: "PetXpress",
      category: "logistics",
      url: "https://petxpress-tracking.vercel.app/",
      description: "Specialized pet transport tracking system.",
      tags: ["Tracking", "Pets", "Transport"],
      priceRange: "1,200,000 - 2,400,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 9
    },
    {
      title: "Global Track Courier",
      client: "Global Track",
      category: "logistics",
      url: "https://global-track-courier.vercel.app/",
      description: "International courier tracking platform.",
      tags: ["Tracking", "International", "Courier"],
      priceRange: "1,800,000 - 3,600,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 10
    },
    {
      title: "Tesla Capital",
      client: "Tesla Capital",
      category: "banking",
      url: "https://tesla-capital.vercel.app/",
      description: "Investment and capital management platform.",
      tags: ["Banking", "Investment", "Capital"],
      priceRange: "3,000,000 - 7,200,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 11
    },
    {
      title: "EazyPost LLC",
      client: "EazyPost",
      category: "logistics",
      url: "https://eazypost-llc.vercel.app/",
      description: "Local delivery and logistics service.",
      tags: ["Delivery", "Local", "Logistics"],
      priceRange: "1,200,000 - 2,700,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 12
    },
    {
      title: "Puppy Planet",
      client: "Puppy Planet",
      category: "pets",
      url: "https://puppyplanet.vercel.app/",
      description: "Puppy sales and breeder platform with puppy profiles.",
      tags: ["Puppies", "Breeder", "Profiles"],
      priceRange: "1,200,000 - 2,400,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 13
    },
    {
      title: "Morgan Doxie Kernel",
      client: "Morgan Doxie",
      category: "pets",
      url: "https://morgan-doxie-kernel.vercel.app/",
      description: "Specialized dog breeder and rehoming service.",
      tags: ["Dog Breeder", "Rehoming", "Doxie"],
      priceRange: "1,080,000 - 2,100,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 14
    },
    {
      title: "Rothschild Foundation",
      client: "Rothschild",
      category: "business",
      url: "https://rothschild-foundation.vercel.app/",
      description: "Foundation and charity organization website.",
      tags: ["Foundation", "Charity", "Business"],
      priceRange: "1,500,000 - 3,000,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 15
    },
    {
      title: "Calmica Casa",
      client: "Calmica",
      category: "business",
      url: "https://calmicasa.vercel.app/",
      description: "Real estate and property management platform.",
      tags: ["Real Estate", "Property", "Business"],
      priceRange: "2,100,000 - 4,200,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 16
    },
    {
      title: "Vote Mr Jean Baptiste",
      client: "Mr Jean Baptiste",
      category: "business",
      url: "https://vote-mr-jean-baptiste.vercel.app/",
      description: "Political campaign and voting platform.",
      tags: ["Campaign", "Political", "Voting"],
      priceRange: "1,200,000 - 2,400,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 17
    },
    {
      title: "Navista",
      client: "Navista",
      category: "logistics",
      url: "https://navista.vercel.app/",
      description: "Navigation and tracking system with advanced features.",
      tags: ["Navigation", "Tracking", "System"],
      priceRange: "1,800,000 - 3,600,000 XAF",
      images: [],
      featured: false,
      status: "active",
      order: 18
    }
  ];
  
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log("✓ Projects seeded");
  
  console.log("\n✅ Database seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});