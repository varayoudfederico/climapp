const router = require("express").Router();
const forecastController = require("../controllers/forecastController");

router.route("/").get(forecastController.getForecast);
router.route("/coordinates").get(forecastController.getForecastByLatLon);
router.route("/:city").get(forecastController.getForecastByCity);

module.exports = router;
