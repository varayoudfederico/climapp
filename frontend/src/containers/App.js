import React from "react";
import Main from "./Main";
import "../styles/app.css";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
