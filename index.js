const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const { initializeDatabaseConnection } = require("./db/db.connect");

const app = express();
const port = process.env.PORT || 5000;

initializeDatabaseConnection();
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);
app.get("/", (req, res) => {
	res.send("Hello, world!");
});
