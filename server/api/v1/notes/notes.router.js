const express=require('express');
const Note=require('./notes.entity');
const uuid=require('uuid');

const router=express.Router();
// add a note
router.post('/',async(req,res)=>{

    console.log("new note");
    var note=new Note({

        title:req.body.title,
        text:req.body.text,
        id:uuid.v1(),
        userId:req.query.userId
    })
    try{
        const data=await note.save();
        res.status(201);
        res.json(data);
    }
    catch(err){

        res.status(500);
        res.json({message:"Internal Server Error"});
    }
});
//get all notes
// router.get('/',async(req,res)=>{
//     console.log("hello");

//     try{
//         const notes=await Note.find();
//         res.json(notes);
//     }
//     catch(err){

//         res.status(500);
//         res.json({message:"Internal Server Error"});
//     }

// })
// //get note by noteid
router.get('/:noteId',async (req,res)=>{

    try{

        const note=Note.findOne({id:req.params.noteId});
        if(note==null){
            res.status(404);
            res.json({message:"Note not found"})
        }
        res.json(note);
    }
    catch(err){
        res.status(500);
        res.json({message:"Internal Server Error"})
    }
})
// get all notes by a user
router.get('/',async(req,res)=>{

    try{

       if(Object.keys(req.query).length !== 0){
        const notes=await Note.find({userId:req.query.userId});
        if(notes==null){
            res.status(404);
            res.json({message:'Notes not found!'})
        }
        else res.json(notes);
       }
       else{
        const notes=await Note.find();
        res.json(notes);
       }
    }
    catch(err){

        res.json({message:"Internal Server Error"});
    }
})

router.patch('/:noteId',async(req,res)=>{

    try{

        const upnote=await Note.updateOne({id:req.params.id},{$set:{title:req.body.title,status:req.body.status,modifiedOn:Date.now()}});
        res.json(upnote);

    }
    catch(err){
        res.status(500);
        res.json({message:"Internal Server Error"})
    }

});
module.exports=router