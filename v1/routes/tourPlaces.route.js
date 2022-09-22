const express = require("express");
const { getTourPlaces } = require("../controllers/tourPlaces.controller");
const router = express.Router();

router.route('/')
.get(getTourPlaces)


module.exports = router;