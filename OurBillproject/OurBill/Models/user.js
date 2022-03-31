var mongoose=require("mongoose")
var mongoose=require("mongoose")

let user=mongoose.Schema({
    Name:{
        type:String
    },
    Number:{
        type:Number
    },
    Nickname:{
        type:String
    },
    Password:{
        type:String
    },
    image:{
        type:String
    }
})

module.exports=mongoose.model("user",user)