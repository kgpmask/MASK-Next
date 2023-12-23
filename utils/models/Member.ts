import mongoose from 'mongoose';

export type MemberType = {
  name: string;
  image: string;
  position: string;
  teams: string;
};

export interface IRecord {
  year: number;
  position: string;
  teams: string[];
}

export interface IMember extends mongoose.Document {
  name: string;
  image: string;
  roll: string;
  records: IRecord[];
}

export const memberSchema = new mongoose.Schema<IMember>(
	{
		name: { type: String, required: true },
		image: { type: String, required: true },
		roll: { type: String, required: true },
		records: [
			{
				year: { type: Number, required: true },
				position: { type: String, required: true },
				teams: { type: [String], required: true }
			}
		]
	},
	{ collection: 'member' }
);

const Member = mongoose.model<IMember>( 'Member', memberSchema );
export default Member;
