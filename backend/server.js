const express=require('express');
const app=express();
const mainroute=require('./routes')





app.use(express.json());
app.use("/app",mainroute);

app.listen(3333