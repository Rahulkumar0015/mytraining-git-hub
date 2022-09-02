const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const weatherController = require("../controllers/wetherController")
const memesController = require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)


router.post("/cowin/getOtp", CowinController.getOtp)


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/distcowidcenter", CowinController.getDistitCenter)
//write a get api for weather list of london 
router.get("/weather/temp", weatherController.getTempLondon)
router.get("/weather/temp/sortingcity", weatherController.citiesIncTemp)

//write memes api
router.post("/memes",memesController.meme)

module.exports = router;