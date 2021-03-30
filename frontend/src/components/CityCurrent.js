import React, { useState, useEffect, useContext } from "react";
import { fetchLocation } from "../api/api";
import Context from "../Context";
import { message } from "antd";
import { CompassOutlined, LoadingOutlined } from "@ant-design/icons";

const CityCurrent = () => {
	const [currentCity, setCurrentCity] = useState();
	const { cambiarCiudad } = useContext(Context);

	useEffect(() => {
		obtenerLocation();
	}, []);

	const obtenerLocation = async () => {
		try {
			let request = fetchLocation();
			let response = await request;
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
				<div style={{ display: "flex" }}>
					<div style={{ marginRight: "8px" }}>
						<CompassOutlined />
					</div>
					<span>{currentCity.name}</span>
					<span style={{ color: "#aaaaaa", paddingLeft: "4px" }}>
						{currentCity.country}
					</span>
				</div>
			);
		} else
			return (
				<div style={{ display: "flex" }}>
					<div style={{ marginRight: "8px" }}>
						<LoadingOutlined />
					</div>
					Buscando...
				</div>
			);
	};

	return (
		<div
			className={"card"}
			style={{
				display: "flex",
				alignItems: "center",
				padding: "12px",
			}}
			onClick={() => cambiarCiudad(currentCity)}
		>
			<div>{renderCurrentCity()}</div>
		</div>
	);
};

export default CityCurrent;
