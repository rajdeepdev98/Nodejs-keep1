const router = require('express').Router();

//write your routes here
router.use('/users',require('./user/user.router'));
router.use('/notes',require('./notes/notes.router'));
// router.get('/',("re"))
router.get('/',(req,res)=>{
    res.send("We are at our very new home!!");

});

module.exports = router;