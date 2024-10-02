import express from 'express';
import mongoose from 'mongoose';

const app=express();
try{
        mongoose.connect(process.env.MONGODB_URL)
}catch(err){
    console.log(err)
}
const Port=3000
app.listen(Port,()=>{
    console.log(`the server is running on the port ${Port}`)
})