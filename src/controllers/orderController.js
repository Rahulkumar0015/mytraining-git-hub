const orderModel=require("../models/orderModel")

const createproduct= async function(req,res){
    let product =req.body
    let createproduct =await orderModel.create(product)
    res.send({data: createproduct})
}

module.exports.createorder= createproduct