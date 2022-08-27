const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/usercreate",commonMW.mid,UserController.Usercreate)
router.post("/productcreate",productController.productcreate)
//router.post("/ordercreate",commonMW.mid,orderController.ordercreate)
router.post("/createord",commonMW.mid,orderController.createorder)
//router.post("/findid",orderController.findId)




module.exports = router;