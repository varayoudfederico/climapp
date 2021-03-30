import React, { useContext } from "react";
import Context from "../Context";
import CityDetalles from "../components/CityDetalles";
import CityForecast from "../components/CityForecast";

import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const City = () => {
	const { cambiarCiudad } = useContext(Context);

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<Button
				type="secondary"
				onClick={() => cambiarCiudad()}
				shape="circle"
				icon={<ArrowLeftOutlined />}
			></Button>
			<CityDetalles />
			<CityForecast />
		</div>
	);
};

export default City;
