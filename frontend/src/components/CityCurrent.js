import React, { useState, useEffect, useContext } from "react";
import { fetchLocation } from "../api/api";
import Context from "../utils/Context";
import { message } from "antd";
import { EnvironmentOutlined, LoadingOutlined } from "@ant-design/icons";

const CityCurrent = () => {
	const [currentCity, setCurrentCity] = useState();
	const { cambiarCiudad } = useContext(Context);

	useEffect(() => {
		obtenerLocation();
	}, []);

	const obtenerLocation = async () => {
		try {
			let response = await fetchLocation();
			let ciudad = {
				name: response.data.data.city,
				country: response.data.data.countryCode,
				lat: response.data.data.lat,
				lon: response.data.data.lon,
			};
			setCurrentCity(ciudad);
		} catch (e) {
			message.error("No se pudo obtener ubicacion");
		}
	};

	const renderCurrentCity = () => {
		if (currentCity) {
			return (
				<div>
					<span className="city-item-icon">
						<EnvironmentOutlined />
					</span>
					<span style={{ marginLeft: "8px" }}>
						<span>{currentCity.name}</span>
						<span style={{ color: "#aaaaaa", paddingLeft: "4px" }}>
							{currentCity.country}
						</span>
					</span>
				</div>
			);
		} else
			return (
				<div>
					<span className="city-item-icon">
						<LoadingOutlined />
					</span>
					<span style={{ marginLeft: "8px" }}>
						<span>Detectando...</span>
					</span>
				</div>
			);
	};

	return (
		<div className="city-current-card" onClick={() => cambiarCiudad(currentCity)}>
			<div>{renderCurrentCity()}</div>
		</div>
	);
};

export default CityCurrent;
