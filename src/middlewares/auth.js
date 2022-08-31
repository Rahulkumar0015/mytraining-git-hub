const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const tokenverification  = async function(req, res, next) {
try{
  //================================header verification ========================//
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
   //If no token is present in the request header return error
    if (!token) return res.status(404).send({ status: false, msg: "token must be present" });
    console.log(token);
  //========================================Token verification =======================================//
    
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken) {
    return res.status(500).send({ status: false, msg: "token is invalid" });
  } //server error
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
   //===============================finding user =============================================== 
   const  userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails) //bad req
    return res.status(404).send({ status: false, msg: "No such user exists" });

 //=================================authorization user=======================//
  if (userId != decodedToken.userId) // not user allow forbidden
   return res.status(403).send({status:false,})
   
   //===================================is Deleted true==========================//
     const user1= await userModel.findById(userId).select({isDeleted:1 ,_id:0});
     if(user1.isDeleted===true) //page not found
     return res.status(404).send({status:true,msg: "user delete"})
   
   
   next()
  }
  catch(err){
    res.status(500).send({error:err.message})
  }
}


module.exports.validateToken = tokenverification