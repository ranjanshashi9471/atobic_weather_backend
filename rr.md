## Query Parameters

| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `city`    | String | Yes      | Name of the city to fetch weather data for. |

Example: `/weather/current?city=London`

---

## Response

### Success Response (HTTP 200)

```json
{
	"success": true,
	"message": "Successfully fetched data!!",
	"weather_data": {
		"city_name": "London",
		"weather_params": {
			"main": "Clouds",
			"desc": "overcast clouds",
			"iconlink": "https://openweathermap.org/img/wn/04d@2x.png",
			"temp": 15,
			"feel": 14.5,
			"humidity": 82,
			"wind_speed": 3.6,
			"cloud": 90
		}
	}
}
```

---

## Environment Variables

The route requires an API key for the OpenWeatherMap API.

| Variable  | Description                  |
| --------- | ---------------------------- |
| `API_KEY` | Your OpenWeatherMap API key. |

---

## Code Overview

- **`city`**: Extracted from the query parameters to specify the target city.
- **API URL**: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
- **Units**: Temperature data is in Celsius (`metric`).
- **Error Handling**: Handles invalid cities and API errors gracefully, returning appropriate HTTP status codes and error messages.

---

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the environment variable `API_KEY` with your OpenWeatherMap API key.

3. Start the server:
   ```bash
   npm start
   ```

---

## Notes

- **Error Handling**: Ensures invalid city names or internal issues do not crash the server.
- **Scalability**: Can be extended to include additional weather APIs or cache frequently requested cities.

---

## License

This project is licensed under the MIT License.
