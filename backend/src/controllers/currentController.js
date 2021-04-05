const axios = require("axios");
const locationController = require("./locationController");
const ciudadController = require("./ciudadController");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const mapDataToWeatherInterface = (data) => {
	return (weatherData = {
		temp: data.current.temp,
		sunrise: data.current.sunrise,
		sunset: data.current.sunset,
		feels_like: data.current.feels_like,
		pressure: data.current.pressure,
		humidity: data.current.humidity,
		wind_speed: data.current.wind_speed,
		timezone_offset: data.timezone_offset,
		description: data.current.weather[0].description,
		icon: data.current.weather[0].icon,
	});
};

const getWeather = async (req, res) => {
	try {
		const location = await locationController.fetchLocation(req);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.lat}&lon=${location.data.lon}&appid=${API_KEY}&units=metric&lang=es`;
		axios
			.get(url)
			.then((resp) => {
				const respuesta = {
					ciudad: location.data,
					weather: mapDataToWeatherInterface(resp.data),
				};
				res.status(200).json({ status: "success", data: respuesta });
			})
			.catch((err) =>
				res
					.status(404)
					.json({ status: "error", data: "No se pudo obtener weather" })
			);
	} catch (e) {
		res
			.status(404)
			.json({ status: "error", data: "No se pudo obtener ubicacion" });
	}
};

const getWeatherByCity = async (req, res) => {
	try {
		const response = await ciudadController.fetchCityInfo(req.params.city);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				const respuesta = {
					ciudad: response.data[0],
					weather: mapDataToWeatherInterface(resp.data),
				};
				res.status(200).json({ status: "success", data: respuesta });
			})
			.catch((err) =>
				res
					.status(404)
					.json({ status: "error", data: "No se pudo obtener weather" })
			);
	} catch (e) {
		res.status(404).json({ status: "error", data: "No se encontro ciudad" });
	}
};

const getWeatherByLatLon = async (req, res) => {
	try {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				res.status(200).json({
					status: "success",
					data: mapDataToWeatherInterface(resp.data),
				});
			})
			.catch((err) =>
				res
					.status(404)
					.json({ status: "error", data: "No se pudo obtener weather" })
			);
	} catch (e) {
		res.status(404).json({ status: "error", data: "No se encontro ciudad" });
	}
};

module.exports = { getWeather, getWeatherByCity, getWeatherByLatLon };
