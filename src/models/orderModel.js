const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderItem= new mongoose.Schema( 
    {
           user_id: {
                       type: ObjectId,
                     ref: "USERDATA"
                  }, 
           product_id: {
            type: ObjectId,
          ref: "PRODUCTITEM"
       }, 
        Date:String,

}, { timestamps: true });

module.export=mongoose.model("Orderitem",orderItem)
  