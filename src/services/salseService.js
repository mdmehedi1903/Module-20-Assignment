const SalseSchema = require("../model/salseModel")

const CalculateTotalService = async (req) => {
    try{
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


const QuantityByProductService = async (req) => {
    try{
        return {status: "success", data: "QuantityByProductService"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}


const TopProductsService = async (req) => {
    try{
        return {status: "success", data: "TopProductsService"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}


const AvgPriceService = async (req) => {
    try{
        return {status: "success", data: "AvgPriceService"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}


const RevnueByMonthService = async (req) => {
    try{
        return {status: "success", data: "RevnueByMonthServicessss"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}


const HighestQtySoldService = async (req) => {
    try{
        return {status: "success", data: "HighestQtySoldService"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}

const DepartmentSalaryExpService = async (req) => {
    try{
        return {status: "success", data: "DepartmentSalaryExpService"}
    }catch(e){
        return {status: "fail", msg: e}
    }
}




module.exports = {
    CalculateTotalService, 
    QuantityByProductService,
    TopProductsService,
    AvgPriceService,
    RevnueByMonthService,
    HighestQtySoldService,
    DepartmentSalaryExpService


    

}   