import React, { useState, useEffect, useContext } from "react";
import Context from "../Context";
import ForecastItem from "./ForecastItem";
import moment from "moment";


const CityForecast = () => {
	const { forecast } = useContext(Context);

	const renderListaCiudades = () =>
		forecast.map((dia) => {
			console.log("Dia render: ", dia);
			return (
				<div>
					<ForecastItem dia={dia} />
				</div>
			);
		});

	// console.log("Forecast detalle", forecast.list);

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
