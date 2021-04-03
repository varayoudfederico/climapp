const axios = require("axios");

const fetchCurrentLocation = () => {
	const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const getClientIp = (req) => {
	var ipAddress;

	var forwardedIpsStr = req.header("x-forwarded-for");
	if (forwardedIpsStr) {
		var forwardedIps = forwardedIpsStr.split(",");
		ipAddress = forwardedIps[0];
	}
	if (!ipAddress) {
		ipAddress = req.connection.remoteAddress;
	}
	return ipAddress;
};

const fetchLocationByIP = (ip) => {
	const url = `http://ip-api.com/json/${ip}?fields=status,message,countryCode,city,lat,lon`;
	return axios.get(url);
};

const getLocation = async (req, res) => {
	try {
		console.log(req.ip);
		if (req.ip === "::1") {
			let response = await fetchCurrentLocation();
			res.status(200).json({ status: "success", data: response.data });
		} else {
			console.log("no es local: ", req.ip);
			let response = await fetchLocationByIP(getClientIp(req));
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
