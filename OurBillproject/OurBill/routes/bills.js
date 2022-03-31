var express=require('express')
var router=express.Router()


const billsplit = require('../models/bills')


router.post('/billsplit',async (req,res)=>{
    try 
    {   
        req.body.total_amount=Number(req.body.amount)+Number(req.body.pending_amount)
        var myDate = new Date(req.body.date)
        myDate = myDate.getDate()+'-'+(myDate.getMonth()+1)+'-'+myDate.getFullYear();

        let splitbill = await new billsplit(req.body).save()
        res.status(200).send({message:"bill split details",data:splitbill,success:true})
    } 
    
    catch (err) 
    {
        console.log(err)
    }
})

router.get('/todaybill',requirelogin,async(req,res)=>{
    try
    {   
        var todays = Date.now()
        let todaysdate= new Date(todays)

        todaysdate = todaysdate.getDate()+'-'+(todaysdate.getMonth()+1)+'-'+todaysdate.getFullYear();
        console.log(todaysdate)

        let getbill = await billsplit.find({date:todaysdate})
        res.status(200).send({message:"today's bill",data:getbill,success:true})
    }

    catch(err)
    {
        console.log(err)
    }
})

router.get('/allbills',requirelogin,async(req,res)=>
{
    try
    {
        let allbill = await billsplit.find()
        res.status(200).send({message:"all bills",data:allbill,success:true})
    }

    catch(err)
    {
        console.log(err)
    }
})





module.exports=router;
