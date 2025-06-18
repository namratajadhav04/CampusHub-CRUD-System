const express = require("express")
const app = express()

const cors = require('cors')
app.use(cors())

const studRoutes = require('./Routes/studRoute')

require('./config')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/",studRoutes)

app.listen(5000,()=>{
    console.log("Server is running on port no 5000")
})