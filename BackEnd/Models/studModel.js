//Create a schema for student database

const mongoose = require("mongoose")


const studSchema = mongoose.Schema({ 
    enrollID : {type:Number, required:true, unique:true},
    studname : {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password : {type:String,required:true, unique:true},
    mobile : {type:Number, required:true, unique:true},
    branch : {type:String, required:true},
    age : {type:String, required:true},
    gender : {type:String, required:true},
    address : {type:String, required:true},
    img : {type:String}
},{ timestamps: true })

const student = mongoose.model("student",studSchema)
module.exports = student