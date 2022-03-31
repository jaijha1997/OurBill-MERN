var express=require('express')
var router=express.Router()
const requirelogin=require("../Middleware/RequireLogin")
const bill=require('../Models/newbills')

router.post('/addbill',async (req,res)=>{
    try 
    {   
        //req.body.total_amount=Number(req.body.amount)+Number(req.body.pending_amount)
       var myDate = new Date(req.body.date) //mm/dd/yy and dd/mm/yyy
       myDate = myDate.getDate()+'-'+(myDate.getMonth()+1)+'-'+myDate.getFullYear();
       const obj={
       date:myDate,
       sender:req.body.sender,
       receiver:req.body.receiver,
       amount:req.body.amount,
       pending_amount:req.body.pending_amount,
       total_amount:req.body.total_amount,
       earlier_adjustment:req.body.earlier_adjustment
       }

        let splitbill = await new bill(obj).save()
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

        let getbill = await bill.find({date:todaysdate})
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
        let allbill = await bill.find()
        res.status(200).send({message:"all bills",data:allbill,success:true})
    }

    catch(err)
    {
        console.log(err)
    }
})


module.exports=router;
