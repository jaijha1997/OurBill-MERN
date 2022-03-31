let jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const user=require("../Models/user");
const {jwtsec}=require("./keys")
const requirelogin =require("../Middleware/RequireLogin")

// const generateJwt = async (id, obj = {}) => {
//   let expiry = new Date();
//   expiry.setDate(expiry.getDate() + 7);
//   return jwt.sign({
//     _id: id,
//     exp: parseInt(expiry.getTime()),
//     ...obj,
//   }, "SECRET");
// }

router.get("/protected",requirelogin,(req,res)=>{

    res.json({message:"protected"})
})



router.post('/user', async (req, res) => {
    try {
  
      const log = await user.findOne({ Number:req.body.Number}).exec();
  
      
      if (!log)
        throw new Error("You are not registered");
  
      const checkPassword = await (log.Password==req.body.Password)
      console.log(checkPassword)
  
      if (!checkPassword)
        throw new Error("Check Your Credentials");

        const token =jwt.sign({_id:log._id},jwtsec)
      
      res.json({ message: 'Logged In', data: {
          id:log._id,
          name:log.Name,
          nickname:log.Nickname,
          number:log.Number,
          Token:token
      }, success: true });
  
    }
    catch (Error) {
      console.error(Error);
      if (Error.message)
        res.json({ message: Error.message, data: Error, success: false });
      else
        res.json({ message: 'Error', data: Error, success: false });
    }
  })


  module.exports = router;
