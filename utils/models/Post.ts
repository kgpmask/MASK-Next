import mongoose, { Document, Schema, Model } from 'mongoose';

interface Metadata {
	height?: number;
	width?: number;
}

interface PostAttributes {
	name: string;
	link?: string;
	type: string;
	attr?: string[];
	date: Date;
	page?: string;
	hype?: boolean;
	metadata?: Metadata;
}

export interface PostDocument extends Document, PostAttributes {
	recent?: boolean;
}

interface PostModel extends Model<PostDocument> {}

const postSchema = new Schema<PostDocument>( {
	name: { type: String, required: true },
	link: { type: String },
	type: { type: String, required: true },
	attr: { type: [String] },
	date: { type: Date, required: true },
	page: String,
	hype: { type: Boolean },
	metadata: {
		type: {
			height: Number,
			width: Number
		}
	}
} );

postSchema.set('collection', 'posts');

const PostModel: PostModel =
  mongoose.models.Post ||
  mongoose.model<PostDocument, PostModel>('Post', postSchema);

export default PostModel;
