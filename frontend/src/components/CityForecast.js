import React from "react";
import ForecastItem from "./ForecastItem";

const CityForecast = (props) => {
	const renderListaCiudades = () =>
		props.forecast.map((dia, i) => {
			return (
				<div key={i}>
					<ForecastItem dia={dia} />
				</div>
			);
		});

	return (
		<div>
			<div
				style={{
					color: "#aaaaaa",
					paddingTop: "8px",
					paddingBottom: "8px",
					paddingLeft: "8px",
				}}
			>
				Pronóstico próximos 8 días
			</div>
			<div>{renderListaCiudades()}</div>
		</div>
	);
};

export default CityForecast;
