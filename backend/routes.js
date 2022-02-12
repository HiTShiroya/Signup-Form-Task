const express=require("express");
const { mongo, Mongoose } = require("mongoose");
const router=express.Router();
const regUser=require('./model/registerSchema');
const bcrypt=require('bcrypt');

router.post("/signup",async (req,res)=>{
    const saltpassword=await bcrypt.genSalt(10);
    const fpassword=await bcrypt.hash("req.body.Password",saltpassword)
    const newuser=new regUser({
    FullName:req.body.FullName,
    UserName:req.body.UserName,
    Email:req.body.Email,
    PhoneNumber:req.body.PhoneNumber,
    Age:req.body.Age,
    Gender:req.body.Gender,
    Password:fpassword,
    Adress:req.body.Adress

    })
    if(!email || !FullName){
        return res.status(202).json({
            message:"fill all fields"
        })
    }
    console.log(newuser);
    newuser.save()
    .then(data=>{
        res.json(data);
        //console.log(data);
    })
    .catch(err=>{
        res.json(err);
    })

    newuser.exist(Username)

    

})


module.exports=router;
