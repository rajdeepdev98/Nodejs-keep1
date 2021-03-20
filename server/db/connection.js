// write your db connection code here
const mongoose=require('mongoose');
const dbconfig= require('../config/appConfig').dbConfig;



// Create a mongo Connectionb

const createMongoConnection=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/testproj',{useUnifiedTopology:true,useNewUrlParser:true});
}

module.exports={
    createMongoConnection
  
}
