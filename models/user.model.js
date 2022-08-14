const mongoose = require("mongoose");
const { OfferSchema } = require("./product.model");

const CartSchema = new mongoose.Schema(
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
		qty: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const WishlistSchema = new mongoose.Schema(
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

const SelectedCouponSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	coupon: {
		type: String,
		required: true,
	},
	discount: {
		type: Number,
		required: true,
	},
	minValue: {
		type: Number,
		required: true,
	},
});

const ItemSchema = new mongoose.Schema({
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
	qty: {
		type: Number,
		required: true,
	},
});

const AddressSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		addressLine: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		pincode: {
			type: Number,
			required: true,
		},
		phoneNumber: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const OrderSchema = new mongoose.Schema(
	{
		razorpayPaymentId: {
			type: String,
			required: true,
		},
		items: {
			type: [ItemSchema],
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		SelectedCoupon: {
			type: SelectedCouponSchema,
			required: true,
		},
		address: {
			type: AddressSchema,
			required: true,
		},
		orderId: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		cart: {
			type: [CartSchema],
			required: true,
		},
		orders: {
			type: [OrderSchema],
			required: true,
		},
		wishlist: {
			type: [WishlistSchema],
			required: true,
		},
		address: {
			type: [AddressSchema],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
