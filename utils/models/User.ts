import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
	username: string;
	email: string;
	image?: string;
}

export const userSchema = new mongoose.Schema<IUser>(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		image: String
	},
	{ collection: 'users' }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
