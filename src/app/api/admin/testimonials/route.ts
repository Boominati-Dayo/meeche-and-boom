import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Testimonial } from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const testimonial = new Testimonial(body);
    await testimonial.save();
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}