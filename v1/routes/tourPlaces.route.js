const express = require("express");
const { getTourPlaces, postTourPlaces } = require("../controllers/tourPlaces.controller");
const router = express.Router();

router.route('/')
    .get(getTourPlaces)
    .post(postTourPlaces)


module.exports = router;