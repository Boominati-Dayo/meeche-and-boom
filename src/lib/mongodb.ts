import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

const { connection } = mongoose;
connection.on("disconnected", () => console.log("MongoDB disconnected"));
connection.on("error", (err) => console.error("MongoDB error:", err));