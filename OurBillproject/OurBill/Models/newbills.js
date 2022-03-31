let mongoose=require("mongoose")


let bill=mongoose.Schema({
   
    date:
    {
        type:String
    },

    sender:
    {
        type:String
    },

    receiver:
    {
        type:String
    },

    amount:
    { 
        type:Number
    },

    pending_amount:
    {
        type:Number
    },

    total_amount:
    {
        type:Number
    },

    earlier_adjustment:
    {
        type:String
    }
})

module.exports=mongoose.model("bill",bill);