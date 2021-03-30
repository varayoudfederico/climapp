import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EnvironmentOutlined } from "@ant-design/icons";

const CityItem = (props) => {
	return (
		<div
			className={"card"}
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "12px",
			}}
			onClick={() => props.elegirCiudad(props.ciudad)}
		>
			<div>
				<span style={{ color: "#900C3E" }}>
					<EnvironmentOutlined />
				</span>
				<span style={{ marginLeft: "8px" }}>
					{props.ciudad.name}
					<span style={{ color: "#aaaaaa" }}> {props.ciudad.country}</span>
				</span>
			</div>
			<Button
				type="secondary"
				onClick={(e) => {
					e.stopPropagation();
					props.eliminarCiudad(props.ciudad);
				}}
				icon={<DeleteOutlined />}
				shape="circle"
			/>
		</div>
	);
};

export default CityItem;
