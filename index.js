const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

mongoose.connect(process.env.DATABASE_ATLAS,{dbName:"tour-and-travel"})
    .then(() => {
    console.log("Database connected successfully".bgWhite.green.bold);
    });


















// connection and test-------------------->
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT.green.bold);
});
