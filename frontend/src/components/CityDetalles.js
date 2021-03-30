import React, { useContext } from "react";
import { Statistic } from "antd";
import Context from "../Context";
import moment from "moment";
import "moment/locale/es";
import { iconTranslator } from "../utils/IconTranslator";
import {
	WiThermometerExterior,
	WiStrongWind,
	WiHumidity,
	WiBarometer,
	WiSunrise,
	WiSunset,
} from "weather-icons-react";

const CityDetalles = () => {
	const { weather, ciudadActual } = useContext(Context);

	const { name, country } = ciudadActual;
	const {
		temp,
		sunrise,
		sunset,
		feels_like,
		pressure,
		humidity,
		wind_speed,
		timezone_offset,
	} = weather;
	const { description, icon } = weather.weather[0];

	return (
		<div className="container">
			<div
				className="card"
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "12px",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "start",
					}}
				>
					<div style={{ fontSize: "22px" }}>
						{name}
						<div>
							<span
								style={{
									color: "#aaaaaa",
									fontSize: "20px",
								}}
							>
								{country}
							</span>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<div style={{ display: "flex", justifyContent: "flex-end" }}>
						{iconTranslator(icon, "big")}
					</div>
					<div
						style={{ fontSize: "26px", fontWeight: "500", textAlign: "end" }}
					>
						{Math.round(temp) + "°"}
					</div>
					<div
						style={{
							color: "#aaaaaa",
							textTransform: "capitalize",
							fontSize: "15px",
						}}
					>
						{description}
					</div>
				</div>
			</div>
			<div
				style={{
					color: "#aaaaaa",
					paddingTop: "8px",
					paddingBottom: "8px",
					paddingLeft: "8px",
				}}
			>
				Detalles
			</div>
			<div className="detalles-row">
				<div className="weather-item" style={{ marginRight: "4px" }}>
					<div className="weather-statistic">
						<WiThermometerExterior size={30} color="#ff6361" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Sensación Térmica"
						value={Math.round(feels_like) + "°"}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiStrongWind size={30} color="#003f5c" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Viento"
						value={wind_speed + " m/s"}
					/>
				</div>
			</div>
			<div className="detalles-row">
				<div className="weather-item" style={{ marginRight: "4px" }}>
					<div className="weather-statistic">
						<WiHumidity size={30} color="#51A2DA" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Humedad"
						value={humidity + "%"}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiBarometer size={30} color="#58508d" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Presión"
						value={pressure + " hPa"}
					/>
				</div>
			</div>
			<div className="detalles-row">
				<div className="weather-item" style={{ marginRight: "4px" }}>
					<div className="weather-statistic">
						<WiSunrise size={30} color="#FFC300" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Amanecer"
						value={moment
							.unix(sunrise - timezone_offset)
							.utc()
							.format("HH:mm")}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiSunset size={30} color="#900C3E" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Atardecer"
						value={moment
							.unix(sunset - timezone_offset)
							.utc()
							.format("HH:mm")}
					/>
				</div>
			</div>
		</div>
	);
};

export default CityDetalles;
