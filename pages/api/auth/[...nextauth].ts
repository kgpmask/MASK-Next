import NextAuth from 'next-auth/next';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL as string);
const clientPromise = client.connect();

export default NextAuth( {
	providers: [
		GoogleProvider( {
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string
		} )
	],
	adapter: MongoDBAdapter(clientPromise)
} );
