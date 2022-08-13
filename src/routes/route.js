const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const book= require("../bookmodel/book.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/bookName",UserController.createbook)
router.get("/getbook",UserController.getbook)

module.exports = router;