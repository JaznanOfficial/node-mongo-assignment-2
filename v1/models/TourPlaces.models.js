const mongoose = require("mongoose");

const tourPlaceSchema = mongoose.Schema({
    placeName: {
        type: String,
        required: [true, "Please provide a place-name"],
        minLength: [3, "Place-name too short, please give a proper name"],
        maxLength: [20, "Place-name too large. please provide a name maximum 20 characters"],
    },
    img: {
        type: String,
        required: [true, "Please provide a place-image link"],
    },
    cityName: {
        type: String,
        required: [true, "Please provide a city-name"],
    },
    price: {
        type: Number,
        required:[true, "Please provide a price"]
    },
    placeDetails: {
        type: String,
        required: [true, "Please provide place-details"],
        minLength: [10, "Place-details too short, please give some information about place"],
        maxLength: [500, "Place-name too large. please provide details maximum 500 characters"],
    }
});


const TourPlaceModel = mongoose.model('Places', tourPlaceSchema);

module.exports = TourPlaceModel;