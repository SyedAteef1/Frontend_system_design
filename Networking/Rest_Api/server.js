import express from "express";
const app= express()
app.use(express.json())
const PORT=6000;

let services =[
    {
        id:1,
        title:"Ateef",
        description:"my name is ateef "

    },
    {
        id:2,
        title:"sohail",
        description:"my name is sohail"
    },
    {
        id:3,
        title:"tousif",
        description:"my name is tousif"
    }
];

app.get("/api/services",(req,res)=>{
    res.json(services)
})

app.post("/api/services",(req,res)=>{
    const body=req.body
    services=[
        ...services,
        body
    ]
    res.json(services);
})

app.put("/api/services/:id",(req,res)=>{
    const body=req.body
    const id=req.params.id

    services=services.map((p)=>{
        console.log(req.body)
        if(p.id==id){
            return {
                 id,
                 ...body
            };
            
           
        }else{
            return p
        };
        
    })
res.json(services)
})


app.delete(("/api/services/:id"),(req,res)=>{
        const id= req.params.id
        console.log(id)
        services =services.filter((p) => p.id!=id)
        res.json(services)
})


app.patch(("/api/services/:id"),(req,res)=>{
    const id=req.params.id
    const service=services.find((p)=> p.id==id)
    const body=req.body
    services=services.map((p)=>{
        if(p.id==id){
            return {
                ...service,
                ...body
            }

        }return p
    })
    res.json(services)
})

app.listen(PORT,()=>{
    console.log(`hoo the server is running at the 6000 port ${PORT}`)
})
