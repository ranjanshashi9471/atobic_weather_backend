require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const WeatherRoute = require("./routers/info_route");

const app = express();

app.use(cors({}));
app.use(express.json());

app.use("/weather", WeatherRoute);

app.listen(port, () => {
	console.log(`Server running on ${port}!!`);
});
