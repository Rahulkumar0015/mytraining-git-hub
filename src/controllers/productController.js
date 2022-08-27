const productModel= require("../models/productModel")

const productcreate= async function(req,res){
  let data= req.body
  let savedata= await productModel.create(data)
  res.send({data:savedata})
}


module.exports.productcreate= productcreate