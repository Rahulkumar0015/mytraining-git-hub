const mongoose = require('mongoose');

/*const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,   
    },
    sales: {type: Number, default:0}
}, { timestamps: true });
*/

const bookcollection= new mongoose.Schema({
         bookName:{
            type:String,
            required:true
         },
         prices: {
            indianPrice: String,
            europePrice: String,   
        },
        year:{type: Number, default:2021},
    tags: [String],
    authorName: String, 
        totalPage:Number,
        stockAvilable:Boolean,
    }
       , { timestamps: true });




//module.exports = mongoose.model('Book', bookSchema) //users
module.exports=mongoose.model('bookcollection',bookcollection)

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
