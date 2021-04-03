const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const locationRouter = require("./routers/locationRouter");
const currentRouter = require("./routers/currentRouter");
const forecastRouter = require("./routers/forecastRouter");
const ciudadRouter = require("./routers/ciudadRouter");

app.use("/v1/location", locationRouter);
app.use("/v1/current", currentRouter);
app.use("/v1/forecast", forecastRouter);
app.use("/v1/ciudad", ciudadRouter);

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`);
});

module.exports = app;
