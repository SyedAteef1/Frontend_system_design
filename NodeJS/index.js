// const add=require('./add')
// const result=add.add(4,5)
// const result2=add.sub(3,4)
// console.log("hi there")
// console.log(result2)
// console.log(result)
// const {add,sub}=require('./add')
// import {add,sub} from './add'
// const result=add(4,5)
// const result2=sub(3,4)
// console.log("hi there")
// console.log(result2)
// console.log(result)

// const add=require('./add')
// const result=add.add(3,7)
// console.log(result)

// const http=require('http')
// const myserver=http.createServer((req,res)=>{

//     console.log("new req rec")
//     res.end("this is it")
    
// });

// myserver.listen(3000,()=>console.log("this is server"))

// const http=require('http')
// const fs=require('fs')
// const url=require('url')


// const myserver=http.createServer((req,res)=>{
//     if(req.url==='/favicon.ico')return null;
//     let log= `${Date.now()} the time is now this ${req.url}\n`
    
//     const myurl=url.parse(req.url,true)
//     console.log(myurl)
//     fs.appendFile("thisisit.txt",log,(error,data)=>{
//         switch (myurl.pathname) {
//             case '/':res.end("this is the home page")
                
//                 break;
//         case '/about':
//             const qp=myurl.query.myname
//             res.end(`so my name is ${qp}`);
//             break;
        
//             default:res.end("404 erro")
//                 break;
//         }
//         console.log()
        
//     })
// })
// myserver.listen(4000,()=>console.log("the server is running fine"))
// ?is the query part in the url
// append file has three parameter (file name,anythingto add,callback func())



// const http=require('http')
// const express=require('express')
// const app=express()
// app.get('/',(req,res)=>{
//     res.end("this is the home page")
// })
// app.get('/about',(req,res)=>{
//     res.send(`this is about page ${req.query.name} ${req.query.age}"this is ntg"`)
// })
// app.post('/pos',(req,res)=>{

// })
// const myserver=http.createServer(app)
// myserver.listen('3000'  )
// app.listen(3000,()=>{
//     console.log("this is the page")
// })
//^this mean in ver the minor and major changes will be updated
//~this means only minor changes will be get changed
//4.0.x
//latest --which updates all things 
//we should use each restapi at there own work not post for every api

const express=require('express')
const app=express()
const port =3000
const user=require('./MOCK_DATA.json')
app.get('/api/users',(req,res)=>{
    return res.json(user)

})
app.get('/user',(req,res)=>{
    const html=`<ul>${user.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
    res.send(html)
})

app.listen(port,()=>{console.log("thie server is started")})