import React, { useContext, useState, useEffect } from "react";
import CityItem from "../components/CityItem";
import Context from "../Context";
import { Button, Modal, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CityCurrent from "../components/CityCurrent";
import { fetchCity } from "../api/api";

const CityList = () => {
	const [listaCiudades, setListaCiudades] = useState(
		JSON.parse(localStorage.getItem("listaCiudades")) || []
	);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentInput, setCurrentInput] = useState("");
	const { cambiarCiudad } = useContext(Context);

	//cuando detecta cambio en listaCiudades, lo guarda en localStorage
	useEffect(() => {
		localStorage.setItem("listaCiudades", JSON.stringify(listaCiudades));
	}, [listaCiudades]);

	const eliminarCiudad = (index) => {
		setListaCiudades(listaCiudades.filter((_, i) => i !== index));
	};

	// agrega la ciudad del input a la lista de ciudades y cierra el dialogo
	const agregarCiudad = async () => {
		try {
			let response = await fetchCity(currentInput);
			setListaCiudades([...listaCiudades, response.data.data]);

			setCurrentInput("");
			setIsModalVisible(false);
		} catch (e) {
			Modal.warning({
				content: "No se encontro ciudad, intente nuevamente",
			});
		}
	};

	const renderListaCiudades = () =>
		listaCiudades.map((ciudad, i) => {
			return (
				<div key={i}>
					<CityItem
						elegirCiudad={cambiarCiudad}
						eliminarCiudad={() => eliminarCiudad(i)}
						ciudad={ciudad}
					/>
				</div>
			);
		});

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<div style={{ fontSize: "24px" }}>Climapp</div>
			<div className="subtitle">
				<div style={{ color: "#aaaaaa" }}>Ubicación actual</div>
			</div>
			<CityCurrent elegirCiudad={cambiarCiudad} />
			<div className="subtitle">
				<div style={{ color: "#aaaaaa" }}>Ciudades guardadas</div>
				<Button
					type="primary"
					onClick={() => setIsModalVisible(true)}
					shape="circle"
					icon={<PlusOutlined />}
				></Button>
			</div>
			<div>{renderListaCiudades()}</div>

			<Modal
				title="Agregar Ciudad"
				visible={isModalVisible}
				okText="Buscar y Agregar"
				cancelText="Cancelar"
				onOk={agregarCiudad}
				onCancel={() => setIsModalVisible(false)}
			>
				<Input
					onChange={(e) => setCurrentInput(e.target.value)}
					value={currentInput}
				/>
			</Modal>
		</div>
	);
};

export default CityList;
