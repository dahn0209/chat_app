const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const User=require('./models/User');
const jwt=require('jsonwebtoken');
const cors=require('cors');
dotenv.config();
mongoose.connect(process.env.MONGO_URL)////connect to database///
// console.log(process.env.MONGO_URL)
jwtSecret=process.env.JWT_SECRET;



const app=express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin: process.env.CLIENT_URL,

}))

app.get('/test',(req,res)=>{
    res.json('test deeee!')
})


app.get('/profile',(req,res)=>{
    const token=req.cookies?.token;
    if(token){
        jwt.vertify(token,jwtSecret,{},(err,userData)=>{
            if(err) throw err;
            const {id,username}=userData;
            res.json(userData);
        })
    }else{
        res.status(401).json('no token')
    }

})

app.post('/register',async (req,res)=>{
    const {username,password}=req.body;
   try{
    const createdUser=await User.create({username,password});
    jwt.sign({userId:createdUser._id },jwtSecret,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token, {sameSite:'none',secure:true}).status(201).json({
            id:createdUser._id,
            username,
            
        })
       });

   }catch(err){
    if(err) throw err
    res.status(500),json('error')
   }

});

app.listen(4000) 

