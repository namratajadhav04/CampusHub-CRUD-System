//Database connectivity

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/CampusHubDB").then(()=>{
    console.log("Database connected successfully....")
})
