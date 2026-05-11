import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Project } from "@/models/Project";

const seedProjects = [
  {
    title: "Joana's Reborn Babies",
    slug: "joanas-reborn-babies",
    client: "Joana's Reborn",
    category: "silicone",
    visitUrl: "https://joanas-reborn-babies.vercel.app/",
    description: "Premium silicone reborn baby doll e-commerce platform with gallery, custom ordering, and secure payments.",
    shortDesc: "Premium silicone reborn baby doll e-commerce platform",
    tags: ["E-commerce", "Gallery", "Custom Orders"],
    priceRange: "75,000 - 120,000 XAF",
    images: [],
    featured: true,
    status: "active",
    order: 1
  },
  {
    title: "PeptideLab",
    slug: "peptidelab",
    client: "PeptideLab",
    category: "healthcare",
    visitUrl: "https://peptide-lab-six.vercel.app/",
    description: "Professional peptide research platform with product catalog, COA verification, and wholesale ordering.",
    shortDesc: "Professional peptide research platform",
    tags: ["E-commerce", "B2B", "Research"],
    priceRange: "60,000 - 100,000 XAF",
    images: [],
    featured: true,
    status: "active",
    order: 2
  },
  {
    title: "Recoverly Trust Bank",
    slug: "recoverly-trust-bank",
    client: "Recoverly",
    category: "banking",
    visitUrl: "https://recoverlytrustbank.com/",
    description: "High-security private banking and asset recovery platform with client portals and case tracking.",
    shortDesc: "High-security private banking platform",
    tags: ["Banking", "Security", "Asset Recovery"],
    priceRange: "120,000 - 170,000 XAF",
    images: [],
    featured: true,
    status: "active",
    order: 3
  },
  {
    title: "Cavalier King Charles Rehoming",
    slug: "cavalier-king-charles-rehoming",
    client: "CKCR Center",
    category: "pets",
    visitUrl: "https://cavalierkingcharlesrehomingcenter.com/",
    description: "Specialized dog rehoming platform with adoption applications and pet profiles.",
    shortDesc: "Specialized dog rehoming platform",
    tags: ["Pet Adoption", "Gallery", "Applications"],
    priceRange: "90,000 - 150,000 XAF",
    images: [],
    featured: true,
    status: "active",
    order: 4
  },
  {
    title: "ZipXpress Logistics",
    slug: "zipxpress-logistics",
    client: "ZipXpress",
    category: "tracking",
    visitUrl: "https://zip-xpresslogistics.com/",
    description: "Complete logistics and tracking system with real-time package tracking and management dashboard.",
    shortDesc: "Complete logistics and tracking system",
    tags: ["Tracking", "Management", "Dashboard"],
    priceRange: "70,000 - 100,000 XAF",
    images: [],
    featured: true,
    status: "active",
    order: 5
  },
  {
    title: "Tiffany Dawson Rehoming",
    slug: "tiffany-dawson-rehoming",
    client: "Tiffany Dawson",
    category: "pets",
    visitUrl: "https://tiffany-dawson-rehoming.vercel.app/",
    description: "Pet rehoming service with detailed pet profiles and adoption process.",
    shortDesc: "Pet rehoming service",
    tags: ["Pet Rehoming", "Profiles", "Contact"],
    priceRange: "90,000 - 150,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 6
  },
  {
    title: "Dolores Silicone",
    slug: "dolores-silicone",
    client: "Dolores",
    category: "silicone",
    visitUrl: "https://dolores-silicone.vercel.app/",
    description: "Premium silicone baby nursery store with detailed product catalog.",
    shortDesc: "Premium silicone baby nursery store",
    tags: ["E-commerce", "Nursery", "Silicone"],
    priceRange: "75,000 - 120,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 7
  },
  {
    title: "Lithia Auto",
    slug: "lithia-auto",
    client: "Lithia Auto",
    category: "automotive",
    visitUrl: "https://lithia-auto.vercel.app/",
    description: "Car dealership platform with inventory, financing, and map integration.",
    shortDesc: "Car dealership platform",
    tags: ["Automotive", "Inventory", "Financing"],
    priceRange: "150,000 - 200,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 8
  },
  {
    title: "PetXpress Tracking",
    slug: "petxpress-tracking",
    client: "PetXpress",
    category: "tracking",
    visitUrl: "https://petxpress-tracking.vercel.app/",
    description: "Specialized pet transport tracking system.",
    shortDesc: "Specialized pet transport tracking",
    tags: ["Tracking", "Pets", "Transport"],
    priceRange: "70,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 9
  },
  {
    title: "Global Track Courier",
    slug: "global-track-courier",
    client: "Global Track",
    category: "tracking",
    visitUrl: "https://global-track-courier.vercel.app/",
    description: "International courier tracking platform.",
    shortDesc: "International courier tracking",
    tags: ["Tracking", "International", "Courier"],
    priceRange: "70,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 10
  },
  {
    title: "Tesla Capital",
    slug: "tesla-capital",
    client: "Tesla Capital",
    category: "banking",
    visitUrl: "https://tesla-capital.vercel.app/",
    description: "Investment and capital management platform.",
    shortDesc: "Investment and capital management",
    tags: ["Banking", "Investment", "Capital"],
    priceRange: "120,000 - 170,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 11
  },
  {
    title: "EazyPost LLC",
    slug: "eazypost-llc",
    client: "EazyPost",
    category: "tracking",
    visitUrl: "https://eazypost-llc.vercel.app/",
    description: "Local delivery and logistics service.",
    shortDesc: "Local delivery and logistics",
    tags: ["Delivery", "Local", "Logistics"],
    priceRange: "70,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 12
  },
  {
    title: "Puppy Planet",
    slug: "puppy-planet",
    client: "Puppy Planet",
    category: "pets",
    visitUrl: "https://puppyplanet.vercel.app/",
    description: "Puppy sales and breeder platform with puppy profiles.",
    shortDesc: "Puppy sales and breeder platform",
    tags: ["Puppies", "Breeder", "Profiles"],
    priceRange: "90,000 - 150,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 13
  },
  {
    title: "Morgan Doxie Kernel",
    slug: "morgan-doxie-kernel",
    client: "Morgan Doxie",
    category: "pets",
    visitUrl: "https://morgan-doxie-kernel.vercel.app/",
    description: "Specialized dog breeder and rehoming service.",
    shortDesc: "Specialized dog breeder service",
    tags: ["Dog Breeder", "Rehoming", "Doxie"],
    priceRange: "90,000 - 150,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 14
  },
  {
    title: "Rothschild Foundation",
    slug: "rothschild-foundation",
    client: "Rothschild",
    category: "construction",
    visitUrl: "https://rothschild-foundation.vercel.app/",
    description: "Foundation and charity organization website.",
    shortDesc: "Foundation and charity website",
    tags: ["Foundation", "Charity", "Business"],
    priceRange: "75,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 15
  },
  {
    title: "Calmica Casa",
    slug: "calmica-casa",
    client: "Calmica",
    category: "construction",
    visitUrl: "https://calmicasa.vercel.app/",
    description: "Real estate and property management platform.",
    shortDesc: "Real estate and property management",
    tags: ["Real Estate", "Property", "Business"],
    priceRange: "75,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 16
  },
  {
    title: "Vote Mr Jean Baptiste",
    slug: "vote-mr-jean-baptiste",
    client: "Mr Jean Baptiste",
    category: "political",
    visitUrl: "https://vote-mr-jean-baptiste.vercel.app/",
    description: "Political campaign and voting platform.",
    shortDesc: "Political campaign platform",
    tags: ["Campaign", "Political", "Voting"],
    priceRange: "40,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 17
  },
  {
    title: "Navista",
    slug: "navista",
    client: "Navista",
    category: "tracking",
    visitUrl: "https://navista.vercel.app/",
    description: "Navigation and tracking system with advanced features.",
    shortDesc: "Navigation and tracking system",
    tags: ["Navigation", "Tracking", "System"],
    priceRange: "70,000 - 100,000 XAF",
    images: [],
    featured: false,
    status: "active",
    order: 18
  }
];

export async function POST() {
  try {
    await connectDB();
    
    await Project.deleteMany({});
    
    const result = await Project.insertMany(seedProjects);
    
    return NextResponse.json({ 
      success: true, 
      message: `Seeded ${result.length} projects`,
      projects: result 
    });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ 
      error: "Failed to seed projects", 
      details: error?.message || "Unknown error",
      hint: "Make sure MongoDB is connected and the connection string is correct in .env"
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find({}).sort({ order: 1 });
    return NextResponse.json(Array.isArray(projects) ? projects : []);
  } catch (error: any) {
    console.error("Fetch error:", error);
    return NextResponse.json({ 
      error: "Failed to fetch projects", 
      details: error?.message 
    }, { status: 500 });
  }
}