import React from "react";
import moment from "moment";
import { iconTranslator } from "../utils/IconTranslator";
import "moment/locale/es";

const ForecastItem = (props) => {
	moment.locale("es");
	
	const { dt } = props.data;
	const { min, max } = props.data.temp;
	const { description, icon } = props.data.weather[0];

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
						{iconTranslator(icon, "small")}
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
