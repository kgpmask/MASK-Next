import { Schema, model } from "mongoose";

const memberSchema = new Schema({
	_id: { type: String, required: true },
	name: { type: String, required: true },
	image: String,
	roll: { type: String, required: true },
	records: [
		{
			year: { type: Number, required: true },
			position: String,
			teams: { type: [String], required: true }
		}
	]
}, { collection: "members" });

export default new model("Member", memberSchema);
