import React, { useContext } from "react";
import { Statistic } from "antd";
import Context from "../utils/Context";
import WeatherIcon from "./WeatherIcon";
import {
	getTemperaturaString,
	getVientoString,
	getHumedadString,
	getPresionString,
	getHoraString,
} from "../utils/Utils";
import {
	WiThermometerExterior,
	WiStrongWind,
	WiHumidity,
	WiBarometer,
	WiSunrise,
	WiSunset,
} from "weather-icons-react";

const CityDetalles = ({ weather }) => {
	const { ciudadActual } = useContext(Context);

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
			<div className="subheader-city" style={{ paddingTop: "16px" }}>
				Ahora
			</div>
			<div className="card-detalles-header">
				<div className="flex-column-center">
					<div style={{ fontSize: "22px" }}>
						{name}{" "}
						<span
							style={{
								color: "#aaaaaa",
								fontSize: "20px",
							}}
						>
							{" "}
							{country}
						</span>
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

				<div
					style={{
						display: "flex",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "end",
							marginRight: "8px",
							marginTop: "6px",
						}}
					>
						<WeatherIcon iconText={icon} size="big" />
					</div>
					<div
						style={{ fontSize: "36px", fontWeight: "500", textAlign: "end" }}
					>
						{getTemperaturaString(temp)}
					</div>
				</div>
			</div>
			{/* <div className="subheader-city">Detalles</div> */}
			<div className="detalles-row">
				<div className="weather-item" style={{ marginRight: "4px" }}>
					<div className="weather-statistic">
						<WiThermometerExterior size={30} color="#ff6361" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Sensación Térmica"
						value={getTemperaturaString(feels_like)}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiStrongWind size={30} color="#003f5c" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Viento"
						value={getVientoString(wind_speed)}
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
						value={getHumedadString(humidity)}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiBarometer size={30} color="#58508d" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Presión"
						value={getPresionString(pressure)}
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
						value={getHoraString(sunrise, timezone_offset)}
					/>
				</div>
				<div className="weather-item" style={{ marginLeft: "4px" }}>
					<div className="weather-statistic">
						<WiSunset size={30} color="#900C3E" />
					</div>
					<Statistic
						valueStyle={{ fontSize: "20px" }}
						title="Atardecer"
						value={getHoraString(sunset, timezone_offset)}
					/>
				</div>
			</div>
		</div>
	);
};

export default CityDetalles;
