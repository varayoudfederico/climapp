const router = require("express").Router();
const currentController = require("../controllers/currentController");

router.route("/").get(currentController.getWeather);
router.route("/coordinates").get(currentController.getWeatherByLatLon);
router.route("/:city").get(currentController.getWeatherByCity);

module.exports = router;
