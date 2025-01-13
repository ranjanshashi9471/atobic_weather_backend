const getcurrent = async (req, res, next) => {
	try {
		const { city } = req.query;
		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
		const response = await fetch(URL);
		const data = await response.json();
		if (response.status !== 200) {
			return res.status(response.status).send({
				success: false,
				message: data.message,
				weather_data: {},
			});
		}
		const res_data = {
			city_name: data.name,
			weather_params: {
				main: data.weather[0].main,
				desc: data.weather[0].description,
				iconlink: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				temp: data.main.temp,
				feel: data.main.feels_like,
				humidity: data.main.humidity,
				wind_speed: data.wind.speed,
				cloud: data.clouds.all,
			},
		};
		res.status(200).send({
			success: true,
			message: "Successfully fetched data!!",
			weather_data: res_data,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Internal Server Error!!",
			weather_data: {},
		});
	}
};

module.exports = { getcurrent };
