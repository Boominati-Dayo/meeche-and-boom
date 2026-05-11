import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { PricingPackage } from "@/models/PricingPackage";

const seedPackages = [
  {
    name: "Starter",
    price: "Contact for quote",
    description: "Perfect for small businesses just getting started with a simple, professional website.",
    features: [
      "Simple generic design",
      "Client pays domain & email separately",
      "Basic SEO optimization",
      "Contact form",
      "Mobile responsive",
      "1-2 weeks free maintenance"
    ],
    popular: false,
    order: 1,
    status: "active"
  },
  {
    name: "Professional",
    price: "Contact for quote",
    description: "Ideal for growing businesses needing more features and professional design.",
    features: [
      "Custom design",
      "Domain & email included",
      "Advanced SEO optimization",
      "More pages and features",
      "1 month free maintenance",
      "Google Search Console setup"
    ],
    popular: true,
    order: 2,
    status: "active"
  },
  {
    name: "Enterprise",
    price: "Contact for quote",
    description: "Complete solution for large businesses with premium features and ongoing support.",
    features: [
      "Premium custom design",
      "Everything included (domain, email, hosting)",
      "Top SEO + monthly maintenance",
      "Google Search Console",
      "Sitemap submission",
      "2 months free maintenance"
    ],
    popular: false,
    order: 3,
    status: "active"
  }
];

export async function POST() {
  try {
    await connectDB();
    
    await PricingPackage.deleteMany({});
    
    const result = await PricingPackage.insertMany(seedPackages);
    
    return NextResponse.json({ 
      success: true, 
      message: `Seeded ${result.length} pricing packages`,
      packages: result 
    });
  } catch (error: any) {
    console.error("Seed pricing error:", error);
    return NextResponse.json({ 
      error: "Failed to seed pricing packages", 
      details: error?.message || "Unknown error"
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const packages = await PricingPackage.find({}).sort({ order: 1 });
    return NextResponse.json(Array.isArray(packages) ? packages : []);
  } catch (error: any) {
    console.error("Fetch pricing error:", error);
    return NextResponse.json([], { status: 200 });
  }
}