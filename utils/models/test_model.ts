import mongoose from "mongoose";

export interface IMember extends mongoose.Document {
	name: string;
	email: string;
	roles?: string[];
};

export const memberSchema = new mongoose.Schema<IMember>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	roles: { type: [String] },
})

const Member = mongoose.model<IMember>('Member', memberSchema);
export default Member;
