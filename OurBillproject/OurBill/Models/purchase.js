
var mongoose = require('mongoose');

let purchase = mongoose.Schema({
    date:{
        type:String,
        
    },
    item:{
        type:String,
        
    },
    quantity:{
        type:Number,
        
    },
    price:{
        type:Number,
        
    },
    total_bill:{
        type:Number,
        
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("purchase",purchase);