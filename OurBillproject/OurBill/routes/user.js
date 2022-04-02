var express=require("express");
const user=require("../Models/user");
var router=express.Router();
const requirelogin =require("../Middleware/RequireLogin")
var mongoose=require("mongoose")
const multer =require('multer');
const { findOne, findByIdAndUpdate } = require("../Models/user");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload');
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);
  
      // this is the file name it is always unique save this value to db => file.fieldname + '-' + Date.now() + '.' + file.originalname
  }
  
  })
  
  const upload = multer({storage: storage})
  router.patch("/uploadfile/:id",upload.single('file'),async(req,res)=>{
    
    try{
    
      var usr =await user.findByIdAndUpdate({_id:req.params.id},{image:req.file.filename})
      res.send({message:"file uplaod successfull",data:usr})
  
    }
    catch(err){
      console.log(err)
  
    }
  }
  
  )

  router.post("/uploadfile",upload.single('file'),async(req,res)=>{
    
    try{
    
     // var usr =await user.findByIdAndUpdate({_id:req.params.id},{image:req.file.filename})
     var usr=await new user({image:req.file.filename}).save()
      res.send({message:"file uplaod successfull",data:usr})
  
    }
    catch(err){
      console.log(err)
  
    }
  }
  
  )

 







router.post('/register',async(req,res)=>{
    
  try{ 
      
        let saveuser= await new user(req.body).save()
        res.status(200).send({Message:"User Successfully entered in DB",data:saveuser,success:true})
      
    }
    catch(err){
        console.log(err)

    }
})

router.get('/viewdetails/:Number',requirelogin,async(req,res)=>{
    try{
        let showuser=await user.findOne({Number:req.params.Number})
        f=showuser.image
  const file = "upload/"+f
       res.status(200).send({Message:"User Found",data:showuser,success:true})
        //res.sendFile(file,{root:'.'})

    }
    catch(err){
        console.log(err)
    }
})

router.get('/viewphoto/:Number',async(req,res)=>{
    try{
        let showuser=await user.findOne({Number:req.params.Number})
        f=showuser.image
  const file = "upload/"+f
       // res.status(200).send({Message:"User Found",data:showuser,success:true})
        res.sendFile(file,{root:'.'})

    }
    catch(err){
        console.log(err)
    }
})



router.patch("/editprofile/:id",async(req,res)=>{
try{


// const obj={
//     Name:req.body.name,
//     Nickname:req.body.nick
// }    
const abc=await user.findByIdAndUpdate({_id:req.params.id},req.body)


res.status(200).send({Message:"updated successfull",data:abc,success:true})
}
catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else
      res.json({ message: 'err', data: err, success: false });
  }


})
module.exports = router;