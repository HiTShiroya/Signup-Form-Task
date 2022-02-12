const express=require('express');
const app=express();
const mainroute=require('./routes');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config();

mongoose.connect(process.env.LINK,()=>{
    console.log("connected....")
})






app.use(express.json());
app.use(cors());
app.use("/app",mainroute);

app.listen(3333,()=>{
    console.log("running and listening");
})