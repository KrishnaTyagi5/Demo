const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.get('/',(req,res)=>{
    res.send("This is starting")
})
app.listen(process.env.PORT,()=>{
    console.log(`The post has started on ${process.env.PORT}`)
})