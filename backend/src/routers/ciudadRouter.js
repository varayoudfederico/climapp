const router = require("express").Router();
const ciudadController = require("../controllers/ciudadController");

router.route("/:city").get(ciudadController.getCityData);

module.exports = router;
