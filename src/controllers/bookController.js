const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBooks= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const createBook = async function (req, res) {

    let authorData = req.body.author
    let publisherData = req.body.publisher
    let authorId = ( await authorModel.find().select({ _id : 1 }) )[0].id
    let publisherId = ( await publisherModel.find().select({ _id : 1 }) )[0].id

    if (authorData == true && publisherData == isValidObjectId()) {
        if (authorData == authorId && publisherData == publisherId) {
            let savedata = await bookModel.create(req.body)
                res.send({msg : savedata})
        } else {
                res.send({error : "either the author or the publisher is not present "})
        }
      } else {
          res.send({error : "either author or the publisher field is mandatory bro 😁😁😁"})
     }   
}


const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}
const updateprice=async function(req,res){
    let data= await authorModel.find({"ratng":{$gt:3.5}}).select({_id:1})
    let a= await bookModel.find({"author":data}),updateMany({$inc:{price:10}})
    res.send({msg:a})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
