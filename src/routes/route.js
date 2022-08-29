const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end //     authorization
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

module.exports = router;