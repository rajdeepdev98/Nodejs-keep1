const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

//   useriid: {
//     type: String,
//     required: true
//   },
  userId:{
      type:String,
      required:true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userInfo:{
      type:String
      
  }

});

module.exports = mongoose.model('users', userSchema);
