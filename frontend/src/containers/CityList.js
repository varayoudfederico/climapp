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

	const eliminarCiudad = (ciudad) => {
		var array = [...listaCiudades];
		var index = array.indexOf(ciudad);
		if (index !== -1) {
			array.splice(index, 1);
			setListaCiudades(array);
		}
	};

	// agrega la ciudad del input a la lista de ciudades y cierra el dialogo
	const agregarCiudad = async () => {
		try {
			let request = fetchCity(currentInput);
			let response = await request;
			let array = [...listaCiudades];

			array.push(response.data.data);

			setListaCiudades(array);
			setCurrentInput("");
			setIsModalVisible(false);
		} catch (e) {
			Modal.warning({
				content: "No se encontro ciudad, intente nuevamente",
			});
		}
	};

	const renderListaCiudades = () =>
		listaCiudades.map((ciudad) => {
			return (
				<div>
					<CityItem
						elegirCiudad={cambiarCiudad}
						eliminarCiudad={eliminarCiudad}
						ciudad={ciudad}
					/>
				</div>
			);
		});

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
			<div style={{ fontSize: "24px", display: "flex", alignItems: "center" }}>
				Climapp
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: "16px",
					paddingBottom: "8px",
				}}
			>
				<div style={{ color: "#aaaaaa" }}>Ubicación actual</div>
			</div>
			<CityCurrent elegirCiudad={cambiarCiudad} />
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					paddingTop: "16px",
					paddingBottom: "8px",
				}}
			>
				<div style={{ color: "#aaaaaa", paddingRight: "16px" }}>
					Ciudades guardadas
				</div>
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
