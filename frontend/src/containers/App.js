import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Context from "../utils/Context";
import City from "./City";
import CityList from "./CityList";
import { fetchWeatherByCity, fetchForecastByCity } from "../api/api";
import { message } from "antd";
import "../styles/css/app.css";

const App = () => {
	const [weather, setWeather] = useState();
	const [forecast, setForecast] = useState();
	const [ciudadActual, setCiudadActual] = useState();
	const [isLoading, setIsLoading] = useState(false);

	let history = useHistory();

	//al detectar un cambio de ciudad llama a la funcion para obtener los datos del clima
	useEffect(() => {
		const fetchData = async () => {
			try {
				const weatherResponse = await fetchWeatherByCity(ciudadActual);
				const forecastResponse = await fetchForecastByCity(ciudadActual);

				setWeather(weatherResponse.data.data);
				setForecast(forecastResponse.data.data);
				setIsLoading(false);
			} catch (e) {
				setCiudadActual();
				message.error("No se pudieron obtener datos del clima");
				setIsLoading(false);
			}
		};

		if (ciudadActual) {
			setIsLoading(true);
			fetchData();
		}
	}, [ciudadActual]);

	useEffect(() => {
		if (isLoading) {
			message.loading({
				key: "loading",
				content: `Buscando tiempo en ${ciudadActual.name}, ${ciudadActual.country}`,
				duration: 0,
			});
		} else {
			message.destroy("loading");
		}
	}, [isLoading, ciudadActual]);

	useEffect(() => {
		if (ciudadActual && weather && forecast) {
			history.push("/city");
		} else {
			history.push("/");
		}
	}, [ciudadActual, weather, forecast, history]);

	const cambiarCiudad = (ciudad) => {
		if (!isLoading) {
			setWeather();
			setForecast();
			setCiudadActual(ciudad);
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
				<Switch>
					<Route path="/city">
						<City weather={weather} forecast={forecast} />
					</Route>
					<Route path="/">
						<CityList />
					</Route>
				</Switch>
			</Context.Provider>
		</div>
	);
};

export default App;
