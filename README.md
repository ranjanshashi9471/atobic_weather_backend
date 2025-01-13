# Weather API Backend

## Project Overview

This Weather API Backend is a Node.js-based server that fetches current weather data for a given city. It uses the OpenWeatherMap API to retrieve weather details and serves the data in a simplified format. The server is built using Express.js, and it supports Cross-Origin Resource Sharing (CORS) to allow requests from different domains.

### Key Features:

- Fetches weather data from the OpenWeatherMap API based on a city query.
- Returns weather details such as temperature, humidity, wind speed, and more.
- Handles errors gracefully and provides meaningful error messages.
- Supports CORS for making requests from frontend applications.

## Setup Instructions

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ranjanshashi9471/atobic_weather_backend.git
   cd atobic_weather_backend
   ```

2. **Install dependencies:**
   This project requires the following Node.js packages:

   - `express`
   - `cors`
   - `dotenv`
   - `nodemon`

   Install them by running:

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory of the project with the following content:

   ```env
   API_KEY=your_openweathermap_api_key
   PORT=3001
   ```

   Replace `your_openweathermap_api_key` with your OpenWeatherMap API key. You can obtain one by signing up on [OpenWeatherMap](https://openweathermap.org/).

4. **Run the server:**
   Start the server by running:

   ```bash
   npm start
   ```

   The server will be running on the port specified in the `.env` file (default is 3001).

5. **Test the API:**
   You can test the API by sending a `GET` request to:
   ```
   http://localhost:3001/weather/current/?city=your_city_name
   ```
   Replace `your_city_name` with the name of the city you want to get weather data for.

---

### Successful Response:

```json
{
	"success": true,
	"message": "Successfully fetched data!!",
	"weather_data": {
		"city_name": "New York",
		"weather_params": {
			"main": "Rain",
			"desc": "light rain",
			"iconlink": "https://openweathermap.org/img/wn/10d@2x.png",
			"temp": 12.3,
			"feel": 10.8,
			"humidity": 93,
			"wind_speed": 5.1,
			"cloud": 100
		}
	}
}
```

### Error Response (HTTP 4xx/5xx)

```json
{
	"success": false,
	"message": "City not found",
	"weather_data": {}
}
```

OR

```json
{
	"success": false,
	"message": "Internal Server Error!!",
	"weather_data": {}
}
```

### Error Response Example:

If the city is invalid or not found:

```json
{
	"success": false,
	"message": "city not found",
	"weather_data": {}
}
```

## Design Decisions

1. **Express.js for Server:**

   - The backend is built using Express.js for handling HTTP requests and responses. Express is lightweight and provides all necessary tools for routing and middleware support.

2. **Fetching Weather Data:**

   - The weather data is fetched using `fetch` api, which makes it easy to perform HTTP requests from the server to the OpenWeatherMap API.

3. **Error Handling:**

   - The server handles both network and application errors. If the weather API request fails or the city is invalid, the server sends a detailed error message to the client.

4. **Environment Variables:**
   - API keys and other sensitive information are stored in environment variables using the `dotenv` package. This ensures that the API key is not exposed in the code.

## Future Improvements

1. **Geolocation Support:**

   - Implement support for fetching weather data based on the user's geographical location (latitude and longitude) instead of just the city name.

2. **Caching:**

   - Introduce caching to avoid making frequent API requests for the same city. This can reduce the load on the weather API and improve performance.

3. **Rate Limiting:**

   - Implement rate limiting to prevent abuse of the API and to ensure that the server can handle high traffic.

4. **Error Logging:**

   - Integrate error logging (e.g., using a service like Sentry or a custom logging system) to track and monitor errors in production.

5. **Unit Tests:**
   - Write unit tests for the server to ensure the reliability and correctness of the API endpoints.

## Notes About Platform Limitations

1. **API Rate Limiting:**

   - The OpenWeatherMap API has rate limits. Ensure that the application does not exceed the number of allowed requests within a given time frame.

2. **API Key Security:**

   - Keep the OpenWeatherMap API key secure. Do not expose it in the client-side code. Use server-side logic to fetch weather data.

3. **Server Limitations:**
   - The server is designed to handle a moderate amount of traffic. For heavy traffic or high availability, consider scaling the application or deploying it on a cloud service.

## Conclusion

This Weather API Backend provides a simple and efficient way to fetch weather data for any city. It is built using Node.js and Express.js, and it interacts with the OpenWeatherMap API. The server is easy to set up and extend, making it a great starting point for building weather-related applications.

## Author

- Shashi Ranjan Kumar
