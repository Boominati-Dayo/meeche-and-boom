import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { PricingPackage } from "@/models/PricingPackage";

export async function GET() {
  try {
    await connectDB();
    const packages = await PricingPackage.find({ status: "active" }).sort({ order: 1 });
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}