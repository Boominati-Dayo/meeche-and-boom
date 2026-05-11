import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  shortDesc: string;
  category: string;
  priceRange: string;
  client: string;
  features: string[];
  images: string[];
  visitUrl: string;
  technologies: string[];
  timeline: string;
  completionDate: Date;
  featured: boolean;
  status: "active" | "draft" | "archived";
  showUrl: boolean;
  tags: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDesc: { type: String, required: true },
    category: { type: String, required: true },
    priceRange: { type: String },
    client: { type: String },
    features: [{ type: String }],
    images: [{ type: String }],
    visitUrl: { type: String },
    technologies: [{ type: String }],
    timeline: { type: String },
    completionDate: { type: Date },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "draft", "archived"], default: "active" },
    showUrl: { type: Boolean, default: true },
    tags: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Project = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);