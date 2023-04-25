const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/User');
const jwt=require('jsonwebtoken')

const app=express();

const dotenv=require('dotenv')

dotenv.config()
mongoose.connect(process.env.MONGO_URL)////connect to database///
jwtSecret=process.env.JWT_SECRET;


app.get('/test',(req,res)=>{
    res.json('test deeee!')
})


app.post('/register',async (req,res)=>{
   const {username,password}=req.body;
   const createdUser=await User.create({username,password});
   jwt.sign(
    {
        userId:createdUser._id   ////_id because it's mongoose id//
   },
   jwtSecret)
})

app.listen(4000) 

