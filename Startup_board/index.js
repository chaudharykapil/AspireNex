import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT,()=>{
    console.log("Listening on http://127.0.0.1:" + process.env.PORT)
})