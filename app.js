const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require("mongoose");

//  middleware---------->

app.use(cors())
app.use(express.json())

// main server code------------>

const tourPlacesRoute = require('./v1/routes/tourPlaces.route')

app.use('/api/v1/tours', tourPlacesRoute)






// testing route
app.get('/', (req, res) => {
    res.send("Route is successfully working");
})

module.exports = app;

