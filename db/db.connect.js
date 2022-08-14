const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;

const initializeDatabaseConnection = () => {
	mongoose
		.connect(mongoUrl, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			dbName: "bookery-ecommerce-db",
		})
		.then(() => console.log("Connected to database successfully!"))
		.catch((error) => console.error("Mongoose connection failed", error));
};

module.exports = { initializeDatabaseConnection };
