import mongoose, { Schema } from 'mongoose';
import { Types } from 'mongoose';

export interface IUser extends mongoose.Document {
  _id: Types.ObjectId;
  username: string;
  email: string;
  image?: string;
  permissions: string[];
}

export const userSchema = new mongoose.Schema<IUser>(
	{
		_id: { type: Schema.Types.ObjectId, required: true, unique: true },
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		image: String,
		permissions: { type: [String], required: true }
	},
	{ collection: 'users' }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default User;
