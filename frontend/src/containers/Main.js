import React, { useState, useEffect } from "react";
import Context from "../Context";
import City from "./City";
import CityList from "./CityList";
import { fetchWeatherByCity, fetchForecastByCity } from "../api/api";
import { message } from "antd";

const Main = () => {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();
	const [ciudadActual, setCiudadActual] = useState();

	//al detectar un cambio de ciudad llama a la funcion para obtener los datos del clima
	useEffect(() => {
		const obtenerWeather = async () => {
			try {
				let response = await fetchWeatherByCity(ciudadActual);
				setWeather(response.data.data.weather);
			} catch (e) {
				message.destroy("loading");
				setCiudadActual();
				message.error("No se pudieron obtener datos del clima");
			}
		};

		const obtenerForecast = async () => {
			try {
				let response = await fetchForecastByCity(ciudadActual);
				setForecast(response.data.data.forecast);
			} catch (e) {
				message.destroy("loading");
				setCiudadActual();
			}
		};

		if (ciudadActual) {
			message.loading({
				key: "loading",
				content: `Buscando tiempo en ${ciudadActual.name}, ${ciudadActual.country}`,
				duration: 0,
			});
			obtenerWeather(ciudadActual.name);
			obtenerForecast(ciudadActual.name);
		}
	}, [ciudadActual]);

	//obtiene los datos del clima de la ciudad que se pasa por argumento y lo guarda en el estado
	const cambiarCiudad = (ciudad) => {
		setWeather();
		setForecast();
		setCiudadActual(ciudad);
	};

	const ocultarMensaje = () => {
		message.destroy("loading");
	};

	const renderView = () => {
		if (ciudadActual && weather && forecast) {
			ocultarMensaje();
			return <City weather={weather} forecast={forecast} />;
		} else {
			return <CityList />;
		}
	};

	return (
		<Context.Provider
			value={{
				ciudadActual,
				cambiarCiudad,
			}}
		>
			{renderView()}
		</Context.Provider>
	);
};

export default Main;
