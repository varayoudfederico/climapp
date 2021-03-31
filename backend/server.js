const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const weatherRouter = require("./routers/weatherRouter");

app.use("/v1/", weatherRouter);

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto: ${port}`);
});

module.exports = app;
