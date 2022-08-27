const orderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")


const createorder= async function(req,res){
  let data= req.body
  //let savedata= await orderModel.create(data)
  //res.send({msg:savedata})
  let userid=data.userId
  let productid=data.productId

  if (!userid)
  {
    return res.send({msg:"userid is required"})
  }
  else if(!productid){
             return res.send({msg:"please enter valid productid"})
            }
   console.log(userid)
  
  console.log(productid)
let finduser= await UserModel.findById(userid)
let findproduct= await productModel.findById(productid)
if (!finduser){
  return res.send("this userid is not found in userdatabase")
}else if(!findproduct){
 return res.send("this product is not found in database")
}else{}


let token=req.headers.isfreeappuser
console.log(token)
//if isfreeappuser is true 
let val =0
if(token=='true'){
                   data.amount= val
                    data.isfreeappuser=token
                    let savedata=await orderModel.create(data)
                     res.send({data:savedata}) 
                  }
                  //if header is false
      else if(finduser.balance >= findproduct.price) {
        let usernewbalance= finduser.balance - findproduct.price
        await UserModel.findOneAndUpdate(
        {_id:userid},
        {$set:{balance:usernewbalance}})
        data['amount']= findproduct.price;
        data['isfreeappuser']= req.headers.isfreeappuser;
        let savedata=await orderModel.create(data)
        res.send({msg:savedata})
       
      }      else{
        res.send("insufficient balance")
      }      
}
//module.exports.ordercreate= ordercreate
module.exports.createorder=createorder
