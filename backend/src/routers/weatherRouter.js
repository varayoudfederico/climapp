const router = require("express").Router();
const weatherController = require("../controllers/weatherController");

router.route("/location").get(weatherController.getLocation);
router.route("/current").get(weatherController.getWeather);
router.route("/forecast").get(weatherController.getForecast);
router.route("/current/:city").get(weatherController.getWeatherByCity);
router.route("/forecast/:city").get(weatherController.getForecastByCity);

router.route("/ciudad/:city").get(weatherController.getCityData)


module.exports = router;
