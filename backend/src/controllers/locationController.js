const axios = require("axios");

const fetchCurrentLocation = () => {
	const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const fetchLocationByIP = (ip) => {
	const url = `http://ip-api.com/json/24.48.0.1?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const getLocation = async (req, res) => {
	try {
		console.log(req.ip);
		if (req.ip === "::1") {
			console.log("es local");
			let response = await fetchCurrentLocation();
			res.status(200).json({ status: "success", data: response.data });
		} else {
			console.log("no es local");
			let response = await fetchLocationByIP(req.ip);
			res.status(200).json({ status: "success", data: response.data });
		}

		// res.status(200).json({ status: "success", data: response.data });
	} catch (e) {
		res
			.status(404)
			.json({ status: "error", data: "No se pudo obtener ubicacion" });
	}
};

module.exports = {
	getLocation,
	fetchCurrentLocation,
	fetchLocationByIP,
};
