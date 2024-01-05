const { CalculateTotalService } = require("../services/salseService")

exports.CalculateTotal = async(req,res)=> {
    let result = await CalculateTotalService(req);
    res.status(200).json(result)
}