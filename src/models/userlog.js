const { default: mongoose } = require("mongoose");

const userdetails= new mongoose.Schema(

 {
    firstName:String,
    lastName:String,
   mobile:
    {
        type:String,
        required:true
    },
    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:["male","female","other"]
       },
       age:Number
 },{timestamps:true}

);
module.exports=mongoose.model("userlogindata",userdetails)