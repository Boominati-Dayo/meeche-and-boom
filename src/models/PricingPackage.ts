import mongoose, { Schema, Document } from "mongoose";

export interface IPricingPackage extends Document {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  order: number;
  status: "active" | "draft";
  createdAt: Date;
  updatedAt: Date;
}

const PricingPackageSchema = new Schema<IPricingPackage>(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String }],
    popular: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "draft"], default: "active" },
  },
  { timestamps: true }
);

export const PricingPackage = mongoose.models.PricingPackage || mongoose.model<IPricingPackage>("PricingPackage", PricingPackageSchema);