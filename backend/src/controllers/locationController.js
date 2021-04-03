const axios = require("axios");

const fetchCurrentLocation = () => {
	const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const fetchLocationByIP = (ip) => {
	const url = `http://ip-api.com/json/${ip}?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const getLocation = async (req, res) => {
	try {
		console.log(req.ip);
		if (req.ip === "::1") {
			console.log("es local: ", req.ip);
			let response = await fetchCurrentLocation();
			res.status(200).json({ status: "success", data: response.data });
		} else {
			console.log("no es local: ", req.ip);
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
