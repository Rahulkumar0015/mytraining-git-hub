const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

//==========================================================================================================================//

const userdata= new  mongoose.Schema(
    {
        Name:String,
        balance:{
                   type:Number,
                    default:100
               },
      age:Number,
      address:String,
      gender: {
                 type: String,
                 enum: ["male", "female", "LGBTQ"] 
              },
              isFreeAppUser:{
                type:Boolean,
                default:false,
              }

    },
    { timestamps: true }
)






//module.exports = mongoose.model('Userahul', userSchema) //users
module.exports= mongoose.model('userdb-1',userdata)



// String, Number
// Boolean, Object/json, array