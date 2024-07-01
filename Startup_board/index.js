import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./Api/User/routes.js"
import cors from "cors"
import bodyParser from "body-parser"
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})




mongoose.connect(process.env.DB_STRING).then(()=>{
    console.log("Database Connected Succesfully")
    app.listen(process.env.PORT,()=>{
        console.log("Listening on http://127.0.0.1:" + process.env.PORT)
    })
},
(err)=>{console.error(err)})

