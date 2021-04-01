const axios = require("axios");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const fetchLocation = () => {
	const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const fetchCityInfo = (ciudad) => {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${API_KEY}`;
	return axios.get(encodeURI(url));
};

const getCityData = async (req, res) => {
	try {
		let response = await fetchCityInfo(req.params.city);
		if (response.data[0]) {
			res.status(200).json({ status: "success", data: response.data[0] });
		} else {
			res.status(404).json({ status: "error", data: "No se encontro ciudad" });
		}
	} catch (e) {
		res.status(404).json({ status: "error", data: "No se encontro ciudad" });
	}
};

const getLocation = async (req, res) => {
	try {
		let response = await fetchLocation();
		res.status(200).json({ status: "success", data: response.data });
	} catch (e) {
		res
			.status(404)
			.json({ status: "error", data: "No se pudo obtener ubicacion" });
	}
};

const getWeather = async (req, res) => {
	try {
		let location = await fetchLocation();
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.lat}&lon=${location.data.lon}&appid=${API_KEY}&units=metric&lang=es`;
		axios
			.get(url)
			.then((resp) => {
				let respuesta = {
					ciudad: location.data,
					weather: resp.data.current,
					timeOffset: resp.data.timezone_offset,
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

const getForecast = async (req, res) => {
	try {
		let response = await fetchLocation();
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

const getWeatherByCity = async (req, res) => {
	try {
		let response = await fetchCityInfo(req.params.city);
		const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}&units=metric&lang=es`;

		axios
			.get(url)
			.then((resp) => {
				let weather = resp.data.current;
				weather["timezone_offset"] = resp.data.timezone_offset;
				let respuesta = {
					ciudad: response.data[0],
					weather: weather,
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

const getForecastByCity = async (req, res) => {
	try {
		let response = await fetchCityInfo(req.params.city);
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

module.exports = {
	getLocation,
	getWeather,
	getWeatherByCity,
	getForecast,
	getForecastByCity,
	getCityData,
};
