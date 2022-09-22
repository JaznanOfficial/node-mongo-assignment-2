const TourPlaceModel = require('../models/TourPlaces.models');


const getTourPlacesService = async(filter) => {
    const places = await TourPlaceModel.find(filter);
    return places;
}


module.exports={getTourPlacesService}