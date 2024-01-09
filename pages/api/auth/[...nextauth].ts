import dbConnect from '@/utils/database/dbInit';
import User from '@/utils/models/User';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth( {
	providers: [
		GoogleProvider( {
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string
		} )
	],
	callbacks: {
		async signIn ( { user, account } ) {
			if (account?.provider === 'google') {
				const { id, name, email } = user;
				try {
					await dbConnect();
					const userExists = await User.findById(id);

					if (!userExists) {
						fetch(`/api/addUser?id=${id}&name=${name}&email=${email}`);
					}
				} catch (error) {
					console.log(error);
				}
			} else {
				console.log('INTRUSION DETECTED!!1!');
			}
			return true;
		}
	}
} );
