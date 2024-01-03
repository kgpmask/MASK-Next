import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) throw new Error('MONGO_URL is not defined.');

const dbConnect = async () => {
	const opts = {
		connectTimeoutMS: 5000
	};

	try {
		const db = await mongoose.connect( MONGO_URL, opts ); // insert additional checks here

		return db;
	} catch ( e ) {
		throw e;
	}
};

export default dbConnect;
