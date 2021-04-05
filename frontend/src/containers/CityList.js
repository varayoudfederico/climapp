import React, { useContext, useState, useEffect } from "react";
import CityItem from "../components/CityItem";
import Context from "../utils/Context";
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
			const response = await fetchCity(currentInput);
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
			<div className="main-header-text">Climapp</div>

			<div className="subtitle grey-color">
				<div>Ubicación actual</div>
			</div>

			<CityCurrent elegirCiudad={cambiarCiudad} />

			<div className="subtitle grey-color">
				<div>Ciudades guardadas</div>
				<Button
					type="primary"
					style={{ backgroundColor: "#F81F77", border: "0px" }}
					onClick={() => setIsModalVisible(true)}
					shape="circle"
					icon={<PlusOutlined />}
				></Button>
			</div>

			<div>{renderListaCiudades()}</div>

			<Modal
				title="Agregar ciudad"
				visible={isModalVisible}
				okText="Buscar y Agregar"
				cancelText="Cancelar"
				onOk={agregarCiudad}
				onCancel={() => setIsModalVisible(false)}
			>
				<Input
					placeholder="Ingrese una ciudad"
					onChange={(e) => setCurrentInput(e.target.value)}
					value={currentInput}
				/>
			</Modal>
		</div>
	);
};

export default CityList;
