const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/User');
const jwt=require('jsonwebtoken')

const app=express();

const dotenv=require('dotenv')

dotenv.config()
mongoose.connect(process.env.MONGO_URL)////connect to database///


app.get('/test',(req,res)=>{
    res.json('test deeee!')
})


app.post('/register',async (req,res)=>{
   const {username,password}=req.body;
   const createdUser=await User.create({username,password});
   jwt.sign(
    {
        userId:createdUser._id
   })
})

app.listen(4000) 

