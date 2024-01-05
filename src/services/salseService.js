const SalseSchema = require("../model/salseModel")

const CalculateTotalService = async (req) => {
    try{
        // let result = await SalseSchema.find()


        const projectStage = {
            $project: {
              _id: 0,
              totalRevenue: { $multiply: ["$quantity", "$price"] }
            }
          };

          const groupStage = {
            $group: {
              _id: null,
              totalRevenue: { $sum: "$totalRevenue" }
            }
          };


        let result = await SalseSchema.aggregate([
            projectStage, 
            groupStage
        ])
        return {status: "success", data: result}
    }catch(e){
        return {status: "fail", msg: e}
    }
}


module.exports = {
    CalculateTotalService
}   