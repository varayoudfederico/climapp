import React from "react";
import WeatherIcon from "./WeatherIcon";
import { getFechaString, getTemperaturaString } from "../utils/Utils";

const ForecastItem = ({ data }) => {
	const { dt } = data;
	const { min, max } = data.temp;
	const { description, icon } = data.weather[0];

	return (
		<div>
			<div
				className={"card"}
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "12px",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "column",
							marginRight: "12px",
							alignItems: "center",
						}}
					>
						<WeatherIcon iconText={icon} size="small" />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "column",
						}}
					>
						<div>
							<div style={{ textTransform: "capitalize" }}>
								{getFechaString(dt)}
							</div>
							<div style={{ color: "#aaaaaa", textTransform: "capitalize" }}>
								{description}
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div>
						<div style={{ color: "#ff6361" }}>
							{getTemperaturaString(max)}{" "}
							<span style={{ color: "#51A2DA", marginLeft: "8px" }}>
								{getTemperaturaString(min)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForecastItem;
