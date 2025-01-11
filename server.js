require("dotenv").config();
const express = require("express");
const cors = require("cors");

const WeatherRoute = require("./routers/info_route");

const app = express();

app.use(cors({}));
app.use(express.json());

app.use("/weather", WeatherRoute);

app.listen(3001, () => {
	console.log("Server running!!");
});
