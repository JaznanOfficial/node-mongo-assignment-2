const { getTourPlacesService, postTourPlacesService } = require("../services/tourPlaces.services");

const getTourPlaces = async (req, res, next) => {
    try {
        const filter = req.query;
        console.log("data got");
        const tourPlaces = await getTourPlacesService({});
        // console.log(tourPlaces)
        res.status(200).json({
            status: "Success",
            message: "Tour-place successfully found",
            data: tourPlaces,
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        });
    }
};

const postTourPlaces = async (req, res, next) => {
    try {
        const tourPlacesData = req.body;
        const result = await postTourPlacesService(tourPlacesData)
        res.status(200).json({
            status: "success",
            message:result,
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message,
        })
    }
};

module.exports = { getTourPlaces, postTourPlaces };
