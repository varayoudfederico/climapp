const axios = require("axios");
const locationController = require("./locationController");
const ciudadController = require("./ciudadController");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const getForecast = async (req, res) => {
	try {
		let response = await locationController.fetchLocation();
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.lat}&lon=${response.data.lon}&appid=${API_KEY}&units=metric&lang=es`;
		axios
			.get(url)
			.then((resp) => {
				let respuesta = { ciudad: response.data, forecast: resp.data.daily };
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
		let response = await ciudadController.fetchCityInfo(req.params.city);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				let respuesta = { ciudad: response.data[0], forecast: resp.data.daily };
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
		console.log("Start f")
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				let weather = resp.data.current;
				weather["timezone_offset"] = resp.data.timezone_offset;
				let respuesta = {
					forecast: resp.data.daily,
				};
				res.status(200).json({ status: "success", data: respuesta });
				console.log("Finish f")
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
