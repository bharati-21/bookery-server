const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

mongoose
	.connect(mongoURL, { dbName: "bookery-ecommerce-db" })
	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port ${port}...`);
			console.log("Connected to database successfully!");
		});
	})
	.catch(() => {
		console.log("Connection Failed!");
	});
