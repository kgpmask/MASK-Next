import mongoose from "mongoose";

declare global {
  var mongoose: any // This must be a `var` and not a `let / const` --IDK why--
}
const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) throw new Error("MONGO_URL is not defined.");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null }
}

const dbConnect = async () => {
  if (cached.conn) return cached.conn;
  try {
    cached.conn = await mongoose.connect(MONGO_URL, { connectTimeoutMS: 5000 });
    // insert additional checks here
    return cached.conn;
  } catch (e) {
    throw e
  }
};

export default dbConnect
