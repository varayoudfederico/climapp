const axios = require("axios");
const locationController = require("./locationController");
const ciudadController = require("./ciudadController");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const mapDataToForecast = (data) => {
	let forecastData = [];
	data.daily.map((day) => {
		let forecastDay = {
			dt: day.dt,
			min: day.temp.min,
			max: day.temp.max,
			description: day.weather[0].description,
			icon: day.weather[0].icon,
		};
		forecastData.push(forecastDay);
	});
	return forecastData;
};

const getForecast = async (req, res) => {
	try {
		const response = await locationController.fetchLocation(req);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.lat}&lon=${response.data.lon}&appid=${API_KEY}&units=metric&lang=es`;
		axios
			.get(url)
			.then((resp) => {
				const respuesta = {
					ciudad: response.data,
					forecast: mapDataToForecast(resp.data),
				};
				res.status(200).json({ status: "success", data: respuesta });
			})
			.catch((err) =>
				res
					.status(404)
					.json({ status: "error", data: "No se pudo obtener forecast" })
			);
	} catch (e) {
		res
			.status(404)
			.json({ status: "error", data: "No se pudo obtener ubicacion" });
	}
};

const getForecastByCity = async (req, res) => {
	try {
		const response = await ciudadController.fetchCityInfo(req.params.city);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				const respuesta = {
					ciudad: response.data[0],
					forecast: mapDataToForecast(resp.data),
				};
				res.status(200).json({ status: "success", data: respuesta });
			})
			.catch((err) =>
				res
					.status(404)
					.json({ status: "error", data: "No se pudo obtener forecast" })
			);
	} catch (e) {
		res.status(404).json({ status: "error", data: "No se encontro ciudad" });
	}
};

const getForecastByLatLon = async (req, res) => {
	try {
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				res
					.status(200)
					.json({ status: "success", data: mapDataToForecast(resp.data) });
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

module.exports = { getForecast, getForecastByCity, getForecastByLatLon };
