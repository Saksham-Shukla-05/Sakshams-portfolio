import mongoose from "mongoose";

let isConnected = false;

async function dbConnect(): Promise<void> {
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("DB connected successfully");
  } catch (error) {
    isConnected = false;
    console.log("DB connection failed", error);
    throw new Error(`Database connection failed: ${error}`);
  }
}

export default dbConnect;
