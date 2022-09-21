const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require("mongoose");

//  middleware---------->

app.use(cors())
app.use(express.json())







// testing route
app.get('/', (req, res) => {
    res.send("Route is successfully working");
})

module.exports = app;

