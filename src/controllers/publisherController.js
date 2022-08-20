const publisherModel= require("../models/publisherModel")

const createpublsiher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createpublsiher= createpublsiher
module.exports.getAuthorsData= getAuthorsData