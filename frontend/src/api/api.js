import axios from "axios";

const hostUrl = "http://localhost:5000/v1";

export const fetchLocation = () => {
	const url = hostUrl + `/location`;
	return axios.get(url);
};

export const fetchCity = (ciudad) => {
	const url = hostUrl + `/ciudad/${ciudad}`;
	return axios.get(url);
};

export const fetchWeatherByCity = (value) => {
	const url = hostUrl + `/current/${value.name}, ${value.country}`;
	return axios.get(url);
};

export const fetchForecastByCity = (value) => {
	const url = hostUrl + `/forecast/${value.name}, ${value.country}`;
	return axios.get(url);
};
