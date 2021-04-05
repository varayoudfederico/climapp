const axios = require("axios");

const fetchLocation = (req) => {
	if (req.ip === "::1" || req.ip === "::ffff:127.0.0.1") {
		const url = `http://ip-api.com/json/?fields=status,message,countryCode,city,lat,lon`;
		return axios.get(url);
	} else {
		const ip = getClientIp(req);
		const url = `http://ip-api.com/json/${ip}?fields=status,message,countryCode,city,lat,lon`;
		return axios.get(url);
	}
};

const getClientIp = (req) => {
	let ip;
	const forwardedIpsStr = req.header("x-forwarded-for");
	if (forwardedIpsStr) {
		const forwardedIps = forwardedIpsStr.split(",");
		ip = forwardedIps[0];
	}
	if (!ip) {
		ip = req.connection.remoteAddress;
	}
	return ip;
};

const getLocation = async (req, res) => {
	try {
		const response = await fetchLocation(req);
		res.status(200).json({ status: "success", data: response.data });

		// res.status(200).json({ status: "success", data: response.data });
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
