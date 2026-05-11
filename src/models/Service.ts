import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  name: string;
  slug: string;
  shortDesc: string;
  description: string;
  priceRange: string;
  features: string[];
  icon: string;
  category: string;
  featured: boolean;
  status: "active" | "draft";
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDesc: { type: String, required: true },
    description: { type: String },
    priceRange: { type: String },
    features: [{ type: String }],
    icon: { type: String },
    category: { type: String },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "draft"], default: "active" },
  },
  { timestamps: true }
);

export const Service = mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);