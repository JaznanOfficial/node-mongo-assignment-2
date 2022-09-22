const places = require('../models/TourPlaces.models');


const getTourPlacesService = async(filter) => {
    const placesData = await places.find({});
    console.log(placesData);
    return placesData;
}

const postTourPlacesService = async (placeData) => {
    const result = await places.create(placeData)
    return result;
}


module.exports = { getTourPlacesService, postTourPlacesService }