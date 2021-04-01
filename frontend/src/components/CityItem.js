import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EnvironmentOutlined } from "@ant-design/icons";

const CityItem = ({ ciudad, elegirCiudad, eliminarCiudad }) => {
	return (
		<div className="city-item-card" onClick={() => elegirCiudad(ciudad)}>
			<div>
				<span className="city-item-icon">
					<EnvironmentOutlined />
				</span>
				<span style={{ marginLeft: "8px" }}>
					<span>{ciudad.name}</span>
					<span style={{ color: "#aaaaaa", paddingLeft: "4px" }}>
						{ciudad.country}
					</span>
				</span>
			</div>
			<Button
				type="secondary"
				onClick={(e) => {
					e.stopPropagation();
					eliminarCiudad();
				}}
				icon={<DeleteOutlined />}
				shape="circle"
			/>
		</div>
	);
};

export default CityItem;
