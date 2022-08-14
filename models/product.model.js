const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	offer: {
		type: String,
		required: true,
	},
	offerText: {
		type: String,
		required: true,
	},
	isOffer: {
		type: Boolean,
		required: true,
	},
});

const ProductSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		bookType: {
			type: String,
			required: true,
		},
		inStock: {
			type: Boolean,
			required: true,
		},
		genres: {
			type: [String],
			required: true,
		},
		coverImg: {
			type: String,
			required: true,
		},
		offers: {
			type: [OfferSchema],
			required: true,
		},
		originalPrice: {
			type: Number,
			required: true,
		},
		discountPercent: {
			type: Number,
			required: true,
		},
		discountPrice: {
			type: Number,
			required: true,
		},
		totalRatings: {
			type: Number,
			required: true,
		},
		totalStars: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = { Product, ProductSchema, OfferSchema };
