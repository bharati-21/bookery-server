const User = require("../models/user.model");

const getAllOrdersHandler = async (req, res) => {
	const userId = req.userId;
	try {
		const user = await User.findById(userId);
		return res.status(200).json({ orders: user.orders });
	} catch (error) {
		return res.status(500).catch({
			message: "Could not fetch user orders. Please try again later.",
		});
	}
};

const postItemToOrdersHandler = async (req, res) => {
	const userId = req.userId;
	const { order } = req.body;

	try {
		const user = await User.findById(userId);
		const userOrders = [
			{
				...order,
			},
			...user.orders,
		];

		const updatedUserOrders = await User.findByIdAndUpdate(
			userId,
			{
				$set: {
					orders: userOrders,
				},
			},
			{ new: true }
		);
		return res.status(201).json({ orders: updatedUserOrders.orders });
	} catch (error) {
		return res.status(500).catch({
			message: "Could not post item to address. Please try again later.",
		});
	}
};

module.exports = {
	getAllOrdersHandler,
	postItemToOrdersHandler,
};
