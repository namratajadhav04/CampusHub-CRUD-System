const student = require('../Models/studModel')
const express = require("express")
const router = express.Router()

router.post('/addstudent',async(req,res)=>{

    try{
        const {enrollID,studname,email,password,mobile,branch,age,gender,address,img} = req.body
        const u = new student({enrollID,studname,email,password,mobile,branch,age,gender,address,img})
        await u.save()
        res.status(201).json({message:"Student added successfully..."})
    }
    catch(error)
    {
        res.status(401).json({message:error.message})
    }
})

router.get('/getstudent', async(req,res)=>{

    try{
        const u = await student.find()
        res.status(201).json({u})
    }
    catch(err)
    {
        res.status(400).json({message:err.message})
    }
}) 

router.get('/getStudentbyId/:enrollID',async(req,res)=>{
    
    try{
        const u = await student.findOne({ enrollID: req.params.enrollID })
        if(!u)
        {
            res.json({message:"Student does not exist"})
        }
        else{
            res.status(201).json({u})
        }
    }
    catch(error)
    {
        res.status(401).json({message:error.message})
    }
})

router.put('/updatestudent/:enrollID',async(req,res)=>{

    try{
        const u = await student.findOneAndUpdate({ enrollID: req.params.enrollID },req.body,{ new: true })
        if(!u){
            res.json({message:"Student not updated"})
        }
        else{
            res.status(200).json({u})
        }
    }
    catch(error){
        res.status(401).json({message:error.message})
    }
})

router.delete('/deletestudentbyID/:enrollID',async(req,res)=>{

    try{
        const u = await student.findOne({enrollID:req.params.enrollID},req.body)
        if(!u)
        {
            res.json({message:"Unsuccessful delete"})
        }
        else{
            res.status(200).json({u})
        }
    }
    catch(error){
        res.status(401).json({message:error.message})
    }
})

module.exports = router