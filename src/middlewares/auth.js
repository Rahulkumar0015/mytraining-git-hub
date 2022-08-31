const userModel = require("../models/userModel");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const authenticate  =  async function(req, res) {
    let userName = req.body.emailId;
    let user= await userModel.findOne({emailId :userName})
    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "plutonium",
          organisation: "FUnctionUp",
        },
        "functionup-thorium"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, data: token });
    };
   


//================================= authorization ====================================================================//

const authorise= async function (req,res,next){
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-thorium",(error,decode)=>{
    if (error ){
      return res.send("you have entered incorrect token or incorrect length of token")

    }(decode==true )
 next()
  });
}


   
  
  
  //====================================authorizate 2========================================================//
  const authorise2= async function (req,res,next){

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "functionup-thorium");
  let userLoggin =decodedToken.userId
  let userTomodifiy= req.params.userId
  
  
  let isVaild= mongoose.Types.ObjectId.isValid(userTomodifiy)

  if(isVaild=== false){
    return res.send("length of the id is less then 24 digit ")
  }
  else if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  } else if (userTomodifiy != userLoggin){
    return res.send("not allow to modify")
  }else{ next()

  }
}
  
  


  





module.exports.authenticate = authenticate
module.exports.authorise=authorise
module.exports.authorise2=authorise2
