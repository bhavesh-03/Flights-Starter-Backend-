const express = require("express");
// const {} = require("../controllers");

const { AirplaneController } = require("../../controllers");
const router = express.Router();

router.post("/", AirplaneController.createAirplane);

module.exports = router;