const axios = require("axios");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const fetchLocation = () => {
	const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
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



module.exports = {
	getWeather,
	getWeatherByCity,
	getForecast,
	getForecastByCity,
	getCityData,
};
