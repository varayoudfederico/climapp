const axios = require("axios");

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const fetchCityInfo = (ciudad) => {
	const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=${API_KEY}`;
	return axios.get(encodeURI(url));
};

const getCityData = async (req, res) => {
	try {
		const response = await fetchCityInfo(req.params.city);
		if (response.data[0]) {
			res.status(200).json({ status: "success", data: response.data[0] });
		} else {
			res.status(404).json({ status: "error", data: "No se encontro ciudad" });
		}
	} catch (e) {
		res.status(404).json({ status: "error", data: "No se encontro ciudad" });
	}
};

module.exports = { getCityData, fetchCityInfo };
