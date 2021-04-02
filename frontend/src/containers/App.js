import React, { useState, useEffect } from "react";
import Context from "../utils/Context";
import City from "./City";
import CityList from "./CityList";
import { fetchWeatherByCity, fetchForecastByCity } from "../api/api";
import { message } from "antd";
import "../styles/app.css";

const App = () => {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();
	const [ciudadActual, setCiudadActual] = useState();

	//al detectar un cambio de ciudad llama a la funcion para obtener los datos del clima
	useEffect(() => {
		const fetchData = async () => {
			try {
				let weatherResponse = await fetchWeatherByCity(ciudadActual);
				let forecastResponse = await fetchForecastByCity(ciudadActual);
				setWeather(weatherResponse.data.data.weather);
				setForecast(forecastResponse.data.data.forecast);
			} catch (e) {
				setCiudadActual();
				message.error("No se pudieron obtener datos del clima");
				message.destroy("loading");
			}
		};

		if (ciudadActual) {
			message.loading({
				key: "loading",
				content: `Buscando tiempo en ${ciudadActual.name}, ${ciudadActual.country}`,
				duration: 0,
			});
			fetchData();
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
		<div className="app">
			<Context.Provider
				value={{
					ciudadActual,
					cambiarCiudad,
				}}
			>
				{renderView()}
			</Context.Provider>
		</div>
	);
};

export default App;
