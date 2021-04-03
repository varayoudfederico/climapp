import axios from "axios";

// const hostUrl = "http://localhost:5000/v1";
const hostUrl = "https://cryptic-springs-45012.herokuapp.com/v1";

export const fetchLocation = () => {
	const url = hostUrl + `/location`;
	return axios.get(url);
};

export const fetchCity = (ciudad) => {
	const url = hostUrl + `/ciudad/${ciudad}`;
	return axios.get(url);
};

export const fetchWeatherByCity = (ciudad) => {
	const url = hostUrl + `/current/coordinates?&lat=${ciudad.lat}&lon=${ciudad.lon}`;
	return axios.get(url);
};

export const fetchForecastByCity = (ciudad) => {
	const url = hostUrl + `/forecast/coordinates?&lat=${ciudad.lat}&lon=${ciudad.lon}`;
	return axios.get(url);
};
