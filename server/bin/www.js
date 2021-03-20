// write your server code here
const app=require('../app')
// const express=require('express');

// const app=express();
app.get('/',(req,res)=>{

    res.send("We are home!!");
    console.log('server is running')
    
    });
