const router = require("express").Router();
const locationController = require("../controllers/locationController");

router.route("/").get(locationController.getLocation);

module.exports = router;