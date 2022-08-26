const userlog=require("../models/userlog")
 const createuserdetails=async function(req,res){
    let data =req.body
    let savedata=await userlog.create(data)
    console.log(savedata)
    res.send({msg:savedata})
 }


 const loginuser= async function(req,rse){
    let userName=req.body.emailId
    let pasword=req.body.password
    let user= await userlog.findOne({emailId:userName,password:password})
    
 }
 module.exports.createlog=createuserdetails