const jwt=require("jsonwebtoken")
const mongoose =require("mongoose")
//const User =mongoose.model("user")
const User=require("../Models/user");
const {jwtsec}=require("../routes/keys")


module.exports=(req,res,next)=>{
    const{authorization}=req.headers
    if(!authorization){
       return  res.status(421).json({message:"must be logged in"})
        
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,jwtsec,(err,payload)=>{
        if(err){
            return res.status(421).json({message:"must be logged in"})
            
        }
        const {_id}=payload
        User.findById(_id).then(userdata=>{
            req.User=userdata
        next()
        })
        
    
    })
}

