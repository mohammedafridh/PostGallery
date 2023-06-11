import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js'
import postRoute from './routes/postRoute.js'

const app = express()

app.use(express.json())

dotenv.config()

mongoose.connect(process.env.DB,{
    useNewUrlParser:true
}).then(()=>app.listen(process.env.PORT,()=>console.log(`Listening at port ${process.env.PORT}`)))
.catch((error)=>
    console.log(error)
)

app.use('/users', userRoute)
app.use('/posts', postRoute)
