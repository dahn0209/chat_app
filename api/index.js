const express=require('express');
const mongoose=require('mongoose')

const app=express();

const dotenv=require('dotenv')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)


app.get('/test',(req,res)=>{
    res.json('test deeee!')
})


app.post('/register',(req,res)=>{
    res.json('test deeee!')
})

app.listen(4000) 

