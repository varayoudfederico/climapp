import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EnvironmentOutlined } from "@ant-design/icons";

const CityItem = (props) => {
	return (
		<div
			className="city-item-card"
			onClick={() => props.elegirCiudad(props.ciudad)}
		>
			<div>
				<span className="city-item-icon">
					<EnvironmentOutlined />
				</span>
				<span style={{ marginLeft: "8px" }}>
					<span>{props.ciudad.name}</span>
					<span style={{ color: "#aaaaaa", paddingLeft: "4px" }}>
						{props.ciudad.country}
					</span>
				</span>
			</div>
			<Button
				type="secondary"
				onClick={(e) => {
					e.stopPropagation();
					props.eliminarCiudad();
				}}
				icon={<DeleteOutlined />}
				shape="circle"
			/>
		</div>
	);
};

export default CityItem;
