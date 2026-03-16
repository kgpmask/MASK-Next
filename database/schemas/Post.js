import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
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
        width: Number,
      },
    },
  },
  { collection: "posts" }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
