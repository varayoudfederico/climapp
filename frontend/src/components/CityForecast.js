import React, { useContext } from "react";
import Context from "../Context";
import ForecastItem from "./ForecastItem";

const CityForecast = () => {
	const { forecast } = useContext(Context);

	const renderListaCiudades = () =>
		forecast.map((dia, i) => {
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
