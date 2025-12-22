import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    image: String,
    roll: { type: String, required: true },
    records: [
      {
        year: { type: Number, required: true },
        position: {
          type: String,
          enum: [
            "Governor",
            "Advisor",
            "Research Associate",
            "Executive",
            "Associate",
            "Fresher",
            "Former Member",
          ],
          required: true,
        },
        teams: { type: [String], required: true },
      },
    ],
  },
  { collection: "members" }
);

export default mongoose.models.Member || mongoose.model("Member", memberSchema);
