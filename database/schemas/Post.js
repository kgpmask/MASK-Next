import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        link: { type: String },
        type: { type: String, required: true },
        attr: { type: [String] },
        date: { type: Date, required: true },
        page: String,
        hype: Boolean,
        metadata: {
            type: {
                height: Number,
                width: Number
            }
        }
    },
    { collection: "posts" }
);

export default mongoose.models.Member || mongoose.model("Post", memberSchema);
