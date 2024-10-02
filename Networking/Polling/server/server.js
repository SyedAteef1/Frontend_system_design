import express from "express";
import cors from 'cors';
const app= express()
const port=3000

app.use(express.json())
let problems=[
    {
        id:"3",
        title:"ateef",
        description:"this is ateef"
    }
]

app.post('/anything/nice',(req,res)=>{
    const body=req.json(body)
    console.log(body)
    problems=[
        ...problems,
        body
    ]
    res.json(problems)
})
app.listen(port,()=>{
    console.log(`this website is working on the ${port}`)
    
})