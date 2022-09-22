const { getTourPlacesService } = require("../services/tourPlaces.services")

const getTourPlaces = async(req,res,next) => {
    try {
        const filter = req.query;
        console.log(filter);
        const places = await getTourPlacesService(filter)
        res.status(200).json({
            status: "Success",
            message: "Tour-place successfully found",
            data:places
        })







    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}


module.exports={getTourPlaces}