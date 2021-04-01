import React, { useContext } from "react";
import { Statistic } from "antd";
import Context from "../utils/Context";
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

const CityDetalles = (props) => {
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
	} = props.weather;
	const { description, icon } = props.weather.weather[0];

	return (
		<div className="container">
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
						{iconTranslator(icon, "big")}
					</div>
					<div
						style={{ fontSize: "36px", fontWeight: "500", textAlign: "end" }}
					>
						{Math.round(temp) + "°"}
					</div>
				</div>
			</div>
			<div className="subheader-city">Detalles</div>
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
