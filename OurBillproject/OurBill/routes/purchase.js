var express = require('express')
var router = express.Router()
var date = require('datejs');
const requirelogin=require("../Middleware/RequireLogin")
//const dateformat = require('dateformat')


var purchase = require('../Models/purchase')

router.post("/additem",async(req,res)=>{


    try {

    
       
        var date = new Date( req.body.date); // Or your date here
        var dateformat= date.getDate() + '-' + (date.getMonth() + 1)  + '-' +  date.getFullYear();
        req.body.date=dateformat

       // req.body.total_bill=(req.body.price)*( req.body.quantity)
        let newPurchase = await new purchase(req.body).save()
        res.status(200).send({message:"successfully entered",data:newPurchase,success:true})
    }
    catch(err){
        console.log(err)
    }

    


})
router.get('/todaypurchase',requirelogin,async(req,res)=>{
    try
    {   
        var todays = Date.now()
        let todaysdate= new Date(todays)

        todaysdate = todaysdate.getDate()+'-'+(todaysdate.getMonth()+1)+'-'+todaysdate.getFullYear();
        console.log(todaysdate)
        
        let getbill = await purchase.find({date:todaysdate})
        res.status(200).send({message:"today's purchase",data:getbill,success:true})
    }

    catch(err)
    {
        console.log(err)
    }
})





router.get("/getitem", async(req,res)=>{
    try{
        let showItem = await purchase.find()
        res.status(200).send({message:"successful",data:showItem,success:true})
    }
    catch(err){
        console.log(err)
    }
    
});


module.exports = router;