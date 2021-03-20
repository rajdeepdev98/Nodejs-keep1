const express=require('express');
const User=require('./user.entity');
const uuid=require('uuid');
const verify=require('./userverify');

const router=express.Router();
router.get('/register',(req,res)=>{
    try{console.log("registration");
    res.send("Registration page");}
    catch{
        console.log("Hello");
    }
});
router.post('/register',async(req,res)=>{
    
    const hsh=verify.encrypt(req.body.password);
    console.log(req.body.userId);
    const id=uuid.v1();
    const user=new User({

        userName:req.body.userName,
        password:hsh,
        userId:id,
        userInfo:req.body.userName

    });
    try{
        const user2=await User.findOne({user2:req.body.userName});
        if(user2!=null){
            res.json({message:'username is already exist'});
        }
    }
    catch(err){
        res.json({message:"some error"});
    }
    try{

        const data=await user.save();
        res.status(201);
        res.json(data);
    }
    catch(err){

        res.json({message:err});
        console.log("some error")
    }
    


});
router.post('/login',async(req,res)=>{


    var usernm=req.body.userInfo;
    // usernm=req.body.userName;

    var pass=req.body.password;
    try{
        const user=await User.findOne({
            username:usernm
        })
        if(user===null){
            res.json({message:"You are not registered user"});
        }
        if(verify.decrypt(pass,user.password)){
            // res.json({message:'Logged in Successfully!'});
            res.json(user);
            // console.log(user.userId);
        }
        else{
            res.json({message:'Password is incorrect'});
        }
    }
    catch(err){

        res.json({message:"You aaa"})

    }
});

module.exports=router;


