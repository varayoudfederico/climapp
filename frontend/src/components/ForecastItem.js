import React from "react";
import moment from "moment";
import WeatherIcon from "./WeatherIcon";
import "moment/locale/es";

const ForecastItem = ({ data }) => {
	moment.locale("es");

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
								{moment.unix(dt).format("dddd DD")}
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
							{Math.round(max)}°{" "}
							<span style={{ color: "#51A2DA", marginLeft: "8px" }}>
								{Math.round(min)}°
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForecastItem;
