const { StatusCodes } = require("http-status-codes");
const {AirplaneService} = require("../services");

async function createAirplane(data){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity:req.body.capacity,
        });
        return res 
            .status(StatusCodes.CREATED)
            .json({
                success:true,
                message:"Created airplane successfully",
                data:response,
                error:{}
            })
        // return airplane;
    }catch(err){
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success:false,
                message:"Somethings went wrong",
                data:response,
                error:{}
            })
    }
}

module.exports={
    createAirplane,
}