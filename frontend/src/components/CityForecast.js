import React from "react";
import ForecastItem from "./ForecastItem";

const CityForecast = ({ forecast }) => {
	const renderListaCiudades = () =>
		forecast.map((dia, i) => {
			return (
				<div key={i}>
					<ForecastItem data={dia} />
				</div>
			);
		});

	return (
		<div>
			<div className="subheader-city">Pronóstico próximos 8 días</div>
			<div>{renderListaCiudades()}</div>
		</div>
	);
};

export default CityForecast;
