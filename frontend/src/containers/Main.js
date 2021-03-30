import React, { useState, useEffect } from "react";
import Context from "../Context";
import City from "./City";
import CityList from "./CityList";

import { fetchWeatherByCity, fetchForecastByCity } from "../api/api";

import { Modal, message } from "antd";

const Main = () => {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();
	const [ciudadActual, setCiudadActual] = useState();

	//al detectar un cambio de ciudad llama a la funcion para obtener los datos del clima
	useEffect(() => {
		if (ciudadActual) {
			console.log("CIUDAD ACTUAL: ", ciudadActual);
			message.loading({
				key: "loading",
				content: `Buscando tiempo en ${ciudadActual.name}, ${ciudadActual.country}`,
				duration: 0,
			});
			obtenerWeather(ciudadActual.name);
			obtenerForecast(ciudadActual.name);
		}
	}, [ciudadActual]);

	const obtenerWeather = async () => {
		try {
			let request = fetchWeatherByCity(ciudadActual);
			let response = await request;
			console.log("WEATHER: ", response.data.data.weather);
			setWeather(response.data.data.weather);
		} catch (e) {
			message.destroy("loading");
			setCiudadActual();
			message.error('No se pudieron obtener datos del clima');
		}
	};

	const obtenerForecast = async () => {
		try {
			let request = fetchForecastByCity(ciudadActual);
			let response = await request;
			setForecast(response.data.data.forecast);
		} catch (e) {
			message.destroy("loading");
			setCiudadActual();
		}
	};

	//obtiene los datos del clima de la ciudad que se pasa por argumento y lo guarda en el estado
	const cambiarCiudad = (ciudad) => {
		setWeather();
		setForecast();
		setCiudadActual(ciudad);
	};

	const renderView = () => {
		if (ciudadActual && weather && forecast) {
			message.destroy("loading");
			return <City />;
		} else {
			return <CityList />;
		}
	};

	return (
		<Context.Provider
			value={{
				ciudadActual,
				weather,
				forecast,
				cambiarCiudad,
			}}
		>
			{renderView()}
		</Context.Provider>
	);
};

export default Main;
