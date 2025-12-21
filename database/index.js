import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function initializeDatabase() {
	if (!process.env.MONGO_URL) {
		throw new Error("Couldn't find MONGO_URL in environment variables");
	}

	// Prevent reconnecting to mongoose on every request
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose.connect(process.env.MONGO_URL, {
			// Prevent queries from hanging when mongodb isn't connected
			bufferCommands: false,
		});
	}

	try {
		console.log("Establishing connection to database");
		cached.conn = await cached.promise;
		console.log("Successfully connected to database");
		return cached.conn;
	} catch (err) {
		cached = global.mongoose = { conn: null, promise: null };
		console.error("Failed to connect to database");
		throw err;
	}
}

// Wrap handlers that use the database in this to ensure database is connected
export function withDatabase(handler) {
  return async (req, res) => {
    await initializeDatabase();
    return handler(req, res);
  };
}