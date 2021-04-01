const axios = require("axios");

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

module.exports = {
	getLocation,
	fetchLocation,
};
