const UserModel= require("../models/userModel")
const bookmodel= require("../bookmodel/book.js")
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
const createbook =async function(req,res){
    let data=req.body
    let savedata= await bookmodel.create(data)
    res.send({msg :savedata})
    
}
const getbook= async function(req,res){
    let allbooks=await bookmodel.find()
        res.send({msg:allbooks})
    
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createbook=createbook
module.exports.getbook=getbook