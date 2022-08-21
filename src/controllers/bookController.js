const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const chetanbhagat=async function(req,res){
   let authorId=await authorModel.find({author_name:"Chetan Bhagat"}).select({ _id : 0,author_id :1 })
    console.log(authorId)
   let id = await authorModel.find({author_name:"Chetan Bhagat"}).select({author_Id:1,_id:0})
   let bookname=await bookModel.find(authorId[0]).select({name:1,_id:0})
    res.send({msg:bookname})
  }
  const twostates=async function(req,res){
    let savedData = await bookModel.findOneAndUpdate(
        { name : "Two states" } , { $set: { price : 100} } , { new : true } 
        ).select({ _id : 0,author_id : 1 })
        console.log(savedData)
        let updatePrice = await bookModel.find({ name : "Two states"}).select({ _id : 0,price :1})
        let newPrice = updatePrice[0]
        let savedData2 = await authorModel.find(savedData).select({ _id :0 ,author_name : 1})
        res.send({msg: savedData2 , updatedPrice : newPrice })
  }
  let between50_100=async function(req,res){
    let allBooks=await bookModel.find({price:{$gte:50,$lte:100}})
    console.log(allBooks)
    let id=allBooks.map(item=>item.author_id)
    
    let authName=await authorModel.find({author_id:id}).select({author_name:1,_id:0})
    res.send(authName) 
  }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}





module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.chetanbhagat=chetanbhagat
module.exports.twostates=twostates
module.exports.between50_100=between50_100