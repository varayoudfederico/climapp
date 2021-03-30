import axios from "axios";

export const fetchLocation = () => {
	const url = `http://localhost:5000/v1/location`;
	return axios.get(url);
};

export const fetchCity = (ciudad) => {
	const url = `http://localhost:5000/v1/ciudad/${ciudad}`;
	return axios.get(url);
};

export const fetchWeather = () => {
	console.log("Llego ciudad a la api weather: ");
	const url = `http://localhost:5000/v1/current`;
	return axios.get(url);
};

export const fetchForecast = () => {
	console.log("Llego ciudad a la api forecast: ");
	const url = `http://localhost:5000/v1/forecast`;
	return axios.get(url);
};

export const fetchWeatherByCity = (value) => {
	console.log("Llego ciudad a la api weather: ", value);
	const url = `http://localhost:5000/v1/current/${value.name}, ${value.country}`;
	return axios.get(url);
};

export const fetchForecastByCity = (value) => {
	console.log("Llego ciudad a la api forecast: ", value);
	const url = `http://localhost:5000/v1/forecast/${value.name}, ${value.country}`;
	return axios.get(url);
};
