const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express();
 try{
       mongoose.connect(process.env.MONGODB_URL)
       console.log('the connection is sucessfully established')
}catch(err){
    console.log(err)
}
const Port=3000
app.listen(Port,()=>{
    console.log(`the server is running on the port ${Port}`)
})