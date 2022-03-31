
var mongoose = require('mongoose');

let purchase = mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    item:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    total_bill:{
        type:Number,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("purchase",purchase);