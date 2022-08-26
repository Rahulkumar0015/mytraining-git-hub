const { default: mongoose } = require("mongoose");


const productitem= new mongoose.Schema({
    Name:String,
    category:String,
    price:{
        type:Number,
        require:true
    }
} ,
{ timestamps: true }
)

module.exports=mongoose.model('PRODUCTITEM',productitem)